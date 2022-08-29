import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
// import EntSetupSidebar from '../ent_setup_mainsidebar/EntSetupSidebar';
import MasterDashboardLayout from '../../../dashboard/MasterDashboardLayout';

function AddHeading() {

    const [heading, setHeading] = useState({
        heading_name: "",
        heading_description: "",
    });

    const [image, setImage] = useState('');
    // const [picture, setPicture] = useState('');

    // const onChangePicture = e => {
    //     console.log('picture: ', picture);
    //     setPicture(URL.createObjectURL(e.target.files[0]));
    // };


    const [totalHeadingCount, setTotalHeadingCount] = useState('');
    console.log('checking total', totalHeadingCount)
    useEffect(() => {
        axios.get(`/heading`).then(res => {
            if (res.data.status == 200) {
                setTotalHeadingCount(res.data.heading_count);
            }
        })
    }, [totalHeadingCount])


    const handleInput = (e) => {
        setHeading({
            ...heading, [e.target.name]: e.target.value
        });
    }

    const submitHeading = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('heading_name', heading.heading_name);
        formData.append('heading_description', heading.heading_description);
        formData.append('image', image);

        if (totalHeadingCount <= 0) {
            axios.post(`add-heading`, formData).then(res => {
                setTotalHeadingCount(res.data.count)
                if (res.data.status == 200) {
                    Swal.fire(res.data.message, '', 'success')
                    setHeading({
                        heading_name: "",
                        heading_description: "",
                        error_list: [],

                    });

                }

                else if (res.data.status == 400) {
                    setHeading({ ...heading, error_list: res.data.errors });

                }

            })

        }
        if (totalHeadingCount > 0) {
            Swal.fire("You can't add One more", '', 'warning')

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
                                    <h6 className="card-title"> Add Heading
                                        <Link to={'/heading'} className="btn btn-primary btn-sm float-end"> Back </Link>
                                    </h6>
                                </div>
                                <div className="card-body">
                                    <form id="EarCanalForm" onSubmit={submitHeading} >
                                        <div className="card-body">

                                            <div className="col-md-12">


                                                <div className="form-group">
                                                    <label htmlFor="history_name" className="col-form-label-sm"> Heading Name </label>
                                                    <input type="text" value={heading.heading_name} className="form-control" name="heading_name" onChange={handleInput} />
                                                    {/* <span className="text-danger">{heading.error_list.heading_name}</span> */}

                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="history_name" className="col-form-label-sm"> Description </label>
                                                    <textarea class="form-control" id="exampleFormControlTextarea1" value={heading.heading_description} name="heading_description" rows="3" onChange={handleInput} ></textarea>
                                                    {/* <span className="text-danger">{heading.error_list.heading_name}</span> */}

                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="history_name" className="col-form-label-sm"> Image </label>
                                                    <input type="file" value={heading.image} className="form-control" name="image" onChange={(e) => { setImage(e.target.files[0]) }} />
                                                    {/* <span className="text-danger">{heading.error_list.heading_name}</span> */}

                                                </div>

                                                {/* <div className="form-group" style={{width:'100px',height:'90px'}}>
                                                    <i className='fa fa-close text-danger float-right'></i>
                                                    <img className="playerProfilePic_home_tile" src={picture} style={{width:'100px',height:'90px'}}></img>
                                                </div> */}




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

export default AddHeading
