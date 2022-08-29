import axios from 'axios';
import MaterialTable from 'material-table';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import '../../../imageUrl';
// import { ThemeProvider, createTheme } from '@mui/material';

import MasterDashboardLayout from '../../../dashboard/MasterDashboardLayout';
function WebDevelopmentFaqImage() {


    const [allFaqImage, setAllFaqImage] = useState([]);
    useEffect(() => {
        axios.get(`/web-development-faq-image`).then(res => {
            if (res.data.status == 200) {
                setAllFaqImage(res.data.faq_image);
            }
        })

    }, [])

    const deleteFaqImage = (e, id) => {

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
                axios.delete(`/delete-web-development-faq-image/${id}`).then(res => {
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
            title: "Faq Image", field: `image`,
            render: (row) => <div>
                <img className="" src={`${global.img_url}/images/our_partners/${row.image}`} width="55px" height="35px" alt="No Image" />
            </div>,


        },

        {
            title: "Action", field: "patient", render: (row) => <div className='d-flex'><Link to={`/edit-web-development-faq-image/${row.id}`} class="btn btn-info btn-sm action-btn"><i class="fas fa-edit"></i></Link>
                <button onClick={(e) => deleteFaqImage(e, row.id)} className="btn btn-danger btn-sm action-btn mx-1"> <i class="fas fa-trash"></i> </button></div>
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
                                    <h6 className="card-title">Faq Image
                                        <Link to='/add-web-development-faq-image' className="btn btn-primary btn-sm float-end"> Add Faq Image</Link>
                                    </h6>
                                </div>
                                <div className="card-body">

                                    <MaterialTable
                                        columns={columns}
                                        data={allFaqImage}
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
export default WebDevelopmentFaqImage;


