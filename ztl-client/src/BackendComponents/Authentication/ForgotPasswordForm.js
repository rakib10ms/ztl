import axios, { AxiosError } from 'axios';
import MaterialTable from 'material-table';
import React, { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
function ForgotPasswordForm() {
    const navigate = useNavigate();
    const [forgotPass, setforgotPass] = useState({
        email: '',  
        user_type: 'user'
    })
    const handleInput = (e) => {
        setforgotPass({
            ...forgotPass, [e.target.name]: e.target.value
        })

    }
const [resStatus,setResStatus]=useState('');
console.log('as',resStatus)

    useEffect(()=>{

    },[resStatus])
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('state checking', forgotPass)

        // axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post('/forgot-password', forgotPass).then(res => {
            setResStatus(res.data.message)

            if (res.data.status == 200) {
             
                // Swal.fire(res.data.message, '', 'success')

            }
            else if (res.data.status == 400) {
                // Swal.fire(res.data.message, '', 'warning')

            }
            // else {
            //     Swal.fire('Invalid Credentials', '', 'warning')

            // }

            setforgotPass({
                email: '',
                user_type: 'user'
            })
        })
        // });
    }
    return (
        <div class="container">
            <div class="row justify-content-center p-5">

                <div class="col-xl-6 col-lg-6 col-md-6">

                    <div class="card o-hidden border-0 shadow-lg my-5">
                        <div class="card-body p-0">
                            <div class="row ">
                                {/* <div class="col-lg-6 d-none d-lg-block bg-password-image"></div> */}
                                <div class="col-lg-12 mx-auto">
                                    <div class="p-5">
                                        <div class="text-center">
                                            <h1 class="h4 text-gray-900 mb-2">Forgot Your Password?</h1>
                                            <p class="mb-4">We get it, stuff happens. Just enter your email address below
                                                and we'll send you a link to reset your password!</p>
                                        </div>
                                        <form class="user" onSubmit={handleSubmit}>
                                            <div class="form-group">
                                                <input type="email" class="form-control form-control-user" id="exampleInputEmail" value={forgotPass.email} aria-describedby="emailHelp" name='email' onChange={handleInput} placeholder="Enter Email Address..." />
                                            </div>
                                            {
                                                resStatus && 
                                                <div class="alert alert-warning" role="alert">
                                                {resStatus}
                                              </div>
                                            }
                                            <button type='submit' class="btn btn-warning btn-user btn-block">
                                                Reset Password
                                            </button>
                                        </form>
                                        <hr />
                                     
                                        <div class="text-center">
                                            <Link class="small" to="/user-login">Already have an account? Login!</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )

}


export default ForgotPasswordForm;