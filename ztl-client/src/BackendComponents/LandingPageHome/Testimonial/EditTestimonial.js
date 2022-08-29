import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams ,useNavigate} from "react-router-dom";
import Swal from 'sweetalert2';
import MasterDashboardLayout from '../../../dashboard/MasterDashboardLayout';
import '../../../imageUrl';
function EditTestimonial() {
    const [testimonial, setTestimonial] = useState({
        heading_name: "",
        heading_description: "",
        client_name: "",
        client_company_name: "",
        client_designation: "",
    });

    const navigate=useNavigate();

    const [image, setImage] = useState('');
    console.log('image checking',image);

    const [picture, setPicture] = useState('');

    const onChangePicture = e => {
        console.log('picture: ', picture);
        setPicture(URL.createObjectURL(e.target.files[0]));
        setImage(e.target.files[0]);

    };


    const handleInput = (e) => {
        e.persist();

        setTestimonial({
            ...testimonial, [e.target.name]: e.target.value
        });
    }

    const { id } = useParams();
    useEffect(() => {
        axios.get(`/edit-testimonial/${id}`).then(res => {
            if (res.data.status == 200) {
                setTestimonial({
                    heading_name: res.data.testimonial.heading_name,
                    heading_description: res.data.testimonial.heading_description,
                    client_name: res.data.testimonial.client_name,
                    client_company_name: res.data.testimonial.client_company_name,
                    client_designation: res.data.testimonial.client_designation,
                });
                // setPicture(res.data.testimonial.client_image);
                setImage(res.data.testimonial.client_image);
            }
        })

    }, [])

    
    const formData = new FormData();

    formData.append('heading_name', testimonial.heading_name);
    formData.append('heading_description', testimonial.heading_description);
    formData.append('client_name', testimonial.client_name);
    formData.append('client_company_name', testimonial.client_company_name);
    formData.append('client_designation', testimonial.client_designation);
    formData.append('client_image', image);

    const updateTestimonial = (e) => {
        e.preventDefault();

        // console.log('updated data check',testimonial)
        // const formData = new FormData();
        // formData.append('heading_name', testimonial.heading_name);
        // formData.append('heading_description', testimonial.heading_description);
        // formData.append('client_name', testimonial.client_name);
        // formData.append('client_company_name', testimonial.client_company_name);
        // formData.append('client_designation', testimonial.client_designation);
        // formData.append('client_image', image);
        // console.log('form daa',formData.get('client_image'))

        // const data={
        //     heading_name:testimonial.heading_name,
        //     heading_description:testimonial.heading_description,
        //     client_name:testimonial.client_name,
        //     client_company_name:testimonial.client_company_name,
        //     client_designation:testimonial.client_designation,
        //     client_image:formData.get('client_image')
        // }
     
        if (testimonial.client_company_name == '' || testimonial.client_designation == '' || testimonial.client_name == '' || testimonial.heading_name == '' || testimonial.heading_description == '') {
            Swal.fire("Please fill up all inputs", '', 'error')

        }
        else if (image.size > 524288) {
            Swal.fire("Image size must be less than 0.5 mb", '', 'error')

        }

        else {
            axios.post(`/update-testimonial/${id}`, formData).then(res => {
                if (res.data.status == 200) {
                    Swal.fire(res.data.message, '', 'success')

                    setTestimonial({
                        heading_name: "",
                        heading_description: "",
                        client_name: "",
                        client_company_name: "",
                        client_designation: "",
                    });
                    setImage('');
                    setPicture('');
                    document.getElementById('client_image').value="";
                    navigate('/testimonial');


                }
                else if (res.data.status == 400) {
                    setTestimonial({ ...testimonial, error_list: res.data.errors });

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
                                    <h6 className="card-title"> Edit Testimonial
                                        <Link to={'/testimonial'} className="btn btn-primary btn-sm float-end"> Back </Link>
                                    </h6>
                                </div>
                                <div className="card-body">
                                    <form id="EarCanalForm" onSubmit={updateTestimonial} encType="multipart/form-data" >
                                        <div className="card-body">

                                            <div className="col-md-12">


                                                <div className="form-group">
                                                    <label htmlFor="history_name" className="col-form-label-sm"> Quotation Name</label>
                                                    <input type="text" value={testimonial.heading_name} className="form-control" name="heading_name" onChange={handleInput} />
                                                    {/* <span className="text-danger">{heading.error_list.heading_name}</span> */}

                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="history_name" className="col-form-label-sm"> Short Description </label>
                                                    <textarea class="form-control" id="exampleFormControlTextarea1" value={testimonial.heading_description} name="heading_description" rows="3" onChange={handleInput} ></textarea>
                                                    {/* <span className="text-danger">{heading.error_list.heading_name}</span> */}

                                                </div>


                                                <div className="form-group">
                                                    <label htmlFor="history_name" className="col-form-label-sm"> Client Name</label>
                                                    <input type="text" value={testimonial.client_name} className="form-control" name="client_name" onChange={handleInput} />
                                                    {/* <span className="text-danger">{heading.error_list.heading_name}</span> */}

                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="history_name" className="col-form-label-sm"> Client Company Name </label>
                                                    <input type="text" value={testimonial.client_company_name} className="form-control" name="client_company_name" onChange={handleInput} />
                                                    {/* <span className="text-danger">{heading.error_list.heading_name}</span> */}

                                                </div>


                                                <div className="form-group">
                                                    <label htmlFor="history_name" className="col-form-label-sm"> Client Designation </label>
                                                    <input type="text" value={testimonial.client_designation} className="form-control" name="client_designation" onChange={handleInput} />
                                                    {/* <span className="text-danger">{heading.error_list.heading_name}</span> */}

                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="history_name" className="col-form-label-sm"> Client Image </label>
                                                    {/* <input type="file" value={testimonial.client_image} className="form-control" name="client_image" onChange={(e) => { setImage(e.target.files[0]) }} /> */}
                                                    <input type="file" id="client_image" className="form-control" name="client_image" onChange={onChangePicture} />
                                                    {/* <span className="text-danger">{heading.error_list.heading_name}</span> */}

                                                </div>
                                                {
                                                    picture == '' ? <div className="form-group" style={{ width: '100px', height: '90px' }}>
                                                        <img className="playerProfilePic_home_tile" src={`${global.img_url}/landing/testimonial/${image}`} style={{ width: '100px', height: '90px' }}></img>
                                                    </div>
                                                        :
                                                        <div className="form-group" style={{ width: '100px', height: '90px' }}>
                                                            <img className="playerProfilePic_home_tile" src={picture} style={{ width: '100px', height: '90px' }}></img>
                                                        </div>

                                                }



                                                {
                                                    image.size > 524288 && <div className='text-danger mt-4'>Image Size Must be less than 0.5 Mb </div>
                                                }




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

export default EditTestimonial
