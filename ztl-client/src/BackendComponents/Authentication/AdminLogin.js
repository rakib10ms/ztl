import axios, { AxiosError } from 'axios';
import MaterialTable from 'material-table';
import React, { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import DashboardFooter from '../../dashboard/Footer';
import DashboardHeader from '../../dashboard/DashboardHeader';
function AdminLogin() {

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
                let admin_auth={
                    name:res.data.username,
                    user_type:res.data.user_type,
                    token:res.data.token,
                    email:res.data.email
                }
                localStorage.setItem('auth_token',res.data.token);
                localStorage.setItem('username',res.data.username);
                localStorage.setItem('email',res.data.email);
                localStorage.setItem('user_type',res.data.user_type);
                  if (res.data.user_type=== 'super_admin') {

                    navigate('/dashboard')
                }
                else if(res.data.user_type=== 'user'){
                    navigate('/')

                }

                window.location.reload();

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
        <div class="" style={{ backgroundColor: "#f4f4f4",fontSize:'14px' }}>


            <section class="vh-100" >
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div class="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
                                <div class="card-body p-5 text-center">

                                    <h4 class="mb-5">Admin Log In</h4>
                                    <form onSubmit={handleSubmit}>
                                        <div class="form-outline mb-4">
                                        <label class="form-label d-flex flex-start" for="typeEmailX-2">Email</label>
                                            <input type="email" id="typeEmailX-2" class="form-control form-control-lg" name='email' onChange={handleChange} required/>
                                        </div>

                                        <div class="form-outline mb-4">
                                        <label class="form-label d-flex flex-start " for="typePasswordX-2">Password</label>
                                            <input type="password" id="typePasswordX-2" class="form-control form-control-lg"  name='password' onChange={handleChange} />
                                        </div>

                                        <div class="form-check d-flex justify-content-start mb-4">
                                            <input class="form-check-input " type="checkbox" value="" id="form1Example3" />
                                            <label class="form-check-label " for="form1Example3"> Remember password </label>
                                        </div>

                                        <button class="btn btn-primary btn-lg btn-block" type="submit">Login</button>

                                    </form>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    )


}

export default AdminLogin;