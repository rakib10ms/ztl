import axios from 'axios';
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import JoditEditor from "jodit-react";
import MasterDashboardLayout from '../../../../dashboard/MasterDashboardLayout';

function AddOurCaseStudies () {
    const editor1 = useRef(null)
    const [content1, setContent1] = useState('')


    console.log('checking', content1)



    const config = {
        readonly: false, // all options from https://xdsoft.net/jodit/doc/,
        removeButtons: ["source", "show_all"],
    };

    const[case1,setCase1] = useState({
        case_title: "",
        project_name: ""
 
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
        setCase1({
            ...case1, [e.target.name]: e.target.value
        });
    }

    const submitRDription = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('case_title', case1.case_title);
        formData.append('project_name', case1.project_name);
        formData.append('case_description', content1);
        formData.append('image', image);

        console.log('check all data', formData);

        if (case1.case_title == '' || case1.project_name == '' || content1 == '' || image == '') {
            Swal.fire("Please fill up all inputs", '', 'error')

        }
        else if (image.size > 524288) {
            Swal.fire("Image size must be less than 0.5 mb", '', 'error')

        }

        else {
            axios.post(`/add-our-case-studies`, formData).then(res => {
                if (res.data.status == 200) {
                    Swal.fire(res.data.message, '', 'success')

                    setCase1({
                        case_title: "",
                        project_name: "",
                    });
                    setContent1('');
                    setImage('');
                    setPicture('');
                    document.getElementById('image').value = "";
                }
                else if (res.data.status == 400) {
                    setCase1({ ...case1, error_list: res.data.errors });
                    // Swal.fire(RD.error_list.job_id[0], '', 'error')

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
                                    <h6 className="card-title"> Add Our Case Studies
                                        <Link to={'/our-case-studies'} className="btn btn-primary btn-sm float-end"> Back </Link>
                                    </h6>
                                </div>
                                <div className="card-body">
                                    <form id="EarCanalForm" onSubmit={submitRDription} >
                                        <div className="card-body">

                                            <div className="col-md-12">





                                                <div className="form-group">
                                                    <label htmlFor="history_name" className="col-form-label-sm"> Project Name </label>
                                                    <input type="text" value={case1.project_name} className="form-control" name="project_name" onChange={handleInput} />
                                                    {/* <span className="text-danger">{heading.error_list.rd_title}</span> */}

                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="history_name" className="col-form-label-sm"> Case Study Title Name </label>
                                                    <input type="text" value={case1.case_title} className="form-control" name="case_title" onChange={handleInput} />
                                                    {/* <span className="text-danger">{heading.error_list.rd_title}</span> */}

                                                </div>

                
                

                                                <div className='form-group'>
                                                    <label htmlFor="history_name" className="col-form-label-sm">Case Study Description</label>

                                                    <JoditEditor
                                                        ref={editor1}
                                                        value={content1}
                                                        config={config}
                                                        tabIndex={1} // tabIndex of textarea
                                                        onBlur={newContent => setContent1(newContent)} // preferred to use only this option to update the content for performance reasons
                                                        onChange={newContent => { }}
                                                    />

                                                </div>

                                    


                                                <div className="form-group">
                                                    <label htmlFor="history_name" className="col-form-label-sm"> Image</label>
                                                    {/* <input type="file" value={RD.client_image} className="form-control" name="client_image" onChange={(e) => { setImage(e.target.files[0]) }} /> */}
                                                    <input type="file" className="form-control" id="image" name="image" onChange={onChangePicture} />
                                                    {/* <span className="text-danger">{heading.error_list.rd_title}</span> */}

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

export default AddOurCaseStudies