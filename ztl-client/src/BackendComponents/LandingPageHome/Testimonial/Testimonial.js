import axios from 'axios';
import MaterialTable from 'material-table';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import '../../../imageUrl';

// import { ThemeProvider, createTheme } from '@mui/material';

import MasterDashboardLayout from '../../../dashboard/MasterDashboardLayout';

function Testimonail() {

    const [allTestimonial, setAllTestimonial] = useState([]);
    useEffect(() => {
        axios.get(`/testimonial`).then(res => {
            if (res.data.status == 200) {
                setAllTestimonial(res.data.testimonial);
            }
        })

    }, [])

    const deleteTestimonial = (e, id) => {

        e.preventDefault();
        const thisClicked = e.currentTarget;
        //  thisClicked.innerText = "Deleting";

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`/delete-testimonial/${id}`).then(res => {
                    if (res.data.status === 200) {
                        thisClicked.closest("tr").remove();
                        //   swal("Success", res.data.message, "success");
                    }
                });
                Swal.fire(
                    'Deleted!',
                    'Your data has been deleted.',
                    'success'
                )
            }
        })


    }



    const columns = [
        {
            title: "SL", field: "", render: (row) => <div>{row.tableData.id + 1}</div>,

            width: "40 !important"
        },
        {
            title: "Quotation Name", field: `heading_name`

            , cellStyle: {
                marginLeft: 50,
                width: 600
            },
        },
        {
            title: "Description", field: `heading_description`

            , cellStyle: {
                marginLeft: 50,
                width: 600
            },
        },
        {
            title: "Client", field: `client_name`

            , cellStyle: {
                marginLeft: 50,
                width: 600
            },
        },

        {
            title: "Company", field: `client_company_name`

            , cellStyle: {
                marginLeft: 50,
                width: 600
            },
        },
        {
            title: "Designation", field: `client_designation`

            , cellStyle: {
                marginLeft: 50,
                width: 600
            },
        },
        {
            title: "Image", field: `client_image`,
            render: (row) => <div>
                <img className="" src={`${global.img_url}/landing/testimonial/${row.client_image}` || `https://dev.zaimahtech.com/ztl-server/landing/testimonial/${row.image}`} width="55px" height="35px" alt="No Image" />
            </div>,

           
        },

        {
            title: "Action", field: "patient", render: (row) => <div className='d-flex'><Link to={`/edit-testimonial/${row.id}`} class="btn btn-info btn-sm action-btn"><i class="fas fa-edit"></i></Link>
                <button onClick={(e) => deleteTestimonial(e, row.id)} className="btn btn-danger btn-sm action-btn mx-1"> <i class="fas fa-trash"></i> </button></div>
        },
    ];

    return (
        <>
            <MasterDashboardLayout>
                <div className='container-fluid'>
                    <div className="row">

                        <div className="col-md-12 mt-3">
                            <div className="card">
                                <div className="card-header">
                                    <h6 className="card-title">Testimonials
                                        <Link to='/add-testimonial' className="btn btn-primary btn-sm float-end"> Add Testimonial</Link>
                                    </h6>
                                </div>
                                <div className="card-body">

                                    <MaterialTable
                                        columns={columns}
                                        data={allTestimonial}
                                        options={{
                                            search: true,
                                            // filtering: filter,
                                            showTitle: false,
                                            searchFieldAlignment: "left",
                                            pageSize: 5,
                                            emptyRowsWhenPaging: false,
                                            pageSizeOptions: [5, 10, 20, 50, 100]
                                        }}

                                    />
                                </div>
                            </div>
                        </div>
                    </div>            </div>
            </MasterDashboardLayout>

        </>
    )

}
export default Testimonail;


