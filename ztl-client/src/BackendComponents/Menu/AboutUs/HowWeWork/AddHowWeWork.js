import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import MasterDashboardLayout from '../../../../dashboard/MasterDashboardLayout';
function AddHowWeWork() {

    const [howWeWork, sethowWeWork] = useState({
        short_description: "",
    });

    const [totalCount, setTotalCount] = useState(0);

    console.log('counting', totalCount)
    useEffect(() => {
        axios.get(`/how-we-work`).then(res => {
            if (res.data.status == 200) {
                setTotalCount(res.data.count);
            }
        })
    }, [totalCount])





    const handleInput = (e) => {
        sethowWeWork({
            ...howWeWork, [e.target.name]: e.target.value
        });
    }

    const submitErp = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('short_description', howWeWork.short_description);

        if (howWeWork.short_description == '' ) {
            Swal.fire("Please fill up all inputs", '', 'error')

        }


        else {
            if (totalCount >= 1) {
                Swal.fire("You can't add One more", '', 'warning')

            }
            else {
                axios.post(`/add-how-we-work`, formData).then(res => {
                    if (res.data.status == 200) {
                        setTotalCount(res.data.count);
                        Swal.fire(res.data.message, '', 'success')

                        sethowWeWork({
                            short_description: "",
                        });
                    
                    }
                    else if (res.data.status == 400) {
                        sethowWeWork({ ...howWeWork, error_list: res.data.errors });

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
                                    <h6 className="card-title"> Add Short Description
                                        <Link to={'/how-we-work'} className="btn btn-primary btn-sm float-end"> Back </Link>
                                    </h6>
                                </div>
                                <div className="card-body">
                                    <form id="EarCanalForm" onSubmit={submitErp} >
                                        <div className="card-body">

                                            <div className="col-md-12">


                                                <div className="form-group">
                                                    <label htmlFor="history_name" className="col-form-label-sm"> Mission Description </label>
                                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={howWeWork.short_description} className="form-control" name="short_description" onChange={handleInput} ></textarea>

                                                    {/* <span className="text-danger">{heading.error_list.short_description}</span> */}

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

export default AddHowWeWork




