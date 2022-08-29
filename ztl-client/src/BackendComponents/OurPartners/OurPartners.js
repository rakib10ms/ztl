import axios from 'axios';
import MaterialTable from 'material-table';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import '../../imageUrl';
// import { ThemeProvider, createTheme } from '@mui/material';

import MasterDashboardLayout from '../../dashboard/MasterDashboardLayout';


function OurPartners() {

    const [ourPartner, setOurPartner] = useState([]);
    console.log('our partner check',ourPartner)

    useEffect(() => {
        axios.get(`/our-partners`).then(res => {
            if (res.data.status === 200) {
                console.log(res.data.our_partner);
                setOurPartner(res.data.our_partner);
            }

        });

    }, []);


    const deleteOurPartner = (e, id) => {

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
                axios.delete(`/delete-our-partners/${id}`).then(res => {
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
            title: "Image", field: `image`, render: (row) => <div>
                {row.image !== "" ? <img className="me-2" src={`${global.img_url}/images/our_partners/${row.image}`} width="55px" height="35px"alt="No Image" /> : <img className="me-2" src={`https://static.thenounproject.com/png/363640-200.png`} width="20px" alt="No Image" />}                 </div>

            , cellStyle: {
                marginLeft: 50,
                width: 600
            },
        },

        {
            title: "Action", field: "patient", render: (row) => <div><Link to={`/edit-our-partners/${row.id}`} class="btn btn-info btn-sm action-btn"><i class="fas fa-edit"></i></Link>&nbsp;
                <button onClick={(e) => deleteOurPartner(e, row.id)} className="btn btn-danger btn-sm action-btn"> <i class="fas fa-trash"></i> </button></div>
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
                                <h6 className="card-title">Our Partners
                                    <Link to='/add-our-partners' className="btn btn-primary btn-sm float-end"> Add  </Link>
                                </h6>
                            </div>
                            <div className="card-body">

                                <MaterialTable
                                    columns={columns}
                                    data={ourPartner}
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































    // const [allPartners, setAllPartners] = useState([]);
    // useEffect(() => {
    //     axios.get(`/our-partners`).then(res => {
    //         if (res.data.status == 200) {
    //             setAllPartners(res.data.our_partners);
    //         }
    //     })

    // }, [])

    // const deletePartnerLogo = (e, id) => {

    //     e.preventDefault();
    //     const thisClicked = e.currentTarget;
    //     //  thisClicked.innerText = "Deleting";

    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             axios.delete(`/delete-our-partners/${id}`).then(res => {
    //                 if (res.data.status === 200) {
    //                     thisClicked.closest("tr").remove();
    //                     //   swal("Success", res.data.message, "success");
    //                 }
    //             });
    //             Swal.fire(
    //                 'Deleted!',
    //                 'Your data has been deleted.',
    //                 'success'
    //             )
    //         }
    //     })


    // }



    // const columns = [
    //     {
    //         title: "SL", field: "", render: (row) => <div>{row.tableData.id + 1}</div>,

    //         width: "40 !important"
    //     },
   
    //     {
    //         title: "Our Partner Logo", field: `our_partner_logo`,
    //         render: (row) => <div>
    //             <img className="" src={`http://localhost:8000/images/our_partners/${row.our_partner_logo}`} width="55px" height="35px" alt="No Image" />
    //         </div>,

           
    //     },

    //     {
    //         title: "Action", field: "patient", render: (row) => <div className='d-flex'><Link to={`/edit-job-list/${row.id}`} class="btn btn-info btn-sm action-btn"><i class="fas fa-edit"></i></Link>
    //             <button onClick={(e) => deletePartnerLogo(e, row.id)} className="btn btn-danger btn-sm action-btn mx-1"> <i class="fas fa-trash"></i> </button></div>
    //     },
    // ];

    // return (
    //     <>
    //         <MasterDashboardLayout>
    //             <div className='container-fluid'>
    //                 <div className="row">

    //                     <div className="col-md-12 mt-3">
    //                         <div className="card">
    //                             <div className="card-header">
    //                                 <h6 className="card-title">Our Partners
    //                                     <Link to='/add-our-partners' className="btn btn-primary btn-sm float-end"> Add Partner Logo</Link>
    //                                 </h6>
    //                             </div>
    //                             <div className="card-body">

    //                                 <MaterialTable
    //                                     columns={columns}
    //                                     data={allPartners}
    //                                     options={{
    //                                         search: true,
    //                                         // filtering: filter,
    //                                         showTitle: false,
    //                                         searchFieldAlignment: "left",
    //                                         pageSize: 5,
    //                                         emptyRowsWhenPaging: false,
    //                                         pageSizeOptions: [5, 10, 20, 50, 100]
    //                                     }}

    //                                 />
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>            </div>
    //         </MasterDashboardLayout>

    //     </>
    // )

}
export default OurPartners;


