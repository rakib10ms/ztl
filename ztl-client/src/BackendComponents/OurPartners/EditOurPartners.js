import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import MasterDashboardLayout from '../../dashboard/MasterDashboardLayout';
import '../../imageUrl';
function EditOurPartners() {

    const [ourPartner, setOurPartner] = useState([]);
    const [error, setError] = useState([]);
    const [picture, setPicture] = useState('');

    const [image_error, setimage_error] = useState();
    const [imageUrl, setimageUrl] = useState();

    let navigate = useNavigate();

    const handleImage = (e) => {
        e.persist();

        if (e.target.files[0].size < 2000048) {
            setPicture({ image: e.target.files[0] })
            setimage_error(null)
        } else {
            setimage_error("File size must be less than 2 mb !")
        }
        if (e.target.files && e.target.files[0] && e.target.files[0].size < 2000048) {
            setimageUrl(URL.createObjectURL(e.target.files[0]))
            // setDoctors({ ...doctorsInput, doctorImageUrl: URL.createObjectURL(event.target.files[0]) });
        } else {
            setimage_error("File size must be less than 2 mb !")
        }
    }

    const closeImage = () => {
        setimageUrl()
        document.getElementById('PatientImageUrl').value = '';
    }

    useEffect(() => {

        var url = window.location.href;
        var urlsplit = url.split("/");
        var lastpart = urlsplit[urlsplit.length - 1];
        if (lastpart === '') {
            lastpart = urlsplit[urlsplit.length - 2];
        }

        // const carotid_id = props.match.params.id;
        axios.get(`/edit-our-partners/${lastpart}`).then(res => {

            if (res.data.status === 200) {
                setOurPartner(res.data.our_partner);
                setPicture(res.data.our_partner.image);
            } else if (res.data.status === 404) {
                setError(res.data.errors);

            }

        });

    }, []);


    const handleInput = (e) => {
        e.persist();
        setOurPartner({ ...ourPartner, [e.target.name]: e.target.value });
    }



    const formData = new FormData();

    formData.append('image', picture.image);


    const updateOurPartners = (e) => {
        e.preventDefault();

        var url = window.location.href;
        var urlsplit = url.split("/");
        var lastpart = urlsplit[urlsplit.length - 1];
        if (lastpart === '') {
            lastpart = urlsplit[urlsplit.length - 2];
        }

        axios.post(`/update-our-partners/${lastpart}`, formData).then(res => {
            if (res.data.status === 200) {
                Swal.fire(res.data.message, '', 'success')

                setOurPartner({
                    ...ourPartner,

                });

                document.getElementById('PatientImageUrl').value = '';

                setError('');
                navigate(`/our-partners`);
            } else {
                setError(res.data.errors)
            }
        });

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
                                    <h6 className="card-title"> Edit Our Partners
                                        <Link to={'/our-partners'} className="btn btn-primary btn-sm float-end"> Back </Link>
                                    </h6>
                                </div>
                                <div className="card-body">
                                    <form id="PictureUpperLimbDermatomesForm" onSubmit={updateOurPartners}>
                                        <div className="card-body">

                                            <div className="col-md-12">




                                                <div className="form-group ">
                                                    <label htmlFor="inputEmail4"
                                                        className="form-label col-form-label ">Picture upper limb dermatomes Image </label>
                                                    <input type="file" name="image" id="PatientImageUrl" className="form-control form-control-sm" onChange={handleImage}
                                                    />

                                                    {
                                                        image_error == null ? <p className="doc_image_size">Image size must be less than 2 mb</p> : <p className="docimage_error">{image_error}</p>
                                                    }

                                                    {imageUrl == null ? <img src={`${global.img_url}/images/our_partners/${picture}`} width="55px" height="35px" className="doctorImageUrlPreview" /> :
                                                        <div className="docImage">
                                                            <img src={imageUrl} className="doctorImageUrlPreview" alt="preview image" />
                                                            <i onClick={closeImage} class="far fa-times-circle"></i>
                                                        </div>
                                                    }

                                                </div>

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









































    //     const [image, setImage] = useState('');
    //     console.log('image info', image.size)
    //     const [picture, setPicture] = useState('');

    //     const onChangePicture = e => {
    //         console.log('picture: ', picture);
    //         setPicture(URL.createObjectURL(e.target.files[0]));
    //         setImage(e.target.files[0]);
    //     };


    //     const handleInput = (e) => {
    //         setjobList({
    //             ...jobList, [e.target.name]: e.target.value
    //         });
    //     }
    //     const { id } = useParams();
    //     useEffect(() => {
    //         axios.get(`/edit-job-list/${id}`).then(res => {
    //             if (res.data.status == 200) {
 
    //              setPicture(res.data.testimonial.client_image);
    //                 setImage(res.data.jobList.job_post_logo);
    //             }
    //         })

    //     }, [])


    //     const submitjobList = (e) => {
    //         e.preventDefault();
    //         const formData = new FormData();

    //         formData.append('job_post_logo', image);

    //         console.log('job list update data',formData.get('job_post_logo'));



    //         if (jobList.job_tittle == '' || jobList.job_experience == '' || jobList.job_status == '') {
    //             Swal.fire("Please fill up all inputs", '', 'error')

    //         }
    //         else if (image.size > 524288) {
    //             Swal.fire("Image size must be less than 0.5 mb", '', 'error')

    //         }

    //         else {
    //             axios.put(`/update-job-list/${id}`, data).then(res => {
    //                 if (res.data.status == 200) {
    //                     Swal.fire(res.data.message, '', 'success')


    //                     setImage('');
    //                     setPicture('');
    //                     document.getElementById('job_post_logo').value = "";
    //                 }
                    // else if (res.data.status == 400) {
                    //     setjobList({ ...jobList, error_list: res.data.errors });

                    // }
    //             })
    //         }
    //     }


    //     return (
    //         <>
    //             <MasterDashboardLayout>
    //                 <div className="container-fluid">
    //                     <div className="row">
    //                         {/* <div className="col-md-3">
    //                 <EntSetupSidebar/>
    //             </div> */}
    //                         <div className="col-md-12 mt-3">
    //                             <div className="card">
    //                                 <div className="card-header">
    //                                     <h6 className="card-title"> Edit Job
    //                                         <Link to={'/job-list'} className="btn btn-primary btn-sm float-end"> Back </Link>
    //                                     </h6>
    //                                 </div>
    //                                 <div className="card-body">
    //                                     <form id="EarCanalForm" onSubmit={submitjobList}  encType="multipart/form-data">
    //                                         <div className="card-body">

    //                                             <div className="col-md-12">


    //                                                 <div className="form-group">
    //                                                     <label htmlFor="history_name" className="col-form-label-sm"> Job Post Logo </label>
    //                                                     {/* <input type="file" value={jobList.client_image} className="form-control" name="client_image" onChange={(e) => { setImage(e.target.files[0]) }} /> */}
    //                                                     <input type="file" className="form-control" id="job_post_logo" name="job_post_logo" onChange={onChangePicture} />
    //                                                     {/* <span className="text-danger">{heading.error_list.job_tittle}</span> */}

    //                                                 </div>
    //                                                 {
    //                                                     picture == '' ? <div className="form-group" style={{ width: '100px', height: '90px' }}>
    //                                                         <img className="playerProfilePic_home_tile" src={`http://localhost:8000/images/job_list/${image}`} style={{ width: '100px', height: '90px' }}></img>
    //                                                     </div>
    //                                                         :
    //                                                         <div className="form-group" style={{ width: '100px', height: '90px' }}>
    //                                                             <img className="playerProfilePic_home_tile" src={picture} style={{ width: '100px', height: '90px' }}></img>
    //                                                         </div>

    //                                                 }


    // {/* 
    //                                                 {
    //                                                     image.size > 524288 && <div className='text-danger mt-4'>Image Size Must be less than 0.5 Mb </div>
    //                                                 }
    //  */}


    //                                                 <div className="float-right">
    //                                                     <button type="submit" className="btn btn-sm btn-primary text-uppercase float-end mt-2"><i
    //                                                         className="fas fa-save"></i> Update
    //                                                     </button>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //                                     </form>
    //                                 </div>
    //                             </div>
    //                         </div>

    //                     </div>
    //                 </div>
    //             </MasterDashboardLayout>
    //         </>
    //     )
}

export default EditOurPartners
