import React, { useEffect, useState } from 'react';
import '../header/Header.css';
import ZTLLogo from '../../Images/ZTLLogo.png';
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios, { AxiosError } from 'axios';


const Header = () => {

    const navigate = useNavigate();
    const headerClickHandler = e => {
        e.preventDefault()
        // navigate(-1);
        navigate("/")
    };


    const [storageDataUser, setStorageDataUser] = useState()
    // console.log('local storage check', storageDataUser)
    useEffect(() => {
        const storageDatas = localStorage.getItem('user_type');
        setStorageDataUser(storageDatas)
    }, [])


    const handleLogOut = (e) => {
        e.preventDefault();
        axios.post('/logout').then(res => {
            if (res.data.status == 200) {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('username');
                localStorage.removeItem('email');
                localStorage.removeItem('user_type');
                navigate('/')
                // Swal.fire('Logged Out successfully', '', 'success')
                window.location.reload();

            }

        })
    }

    return (
        <nav className="navbar navbar-expand-lg sticky-top header__navbar">
            <div className="container container-fluid">
                <Link to="/" className="navbar-brand active" aria-current="page" >
                    <img src={ZTLLogo} className="img-fluid" style={{ width: '130px', height: '60px' }} alt="ZTLLogo" border="0" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <span onClick={headerClickHandler}></span>

                    <ul className="navbar-nav" id="nav_bar_nav">
                        {/* <li className="nav-item mx-1">
                            <Link to='/' className="nav-link active" aria-current="page">Home</Link>
                        </li> */}
                        <li className="nav-item dropdown mx-1" id="drop_down">
                            <Link to='#' className="nav-link dropdown-toggle" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</Link>

                            <ul className="dropdown-menu dropdown-menu-services" aria-labelledby="navbarDropdown1">
                                <li className="nav-item">
                                    <Link to="web-development" className="dropdown-item nav-link">
                                        <ul className="list-unstyled d-flex justify-content-between">
                                            <li>
                                                <span>Web Development</span>
                                            </li>
                                            <li>
                                                <span><img className="fa-solid fa-angle-right"></img></span>
                                            </li>
                                        </ul>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="mobile-platform" className="dropdown-item nav-link">
                                        <ul className="list-unstyled d-flex justify-content-between">
                                            <li>
                                                <span>Mobile Platform</span>
                                            </li>
                                            <li>
                                                <span><i className="fa-solid fa-angle-right"></i></span>
                                            </li>
                                        </ul>
                                    </Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link to="industry-revolutions" className="dropdown-item nav-link">
                                        <ul className="list-unstyled d-flex justify-content-between">
                                            <li>
                                                <span>Industry Revolutions (IR 4.0)</span>
                                            </li>
                                            <li>
                                                <span><i className="fa-solid fa-angle-right"></i></span>
                                            </li>
                                        </ul>
                                    </Link>
                                </li> */}
                                {/* <li className="nav-item">
                                    <Link to="business-management" className="dropdown-item nav-link">
                                        <ul className="list-unstyled d-flex justify-content-between">
                                            <li>
                                                <span>Business Management</span>
                                            </li>
                                            <li>
                                                <span><i className="fa-solid fa-angle-right"></i></span>
                                            </li>
                                        </ul>
                                    </Link>
                                </li> */}
                                {/* <li className="nav-item">
                                    <Link to="tech-consultancy-services" className="dropdown-item nav-link">
                                        <ul className="list-unstyled d-flex justify-content-between">
                                            <li>
                                                <span>Tech Consultancy Services</span>
                                            </li>
                                            <li>
                                                <span><i className="fa-solid fa-angle-right"></i></span>
                                            </li>
                                        </ul>
                                    </Link>
                                </li> */}
                                <li className="nav-item">
                                    <Link to="digitization" className="dropdown-item nav-link">
                                        <ul className="list-unstyled d-flex justify-content-between">
                                            <li>
                                                <span>Digitization</span>
                                            </li>
                                            <li>
                                                <span><i className="fa-solid fa-angle-right"></i></span>
                                            </li>
                                        </ul>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="ui-ux-design" className="dropdown-item nav-link">UI/UX Design</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="it-support-services" className="dropdown-item nav-link">IT Support Services</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link to="scs" className="dropdown-item nav-link">SCS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="bpo" className="dropdown-item nav-link">
                                        <ul className="list-unstyled d-flex justify-content-between">
                                            <li>
                                                <span>BPO</span>
                                            </li>
                                            <li>
                                                <span><i className="fa-solid fa-angle-right"></i></span>
                                            </li>
                                        </ul>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="training-skill-development" className="dropdown-item nav-link">
                                        <ul className="list-unstyled d-flex justify-content-between">
                                            <li>
                                                <span>Training & Skill Development</span>
                                            </li>
                                            <li>
                                                <span><i className="fa-solid fa-angle-right"></i></span>
                                            </li>
                                        </ul>
                                    </Link>
                                </li> */}
                            </ul>
                        </li>
                        <li className="nav-item dropdown mx-1">
                            <Link to="#" className="nav-link dropdown-toggle" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">Industries</Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
                                <li className="nav-item">
                                    <Link to="e-commerce" className="dropdown-item nav-link">E-Commerce</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="healthcare" className="dropdown-item nav-link">Healthcare</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link to="logistics" className="dropdown-item nav-link">Logistics</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="fin-tech" className="dropdown-item nav-link">FinTech</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="legal-law" className="dropdown-item nav-link">Legal & Law</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="iot" className="dropdown-item nav-link">IoT</Link>
                                </li> */}
                            </ul>
                        </li>
                        <li className="nav-item dropdown mx-1">
                            <Link to='#' className="nav-link dropdown-toggle" id="navbarDropdown3" role="button" data-bs-toggle="dropdown" aria-expanded="false">Expertise</Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown3">
                                {/* <li className="nav-item">
                                    <Link to="crm-solutions" className="dropdown-item nav-link">CRM Solutions</Link>
                                </li> */}
                                <li className="nav-item">
                                    <Link to="erp-solutions" className="dropdown-item nav-link">ERP Solutions</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link to="accounting-solutions" className="dropdown-item nav-link">Accounting Solutions</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="inventory-solutions" className="dropdown-item nav-link">Inventory Solutions</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="hrm-payroll-management" className="dropdown-item nav-link">HRM & Payroll Management</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="school-management" className="dropdown-item nav-link">School Management</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="hospital-management" className="dropdown-item nav-link">Hospital Management</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="tours-travel-management" className="dropdown-item nav-link">Tours & Travel Management</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="microfinance-software" className="dropdown-item nav-link">Microfinance Software</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="digital-legal-compliance-system" className="dropdown-item nav-link">Digital Legal Compliance System</Link>
                                </li> */}
                            </ul>
                        </li>
                        <li className="nav-item dropdown mx-1">
                            <Link to='#' className="nav-link dropdown-toggle" id="navbarDropdown4" role="button" data-bs-toggle="dropdown" aria-expanded="false">Portfolio</Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown4">
                                <li className="nav-item">
                                    <Link to="products" className="dropdown-item nav-link">Products</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="case-studies" className="dropdown-item nav-link">Case Studies</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="r-d-works" className="dropdown-item nav-link">R&D Works</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown mx-1">
                            <Link to='#' className="nav-link dropdown-toggle" id="navbarDropdown5" role="button" data-bs-toggle="dropdown" aria-expanded="false">Partners</Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown5">
                                <li className="nav-item">
                                    <Link to="partners" className="dropdown-item nav-link">Partners</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="become-a-partner" className="dropdown-item nav-link">Become a Partner</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item mx-1">
                            <Link to='career' className="nav-link" >Career</Link>
                        </li>
                        <li className="nav-item mx-1">
                            <Link to='membership' className="nav-link" >Membership</Link>
                        </li>
                        <li className="nav-item mx-1">
                            <Link to='coverage' className="nav-link">Coverage</Link>
                        </li>
                        <li className="nav-item dropdown mx-1">
                            <Link to='#' className="nav-link dropdown-toggle" id="navbarDropdown6" role="button" data-bs-toggle="dropdown" aria-expanded="false">Contacts</Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown6">
                                <li className="nav-item">
                                    <Link to='about-us' className="nav-link">About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='contact-us' className="nav-link" >Contact Us</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link to="blog" className="dropdown-item nav-link">Blog</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="news" className="dropdown-item nav-link">News</Link>
                                </li> */}
                            </ul>
                        </li>
                        {/* <li className="nav-item mx-1">
                            <Link to='contact-us' className="nav-link" ><i className="fa-solid fa-grip-lines-vertical"></i></Link>
                        </li>
                        <li className="nav-item mx-1">
                            <Link to='contact-us' className="nav-link" ><i className="fa-solid fa-magnifying-glass"></i></Link>
                        </li> */}
                        {
                            storageDataUser && <li className="nav-item mx-1 mt-1">
                                <button className='btn btn-secondary btn-sm' onClick={handleLogOut}>LogOut </button>
                            </li>
                        }

                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Header;