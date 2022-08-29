import axios from 'axios';
import MaterialTable from 'material-table';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import MasterDashboardLayout from '../../dashboard/MasterDashboardLayout';

// import { ThemeProvider, createTheme } from '@mui/material';

function Counter() {

    const [allCounter, setallCounter] = useState([]);
    useEffect(() => {
        axios.get(`/counter`).then(res => {
            if (res.data.status == 200) {
                setallCounter(res.data.counter);
            }
        })

    }, [])

    const deleteFaq = (e, id) => {

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
                axios.delete(`/delete-counter/${id}`).then(res => {
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
            title: "Total Countries", field: `total_countries`

            , cellStyle: {
                marginLeft: 50,
                width: 600
            },
        },
        {
            title: "Total Clients", field: `total_clients`

            , cellStyle: {
                marginLeft: 50,
                width: 600
            },
        },
        {
            title: "Total Projects", field: `total_projects`

            , cellStyle: {
                marginLeft: 50,
                width: 600
            },
        },
       
        {
            title: "Action", field: "patient", render: (row) => <div className='d-flex'><Link to={`/edit-counter/${row.id}`} class="btn btn-info btn-sm action-btn"><i class="fas fa-edit"></i></Link>
                <button onClick={(e) => deleteFaq(e, row.id)} className="btn btn-danger btn-sm action-btn mx-1"> <i class="fas fa-trash"></i> </button></div>
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
                                    <h6 className="card-title">Counter Section
                                        <Link to='/add-counter' className="btn btn-primary btn-sm float-end"> Add Counter</Link>
                                    </h6>
                                </div>
                                <div className="card-body">

                                    <MaterialTable
                                        columns={columns}
                                        data={allCounter}
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
export default Counter;


