import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link,useNavigate,useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import MasterDashboardLayout from '../../dashboard/MasterDashboardLayout';
function EditFaq() {

    const [faq, setfaq] = useState({
        faq_qtn: "",
        faq_ans: "",
     
    });

 
    const handleInput = (e) => {
        setfaq({
            ...faq, [e.target.name]: e.target.value
        });
    }

    const {id}=useParams();
    // console.log('id checkibg',id)
    useEffect(() => {
        axios.get(`/edit-faq/${id}`).then(res => {
            if (res.data.status == 200) {
                // setHeading(res.data.heading);
                setfaq({
                    faq_qtn:res.data.faq.faq_qtn,
                    faq_ans: res.data.faq.faq_ans,

                })
    
            }
        })

    }, [])
    const navigate = useNavigate();

    const updateFaq = (e) => {
        e.preventDefault();
        console.log('state cheking',faq)
        if (faq.faq_qtn == '' || faq.faq_ans == '') {
            Swal.fire("Please fill up all inputs", '', 'error')

        }

        else {
            axios.put(`/update-faq/${id}`, faq).then(res => {
                if (res.data.status == 200) {
                    Swal.fire(res.data.message, '', 'success')

                    setfaq({
                        faq_qtn: "",
                        faq_ans: "",
                    });
                    navigate('/faq')

                }
                else if (res.data.status == 400) {
                    setfaq({ ...faq, error_list: res.data.errors });

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
                                    <h6 className="card-title"> Add faq
                                        <Link to={'/faq'} className="btn btn-primary btn-sm float-end"> Back </Link>
                                    </h6>
                                </div>
                                <div className="card-body">
                                    <form id="EarCanalForm" onSubmit={updateFaq} >
                                        <div className="card-body">

                                            <div className="col-md-12">


                                                <div className="form-group">
                                                    <label htmlFor="history_name" className="col-form-label-sm"> Faq Question </label>
                                                    <input type="text" value={faq.faq_qtn} className="form-control" name="faq_qtn" onChange={handleInput} />
                                                    {/* <span className="text-danger">{heading.error_list.faq_qtn}</span> */}

                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="history_name" className="col-form-label-sm"> Faq Answer</label>
                                                    <textarea class="form-control" id="exampleFormControlTextarea1" value={faq.faq_ans} name="faq_ans" rows="3" onChange={handleInput} ></textarea>
                                                    {/* <span className="text-danger">{heading.error_list.faq_qtn}</span> */}

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

export default EditFaq
