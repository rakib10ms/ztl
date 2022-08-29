import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link,useParams} from "react-router-dom";
import Swal from 'sweetalert2';
import '../../../imageUrl';

import MasterDashboardLayout from '../../../dashboard/MasterDashboardLayout';

function EditTechnologyIndexLogo() {
    const [image, setImage] = useState('');
    console.log('image info', image.size)
    const [picture, setPicture] = useState('');

    const onChangePicture = e => {
        console.log('picture: ', picture);
        setPicture(URL.createObjectURL(e.target.files[0]));
        setImage(e.target.files[0]);
    };



    const { id } = useParams();
    useEffect(() => {
        axios.get(`/edit-technology-index-logo/${id}`).then(res => {
            if (res.data.status == 200) {
        
                // setPicture(res.data.testimonial.client_image);
                setImage(res.data.technology_logo.technology_logo);
            }
        })

    }, [])


    const submitLogo = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('technology_logo', image);

        // console.log('job list update data',formData.get('technology_logo'));

        // const data={

        //     'technology_logo':formData.get('technology_logo'),
        // }

     if (image.size > 524288) {
            Swal.fire("Image size must be less than 0.5 mb", '', 'error')

        }

        else {
            axios.post(`/update-technology-index-logo/${id}`, formData).then(res => {
                if (res.data.status == 200) {
                    Swal.fire(res.data.message, '', 'success')

                    setImage('');
                    setPicture('');
                    document.getElementById('technology_logo').value = "";
                }
                // else if (res.data.status == 400) {
                //     setjobList({ ...jobList, error_list: res.data.errors });

                // }
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
                                    <h6 className="card-title"> Edit Technology Index Logo
                                        <Link to={'/technology-index-logo'} className="btn btn-primary btn-sm float-end"> Back </Link>
                                    </h6>
                                </div>
                                <div className="card-body">
                                    <form id="EarCanalForm" onSubmit={submitLogo}  encType="multipart/form-data">
                                        <div className="card-body">

                                            <div className="col-md-12">

                                                <div className="form-group">
                                                    <label htmlFor="history_name" className="col-form-label-sm"> Technology Index Logo </label>
                                                    {/* <input type="file" value={jobList.client_image} className="form-control" name="client_image" onChange={(e) => { setImage(e.target.files[0]) }} /> */}
                                                    <input type="file" className="form-control" id="technology_logo" name="technology_logo" onChange={onChangePicture} />
                                                    {/* <span className="text-danger">{heading.error_list.job_tittle}</span> */}

                                                </div>
                                                {
                                                    picture == '' ? <div className="form-group" style={{ width: '100px', height: '90px' }}>
                                                        <img className="playerProfilePic_home_tile" src={`${global.img_url}/images/technology_index_logo/${image}`  } style={{ width: '100px', height: '90px' }}></img>
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

export default EditTechnologyIndexLogo
