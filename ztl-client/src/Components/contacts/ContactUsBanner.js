import React from 'react';
import Contact_Us_Banner from '../../Images/Contact_Us_Banner.png';


const ContactUsBanner = () => {
    return (
        <>
            <div class="banner_contact_us">
                <img src={Contact_Us_Banner} className="img-fluid" alt="Contact_Us_Banner" />
                <div class="content_img">
                    <div class="container d-flex justify-content-start">
                        <h1 class="text-white">Contact Us</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUsBanner;