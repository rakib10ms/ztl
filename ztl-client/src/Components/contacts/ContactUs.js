import Skype1 from '../../Images/Skype1.png';
import Email1 from '../../Images/Email1.png';
import WhatsUpCircle1 from '../../Images/WhatsUpCircle1.png';
import ContactPhone1 from '../../Images/ContactPhone1.png';
import Location1 from '../../Images/Location1.png';
import contact_us_img from '../../Images/contact_us_img.png';
import ContactUsBanner from './ContactUsBanner';
import Swal from 'sweetalert2';
import axios from 'axios';
import React, { useState } from 'react';

const ContactUs = () => {

    const [contact, setContact] = useState({
        'name': '',
        'email': '',
        'phone': '',
        'message': '',
    })
    const handleChange = (e) => {
        setContact({
            ...contact, [e.target.name]: e.target.value
        })

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('state data checking',contact)
        if (contact.name == '' || contact.phone == '' || contact.message == '') {
            Swal.fire("Please fill up all inputs", '', 'error')

        }
        else {

            axios.post(`/save-contact-us`, contact).then(res => {
                if (res.data.status == 200) {
                    Swal.fire(res.data.message, '', 'success')

                    setContact({
                        'name': '',
                        'email': '',
                        'phone': '',
                        'message': '',

                    })
                }
                else if (res.data.status == 400) {
                    setContact({ ...contact, error_list: res.data.errors });

                }
            })
        }
    }
    return (
        <>
            {/* <ContactUsBanner /> */}
            <div className="container mb-5">
                <div className="row g-3 mb-3">
                    <div className="col-md-5">
                        <div className="header__partner">
                            <h1 className="header-web-development">Contact Us</h1>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="contact__us__img">
                            <img src={contact_us_img} className="img-fluid" alt="contact_us_img" border="0" />
                        </div>
                    </div>
                </div>
                <div className="row g-3 pt-2">
                    <div className="col-md-6 pe-md-5">
                        <h3 className="header_get_touch">Get in Touch</h3>
                        <form class="row g-3" onSubmit={handleSubmit}>
                            <div class="col-md-12">
                                <input type="text" class="form-control form-control-sm" placeholder="Your Name" aria-label="Full Name" name="name" value={contact.name} onChange={handleChange} />
                            </div>

                            <div class="col-md-12">
                                <input type="text" class="form-control form-control-sm" placeholder="Email Address" aria-label="Email address" name="email" value={contact.email} onChange={handleChange} required />
                            </div>
                            <div class="col-md-12">
                                <input type="text" class="form-control form-control-sm" placeholder="Phone No" aria-label="Phone No" name="phone" value={contact.phone} onChange={handleChange} />
                            </div>
                            <div class="mb-3">
                                <textarea class="form-control form-control-sm" id="exampleFormControlTextarea1" placeholder="Write your Message" rows="4" name="message" value={contact.message} onChange={handleChange}></textarea>
                            </div>
                            <div class="col-12">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                                    <label class="form-check-label" for="gridCheck">
                                        <span className="text-muted">I agree to the</span>
                                        <span className="text_color"> Privacy Policy</span>
                                        <span className="text-muted"> and</span>
                                        <span className="text_color"> Terms of Service.</span>
                                    </label>
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn_free_trail_now">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <h3 className="header_contact_us">Contact Us</h3>
                        <div class="row g-3">
                            <div class="col-sm-6">
                                <span class="d-flex justify-content-start">
                                    <img src={Location1} class="img-fluid rounded-start" style={{ width: '25px', height: '25px' }} alt="Location1" border="0" />
                                    <p class="px-3 text-muted contact_us_description">3 Dhakeswari Road, Lalbagh Dhaka</p>
                                </span>
                            </div>
                            <div class="col-sm-6">
                                <span class="d-flex justify-content-start">
                                    <img src={Skype1} class="img-fluid rounded-start" style={{ width: '25px', height: '25px' }} alt="Skype1" border="0" />
                                    <p class="px-3 text-muted contact_us_description">zaimahtechnology</p>
                                </span>
                            </div>
                            <div class="col-sm-6">
                                <span class="d-flex justify-content-start">
                                    <img src={Email1} class="img-fluid rounded-start" style={{ width: '25px', height: '25px' }} alt="Email1" border="0" />
                                    <p class="px-3 text-muted contact_us_description">info@zaimahtech.com</p>
                                </span>
                            </div>
                            <div class="col-sm-6">
                                <span class="d-flex justify-content-start">
                                    <img src={WhatsUpCircle1} class="img-fluid rounded-start" style={{ width: '25px', height: '25px' }} alt="WhatsUpCircle1" border="0" />
                                    <p class="px-3 text-muted contact_us_description">+8809617209581</p>
                                </span>
                            </div>
                            <div class="col-sm-6">
                                <span class="d-flex justify-content-start">
                                    <img src={ContactPhone1} class="img-fluid rounded-start" style={{ width: '25px', height: '25px' }} alt="ContactPhone1" border="0" />
                                    <p class="px-3 text-muted contact_us_description">+8809617209581</p>
                                </span>
                            </div>
                            <div class="col-12">
                                <div class="d-flex justify-content-center mt-4">
                                    <a href="#" class="fs-4 px-3 "><i class="contact_us_social_icon fab fa-facebook-f"></i></a>
                                    <a href="#" class="fs-4 px-3 "><i class="contact_us_social_icon fab fa-twitter"></i></a>
                                    <a href="#" class="fs-4 px-3 "><i class="contact_us_social_icon fab fa-instagram"></i></a>
                                    <a href="#" class="fs-4 px-3 "><i class="contact_us_social_icon fab fa-linkedin-in"></i></a>
                                    <a href="#" class="fs-4 px-3 "><i class="contact_us_social_icon fab fa-pinterest-p"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default ContactUs;