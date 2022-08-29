import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link,useNavigate,useParams} from "react-router-dom";
import Swal from 'sweetalert2';
import MasterDashboardLayout from '../../dashboard/MasterDashboardLayout';
function EditRecruitmentProcess() {

    const [recruitmentProcess, setrecruitmentProcess] = useState({
        process_name: "",
        process_description: "",
     
    });

    const {id}=useParams();
    // console.log('id checkibg',id)
    useEffect(() => {
        axios.get(`/edit-recruitment-process/${id}`).then(res => {
            if (res.data.status == 200) {
                // setHeading(res.data.heading);
                setrecruitmentProcess({
                    process_name:res.data.recruitment.process_name,
                    process_description:res.data.recruitment.process_description,

                })
    
            }
        })

    }, [])
    const navigate = useNavigate();

    const handleInput = (e) => {
        setrecruitmentProcess({
            ...recruitmentProcess, [e.target.name]: e.target.value
        });
    }

    const submitprocess_name = (e) => {
        e.preventDefault();
        // console.log('state cheking',process_name)
        if (recruitmentProcess.process_name == '' || recruitmentProcess.process_description == '') {
            Swal.fire("Please fill up all inputs", '', 'error')

        }

        else {
            axios.put(`/update-recruitment-process/${id}`, recruitmentProcess).then(res => {
                if (res.data.status == 200) {
                    Swal.fire(res.data.message, '', 'success')

                    setrecruitmentProcess({
                        process_name: "",
                        process_description: "",
                    });
                    navigate('/recruitment-process')

                }
                else if (res.data.status == 400) {
                    setrecruitmentProcess({ ...recruitmentProcess, error_list: res.data.errors });

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
                                    <h6 className="card-title"> Edit Recruitment Process
                                        <Link to={'/recruitment-process'} className="btn btn-primary btn-sm float-end"> Back </Link>
                                    </h6>
                                </div>
                                <div className="card-body">
                                    <form id="EarCanalForm" onSubmit={submitprocess_name} >
                                        <div className="card-body">

                                            <div className="col-md-12">


                                                <div className="form-group">
                                                    <label htmlFor="history_name" className="col-form-label-sm">Technical Process Name </label>
                                                    <input type="text" value={recruitmentProcess.process_name} className="form-control" name="process_name" onChange={handleInput} />
                                                    {/* <span className="text-danger">{heading.error_list.process_name}</span> */}

                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="history_name" className="col-form-label-sm">Process Description</label>
                                                    <textarea class="form-control" id="exampleFormControlTextarea1" value={recruitmentProcess.process_description} name="process_description" rows="3" onChange={handleInput} ></textarea>
                                                    {/* <span className="text-danger">{heading.error_list.process_name}</span> */}

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

export default EditRecruitmentProcess
