import axios from 'axios';
import MaterialTable from 'material-table';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

// import { ThemeProvider, createTheme } from '@mui/material';

import MasterDashboardLayout from '../../dashboard/MasterDashboardLayout';

function AllCandidateCv() {

    const [allCandidateCv, setAllCandidateCv] = useState([]);
    console.log('all cv checking',allCandidateCv)
    useEffect(() => {
        axios.get(`/all-candidate-cv`).then(res => {
            if (res.data.status == 200) {
                setAllCandidateCv(res.data.all_cv);
            }
        })

    }, [])

    const deleteCandidateCv = (e, id) => {

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
                axios.delete(`/delete-candidate-cv/${id}`).then(res => {
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
            title: "Name", field: `name`

            , cellStyle: {
                marginLeft: 50,
                width: 600
            },
        },
        {
            title: "Email", field: `email`

            , cellStyle: {
                marginLeft: 50,
                width: 600
            },
        },

        {
            title: "Phone", field: `phone`

            , cellStyle: {
                marginLeft: 50,
                width: 600
            },
        },
        {
            title: "Qualification", field: `highest_qualificiation`

            , cellStyle: {
                marginLeft: 50,
                width: 600
            },
        },
        {
            title: "Current Employeer", field: `current_employeer`

            , cellStyle: {
                marginLeft: 50,
                width: 600
            },
        },

        {
            title: "CV", field: `cv`,
            render: (row) => <div>
                <a href={`http://localhost:8000/job/cv/${row.cv}`}download target="_blank" className='text-black'> <i class="fa-1x fa fa-eye" aria-hidden="true"  width="55px" height="35px" alt="No Image"></i></a>

            </div>,


        },
       

        {
            title: "Action", field: "patient", render: (row) =>
                <div className='d-flex'>
                    <button onClick={(e) => deleteCandidateCv(e, row.id)} className="btn btn-danger btn-sm action-btn mx-1"> <i class="fas fa-trash"></i> </button>
                </div>
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
                                    <h6 className="card-title">All Candidate List
                                        {/* <Link to='/add-job-list' className="btn btn-primary btn-sm float-end"> Add Job</Link> */}
                                    </h6>
                                </div>
                                <div className="card-body">

                                    <MaterialTable
                                        columns={columns}
                                        data={allCandidateCv}
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
export default AllCandidateCv;


