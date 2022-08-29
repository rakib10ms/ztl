import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

import MasterDashboardLayout from '../../../dashboard/MasterDashboardLayout';

function AddKeyWebTechnologies() {

    const [keyWeb, setkeyWeb] = useState({
        short_description: "",
    });

    // const [wordLenghthHigher,setWordLengthHigher]=useState(false);
    // const[dynamicText,setDyanmicText]=useState('');
    // console.log('dynamic',dynamicText)

    // useEffect(()=>{
    //         var datas= keyWeb.short_description.split(' ')
    //           .filter(function(n) { return n != '' })
    //           .length>2;
    //         //   return datas;
        
        
    //     setWordLengthHigher(datas);
    //     if(wordLenghthHigher){
    //         setDyanmicText("Word Length Is more plz reduce")
    //     }
    //     else{
    //         setDyanmicText('')
    //     }

    // },[keyWeb.short_description])



    const [totalCount, setTotalCount] = useState('');
    console.log('checking total', totalCount)
    useEffect(() => {
        axios.get(`/key-web-technologies`).then(res => {
            if (res.data.status == 200) {
                setTotalCount(res.data.count);
            }
        })
    }, [totalCount])

    const handleInput = (e) => {
        setkeyWeb({
            ...keyWeb, [e.target.name]: e.target.value
        });
    }

    const submitkeyWeb = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('short_description', keyWeb.short_description);

        if (keyWeb.short_description == ''  ) {
            Swal.fire("Please fill up all inputs", '', 'error')

        }

        if(totalCount>=1){
            Swal.fire("You can't add One more", '', 'warning')

        }
         if(totalCount<=0){
                axios.post(`/add-key-web-technologies`, keyWeb).then(res => {
                    if (res.data.status == 200) {
                        setTotalCount(res.data.count)
                        Swal.fire(res.data.message, '', 'success')
    
                        setkeyWeb({
                            short_description: "",
                        });
                  
                    }
                    else if (res.data.status == 400) {
                        setkeyWeb({ ...keyWeb, error_list: res.data.errors });
    
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
                                    <h6 className="card-title"> Add Key Technologies
                                        <Link to={'/key-web-technologies'} className="btn btn-primary btn-sm float-end"> Back </Link>
                                    </h6>
                                </div>
                                <div className="card-body">
                                    <form id="EarCanalForm" onSubmit={submitkeyWeb} >
                                        <div className="card-body">

                                            <div className="col-md-12">
                            
                                                <div className="form-group">
                                                    <label htmlFor="history_name" className="col-form-label-sm"> Short Description </label>
                                                    <textarea class="form-control" id="exampleFormControlTextarea1" value={keyWeb.short_description} name="short_description" rows="3" onChange={handleInput} ></textarea>
                                                    {/* <span className="text-danger">{dynamicText}</span> */}

                                                </div>


                                                <div className="float-right">
                                                    <button type="submit" className="btn btn-sm btn-primary text-uppercase float-end mt-2"><i
                                                        className="fas fa-save"></i> Save
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

export default AddKeyWebTechnologies




