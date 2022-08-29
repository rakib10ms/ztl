import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import MasterDashboardLayout from '../../dashboard/MasterDashboardLayout';

function AddOurPartners(){


        const [ourPartner, setOurPartners] = useState({
            // PULimbDermatomes_name: "",
            error_list: [],
        });
        const [picture, setPicture] = useState({
            image: "",
        });
        const [image_error, setimage_error] = useState();
        const [imageUrl, setimageUrl] = useState();
        const handleImage = (e) => {
            e.persist();
    
            console.log(e.target.files[0])
            if (e.target.files[0].size < 2000048) {
                setPicture({ image: e.target.files[0] })
                setimage_error(null)
            } else {
                setimage_error("File size must be less than 2 mb !")
            }
            if (e.target.files && e.target.files[0] && e.target.files[0].size < 2000048) {
                setimageUrl(URL.createObjectURL(e.target.files[0]))
            } else {
                setimage_error("File size must be less than 2 mb !")
            }
        }
    
        const closeImage = () => {
            setimageUrl()
            document.getElementById('PatientImageUrl').value = '';
        }
    
        const handleInput = (e) => {
            setOurPartners({
                ...ourPartner, [e.target.name]: e.target.value
            });
        }
        const formData = new FormData();
    
        formData.append('image', picture.image);
        // formData.append('PULimbDermatomes_name', ourPartner.PULimbDermatomes_name);
        console.log(formData);
        const submitOurPartners = (e) => {
            e.preventDefault();
    
    
            axios.post(`/add-our-partners`, formData).then(res => {
                //  alert("hgfdhgf")
                if (res.data.status == 200) {
                    Swal.fire(res.data.message, '', 'success')
                    setOurPartners({
                        error_list: [],
    
                    });
                    setimageUrl(null);
                    document.getElementById('PatientImageUrl').value = '';
    
                }
    
            })
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
                                        <h6 className="card-title"> Add Our Partners
                                            <Link to={'/our-partners'} className="btn btn-primary btn-sm float-end"> Back </Link>
                                        </h6>
                                    </div>
                                    <div className="card-body">
                                        <form id="PictureUpperLimbDermatomesForm" onSubmit={submitOurPartners}>
                                            <div className="card-body">
                                                <div className="col-md-12">
                                                    
                                                    <div className="form-group mt-3">
                                                        <label htmlFor="inputEmail4"
                                                            className="form-label col-form-label col-form-label-sm"> Patient Image </label>
                                                        <input type="file" name="image" id="PatientImageUrl" className="form-control form-control-sm" onChange={handleImage}
                                                        />
    
                                                        {
                                                            image_error == null ? <p className="doc_image_size">Image size must be less than 2 mb</p> : <p className="docimage_error">{image_error}</p>
                                                        }
    
                                                        {imageUrl == null ? '' :
                                                            <div className="docImage">
                                                                <img src={imageUrl} className="doctorImageUrlPreview" alt="preview image"style={{ width: '100px', height: '90px' }} />
                                                                <i onClick={closeImage} class="far fa-times-circle"></i>
                                                            </div>
                                                        }
    
                                                    </div>
                                                    <span className="text-danger">{ourPartner.error_list.image}</span>
    
    
    
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
    























    // const [image, setImage] = useState('');
    // console.log('image info', image.size)
    // const [picture, setPicture] = useState('');

    // const onChangePicture = e => {
    //     console.log('picture: ', picture);
    //     setPicture(URL.createObjectURL(e.target.files[0]));
    //     setImage(e.target.files[0]);
    // };


    // const submitjobList = (e) => {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append('our_partner_logo', image);

    //     if (image== '') {
    //         Swal.fire("Please fill up input", '', 'error')

    //     }
    //     else if (image.size > 524288) {
    //         Swal.fire("Image size must be less than 0.5 mb", '', 'error')

    //     }

    //     else {
    //         axios.post(`/add-our-partners`, formData).then(res => {
    //             if (res.data.status == 200) {
    //                 Swal.fire(res.data.message, '', 'success')

    //                 setImage('');
    //                 setPicture('');
    //                 document.getElementById('our_partner_logo').value = "";
    //             }
             
    //         })
    //     }
    // }



    // return (
    //     <>
    //         <MasterDashboardLayout>
    //             <div className="container-fluid">
    //                 <div className="row">
    //                     {/* <div className="col-md-3">
    //             <EntSetupSidebar/>
    //         </div> */}
    //                     <div className="col-md-12 mt-3">
    //                         <div className="card">
    //                             <div className="card-header">
    //                                 <h6 className="card-title"> Add Our Partners
    //                                     <Link to={'/our-partners'} className="btn btn-primary btn-sm float-end"> Back </Link>
    //                                 </h6>
    //                             </div>
    //                             <div className="card-body">
    //                                 <form id="EarCanalForm" onSubmit={submitjobList} >
    //                                     <div className="card-body">

    //                                         <div className="col-md-12">


    //                                             <div className="form-group">
    //                                                 <label htmlFor="history_name" className="col-form-label-sm"> Partner Logo </label>
    //                                                 {/* <input type="file" value={jobList.client_image} className="form-control" name="client_image" onChange={(e) => { setImage(e.target.files[0]) }} /> */}
    //                                                 <input type="file" className="form-control" id="our_partner_logo" name="our_partner_logo" onChange={onChangePicture} />

    //                                             </div>

    //                                             {
    //                                                 picture !== '' && <div className="form-group" style={{ width: '100px', height: '90px' }}>
    //                                                     <img className="playerProfilePic_home_tile" src={picture} style={{ width: '100px', height: '90px' }}></img>
    //                                                 </div>

    //                                             }

    //                                             {
    //                                                 image.size > 524288 && <div className='text-danger mt-4'>Image Size Must be less than 0.5 Mb </div>
    //                                             }




    //                                             <div className="float-right">
    //                                                 <button type="submit" className="btn btn-sm btn-primary text-uppercase float-end mt-2"><i
    //                                                     className="fas fa-save"></i> Save
    //                                                 </button>
    //                                             </div>
    //                                         </div>
    //                                     </div>
    //                                 </form>
    //                             </div>
    //                         </div>
    //                     </div>

    //                 </div>
    //             </div>
    //         </MasterDashboardLayout>
    //     </>
    // )
}

export default AddOurPartners
