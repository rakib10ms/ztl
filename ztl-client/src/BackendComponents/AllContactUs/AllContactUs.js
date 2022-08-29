import axios from 'axios';
import MaterialTable from 'material-table';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

// import { ThemeProvider, createTheme } from '@mui/material';

import MasterDashboardLayout from '../../dashboard/MasterDashboardLayout';

function AllContactUS() {

    const [allContactUS, setAllContactUS] = useState([]);
    useEffect(() => {
        axios.get(`/all-contact-us`).then(res => {
            if (res.data.status == 200) {
                setAllContactUS(res.data.all_contacts);
            }
        })

    }, [])

    const deleteConsultant = (e, id) => {

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
                axios.delete(`/delete-all-consultant/${id}`).then(res => {
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
            title: "Message", field: `message`

            , cellStyle: {
                marginLeft: 50,
                width: 600
            },
        },

        {
            title: "Action", field: "patient", render: (row) =>
                <div className='d-flex'>
                    <button onClick={(e) => deleteConsultant(e, row.id)} className="btn btn-danger btn-sm action-btn mx-1"> <i class="fas fa-trash"></i> </button>
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
                                   
                                </div>
                                <div className="card-body">

                                    <MaterialTable
                                        columns={columns}
                                        data={allContactUS}
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
export default AllContactUS;


