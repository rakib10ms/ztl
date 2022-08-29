import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import MasterDashboardLayout from '../../../dashboard/MasterDashboardLayout';

function AddTechnologyIndex() {

    const [technologyIndex, setTechnologyIndex] = useState({
        heading_name: "",
        heading_description: "",
    
    });
    const [totalCount,setTotalCount]=useState('');

    console.log('counting',totalCount)

    useEffect(()=>{
        axios.get(`/technology-index`).then(res => {
            if (res.data.status == 200) {
                setTotalCount(res.data.count);
            }
        })
    },[totalCount])

    const handleInput = (e) => {
        setTechnologyIndex({
            ...technologyIndex, [e.target.name]: e.target.value
        });
    }

    const submitTechnologyIndex = (e) => {
        e.preventDefault();
        const formData = new FormData();

        if (technologyIndex.heading_name == '' || technologyIndex.heading_description == '') {
            Swal.fire("Please fill up all inputs", '', 'error')

        }

        else {
            if(totalCount >=1){
                Swal.fire("You can't add One more", '', 'warning')

            }
            else{

            
            axios.post(`/add-technology-index`, technologyIndex).then(res => {
                if (res.data.status == 200) {
                    Swal.fire(res.data.message, '', 'success')

                    setTechnologyIndex({
                        heading_name: "",
                        heading_description: "",
                     
                    });
           
                }
                else if (res.data.status == 400) {
                    setTechnologyIndex({ ...technologyIndex, error_list: res.data.errors });

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
                                    <h6 className="card-title"> Add Technology Index
                                        <Link to={'/technology-index'} className="btn btn-primary btn-sm float-end"> Back </Link>
                                    </h6>
                                </div>
                                <div className="card-body">
                                    <form id="EarCanalForm" onSubmit={submitTechnologyIndex} >
                                        <div className="card-body">

                                            <div className="col-md-12">


                                                <div className="form-group">
                                                    <label htmlFor="history_name" className="col-form-label-sm"> Heading Name </label>
                                                    <input type="text" value={technologyIndex.heading_name} className="form-control" name="heading_name" onChange={handleInput} />
                                                    {/* <span className="text-danger">{heading.error_list.heading_name}</span> */}

                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="history_name" className="col-form-label-sm"> Description </label>
                                                    <textarea class="form-control" id="exampleFormControlTextarea1" value={technologyIndex.heading_description} name="heading_description" rows="3" onChange={handleInput} ></textarea>
                                                    {/* <span className="text-danger">{heading.error_list.heading_name}</span> */}

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

export default AddTechnologyIndex
