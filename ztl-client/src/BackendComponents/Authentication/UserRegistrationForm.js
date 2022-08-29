import axios, { AxiosError } from 'axios';
import MaterialTable from 'material-table';
import React, { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
function UserRegistrationForm() {
    const navigate = useNavigate();
    const [RegisterInput, setRegisterInput] = useState({
        name: '',
        phone:"",
        email: '',
        password: '',
        re_password: '',
        user_type:'user'
    })
    const handleInput = (e) => {
        setRegisterInput({
            ...RegisterInput, [e.target.name]: e.target.value
        })
     
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('state checking', RegisterInput)

        // axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post('/save-user-register', RegisterInput).then(res => {
            if (res.data.status == 200) {
                // localStorage.setItem('auth_token', res.data.token);
                // localStorage.setItem('auth_name', res.data.username);
                navigate('/user-login')
                // window.location.reload();

                Swal.fire('Registration successfull', '', 'success')

            }
            // else if (res.data.status == 401) {
            //     Swal.fire(res.data.message, '', 'warning')

            // }
            // else {
            //     Swal.fire('Invalid Credentials', '', 'warning')

            // }

            setRegisterInput({
                name: '',
                phone:"",
                email: '',
                password: '',
                re_password: '',
                user_type:'user'
            })
        })
        // });
    }
    return (
        <div class="container">

            <div class="card o-hidden border-0 shadow-lg my-5">
                <div class="card-body p-0">
                    <div class="row">
                    {/* <div class="col-lg-5 d-none d-lg-block bg-register-image"></div> */}
                    <div class="col-lg-5 d-none d-lg-block ">
                    <img src='https://static.vecteezy.com/system/resources/thumbnails/006/552/114/small_2x/isometric-style-illustration-of-login-to-website-free-vector.jpg' className='mt-5' />

                    </div>
                        <div class="col-lg-7">
                            <div class="p-5">
                                <div class="text-center">
                                    <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                                </div>
                                <form class="user" onSubmit={handleSubmit}>
                                    <div class="form-group row">
                                        <div class="col-sm-6 mb-3 mb-sm-0">
                                            <input type="text" class="form-control form-control-user" id="exampleFirstName" placeholder=" Name" name="name" value={RegisterInput.name} onChange={handleInput}/>
                                        </div>
                                        <div class="col-sm-6">
                                            <input type="text" class="form-control form-control-user" id="exampleLastName" placeholder="Phone"
                                            name="phone" value={RegisterInput.phone} onChange={handleInput} />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-control form-control-user" id="exampleInputEmail" placeholder="Email Address" name="email" value={RegisterInput.email} onChange={handleInput}/>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-sm-6 mb-3 mb-sm-0">
                                            <input type="password" class="form-control form-control-user" id="exampleInputPassword" placeholder="Password" value={RegisterInput.password} aria-autocomplete="list" name="password" onChange={handleInput} />
                                        </div>
                                        <div class="col-sm-6">
                                            <input type="password" class="form-control form-control-user" id="exampleRepeatPassword" placeholder="Repeat Password" value={RegisterInput.re_password} name="re_password" onChange={handleInput} />
                                        </div>
                                    </div>
                                    <button type='submit'  class="btn btn-warning btn-user btn-block">
                                        Register Account
                                    </button>
                                    <hr />
                                    {/* <a href="index.html" class="btn btn-google btn-user btn-block">
                                        <i class="fab fa-google fa-fw"></i> Register with Google
                                    </a>
                                    <a href="index.html" class="btn btn-facebook btn-user btn-block">
                                        <i class="fab fa-facebook-f fa-fw"></i> Register with Facebook
                                    </a> */}
                                </form>
                                <hr />
                                <div class="text-center">
                                    <Link class="small" to="/forgot-password">Forgot Password?</Link>
                                </div>
                                <div class="text-center">
                                    <Link class="small" to="/user-login">Already have an account? Login!</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}


export default UserRegistrationForm;