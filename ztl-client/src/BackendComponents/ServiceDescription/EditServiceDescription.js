import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import MasterDashboardLayout from '../../dashboard/MasterDashboardLayout';

function EditServiceDescription() {

    const [serviceDescription, setserviceDescription] = useState({
        short_description: "",
    });



    const handleInput = (e) => {
        setserviceDescription({
            ...serviceDescription, [e.target.name]: e.target.value
        });
    }
    const { id } = useParams();
    useEffect(() => {
        axios.get(`/edit-service-description/${id}`).then(res => {
            if (res.data.status == 200) {
                setserviceDescription({
                    short_description: res.data.service_description.short_description,
                });
            }
        })

    }, [])


    const updateserviceDescription = (e) => {
        e.preventDefault();
      


        if (serviceDescription.short_description == '' ) {
            Swal.fire("Please fill up all inputs", '', 'error')

        }
    

        else {
            axios.post(`/update-service-description/${id}`, serviceDescription).then(res => {
                if (res.data.status == 200) {
                    Swal.fire(res.data.message, '', 'success')

                    setserviceDescription({
                        short_description: "",
                    });
                
                }
                else if (res.data.status == 400) {
                    setserviceDescription({ ...serviceDescription, error_list: res.data.errors });

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
                                    <h6 className="card-title"> Edit Service Description
                                        <Link to={'/service-description'} className="btn btn-primary btn-sm float-end"> Back </Link>
                                    </h6>
                                </div>
                                <div className="card-body">
                                    <form id="EarCanalForm" onSubmit={updateserviceDescription} >
                                        <div className="card-body">

                                            <div className="col-md-12">
                                            
                                                <div className="form-group">
                                                    <label htmlFor="history_name" className="col-form-label-sm"> Short Description </label>
                                                    <textarea class="form-control" id="exampleFormControlTextarea1" value={serviceDescription.short_description} name="short_description" rows="3" onChange={handleInput} ></textarea>
                                                    {/* <span className="text-danger">{heading.error_list.service_name}</span> */}

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

export default EditServiceDescription
