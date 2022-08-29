import axios from 'axios';
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import JoditEditor from "jodit-react";
import MasterDashboardLayout from '../../../dashboard/MasterDashboardLayout';

function AddHealthCareCard() {


    const [healthCareCard, sethealthCareCard] = useState({
        title: "",
        short_description:''
    });


    const handleInput = (e) => {
        sethealthCareCard({
            ...healthCareCard, [e.target.name]: e.target.value
        });
    }

    const submitjobDescription = (e) => {
        e.preventDefault();
        const stateData={
            title:healthCareCard.title,
            short_description:healthCareCard.short_description
        }
       

        if (healthCareCard.title == '') {
            Swal.fire("Please fill up all inputs", '', 'error')

        }
      

        else {
            axios.post(`/add-health-care-card`, stateData).then(res => {
                if (res.data.status == 200) {
                    Swal.fire(res.data.message, '', 'success')

                    sethealthCareCard({
                        title: "",
                        short_description:""
                     
                    });
                 
                }
                else if (res.data.status == 400) {
                    sethealthCareCard({ ...healthCareCard, error_list: res.data.errors });

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
                                    <h6 className="card-title"> Add Health Care Card
                                        <Link to={'/health-care-card'} className="btn btn-primary btn-sm float-end"> Back </Link>
                                    </h6>
                                </div>
                                <div className="card-body">
                                    <form id="EarCanalForm" onSubmit={submitjobDescription} >
                                        <div className="card-body">

                                            <div className="col-md-12">


                                                <div className="form-group">
                                                    <label htmlFor="history_name" className="col-form-label-sm"> Title</label>
                                                    <input type="text" value={healthCareCard.title} className="form-control" name="title" onChange={handleInput} />
                                                    {/* <span className="text-danger">{heading.error_list.title}</span> */}

                                                </div>

                 
                                                <div className='form-group'>
                                                    <label htmlFor="history_name" className="col-form-label-sm">Short Description</label>

                                                    <textarea class="form-control" id="exampleFormControlTextarea1" value={healthCareCard.short_description}  rows="3" name="short_description" onChange={handleInput} ></textarea>

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

export default AddHealthCareCard
