import axios from 'axios';
import MaterialTable from 'material-table';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import '../../imageUrl';

// import { ThemeProvider, createTheme } from '@mui/material';

import MasterDashboardLayout from '../../dashboard/MasterDashboardLayout';

function JobDescription() {

    const [allJobDescription, setAllJobDescription] = useState([]);
    console.log('ress',allJobDescription)
    useEffect(() => {
        axios.get(`/job-description`).then(res => {
            if (res.data.status == 200) {
                setAllJobDescription(res.data.jobDescription);
            }
        })

    }, [])
    const deleteJobDescription = (e, id) => {

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
                axios.delete(`/delete-job-description/${id}`).then(res => {
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
            title: "Job Id", field: `job_id`

            , cellStyle: {
                marginLeft: 50,
                width: 600
            },
        },
        {
            title: "Job Tittle", field: `job_tittle`

            , cellStyle: {
                marginLeft: 50,
                width: 600
            },
        },
        {
            title: "Qualification", field: `qualification`

            , cellStyle: {
                marginLeft: 50,
                width: 600
            },
        },
        {
            title: "Requirements", field: `job_requirements`,
            render:(row)=> <div dangerouslySetInnerHTML={{__html:row.job_requirements}}/>

            , cellStyle: {
                marginLeft: 50,
                width: 600
            },
        },
    

  
        {
            title: "Responsibilites", field: `job_responsibilites`,
            render:(row)=> <div dangerouslySetInnerHTML={{__html:row.job_responsibilites}}/>

            , cellStyle: {
                marginLeft: 50,
                width: 600
            },
        },
    
        {
            title: "Job Logo", field: `job_post_logo`,
            render: (row) => <div>
                <img className="" src={`${global.img_url}/images/job_list/${row.job_post_logo}`} width="55px" height="35px" alt="No Image" />
            </div>,

           
        },

        {
            title: "Action", field: "patient", render: (row) => <div className='d-flex'><Link to={`/edit-job-description/${row.id}`} class="btn btn-info btn-sm action-btn"><i class="fas fa-edit"></i></Link>
                <button onClick={(e) => deleteJobDescription(e, row.id)} className="btn btn-danger btn-sm action-btn mx-1"> <i class="fas fa-trash"></i> </button></div>
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
                                    <h6 className="card-title">Job Description
                                        <Link to='/add-job-description' className="btn btn-primary btn-sm float-end"> Add </Link>
                                    </h6>
                                </div>
                                <div className="card-body">

                                    <MaterialTable
                                        columns={columns}
                                        data={allJobDescription}
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
export default JobDescription;


