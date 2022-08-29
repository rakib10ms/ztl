import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams,useNavigate} from "react-router-dom";
import Swal from 'sweetalert2';
// import '../../../imageUrl';
import MasterDashboardLayout from '../../../../dashboard/MasterDashboardLayout';

function EditAboutUsTitleLogo() {

    const [aboutTitleLogo, setaboutTitleLogo] = useState({
        title_name: "",
    });

const navigate=useNavigate();
    const [image, setImage] = useState('');
    console.log('image info', image.size)

    console.log('image asche kina dekhi',image)
    const [picture, setPicture] = useState('');

    const onChangePicture = e => {
        console.log('picture: ', picture);
        setPicture(URL.createObjectURL(e.target.files[0]));
        setImage(e.target.files[0]);
    };


    const handleInput = (e) => {
        setaboutTitleLogo({
            ...aboutTitleLogo, [e.target.name]: e.target.value
        });
    }
    const { id } = useParams();
    useEffect(() => {
        axios.get(`/edit-about-us-title-logo/${id}`).then(res => {
            if (res.data.status == 200) {
                setaboutTitleLogo({
                    title_name: res.data.about.title_name,
                });
                setImage(res.data.about.image);
            }
        })

    }, [])


    const updateErp = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title_name', aboutTitleLogo.title_name);
        formData.append('image', image);


        if (aboutTitleLogo.title_name == '' || image == '') {
            Swal.fire("Please fill up all inputs", '', 'error')

        }
        else if (image.size > 524288) {
            Swal.fire("Image size must be less than 0.5 mb", '', 'error')

        }

        else {
            axios.post(`/update-about-us-title-logo/${id}`, formData).then(res => {
                if (res.data.status == 200) {
                    Swal.fire(res.data.message, '', 'success')
                    navigate('/about-us-title-logo');
                    setaboutTitleLogo({
                        title_name: "",
                    });
                    setImage('');
                    setPicture('');
                    document.getElementById('image').value = "";
                }
                else if (res.data.status == 400) {
                    setaboutTitleLogo({ ...aboutTitleLogo, error_list: res.data.errors });

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
                                    <h6 className="card-title"> Edit title & banner
                                        <Link to={'/about-us-title-logo'} className="btn btn-primary btn-sm float-end"> Back </Link>
                                    </h6>
                                </div>
                                <div className="card-body">
                                    <form id="EarCanalForm" onSubmit={updateErp} encType="multipart/form-data">
                                        <div className="card-body">

                                            <div className="col-md-12">


                                                <div className="form-group">
                                                    <label htmlFor="history_name" className="col-form-label-sm"> Title Name </label>
                                                    <input type="text" value={aboutTitleLogo.title_name} className="form-control" name="title_name" onChange={handleInput} />
                                                    {/* <span className="text-danger">{heading.error_list.title_name}</span> */}

                                                </div>




                                                <div className="form-group">
                                                    <label htmlFor="history_name" className="col-form-label-sm">Image</label>
                                                    {/* <input type="file" value={aboutTitleLogo.client_image} className="form-control" name="client_image" onChange={(e) => { setImage(e.target.files[0]) }} /> */}
                                                    <input type="file" className="form-control" id="image" name="image" onChange={onChangePicture} />
                                                    {/* <span className="text-danger">{heading.error_list.title_name}</span> */}

                                                </div>
                                                {
                                                    picture == '' ? <div className="form-group" style={{ width: '100px', height: '90px' }}>
                                                        <img className="playerProfilePic_home_tile" src={`${global.img_url}/images/about/${image}`} style={{ width: '100px', height: '90px' }}></img>
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
                                                        className="fas fa-save"></i> Save
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
export default EditAboutUsTitleLogo

