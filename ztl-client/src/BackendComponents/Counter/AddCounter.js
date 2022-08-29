import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import MasterDashboardLayout from '../../dashboard/MasterDashboardLayout';
function AddCounter() {

    const [counter, setcounter] = useState({
        total_countries:"",
        total_clients:"",
        total_projects:""
     
    });
    const [totalCount,setTotalCount]=useState(0);

    console.log('counting',totalCount)

    useEffect(()=>{
        axios.get(`/counter`).then(res => {
            if (res.data.status == 200) {
                setTotalCount(res.data.count);
            }
        })
    },[totalCount])
 
    const handleInput = (e) => {
        setcounter({
            ...counter, [e.target.name]: e.target.value
        });
    }

    const submitCounter = (e) => {
        e.preventDefault();
        // console.log('state cheking',process_name)
        if (counter.total_countries == '' || counter.total_clients == '' || counter.total_projects == '' ) {
            Swal.fire("Please fill up all inputs", '', 'error')

        }

        else {
            if(totalCount >=1){
                Swal.fire("You can't add One more", '', 'warning')

            }
            else{

            
            axios.post(`/add-counter`, counter).then(res => {
                if (res.data.status == 200) {
                    setcounter(res.data.count)
                    Swal.fire(res.data.message, '', 'success')

                    setcounter({
                        total_countries:"",
                        total_clients:"",
                        total_projects:""
                    });

                }
                else if (res.data.status == 400) {
                    setcounter({ ...counter, error_list: res.data.errors });

                }
            })
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
                                    <h6 className="card-title"> Add Counter
                                        <Link to={'/counter'} className="btn btn-primary btn-sm float-end"> Back </Link>
                                    </h6>
                                </div>
                                <div className="card-body">
                                    <form id="EarCanalForm" onSubmit={submitCounter} >
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

export default AddCounter
