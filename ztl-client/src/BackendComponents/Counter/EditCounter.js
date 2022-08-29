import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link,useNavigate,useParams} from "react-router-dom";
import Swal from 'sweetalert2';
import MasterDashboardLayout from '../../dashboard/MasterDashboardLayout';
function EditCounter() {

    const [counter, setcounter] = useState({
        total_countries:"",
        total_clients:"",
        total_projects:""
     
    });

    const {id}=useParams();
    // console.log('id checkibg',id)
    useEffect(() => {
        axios.get(`/edit-counter/${id}`).then(res => {
            if (res.data.status == 200) {
                // setHeading(res.data.heading);
               setcounter(res.data.counter)
    
            }
        })

    }, [])
    const navigate = useNavigate();

    const handleInput = (e) => {
        setcounter({
            ...counter, [e.target.name]: e.target.value
        });
    }

    const submitprocess_name = (e) => {
        e.preventDefault();
        // console.log('state cheking',process_name)
        if (counter.total_countries == '' || counter.total_clients == '' || counter.total_projects == '' ) {
            Swal.fire("Please fill up all inputs", '', 'error')

        }

        else {
            axios.put(`/update-counter/${id}`, counter).then(res => {
                if (res.data.status == 200) {
                    Swal.fire(res.data.message, '', 'success')

                    setcounter({
                    total_countries:"",
                        total_clients:"",
                        total_projects:""
                    });
                    navigate('/counter')

                }
                else if (res.data.status == 400) {
                    setcounter({ ...counter, error_list: res.data.errors });

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
                                    <h6 className="card-title"> Edit Counter
                                        <Link to={'/recruitment-process'} className="btn btn-primary btn-sm float-end"> Back </Link>
                                    </h6>
                                </div>
                                <div className="card-body">
                                    <form id="EarCanalForm" onSubmit={submitprocess_name} >
                                        <div className="card-body">

                                            <div className="col-md-12">

                                            <div className="form-group">
                                                    <label htmlFor="history_name" className="col-form-label-sm">Total Countries </label>
                                                    <input type="text" value={counter.total_countries} className="form-control" name="total_countries" onChange={handleInput} />
                                                    {/* <span className="text-danger">{heading.error_list.process_name}</span> */}

                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="history_name" className="col-form-label-sm">Total Clients</label>
                                                    <textarea class="form-control" id="exampleFormControlTextarea1" value={counter.total_clients} name="total_clients" rows="3" onChange={handleInput} ></textarea>
                                                    {/* <span className="text-danger">{heading.error_list.process_name}</span> */}

                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="history_name" className="col-form-label-sm">Total Projects</label>
                                                    <textarea class="form-control" id="exampleFormControlTextarea1" value={counter.total_projects} name="total_projects" rows="3" onChange={handleInput} ></textarea>
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

export default EditCounter
