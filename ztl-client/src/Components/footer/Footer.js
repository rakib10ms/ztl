import React, { useState } from 'react';
import '../footer/Footer.css';
// import logo from '../../Images/logo.png';
import ecap__img1 from '../../Images/ecap__img1.jpg';
import basis_img1 from '../../Images/basis_img1.png';
import bd_img from '../../Images/bd_img.png';
import malaysia_img from '../../Images/malaysia_img.png';
import thailand_img from '../../Images/thailand_img.png';
import basis_membership from '../../Images/basis_membership.jpg';
import contact_img from '../../Images/contact_img.png';
import gmail_img from '../../Images/gmail_img.png';
import location_img from '../../Images/location_img.png';
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import Swal from 'sweetalert2';
import axios from 'axios';
import ReactPhoneInput from "react-phone-input-2";


const Footer = () => {
    // // Consultation popup
    // const customStyles1 = {
    //     content: {
    //         marginTop: '70px',
    //         top: '35%',
    //         left: '25%',
    //         right: 'auto',
    //         bottom: 'auto',
    //         padding: '5px',
    //         marginRight: '-50%',
    //         transform: 'translate(-7%, -45%)',
    //         width: "55%",
    //         height: "530px",
    //         // background: "#ffffff",
    //     },
    //     overlay: { zIndex: 1000 }

    // };
    const [becomePartner, setBecomePartner] = useState({
        'first_name': '',
        'last_name': '',
        'email': '',
        'phone': '',
        'customer_type': '',
        'description': '',
        'partner_type': '',
        'country': '',
        'job_title': '',
        'notification': false,
    })

    const [modalConsultationIsOpen, setModalConsultationIsOpen] = useState(false);
    function openModalConsultation(e) {
        e.preventDefault();
        // alert("mmm")
        setModalConsultationIsOpen(true);
    }
    function closeModalConsultation(e) {
        setModalConsultationIsOpen(false);

    }

    const [phone1,setPhone1]=useState('');

    console.log('phone bal',phone1)



    const [consultation1, setConsultation1] = useState({
        'name': '',
        'email': '',
        // 'phone': '',
        'message': '',
    })
    const handleChange = (e) => {
        setConsultation1({
            ...consultation1, [e.target.name]: e.target.value
        })

    }
    const handleSubmit = (e) => {
        e.preventDefault();
         var consultation2={
            name:consultation1.name,
            email: consultation1.email,
            phone:phone1,
            message:consultation1.message

         }

        console.log('state data checking',consultation2)
        if (consultation1.name == '' || phone1== '' || consultation1.message == '') {
            Swal.fire("Please fill up all inputs", '', 'error')

        }
        else {

            axios.post(`/save-consultation`, consultation2).then(res => {
                if (res.data.status == 200) {
                    Swal.fire(res.data.message, '', 'success')

                    setConsultation1({
                        'name': '',
                        'email': '',
                        'phone': '',
                        'message': '',

                    })
                    setPhone1('')
                }
                else if (res.data.status == 400) {
                    setConsultation1({ ...consultation1, error_list: res.data.errors });

                }
            })
        }
    }



    return (
        <section>
            <div className="pt-0">
                <div className="consultation-bg">
                    <div className="container">
                        <div className="row g-3 pt-3">
                            <div className="col-md-8">
                                <h5 className="consultation__description">If you have any question or need to schedule for a consultation</h5>
                                <h4 className="consultation__call">Please Call Us Any Time at +8809617209581</h4>
                            </div>
                            <div className="col-md-4">
                                <Modal
                                    isOpen={modalConsultationIsOpen}
                                    onRequestClose={closeModalConsultation}
                                    // style={customStyles1}
                                    className="mymodal"
                                    overlayClassName="myoverlay"
                                    contentLabel="Example Modal"
                                >
                                    <div className='card-body modal__body'>
                                        <div className="row">
                                            <div className="col-12">
                                                <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeModalConsultation}><i className="fa-solid fa-xmark close_btn"></i></span>
                                                <h6 className="header__consultation__text">Consultation</h6>
                                            </div>
                                        </div>
                                        <form className="pt-3" onSubmit={handleSubmit}>
                                            <div className="row mb-2">
                                                <div className="col-sm-12">
                                                    <label htmlFor="InputConsultationName" className="col-form-label col-form-label-sm d-block " >Name</label>
                                                    <input type="text" className="form-control form-control-sm " id="InputConsultationName" aria-describedby="emailHelp"
                                                        name="name" value={consultation1.name} onChange={handleChange}
                                                    />
                                                </div>
                                                
                                            </div>
                                            {/* <div className="row mb-2">
                                                <div className="col-sm-12">
                                                    <label htmlFor="InputConsultationPhoneNumber" className="col-form-label col-form-label-sm d-block" >Phone Number</label>
                                                    <input type="text" className="form-control form-control-sm " id="InputConsultationPhoneNumber" aria-describedby="emailHelp"
                                                        name="phone" value={consultation1.phone} onChange={handleChange}
                                                    />
                                                </div>
                                            </div> */}
                                            <div className="row mb-2">
                                                <div className="col-sm-12">
                                                    <label htmlFor="InputBecomePartnerMobileNo" className="col-form-label col-form-label-sm d-block" >Mobile No.</label>
                                                    <div >
                                                        <ReactPhoneInput
                                                               country='bd'
                                                               regions={['america', 'europe', 'asia', 'oceania', 'africa']}
                                                            inputExtraProps={{
                                                                name: "phone",
                                                                required: true,
                                                                autoFocus: true
                                                            }}
                                                            inputClass="w-100"
                                                            // defaultCountry={"sg"}
                                                            value={phone1}
                                                            onChange={val => {setPhone1(val )}
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mb-2">
                                                <div className="col-sm-12">
                                                    <label htmlFor="InputConsultationEmail" className="col-form-label col-form-label-sm d-block" >Email</label>
                                                    <input type="email" className="form-control form-control-sm " id="InputConsultationEmail" aria-describedby="emailHelp"
                                                        name="email" value={consultation1.email} onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row mb-2 d-flex">
                                                <div className="col-sm-12">
                                                    <label htmlFor="ConsultationMessegeFormControlTextarea1" className="col-form-label col-form-label-sm " >Messege</label>
                                                    <textarea className="form-control form-control-sm" placeholder="Write Here ..." id="ConsultationMessegeFormControlTextarea1" rows="4"
                                                        name="message" value={consultation1.message} onChange={handleChange}
                                                    ></textarea>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="text-start pt-4 mr-0">
                                                        <button type="submit" className="btn__apply"
                                                        // onClick={openModalConsultation}
                                                        >
                                                            <b>Submit</b>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </Modal>
                                <div className="consultation">
                                    <button type="button" className="form-control consultation-btn"
                                        onClick={openModalConsultation}
                                    >Consultation</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer_bg'>
                    <div className="container  pt-4 mb-4">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="header_link_footer text-center">Membership</h3>
                                <div className="footer__membership">
                                    <ul className="list-unstyled d-flex justify-content-center">
                                        <li><img src={ecap__img1} className="img-fluid" alt="ecap__img1" border="0" /></li>
                                        <li><img src={basis_img1} className="img-fluid" alt="basis_img1" border="0" /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row g-3 pt-3 ms-2">
                            <div className="col-md-4">
                                <div className="contact__foot__bottom">
                                    <h3 className="header_link_footer">Headquarter</h3>
                                    <div className="bd__img">
                                        <img src={bd_img} className="img-fluid" alt="bd_img" border="0" />
                                    </div>
                                    <ul className="list-unstyled pt-3">
                                        <li><i class="fa-solid fa-phone"></i> <span className="footer__address">+8809617209581</span></li>
                                        <li><i class="fa-solid fa-envelope"></i> <span className="footer__address">info@zaimahtech.com</span></li>
                                        <li><i class="fa-solid fa-location-dot"></i> <span className="footer__address">3 Dhakeswari Road, Lalbagh Dhaka</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="contact__foot__bottom">
                                    <h3 className="header_link_footer">Malaysia Office</h3>
                                    <div className="bd__img">
                                        <img src={malaysia_img} className="img-fluid" alt="malaysia_img" border="0" />
                                    </div>
                                    <ul className="list-unstyled pt-3">
                                        <li><i class="fa-solid fa-phone"></i> <span className="footer__address">+8809617209581</span></li>
                                        <li><i class="fa-solid fa-envelope"></i> <span className="footer__address">info@zaimahtech.com</span></li>
                                        <li><i class="fa-solid fa-location-dot"></i> <span className="footer__address">3 Dhakeswari Road, Lalbagh Dhaka</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="contact__foot__bottom">
                                    <h3 className="header_link_footer">Partner Office</h3>
                                    <div className="bd__img">
                                        <img src={thailand_img} className="img-fluid" alt="thailand_img" border="0" />
                                    </div>
                                    <ul className="list-unstyled pt-3">
                                        <li><i class="fa-solid fa-phone"></i> <span className="footer__address">+8809617209581</span></li>
                                        <li><i class="fa-solid fa-envelope"></i> <span className="footer__address">info@zaimahtech.com</span></li>
                                        <li><i class="fa-solid fa-location-dot"></i> <span className="footer__address">3 Dhakeswari Road, Lalbagh Dhaka</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr className="footer-hr" />
                    </div>
                    
                    <div className="container pt-4 mb-4 bg-white">
                        <div className="row g-3">
                            <div className="col-md-3">
                                <h3 className="header_link_footer ps-md-5">Services</h3>
                                <div className="mt-0 ps-md-5">
                                    <Link to="web-development" className="link_footer"><p>Web Development</p></Link>
                                    <Link to="mobile-platform" className="link_footer"><p>Mobile Platform</p></Link>
                                    <Link to="" className="link_footer"><p>Industry Revolutions (IR 4.0)</p></Link>
                                    <Link to="" className="link_footer"><p>Business Management</p></Link>
                                    <Link to="" className="link_footer"><p>Tech Consultancy Services</p></Link>
                                    <Link to="digitization" className="link_footer"><p>Digitization</p></Link>
                                    <Link to="ui-ux-design" className="link_footer"><p>UI/UX Design</p></Link>
                                    <Link to="it-support-services" className="link_footer"><p>IT Support Services</p></Link>
                                    <Link to="" className="link_footer"><p>SCS</p></Link>
                                    <Link to="" className="link_footer"><p>BPO</p></Link>
                                    <Link to="" className="link_footer"><p>Training & Skill Development</p></Link>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <h3 className="header_link_footer ps-md-5">Technologies</h3>
                                <div className="mt-0 ps-md-5">
                                    <Link to="" className="link_footer"><p>PHP</p></Link>
                                    <Link to="" className="link_footer"><p>Laravel</p></Link>
                                    <Link to="" className="link_footer"><p>Flutter</p></Link>
                                    <Link to="" className="link_footer"><p>React JS</p></Link>
                                    <Link to="" className="link_footer"><p>Angular JS</p></Link>
                                    <Link to="" className="link_footer"><p>Node JS</p></Link>
                                    <Link to="" className="link_footer"><p>MySQL</p></Link>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <h3 className="header_link_footer ps-md-5">Our Product</h3>
                                <div className="mt-0 ps-md-5">
                                    <Link to="" className="link_footer"><p>Accounting Solutions</p></Link>
                                    <Link to="" className="link_footer"><p>Inventory Solutions</p></Link>
                                    <Link to="erp-solutions" className="link_footer"><p>ERP Solutions</p></Link>
                                    <Link to="" className="link_footer"><p>CRM Solutions</p></Link>
                                    <Link to="e-commerce" className="link_footer"><p>E-commerce</p></Link>
                                    <Link to="healthcare" className="link_footer"><p>HealthCare</p></Link>
                                    <Link to="" className="link_footer"><p>HRM & Payroll Management</p></Link>
                                    <Link to="" className="link_footer"><p>Hospital Management</p></Link>
                                    <Link to="" className="link_footer"><p>Tours & Travel Management</p></Link>
                                    <Link to="" className="link_footer"><p>Tours & Travel Management</p></Link>
                                    <Link to="" className="link_footer"><p>Microfinance Software</p></Link>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <h3 className="header_link_footer ps-md-5">Company</h3>
                                <div className="mt-0 ps-md-5">
                                    <Link to="about-us" className="link_footer"><p>About Us</p></Link>
                                    <Link to="contact-us" className="link_footer"><p>Contact Us</p></Link>
                                    <Link to="" className="link_footer"><p>Career</p></Link>
                                    <Link to="" className="link_footer"><p>News</p></Link>
                                    <Link to="" className="link_footer"><p>Blogs</p></Link>
                                </div>
                            </div>
                        </div>



                    </div>
                    <p className="footer_copyright">Copyright ©2017-2021 Zaimah Technologies Limited. All Rights Reserved.</p>
                </div>
            </div>
        </section>
    );
};

export default Footer;