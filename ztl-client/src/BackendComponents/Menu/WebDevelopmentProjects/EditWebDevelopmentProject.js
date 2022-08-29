import axios from 'axios';
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link ,useParams,useNavigate} from "react-router-dom";
import Swal from 'sweetalert2';
import MasterDashboardLayout from '../../../dashboard/MasterDashboardLayout';
import JoditEditor from "jodit-react";


function EditWebDevelopmentProject() {
    const editor1 = useRef(null)
    const [content1, setContent1] = useState('')

    console.log('checking', content1)

    const navigate=useNavigate();

    const config = {
        readonly: false, // all options from https://xdsoft.net/jodit/doc/,
        removeButtons: ["source", "show_all"],
    };

    const [webDevProject, setWebDevProject] = useState({
        project_name: "",
        
    });

    const { id } = useParams();
    useEffect(() => {
        axios.get(`/edit-web-development-project/${id}`).then(res => {
            if (res.data.status == 200) {
                setWebDevProject({
                    project_name: res.data.web_dev.project_name,
                    
                });
                setContent1(res.data.web_dev.technologies);
            }
        })

    }, [])

    const handleInput = (e) => {
        setWebDevProject({
            ...webDevProject, [e.target.name]: e.target.value
        });
    }

    const submitjobDescription = (e) => {
        e.preventDefault();
        const stateData={
            project_name:webDevProject.project_name,
            technologies:content1
        }
       

        if (webDevProject.project_name == '' || content1 == '') {
            Swal.fire("Please fill up all inputs", '', 'error')

        }
      
        else {
            axios.post(`/update-web-development-project/${id}`, stateData).then(res => {
                if (res.data.status == 200) {
                    Swal.fire(res.data.message, '', 'success')
                    navigate('/web-development-project')
                    setWebDevProject({
                        project_name: "",
                     
                    });
                    setContent1();
                 
                }
                else if (res.data.status == 400) {
                    setWebDevProject({ ...webDevProject, error_list: res.data.errors });

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
                                    <h6 className="card-title"> Edit Web Recent Projects
                                        <Link to={'/web-development-project'} className="btn btn-primary btn-sm float-end"> Back </Link>
                                    </h6>
                                </div>
                                <div className="card-body">
                                    <form id="EarCanalForm" onSubmit={submitjobDescription} >
                                        <div className="card-body">

                                            <div className="col-md-12">


                                                <div className="form-group">
                                                    <label htmlFor="history_name" className="col-form-label-sm"> Project Name </label>
                                                    <input type="text" value={webDevProject.project_name} className="form-control" name="project_name" onChange={handleInput} />
                                                    {/* <span className="text-danger">{heading.error_list.project_name}</span> */}

                                                </div>

                 
                                                <div className='form-group'>
                                                    <label htmlFor="history_name" className="col-form-label-sm">Technology Used</label>

                                                    <JoditEditor
                                                        ref={editor1}
                                                        value={content1}
                                                        config={config}
                                                        tabIndex={1} // tabIndex of textarea
                                                        onBlur={newContent => setContent1(newContent)} // preferred to use only this option to update the content for performance reasons
                                                        onChange={newContent => { }}
                                                    />

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
}

export default EditWebDevelopmentProject
