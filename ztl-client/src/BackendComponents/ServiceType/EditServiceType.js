import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import MasterDashboardLayout from '../../dashboard/MasterDashboardLayout';
import '../../imageUrl';

function EditServiceType() {

    const [serviceType, setserviceType] = useState({
        service_name: "",
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
        setserviceType({
            ...serviceType, [e.target.name]: e.target.value
        });
    }
    const { id } = useParams();
    useEffect(() => {
        axios.get(`/edit-service-type/${id}`).then(res => {
            if (res.data.status == 200) {
                setserviceType({
                    service_name: res.data.service_type.service_name,
                    short_description: res.data.service_type.short_description,
                });
                setImage(res.data.service_type.service_logo);
            }
        })

    }, [])


    const updateserviceType = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('service_name', serviceType.service_name);
        formData.append('short_description', serviceType.short_description);
        formData.append('service_logo', image);

        console.log('job list update data', formData.get('service_logo'));

        // const data = {
        //     service_name: formData.append('service_name'),
        //     short_description: formData.append('short_description'),
        //     service_logo: formData.append(image),
        // }


        if (serviceType.service_name == '' || serviceType.short_description == '' || serviceType.service_logo == '') {
            Swal.fire("Please fill up all inputs", '', 'error')

        }
        else if (image.size > 524288) {
            Swal.fire("Image size must be less than 0.5 mb", '', 'error')

        }

        else {
            axios.post(`/update-service-type/${id}`, formData).then(res => {
                if (res.data.status == 200) {
                    Swal.fire(res.data.message, '', 'success')

                    setserviceType({
                        service_name: "",
                        short_description: "",
                    });
                    setImage('');
                    setPicture('');
                    document.getElementById('service_logo').value = "";
                }
                else if (res.data.status == 400) {
                    setserviceType({ ...serviceType, error_list: res.data.errors });

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
                                    <h6 className="card-title"> Edit Service Type
                                        <Link to={'/service-type'} className="btn btn-primary btn-sm float-end"> Back </Link>
                                    </h6>
                                </div>
                                <div className="card-body">
                                    <form id="EarCanalForm" onSubmit={updateserviceType} encType="multipart/form-data">
                                        <div className="card-body">

                                            <div className="col-md-12">


                                                <div className="form-group">
                                                    <label htmlFor="history_name" className="col-form-label-sm"> Service Name </label>
                                                    <input type="text" value={serviceType.service_name} className="form-control" name="service_name" onChange={handleInput} />
                                                    {/* <span className="text-danger">{heading.error_list.service_name}</span> */}

                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="history_name" className="col-form-label-sm"> Short Description </label>
                                                    <textarea class="form-control" id="exampleFormControlTextarea1" value={serviceType.short_description} name="short_description" rows="3" onChange={handleInput} ></textarea>
                                                    {/* <span className="text-danger">{heading.error_list.service_name}</span> */}

                                                </div>


                                                <div className="form-group">
                                                    <label htmlFor="history_name" className="col-form-label-sm"> Job Post Logo </label>
                                                    {/* <input type="file" value={jobList.client_image} className="form-control" name="client_image" onChange={(e) => { setImage(e.target.files[0]) }} /> */}
                                                    <input type="file" className="form-control" id="job_post_logo" name="job_post_logo" onChange={onChangePicture} />
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

export default EditServiceType
