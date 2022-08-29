import axios from 'axios';
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import JoditEditor from "jodit-react";
// import '../../imageUrl';
import MasterDashboardLayout from '../../../../dashboard/MasterDashboardLayout';
function EditOurWorldWideProject() {
  


    const [project, setproject] = useState({
        title: "",
        category: "",
 
    });


    const { id } = useParams();
    useEffect(() => {
        axios.get(`/edit-our-world-wide-project/${id}`).then(res => {
            if (res.data.status == 200) {
                console.log('resing',res.data)
                setproject({
                    title: res.data.projects.title,
                    category: res.data.projects.category,
    
                    // client_designation: res.data.project.client_designation,
                });
              
                setImage(res.data.projects.image);
            }
        })

    }, [])




    const [image, setImage] = useState('');
    console.log('image checking',image)
    console.log('image info', image.size)
    const [picture, setPicture] = useState('');

    const onChangePicture = e => {
        console.log('picture: ', picture);
        setPicture(URL.createObjectURL(e.target.files[0]));
        setImage(e.target.files[0]);
    };


    const handleInput = (e) => {
        setproject({
            ...project, [e.target.name]: e.target.value
        });
    }

    const updateproject = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', project.title);
        formData.append('category', project.category);
        formData.append('image', image);

        console.log('check all data', formData);

        if (project.title == '' || project.category == ''|| image == '') {
            Swal.fire("Please fill up all inputs", '', 'error')

        }
        else if (image.size > 524288) {
            Swal.fire("Image size must be less than 0.5 mb", '', 'error')

        }

        else {
            axios.post(`/update-our-world-wide-project/${id}`, formData).then(res => {
                if (res.data.status == 200) {
                    Swal.fire(res.data.message, '', 'success')

                    setproject({
                        title: "",
                        category: "",
                       
                    });
                    setImage('');
                    setPicture('');
                    document.getElementById('image').value = "";
                }
                else if (res.data.status == 400) {
                    setproject({ ...project, error_list: res.data.errors });

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
                                    <h6 className="card-title"> Edit World Wide Projects
                                        <Link to={'/our-world-wide-project'} className="btn btn-primary btn-sm float-end"> Back </Link>
                                    </h6>
                                </div>
                                <div className="card-body">
                                    <form id="EarCanalForm" onSubmit={updateproject} >
                                        <div className="card-body">

                                            <div className="col-md-12">
                                            <div className="form-group">
                                            <label htmlFor="history_name" className="col-form-label-sm"> Category</label>
                                                    <select class="form-select" aria-label="Default select example" value={project.category} name="category" onChange={handleInput} >
                                                    <option selected>Select Category</option>
                                                    <option value="E-Commerce">E-Commerce</option>
                                                    <option value="Healthcare">Healthcare</option>
                                                    <option value="Logistics">Logistics</option>
                                                    <option value="FinTech">FinTech</option>
                                                    <option value="Legal & Law">Legal & Law</option>
                                                    <option value="IoT">IoT</option>
                                                    <option value="Others">Others</option>
                                                   
                                                    </select>
                                                </div>


                                                <div className="form-group">
                                                    <label htmlFor="history_name" className="col-form-label-sm"> Project Tittle </label>
                                                    <input type="text" value={project.title} className="form-control" name="title" onChange={handleInput} />
                                                    {/* <span className="text-danger">{heading.error_list.title}</span> */}

                                                </div>

                            






                                                <div className="form-group">
                                                    <label htmlFor="history_name" className="col-form-label-sm"> Image </label>
                                                    {/* <input type="file" value={project.client_image} className="form-control" name="client_image" onChange={(e) => { setImage(e.target.files[0]) }} /> */}
                                                    <input type="file" className="form-control" id="image" name="image" onChange={onChangePicture} />
                                                    {/* <span className="text-danger">{heading.error_list.title}</span> */}

                                                </div>
                        
                                                    {
                                                    picture == '' ? <div className="form-group" style={{ width: '100px', height: '90px' }}>
                                                        <img className="playerProfilePic_home_tile" src={`${global.img_url}/images/projects/${image}`} style={{ width: '100px', height: '90px' }}></img>
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

export default EditOurWorldWideProject
