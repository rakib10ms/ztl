import axios from 'axios';
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import MasterDashboardLayout from '../../dashboard/MasterDashboardLayout';
import JoditEditor from "jodit-react";
import '../../imageUrl';

function EditJobDescription() {
    const editor1 = useRef(null)
    const [content1, setContent1] = useState('')

    const editor2 = useRef(null)
    const [content2, setContent2] = useState('')

    console.log('checking', content1)
    console.log('checking2', content2)


    const config = {
        readonly: false, // all options from https://xdsoft.net/jodit/doc/,
        removeButtons: ["source", "show_all"],
    };

    const [jobDesc, setjobDesc] = useState({
        job_tittle: "",
        job_id: "",
        qualification: "",
        job_description1: "",
        job_description2: "",
    });

    const { id } = useParams();
    useEffect(() => {
        axios.get(`/edit-job-description/${id}`).then(res => {
            if (res.data.status == 200) {
                setjobDesc({
                    job_tittle: res.data.jobDescription.job_tittle,
                    job_id: res.data.jobDescription.job_id,
                    qualification: res.data.jobDescription.qualification,
                    job_description1: res.data.jobDescription.job_description1,
                    job_description2: res.data.jobDescription.job_description2,
                    // client_designation: res.data.jobDescription.client_designation,
                });
                setContent1(res.data.jobDescription.job_requirements);
                setContent2(res.data.jobDescription.job_responsibilites);
                setImage(res.data.jobDescription.job_post_logo);
            }
        })

    }, [])

    const [allJobList, setAllJobList] = useState([]);
    useEffect(() => {
        axios.get(`/job-list`).then(res => {
            if (res.data.status == 200) {
                setAllJobList(res.data.jobList);
            }
        })

    }, [])



    const [image, setImage] = useState('');
    console.log('image checking',image)
    console.log('image info', image.size)
    const [picture, setPicture] = useState('');

    const onChangePicture = e => {
        console.log('picture: ', picture);
        setPicture(URL.createObjectURL(e.target.files[0]));
        setImage(e.target.files[0]);
    };


    const handleInput = (e) => {
        setjobDesc({
            ...jobDesc, [e.target.name]: e.target.value
        });
    }

    const updatejobDescription = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('job_tittle', jobDesc.job_tittle);
        formData.append('job_id', jobDesc.job_id);
        formData.append('qualification', jobDesc.qualification);
        formData.append('job_description1', jobDesc.job_description1);
        formData.append('job_description2', jobDesc.job_description2);
        formData.append('job_requirements', content1);
        formData.append('job_responsibilites', content2);
        formData.append('job_post_logo', image);

        console.log('check all data', formData);

        if (jobDesc.job_tittle == '' || jobDesc.qualification == '' || jobDesc.job_description1 == '' || jobDesc.job_post_logo == '') {
            Swal.fire("Please fill up all inputs", '', 'error')

        }
        else if (image.size > 524288) {
            Swal.fire("Image size must be less than 0.5 mb", '', 'error')

        }

        else {
            axios.post(`/update-job-description/${id}`, formData).then(res => {
                if (res.data.status == 200) {
                    Swal.fire(res.data.message, '', 'success')

                    setjobDesc({
                        job_tittle: "",
                        job_id: "",
                        qualification: "",
                        job_description1: "",
                        job_description2: "",
                    });
                    setImage('');
                    setPicture('');
                    document.getElementById('job_post_logo').value = "";
                }
                else if (res.data.status == 400) {
                    setjobDesc({ ...jobDesc, error_list: res.data.errors });

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
                                    <h6 className="card-title"> Edit Job Description
                                        <Link to={'/job-description'} className="btn btn-primary btn-sm float-end"> Back </Link>
                                    </h6>
                                </div>
                                <div className="card-body">
                                    <form id="EarCanalForm" onSubmit={updatejobDescription} >
                                        <div className="card-body">

                                            <div className="col-md-12">
                                            <div className="form-group">
                                                    <label htmlFor="history_name" className="col-form-label-sm"> Job Id</label>
                                                    <select class="form-select" aria-label="Default select example" value={jobDesc.job_id} name="job_id" onChange={handleInput} >
                                                        <option selected>Select Job Id</option>
                                                        {
                                                            allJobList.map((item,i)=>{
                                                                return(
                                                                    <>
                                                               <option value={item.job_id}>{item.job_id}</option>

                                                                    </>
                                                                )
                                                            })
                                                        }
                                                   
                                                    </select>
                                                </div>


                                                <div className="form-group">
                                                    <label htmlFor="history_name" className="col-form-label-sm"> Job Tittle </label>
                                                    <input type="text" value={jobDesc.job_tittle} className="form-control" name="job_tittle" onChange={handleInput} />
                                                    {/* <span className="text-danger">{heading.error_list.job_tittle}</span> */}

                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="history_name" className="col-form-label-sm"> Qualification </label>
                                                    <input type="text" value={jobDesc.qualification} className="form-control" name="qualification" onChange={handleInput} />
                                                    {/* <span className="text-danger">{heading.error_list.job_tittle}</span> */}

                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="history_name" className="col-form-label-sm"> Job Description 1 </label>
                                                    <textarea value={jobDesc.job_description1} className="form-control" name="job_description1" onChange={handleInput} id="exampleFormControlTextarea1" rows="3"></textarea>

                                                    {/* <span className="text-danger">{heading.error_list.job_tittle}</span> */}

                                                </div>


                                                <div className="form-group">
                                                    <label htmlFor="history_name" className="col-form-label-sm"> Job Description 2 </label>
                                                    <textarea value={jobDesc.job_description2} className="form-control" name="job_description2" onChange={handleInput} id="exampleFormControlTextarea1" rows="3"></textarea>
                                                    {/* <span className="text-danger">{heading.error_list.job_tittle}</span> */}

                                                </div>


                                                <div className='form-group'>
                                                    <label htmlFor="history_name" className="col-form-label-sm"> Job Requirements</label>

                                                    <JoditEditor
                                                        ref={editor1}
                                                        value={content1}
                                                        config={config}
                                                        tabIndex={1} // tabIndex of textarea
                                                        onBlur={newContent => setContent1(newContent)} // preferred to use only this option to update the content for performance reasons
                                                        onChange={newContent => { }}
                                                    />

                                                </div>

                                                <div className='form-group'>
                                                    <label htmlFor="history_name" className="col-form-label-sm"> Job Responsibilities</label>

                                                    <JoditEditor
                                                        ref={editor2}
                                                        value={content2}
                                                        config={config}
                                                        tabIndex={1} // tabIndex of textarea
                                                        onBlur={newContent => setContent2(newContent)} // preferred to use only this option to update the content for performance reasons
                                                        onChange={newContent => { }}
                                                    />

                                                </div>





                                                <div className="form-group">
                                                    <label htmlFor="history_name" className="col-form-label-sm"> Job Post Logo </label>
                                                    {/* <input type="file" value={jobDesc.client_image} className="form-control" name="client_image" onChange={(e) => { setImage(e.target.files[0]) }} /> */}
                                                    <input type="file" className="form-control" id="job_post_logo" name="job_post_logo" onChange={onChangePicture} />
                                                    {/* <span className="text-danger">{heading.error_list.job_tittle}</span> */}

                                                </div>
                        
                                                    {
                                                    picture == '' ? <div className="form-group" style={{ width: '100px', height: '90px' }}>
                                                        <img className="playerProfilePic_home_tile" src={`${global.img_url}/images/job_list/${image}`} style={{ width: '100px', height: '90px' }}></img>
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

export default EditJobDescription
