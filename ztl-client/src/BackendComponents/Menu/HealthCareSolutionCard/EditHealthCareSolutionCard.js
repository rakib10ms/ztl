import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams,useNavigate, useMatch} from "react-router-dom";
import Swal from 'sweetalert2';
import MasterDashboardLayout from '../../../dashboard/MasterDashboardLayout';
import '../../../imageUrl';

function EditHealthCareSolutionCard() {

    const navigate=useNavigate();
    const [healthSolution, sethealthSolution] = useState({
        title: "",
        short_description: "",
    });


    const [image, setImage] = useState('');
    console.log('image info', image.size)
    const [picture, setPicture] = useState('');

    const onChangePicture = e => {
        console.log('picture: ', picture);
        setPicture(URL.createObjectURL(e.target.files[0]));
        setImage(e.target.files[0]);
    };


    const handleInput = (e) => {
        sethealthSolution({
            ...healthSolution, [e.target.name]: e.target.value
        });
    }
    const { id } = useParams();
    useEffect(() => {
        axios.get(`/edit-health-care-solution-card/${id}`).then(res => {
            if (res.data.status == 200) {
                sethealthSolution({
                    title: res.data.health.title,
                    short_description: res.data.health.short_description,
                });
                setImage(res.data.health.image);
            }
        })

    }, [])


    const updatehealthSolution = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', healthSolution.title);
        formData.append('short_description', healthSolution.short_description);
        formData.append('image', image);

        console.log('job list update data', formData.get('image'));

        // const data = {
        //     title: formData.append('title'),
        //     short_description: formData.append('short_description'),
        //     image: formData.append(image),
        // }


        if (healthSolution.title == '' || healthSolution.short_description == '' || image == '') {
            Swal.fire("Please fill up all inputs", '', 'error')

        }
        else if (image.size > 524288) {
            Swal.fire("Image size must be less than 0.5 mb", '', 'error')

        }

        else {
            axios.post(`/update-health-care-solution-card/${id}`, formData).then(res => {
                if (res.data.status == 200) {
                    Swal.fire(res.data.message, '', 'success')
                    navigate('/health-care-solution-card')
                    sethealthSolution({
                        title: "",
                        short_description: "",
                    });
                    setImage('');
                    setPicture('');
                    document.getElementById('image').value = "";
                }
                else if (res.data.status == 400) {
                    sethealthSolution({ ...healthSolution, error_list: res.data.errors });

                }
            })
        }
    }


    return (
        <>
            <MasterDashboardLayout>
                <div className="container-fluid">
                    <div className="row">
                        {/* <div className="col-md-3">
                <EntSetupSidebar/>
            </div> */}
                        <div className="col-md-12 mt-3">
                            <div className="card">
                                <div className="card-header">
                                    <h6 className="card-title"> Edit HealthCare Solution Card
                                        <Link to={'/health-care-solution-card'} className="btn btn-primary btn-sm float-end"> Back </Link>
                                    </h6>
                                </div>
                                <div className="card-body">
                                    <form id="EarCanalForm" onSubmit={updatehealthSolution} encType="multipart/form-data">
                                        <div className="card-body">

                                            <div className="col-md-12">


                                                <div className="form-group">
                                                    <label htmlFor="history_name" className="col-form-label-sm"> Title</label>
                                                    <input type="text" value={healthSolution.title} className="form-control" name="title" onChange={handleInput} />
                                                    {/* <span className="text-danger">{heading.error_list.title}</span> */}

                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="history_name" className="col-form-label-sm"> Short Description </label>
                                                    <textarea class="form-control" id="exampleFormControlTextarea1" value={healthSolution.short_description} name="short_description" rows="3" onChange={handleInput} ></textarea>
                                                    {/* <span className="text-danger">{heading.error_list.title}</span> */}

                                                </div>


                                                <div className="form-group">
                                                    <label htmlFor="history_name" className="col-form-label-sm"> Logo </label>
                                                    {/* <input type="file" value={jobList.client_image} className="form-control" name="client_image" onChange={(e) => { setImage(e.target.files[0]) }} /> */}
                                                    <input type="file" className="form-control" id="image" name="image" onChange={onChangePicture} />
                                                    {/* <span className="text-danger">{heading.error_list.job_tittle}</span> */}

                                                </div>
                                                {
                                                    picture == '' ? <div className="form-group" style={{ width: '100px', height: '90px' }}>
                                                        <img className="playerProfilePic_home_tile" src={`${global.img_url}/images/service_type/${image}`} style={{ width: '100px', height: '90px' }}></img>
                                                    </div>
                                                        :
                                                        <div className="form-group" style={{ width: '100px', height: '90px' }}>
                                                            <img className="playerProfilePic_home_tile" src={picture} style={{ width: '100px', height: '90px' }}></img>
                                                        </div>

                                                }



                                                {
                                                    image.size > 524288 && <div className='text-danger mt-4'>Image Size Must be less than 0.5 Mb </div>
                                                }





                                                <div className="float-right">
                                                    <button type="submit" className="btn btn-sm btn-primary text-uppercase float-end mt-2"><i
                                                        className="fas fa-save"></i> Update
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </MasterDashboardLayout>
        </>
    )
}

export default EditHealthCareSolutionCard
