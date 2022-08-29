import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link,useParams} from "react-router-dom";
import Swal from 'sweetalert2';
import MasterDashboardLayout from '../../../dashboard/MasterDashboardLayout';

function EditNews1() {

    const [jobList, setjobList] = useState({
        job_tittle: "",
        job_experience: "",
        job_status: "",
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
        setjobList({
            ...jobList, [e.target.name]: e.target.value
        });
    }
    const { id } = useParams();
    useEffect(() => {
        axios.get(`/edit-job-list/${id}`).then(res => {
            if (res.data.status == 200) {
                setjobList({
                    job_tittle: res.data.jobList.job_tittle,
                    job_experience: res.data.jobList.job_experience,
                    job_status: res.data.jobList.job_status,
                });
                // setPicture(res.data.testimonial.client_image);
                setImage(res.data.jobList.job_post_logo);
            }
        })

    }, [])


    const submitjobList = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('job_tittle', jobList.job_tittle);
        formData.append('job_experience', jobList.job_experience);
        formData.append('job_status', jobList.job_status);
        formData.append('job_post_logo', image);

        console.log('job list update data',formData.get('job_post_logo'));

        const data={
            'job_tittle':formData.get('job_tittle'),
            'job_experience':formData.get('job_experience'),
            'job_status':formData.get('job_status'),
            'job_post_logo':formData.get('job_post_logo'),
        }

        if (jobList.job_tittle == '' || jobList.job_experience == '' || jobList.job_status == '') {
            Swal.fire("Please fill up all inputs", '', 'error')

        }
        else if (image.size > 524288) {
            Swal.fire("Image size must be less than 0.5 mb", '', 'error')

        }

        else {
            axios.put(`/update-job-list/${id}`, data).then(res => {
                if (res.data.status == 200) {
                    Swal.fire(res.data.message, '', 'success')

                    setjobList({
                        job_tittle: "",
                        job_experience: "",
                        job_status: "",
                        job_post_logo: "",
                    });
                    setImage('');
                    setPicture('');
                    document.getElementById('job_post_logo').value = "";
                }
                else if (res.data.status == 400) {
                    setjobList({ ...jobList, error_list: res.data.errors });

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
                                    <h6 className="card-title"> Edit Job
                                        <Link to={'/job-list'} className="btn btn-primary btn-sm float-end"> Back </Link>
                                    </h6>
                                </div>
                                <div className="card-body">
                                    <form id="EarCanalForm" onSubmit={submitjobList}  encType="multipart/form-data">
                                        <div className="card-body">

                                            <div className="col-md-12">


                                                <div className="form-group">
                                                    <label htmlFor="history_name" className="col-form-label-sm"> Job Tittle </label>
                                                    <input type="text" value={jobList.job_tittle} className="form-control" name="job_tittle" onChange={handleInput} />
                                                    {/* <span className="text-danger">{heading.error_list.job_tittle}</span> */}

                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="history_name" className="col-form-label-sm"> Job Experience </label>
                                                    <textarea class="form-control" id="exampleFormControlTextarea1" value={jobList.job_experience} name="job_experience" rows="3" onChange={handleInput} ></textarea>
                                                    {/* <span className="text-danger">{heading.error_list.job_tittle}</span> */}

                                                </div>


                                               

                                                <div  className="form-group">
                                                    <label htmlFor="inputPassword4"
                                                        className="form-label  col-form-label col-form-label-sm">Job Status</label>

                                                    <select id="inputState" onChange={handleInput} value={jobList.job_status} name="job_status"
                                                        className="form-select  col-form-label-sm font-size-patient">
                                                        <option selected>Select</option>
                                                        <option value="full_time">Full Time</option>
                                                        <option value="contract">Contract</option>
                                                       
                                                    </select>
                                                    {/* <span className="text-danger">{heading.error_list.heading_description}</span> */}

                                                </div>


                                                <div className="form-group">
                                                    <label htmlFor="history_name" className="col-form-label-sm"> Job Post Logo </label>
                                                    {/* <input type="file" value={jobList.client_image} className="form-control" name="client_image" onChange={(e) => { setImage(e.target.files[0]) }} /> */}
                                                    <input type="file" className="form-control" id="job_post_logo" name="job_post_logo" onChange={onChangePicture} />
                                                    {/* <span className="text-danger">{heading.error_list.job_tittle}</span> */}

                                                </div>
                                                {
                                                    picture == '' ? <div className="form-group" style={{ width: '100px', height: '90px' }}>
                                                        <img className="playerProfilePic_home_tile" src={`http://localhost:8000/images/job_list/${image}`} style={{ width: '100px', height: '90px' }}></img>
                                                    </div>
                                                        :
                                                        <div className="form-group" style={{ width: '100px', height: '90px' }}>
                                                            <img className="playerProfilePic_home_tile" src={picture} style={{ width: '100px', height: '90px' }}></img>
                                                        </div>

                                                }


{/* 
                                                {
                                                    image.size > 524288 && <div className='text-danger mt-4'>Image Size Must be less than 0.5 Mb </div>
                                                }
 */}


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

export default EditNews1
