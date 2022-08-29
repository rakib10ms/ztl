import axios, { AxiosError } from 'axios';
import MaterialTable from 'material-table';
import React, { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import DashboardFooter from '../../dashboard/Footer';
import DashboardHeader from '../../dashboard/DashboardHeader';
function UserLogin() {

    const navigate = useNavigate();

    const [loginInput, setLoginInput] = useState({
        email: '',
        password: ''
    })
    const handleChange = (e) => {
        setLoginInput({
            ...loginInput, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('state checking', loginInput)

        // axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post('/login', loginInput).then(res => {
            if (res.data.status == 200) {
                let user_auth={
                    name:res.data.username,
                    user_type:res.data.user_type,
                    token:res.data.token,
                    email:res.data.email
                }
                localStorage.setItem('auth_token',res.data.token);
                localStorage.setItem('username',res.data.username);
                localStorage.setItem('email',res.data.email);
                localStorage.setItem('user_type',res.data.user_type);

                if (res.data.user_type=== 'user') {

                    navigate('/')
                }
        

                // window.location.reload();

                // Swal.fire('Logged in successfully', '', 'success')

            }
            else if (res.data.status == 401) {
                Swal.fire(res.data.message, '', 'warning')

            }
            else {
                Swal.fire('Invalid Credentials', '', 'warning')

            }
        })
        // });
    }
    return (
        <div class="container">

            <div class="row justify-content-center">

                <div class="col-xl-10 col-lg-12 col-md-9">

                    <div class="card o-hidden border-0 shadow-lg my-5">
                        <div class="card-body p-0">
                            <div class="row">
                                {/* <div class="col-lg-6 d-none d-lg-block bg-login-image">
                                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbt8O9agjgkIDcPpF2AkAA5EJY2Vsf7WZxFY3sLaodBpSUHmJXrE8g2bxI8tpn6Uudj7M&usqp=CAU'/>
                                </div> */}

                                <div class="col-lg-6 d-none d-lg-block  ">
                                    <img src='https://imgs.bharatmatrimony.com/bmimgs/login/login-otp-banner.png' className='' />
                                </div>
                                <div class="col-lg-6">
                                    <div class="p-5">
                                        <div class="text-center">
                                            <h1 class="h4 text-gray-900 mb-4">Welcome to Login !</h1>
                                        </div>
                                        <form class="user" onSubmit={handleSubmit}>
                                            <div class="form-group">
                                                <input type="email" class="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." name='email' onChange={handleChange} />
                                            </div>
                                            <div class="form-group">
                                                <input type="password" class="form-control form-control-user" id="exampleInputPassword" placeholder="Password" name='password' onChange={handleChange} />
                                            </div>
                                            <div class="form-group">
                                                <div class="custom-control custom-checkbox small">
                                                    <input type="checkbox" class="custom-control-input" id="customCheck" />
                                                    <label class="custom-control-label" for="customCheck">Remember
                                                        Me</label>
                                                </div>
                                            </div>
                                            <button type='submit' class="btn btn-warning btn-user btn-block">
                                                Login
                                            </button>
                                            {/* <Link to='/user-registration' class="btn btn-outline-secondary btn-user btn-block">
                                                Register
                                            </Link> */}
                                            {/* <hr/>
                                                <a href="index.html" class="btn btn-google btn-user btn-block">
                                                    <i class="fab fa-google fa-fw"></i> Login with Google
                                                </a>
                                                <a href="index.html" class="btn btn-facebook btn-user btn-block">
                                                    <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                                </a> */}
                                        </form>
                                        <hr />
                                        <div class="text-center">
                                                <Link class="small" to="/forgot-password">Forgot Password?</Link>
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

export default UserLogin;