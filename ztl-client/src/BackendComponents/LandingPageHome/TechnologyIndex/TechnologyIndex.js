import axios from 'axios';
import MaterialTable from 'material-table';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

// import { ThemeProvider, createTheme } from '@mui/material';

import MasterDashboardLayout from '../../../dashboard/MasterDashboardLayout';

function TechnologyIndex() {

    const [allTechnologyIndex, setAllTechnologyIndex] = useState([]);
    useEffect(() => {
        axios.get(`/technology-index`).then(res => {
            if (res.data.status == 200) {
                setAllTechnologyIndex(res.data.technology_index);
            }
        })

    }, [])

    const deleteTechnologyIndex = (e, id) => {

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
                axios.delete(`/delete-technology-index/${id}`).then(res => {
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
            title: "Heading Name", field: `heading_name`

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
            title: "Action", field: "patient", render: (row) => <div className='d-flex'><Link to={`/edit-technology-index/${row.id}`} class="btn btn-info btn-sm action-btn"><i class="fas fa-edit"></i></Link>
                <button onClick={(e) => deleteTechnologyIndex(e, row.id)} className="btn btn-danger btn-sm action-btn mx-1"> <i class="fas fa-trash"></i> </button></div>
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
                                    <h6 className="card-title">Technology Index
                                        <Link to='/add-technology-index' className="btn btn-primary btn-sm float-end"> Add Technology Index</Link>
                                    </h6>
                                </div>
                                <div className="card-body">

                                    <MaterialTable
                                        columns={columns}
                                        data={allTechnologyIndex}
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
export default TechnologyIndex;


