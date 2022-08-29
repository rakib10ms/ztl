import axios from 'axios';
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link ,useParams,useNavigate} from "react-router-dom";
import Swal from 'sweetalert2';
import MasterDashboardLayout from '../../../dashboard/MasterDashboardLayout';
import JoditEditor from "jodit-react";


function EditHealthCareCard() {
   
    const [healthCard, sethealthCard] = useState({
        title: "",
        short_description:''
    });
const navigate=useNavigate();

    const handleInput = (e) => {
        sethealthCard({
            ...healthCard, [e.target.name]: e.target.value
        });
    }
    const { id } = useParams();
    useEffect(() => {
        axios.get(`/edit-health-care-card/${id}`).then(res => {
            if (res.data.status == 200) {
                sethealthCard({
                    title: res.data.health.title,
                    short_description: res.data.health.short_description,
                    
                });
            }
        })

    }, [])
    const submitjobDescription = (e) => {
        e.preventDefault();
        const stateData={
            title:healthCard.title,
            short_description:healthCard.short_description
        }
       

        if (healthCard.title == '') {
            Swal.fire("Please fill up all inputs", '', 'error')

        }
      

        else {
            axios.post(`/update-health-care-card/${id}`, stateData).then(res => {
                if (res.data.status == 200) {
                    Swal.fire(res.data.message, '', 'success')

                    sethealthCard({
                        title: "",
                     
                    });
                    navigate('/health-care-card')
                 
                }
                else if (res.data.status == 400) {
                    sethealthCard({ ...healthCard, error_list: res.data.errors });

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
                                    <h6 className="card-title"> Edit Health Care Card
                                        <Link to={'/health-care-card'} className="btn btn-primary btn-sm float-end"> Back </Link>
                                    </h6>
                                </div>
                                <div className="card-body">
                                    <form id="EarCanalForm" onSubmit={submitjobDescription} >
                                        <div className="card-body">

                                            <div className="col-md-12">


                                                <div className="form-group">
                                                    <label htmlFor="history_name" className="col-form-label-sm"> Title </label>
                                                    <input type="text" value={healthCard.title} className="form-control" name="title" onChange={handleInput} />
                                                    {/* <span className="text-danger">{heading.error_list.title}</span> */}

                                                </div>

                 
                                                <div className='form-group'>
                                                    <label htmlFor="history_name" className="col-form-label-sm">Short Description</label>

                                                    <textarea class="form-control" id="exampleFormControlTextarea1" value={healthCard.short_description}  rows="3" name="short_description" onChange={handleInput} ></textarea>

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

export default EditHealthCareCard
