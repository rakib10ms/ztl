import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import reactjs_img from '../../Images/reactjs_img.png';
import mysql from '../../Images/mysql.png';
import nodejs from '../../Images/nodejs.png';
import javascript_img from '../../Images/javascript_img.png';
import php_img from '../../Images/php_img.png';
import fluter from '../../Images/fluter.png';
import angular_img from '../../Images/angular.png';
import world_edb from '../../Images/world_edb.png';
import rdworks_img from '../../Images/rdworks_img.png';
import testimonial_card_img from '../../Images/testimonial_card_img.jpg';
import cardt_invert_coma_top_img from '../../Images/cardt_invert_coma_top_img.png';
import cardt_invert_coma_bottom_img from '../../Images/cardt_invert_coma_bottom_img.png';
import over_img from '../../Images/over_img.png';
import crm_img from '../../Images/crm_img.png';
import erp_img from '../../Images/erp_img.png';





const HospitalMSystem = () => {

    const [ourWorldwidePartners, setOurWorldwidePartners] = useState([
        { title_name: "Javascript", technologies_img: php_img, id: 1 },
        { title_name: "Javascript", technologies_img: mysql, id: 2 },
        { title_name: "Javascript", technologies_img: nodejs, id: 3 },
        { title_name: "Javascript", technologies_img: javascript_img, id: 4 },
        { title_name: "Javascript", technologies_img: reactjs_img, id: 5 },
        { title_name: "Javascript", technologies_img: angular_img, id: 6 },
        { title_name: "Javascript", technologies_img: fluter, id: 7 },
        { title_name: "Javascript", technologies_img: world_edb, id: 8 },

    ]);
    const [partnerTestimonials, setPartnerTestimonials] = useState([
        {
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quibusdam perferendis! Perspiciatis, quod temporibus inventore ducimus soluta veritatis dolore, quis magni beatae cumque harum ullam libero! Dolor deleniti quas at? Quia tempora mollitia ipsam.",
            quate_title: " “I found ZaimahTech to be very enthusiastic and knowledgeable” ", sub_title: "CEO, Harlond inc", title_name: "Mike Holder", technologies_img: testimonial_card_img, id: 1
        },
        {
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quibusdam perferendis! Perspiciatis, quod temporibus inventore ducimus soluta veritatis dolore, quis magni beatae cumque harum ullam libero! Dolor deleniti quas at? Quia tempora mollitia ipsam.",
            quate_title: " “I found ZaimahTech to be very enthusiastic and knowledgeable” ", sub_title: "CEO, Harlond inc", title_name: "Mike Holder", technologies_img: testimonial_card_img, id: 2
        },
        {
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quibusdam perferendis! Perspiciatis, quod temporibus inventore ducimus soluta veritatis dolore, quis magni beatae cumque harum ullam libero! Dolor deleniti quas at? Quia tempora mollitia ipsam.",
            quate_title: " “I found ZaimahTech to be very enthusiastic and knowledgeable” ", sub_title: "CEO, Harlond inc", title_name: "Mike Holder", technologies_img: testimonial_card_img, id: 3
        },
        {
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quibusdam perferendis! Perspiciatis, quod temporibus inventore ducimus soluta veritatis dolore, quis magni beatae cumque harum ullam libero! Dolor deleniti quas at? Quia tempora mollitia ipsam.",
            quate_title: " “I found ZaimahTech to be very enthusiastic and knowledgeable” ", sub_title: "CEO, Harlond inc", title_name: "Mike Holder", technologies_img: testimonial_card_img, id: 4
        },
        {
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quibusdam perferendis! Perspiciatis, quod temporibus inventore ducimus soluta veritatis dolore, quis magni beatae cumque harum ullam libero! Dolor deleniti quas at? Quia tempora mollitia ipsam.",
            quate_title: " “I found ZaimahTech to be very enthusiastic and knowledgeable” ", sub_title: "CEO, Harlond inc", title_name: "Mike Holder", technologies_img: testimonial_card_img, id: 5
        },
        {
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quibusdam perferendis! Perspiciatis, quod temporibus inventore ducimus soluta veritatis dolore, quis magni beatae cumque harum ullam libero! Dolor deleniti quas at? Quia tempora mollitia ipsam.",
            quate_title: " “I found ZaimahTech to be very enthusiastic and knowledgeable” ", sub_title: "CEO, Harlond inc", title_name: "Mike Holder", technologies_img: testimonial_card_img, id: 6
        },

    ]);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="container mb-5 pt-3">
            <div className="row g-3">
                <div className="col-md-6">
                    <div className="header__hrm">
                        <h1 className="header-web-development"><span className="header-soft">Hospital</span></h1>
                        <h1 className="header-web-development">Management System</h1>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="hrm__img">
                        <img src={rdworks_img} className=" img-fluid " alt="rdworks_img" border="0" />
                    </div>
                </div>
            </div>
            <div className="row g-3 pt-4">
                <div className="col-12">
                    <h3 className="header__partner__index text-center"><span className="header-soft">Client’s Satisfaction</span></h3>
                    <p className="client__satisfaction">
                        Labore culpa ut do non sit deserunt elit velit laboris ut Lorem in velit dolore.
                        Dolor minim deserunt nisi officia ea ad dolor culpa irure cupidatat cupidatat anim. Labore culpa ut do non sit deserunt
                        elit velit laboris ut Lorem in velit dolore. Dolor minim deserunt nisi officia ea ad dolor culpa irure cupidatat
                        cupidatat anim. Labore culpa ut do non sit deserunt elit velit laboris ut Lorem in velit dolore. Dolor minim deserunt
                        nisi officia ea ad dolor culpa irure cupidatat cupidatat anim. Labore culpa ut do non sit deserunt elit velit laboris
                        ut Lorem in velit dolore. Dolor minim deserunt nisi officia ea ad dolor culpa irure cupidatat cupidatat anim.
                    </p>
                </div>
            </div>
            <div className="row g-3 pt-2">
                <div className="col-md-5">
                    <div className="overview__div">
                        <div className="row g-3">
                            <div className="col-12">
                                <h3 className="header__partner__index"><span className="header-soft">Overview</span></h3>
                                <p className="overview__description">Labore culpa ut do non sit deserunt elit velit laboris ut Lorem in velit dolore. Dolor minim deserunt nisi officia ea ad dolor culpa irure cupidatat cupidatat anim. </p>
                            </div>
                            <div className="col-12">
                                <h3 className="header__partner__index"><span className="header-soft">Tools & Technologies</span></h3>
                                <div className="row g-2 pt-4">
                                    {
                                        ourWorldwidePartners.length > 0 && ourWorldwidePartners.map((item, id) => {
                                            return (

                                                <div key={id} className="col-sm-3">
                                                    <div className="technologies__card">
                                                        <div className="card text-center">
                                                            <div className="technologies__card__img">
                                                                <img src={item.technologies_img} className="card-img-top" />
                                                            </div>
                                                            <div className="card-body">
                                                                <p className="technologies__card__title ">{item.title_name}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="over__img">
                        <img src={over_img} className=" img-fluid " alt="over_img" border="0" />
                    </div>
                </div>
            </div>
            <div className="row g-3 mb-2 pt-3">
                <div className="col-12">
                    <h3 className="header__partner__index"><span className="header-soft">Testimonials</span></h3>
                    <p className="key-web-technology-description">
                        Here are some highlights from our client reviews that are featured on
                    </p>
                </div>
            </div>
            <div className="row g-3 pt-3 mb-3">
                {
                    partnerTestimonials.length > 0 && partnerTestimonials.map((item, id) => {
                        return (
                            <div className="col-md-4">
                                <div className="testimonials-box-card">
                                    <div className="card pt-3">
                                        <div className="card-body">
                                            <div className="pt-0">
                                                <h6 className="testimonials_card_subtitle">{item.quate_title}</h6>
                                                <p className="testimonials_card_discription">{item.description}</p>
                                            </div>
                                            <div className="row g-0 pt-3">
                                                <div className="col-2">
                                                    <div className="testimonials-profile">
                                                        <img src={item.technologies_img} className="img-fluid" alt="image" />
                                                    </div>
                                                </div>
                                                <div className="col-10">
                                                    <div className="card-body">
                                                        <h6 className="f-test-card-title">{item.title_name}</h6>
                                                        <p className="f-test-card-subtitle"><small>{item.sub_title}</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="img_arrow_top">
                                        <img src={cardt_invert_coma_top_img} alt="" />
                                    </div>
                                    <div className="img_arrow_bottom">
                                        <img src={cardt_invert_coma_bottom_img} alt="" />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="row g-3 pt-4">
                <div className="col-12">
                    <h3 className="header__partner__index text-center"><span className="header-soft">Related Product</span></h3>
                    <div className="row g-3 pt-4">
                        <div className="col-md-6">
                            <Link to="/crm-solutions">
                                <div className="products__overlay__img">
                                    <img src={crm_img} className="img-fluid" alt="crm_img" />
                                    <h4 class="products__overlay__text">CRM Solutions</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <Link to="/erp-solutions">
                                <div className="products__overlay__img">
                                    <img src={erp_img} className="img-fluid" alt="erp_img" />
                                    <h4 class="products__overlay__text">ERP Solutions</h4>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HospitalMSystem;