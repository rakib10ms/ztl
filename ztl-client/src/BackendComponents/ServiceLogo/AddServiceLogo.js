import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import MasterDashboardLayout from '../../dashboard/MasterDashboardLayout';

function AddServiceLogo() {

    const [image, setImage] = useState('');
    // console.log('image info', image.size)
    const [picture, setPicture] = useState('');


    const [totalCount,setTotalCount]=useState(0);

    console.log('counting',totalCount)

    useEffect(()=>{
        axios.get(`/service-logo`).then(res => {
            if (res.data.status == 200) {
                setTotalCount(res.data.count);
            }
        })
    },[totalCount])


    const onChangePicture = e => {
        console.log('picture: ', picture);
        setPicture(URL.createObjectURL(e.target.files[0]));
        setImage(e.target.files[0]);
    };


    const submitServiceLogo = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('service_logo', image);

        
        if (image == '') {
            Swal.fire("Please fill up input", '', 'error')

        }
        else if (image.size > 524288) {
            Swal.fire("Image size must be less than 0.5 mb", '', 'error')

        }

        else {
            if(totalCount <7){
                axios.post(`/add-service-logo`, formData).then(res => {
                    if (res.data.status == 200) {
                        setTotalCount(res.data.count)
                        Swal.fire(res.data.message, '', 'success')
    
                        setImage('');
                        setPicture('');
                        document.getElementById('service_logo').value = "";
                    }
    
                })
            }
            if(totalCount >=8){
                Swal.fire("You can't add Eight more", '', 'warning')

            }

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
                                    <h6 className="card-title"> Add Service Logo
                                        <Link to={'/service-logo'} className="btn btn-primary btn-sm float-end"> Back </Link>
                                    </h6>
                                </div>
                                <div className="card-body">
                                    <form id="EarCanalForm" onSubmit={submitServiceLogo} >
                                        <div className="card-body">

                                            <div className="col-md-12">

                                                <div className="form-group">
                                                    <label htmlFor="history_name" className="col-form-label-sm"> Service Logo </label>
                                                    {/* <input type="file" value={jobList.client_image} className="form-control" name="client_image" onChange={(e) => { setImage(e.target.files[0]) }} /> */}
                                                    <input type="file" className="form-control" id="service_logo" name="service_logo" onChange={onChangePicture} />

                                                </div>

                                                {
                                                    picture !== '' && <div className="form-group" style={{ width: '100px', height: '90px' }}>
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

export default AddServiceLogo
