import React, { useState, useEffect } from 'react';
import php from '../../Images/php.png';
import laravel from '../../Images/laravel.png';
import mysql from '../../Images/mysql.png';
import fluter from '../../Images/fluter.png';
import javascript from '../../Images/javascript.png';
import react from '../../Images/react.png';
import nodejs from '../../Images/nodejs.png';
import angular from '../../Images/angular.png';
import software_img from '../../Images/software_img.png';
import web_development from '../../Images/web_development.png';
import app_development from '../../Images/app_development.png';
import ui_ux_design from '../../Images/ui_ux_design.png';
import qa_testing from '../../Images/qa_testing.png';
import cardt_invert_coma_top_img from '../../Images/cardt_invert_coma_top_img.png';
import cardt_invert_coma_bottom_img from '../../Images/cardt_invert_coma_bottom_img.png';

import web from '../../Images/web.png';
import android from '../../Images/android.png';
import iOS from '../../Images/iOS.png';
import ioT from '../../Images/ioT.png';
import ai from '../../Images/ai.png';
import block_chain from '../../Images/block_chain.png';
import DrPhen from '../../Images/DrPhen.jpg';
import SocialIcons from '../social_Icons/SocialIcons';
import GoogleMap from '../googleMap/GoogleMap';
// import '../../App.css';
import axios from 'axios';
import ServiceType from '../../BackendComponents/ServiceType/ServiceType';

const MainHomePage = () => {
    const ServiceImages = [
        {
            id: 1,
            photo: php,
        },
        {
            id: 2,
            photo: laravel,
        },
        {
            id: 3,
            photo: mysql,
        },
        {
            id: 4,
            photo: fluter,
        },
        {
            id: 5,
            photo: javascript,
        },
        {
            id: 6,
            photo: react,
        },
        {
            id: 7,
            photo: nodejs,
        },
        {
            id: 8,
            photo: angular,
        },

    ]


    const [technologyIndexData, setTechnologyIndexData] = useState([
        {
            id: 1,
            photo: web,
            name: 'WEB',
        },
        {
            id: 2,
            photo: android,
            name: 'ANDROID',
        },
        {
            id: 3,
            photo: iOS,
            name: 'iOS',
        },
        {
            id: 4,
            photo: ioT,
            name: 'ioT',
        },
        {
            id: 5,
            photo: ai,
            name: 'AI',
        },
        {
            id: 6,
            photo: block_chain,
            name: 'BLOCK CHAIN',
        },
    ]);

    const [testimonials, setTestimonials] = useState([
        {
            id: 1,
            photo: DrPhen,
            title_name: 'Mike Holder',
            sub_title_name: 'CEO, Harlond inc',
            title_description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quibusdam perferendis! Perspiciatis, quod temporibus inventore ducimus soluta veritatis dolore, quis magni beatae cumque harum ullam libero! Dolor deleniti quas at? Quia tempora mollitia ipsam.',
            quotation_name: '“I found ZaimahTech to be very enthusiastic and knowledgeable”',
        },
        {
            id: 2,
            photo: DrPhen,
            title_name: 'Mike Holder',
            sub_title_name: 'CEO, Harlond inc',
            title_description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quibusdam perferendis! Perspiciatis, quod temporibus inventore ducimus soluta veritatis dolore, quis magni beatae cumque harum ullam libero! Dolor deleniti quas at? Quia tempora mollitia ipsam.',
            quotation_name: '“I found ZaimahTech to be very enthusiastic and knowledgeable”',
        },
        {
            id: 3,
            photo: DrPhen,
            title_name: 'Mike Holder',
            sub_title_name: 'CEO, Harlond inc',
            title_description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quibusdam perferendis! Perspiciatis, quod temporibus inventore ducimus soluta veritatis dolore, quis magni beatae cumque harum ullam libero! Dolor deleniti quas at? Quia tempora mollitia ipsam.',
            quotation_name: '“I found ZaimahTech to be very enthusiastic and knowledgeable”',
        },

    ]);



    const [allHeading, setAllHeading] = useState([]);
    const [allServiceDescription, setAllServiceDescription] = useState([]);
    const [allServiceLogo, setAllServiceLogo] = useState([]);
    const [allServiceType, setAllServiceType] = useState([]);
    const [allTechnologyIndex, setAllTechnologyIndex] = useState([]);
    const [allTechnologyIndexLogo, setAllTechnologyIndexLogo] = useState([]);
    const [allCounter, setallCounter] = useState([]);
    const [allTestimonial, setAllTestimonial] = useState([]);


    // console.log('allTestimonial', allHeading.toString().heading_name.split(""))
    useEffect(() => {
        axios.get(`/heading`).then(res => {
            if (res.data.status == 200) {
                setAllHeading(res.data.heading);
            }
        })

        axios.get(`/service-description`).then(res => {
            if (res.data.status == 200) {
                setAllServiceDescription(res.data.service_description);
            }
        })
        axios.get(`/service-logo`).then(res => {
            if (res.data.status == 200) {
                setAllServiceLogo(res.data.service_logo);
            }
        })
        axios.get(`/service-type`).then(res => {
            if (res.data.status == 200) {
                setAllServiceType(res.data.service_type);
            }
        })
        axios.get(`/technology-index`).then(res => {
            if (res.data.status == 200) {
                setAllTechnologyIndex(res.data.technology_index);
            }
        })
        axios.get(`/technology-index-logo`).then(res => {
            if (res.data.status == 200) {
                setAllTechnologyIndexLogo(res.data.technology_logo);
            }
        })

        axios.get(`/counter`).then(res => {
            if (res.data.status == 200) {
                setallCounter(res.data.counter);
            }
        })
        axios.get(`/testimonial`).then(res => {
            if (res.data.status == 200) {
                setAllTestimonial(res.data.testimonial);
            }
        })

    }, [])

    return (
        <>
            <div className="container pt-5">
                <SocialIcons />
                <div className="row g-3">
                    {
                        allHeading.map((item, i) => {
                            var text2 = " ";

                            {
                                var x = item.heading_name.split(" ");

                                for (let i = 1; i < x.length; i++) {
                                    text2 += x[i] + " ";
                                }
                                console.log('text2', text2)

                                var text1 = item.heading_name.split(" ")[0];


                            }
                            return (
                                <>
                                    <div className="col-md-7 pe-md-5">
                                        {/* <h1 className="header-software">{item.heading_name}</h1> */}


                                        <h1 className="header-software"><span className="header-soft">{text1}</span> {text2}</h1>
                                        <p className="software_description pe-md-5">
                                            {item.heading_description}
                                        </p>
                                        <div className="pt-3">
                                            <a src="#" type="text" className="btn btn-get-start">Get Started</a>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="software__img">
                                            {/* <img src={software_img} className="img-fluid " alt="software_img" border="0" /> */}
                                            <img src={`${global.img_url}/landing/heading/${item.image}` || `https://dev.zaimahtech.com/ztl-server/landing/heading/${item.image}`} className="img-fluid " alt="software_img" border="0" />
                                        </div>
                                    </div>

                                </>
                            )
                        })
                    }
                    {/* <div className="col-md-7 pe-md-5">
                        <h1 className="header-software">Your Partner for</h1>
                        <h1 className="header-software"><span className="header-soft">Software</span> Innovation</h1>
                        <p className="software_description pe-md-5">
                            Zaimah Technologies Limited is the partner of choice for many of the world’s leading
                            enterprises, and technology challenges. We tend to facilitate businesses elevate their
                            value through custom product design, software development, Mobile App Development, QA,
                            and practice services.
                        </p>
                        <div className="pt-3">
                            <a src="#" type="text" className="btn btn-get-start">Get Started</a>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="software__img">
                            <img src={software_img} className="img-fluid " alt="software_img" border="0" />
                        </div>
                    </div> */}
                </div>


                <div className="row g-3 pt-5">
                    <div className="col-md-7">
                        <h4 className="header-services"><span className="header-soft">Services</span></h4>
                        <p className="services_description">
                            {
                                allServiceDescription.map((item, i) => {
                                    return (
                                        <>
                                            {item.short_description}
                                        </>


                                    )
                                })
                            }
                        </p>
                    </div>
                    <div className="col-md-5 ps-md-5 ">
                        <div className="row g-3 pt-5">
                            {
                                allServiceLogo.map((item, i) => (
                                    <div key={i} className="col-3">
                                        <img className='p-2' src={`${global.img_url}/images/service_logo/${item.service_logo}` || `https://dev.zaimahtech.com/ztl-server/images/service_logo/${item.service_logo}`} alt='photo' style={{ width: '80px', height: '80px' }} />

                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                {/* <div className="row g-3 pt-5">
                    <div className="col-md-6">
                        <div className="row g-3 pt-3">
                            <div className="col-12">
                                <img src={web_development} className=" img-fluid " style={{ width: '100px', height: '100px' }} alt="web_development" border="0" />
                            </div>
                            <div className="col-12">
                                <h3 className="header-sub-services">Web Development</h3>
                                <p className="services_description pe-md-5">
                                    We carry more than just good coding skills. Our experience makes us stand out from other web development.
                                    We carry more than just good coding skills. Our experience makes us stand out from other web
                                    development. We carry more than just good coding skills. Our experience makes us stand out from
                                    other web development. We carry more than
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row g-3 pt-3">
                            <div className="col-12">
                                <img src={app_development} className=" img-fluid " style={{ width: '100px', height: '100px' }} alt="app_development" border="0" />
                            </div>
                            <div className="col-12">
                                <h3 className="header-sub-services">Mobile App Development</h3>
                                <p className="services_description">
                                    We carry more than just good coding skills. Our experience makes us stand out from other web development.
                                    We carry more than just good coding skills. Our experience makes us stand out from other web
                                    development. We carry more than just good coding skills. Our experience makes us stand out from
                                    other web development. We carry more than
                                </p>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="row g-3 pt-5">
                    {
                        allServiceType.map((item, i) => {
                            return (
                                <>
                                    <div className="col-md-6">
                                        <div className="row g-3 pt-3">
                                            <div className="col-12">
                                                <img src={`${global.img_url}/images/service_type/${item.service_logo}`} className=" img-fluid " style={{ width: '100px', height: '100px' }} alt="ui_ux_design" border="0" />
                                            </div>
                                            <div className="col-12">
                                                <h3 className="header-sub-services">{item.service_name}</h3>
                                                <p className="services_description pe-md-5">
                                                    {item.short_description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }


                </div>
                <div className="row g-3 pt-4">
                    <div className="col-12">
                        <a src="#" type="text" className="btn btn-discover-all-services">Discover All Services</a>
                    </div>
                </div>
                <div className="row g-3 pt-5  mb-5">
                    {
                        allTechnologyIndex.map((item, i) => {
                            return (
                                <div className="col-md-6 ">
                                    <h4 className="header-tech-index"><span className="header-soft">Technology Index</span></h4>
                                    <h3 className="header-sub-tech-index">{item.heading_name}</h3>
                                    {/* <h3 className="header-sub-tech-index">the Goal of Trusting Relationships</h3> */}
                                    <p className="software_description pe-md-5">
                                        {
                                            item.heading_description
                                        }
                                    </p>
                                </div>
                            )

                        })
                    }

                    <div className="col-md-6">
                        <div className="row g-3">
                            {
                                allTechnologyIndexLogo.length > 0 && allTechnologyIndexLogo.map((item, id) => (
                                    <div key={id} className="col-md-4">
                                        <div className="card bg_card_technology">
                                            <div className="pt-4">

                                                <img src={`${global.img_url}/images/technology_index_logo/${item.technology_logo}`} className="rounded" style={{ width: '50px', height: '50px' }} alt="web" />

                                            </div>
                                            <div className="card-body ">
                                                <p className="link_technology">{item.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-technology pt-5">
                <div className="container mb-5">

                    <div className="row g-3">
                        {
                            allCounter.map((item, i) => {
                                return (
                                    <>

                                        <div className="col-md-4 ">
                                            <div className="tech-card">
                                                <div className="card-title">
                                                    <h1 className="pt-4">
                                                        <span className="tech-number">{item.total_countries}</span>
                                                        <span className="tech-number-plus">+</span>
                                                    </h1>
                                                </div>
                                                <div className="mb-5 pt-1">
                                                    <a href="#" className="tech-country" >Countries Worldwide</a>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-md-4 ">
                                            <div className="tech-card">
                                                <div className="card-title">
                                                    <h1 className="pt-4">
                                                        <span className="tech-number">{item.total_clients}</span>
                                                        <span className="tech-number-plus">+</span>
                                                    </h1>
                                                </div>
                                                <div className="mb-5 pt-1">
                                                    <a href="#" className="tech-country" >Happy Clients</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 ">
                                            <div className="tech-card">
                                                <div className="card-title">
                                                    <h1 className="pt-4">
                                                        <span className="tech-number">{item.total_projects}</span>
                                                        <span className="tech-number-plus">+</span>
                                                    </h1>
                                                </div>
                                                <div className="mb-5 pt-1">
                                                    <a href="#" className="tech-country" >Successful Projects</a>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>
                </div>
            </div>

            <div className="container mb-3">
                <div className="row g-3 pt-5">
                    <div className="col-12">
                        <h4 className="header-services"><span className="header-soft">Testimonials</span></h4>
                        <p className="services_description">
                            Here are some highlights from our client reviews that are featured on
                        </p>
                    </div>
                </div>
                <div className="row g-3 pt-4">
                    {/* {
                        testimonials.length > 0 && testimonials.map((item, id) => {
                            return (
                                <div key={id} className="col-md-4">
                                    <div className="testimonials-box-card">
                                        <div className="card pt-3">
                                            <div className="card-body">
                                                <div className="pt-0">
                                                    <h6 className="testimonials_card_subtitle">{item.quotation_name}</h6>
                                                    <p className="testimonials_card_discription">{item.title_description}</p>
                                                </div>

                                                <div className="row g-0 pt-3">
                                                    <div className="col-2">
                                                        <div className="testimonials-profile">
                                                            <img src={item.photo} className="img-fluid" alt="DrPhen" />
                                                        </div>
                                                    </div>
                                                    <div className="col-10">
                                                        <div className="card-body">
                                                            <h6 className="f-test-card-title">{item.title_name}</h6>
                                                            <p className="f-test-card-subtitle"><small>{item.sub_title_name}</small></p>
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
                    } */}


                    {
                        allTestimonial.length > 0 && allTestimonial.map((item, id) => {
                            return (
                                <div key={id} className="col-md-4">
                                    <div className="testimonials-box-card">
                                        <div className="card pt-3">
                                            <div className="card-body">
                                                <div className="pt-0">
                                                    <h6 className="testimonials_card_subtitle"> “{item.heading_name}”</h6>
                                                    <p className="testimonials_card_discription">{item.heading_description}</p>
                                                </div>

                                                <div className="row g-0 pt-3">
                                                    <div className="col-2">
                                                        <div className="testimonials-profile">

                                                            <img src={`${global.img_url}/landing/testimonial/${item.client_image}` || `https://dev.zaimahtech.com/ztl-server/landing/testimonial/${item.client_image}`} className="img-fluid" alt="DrPhen" />

                                                        </div>
                                                    </div>
                                                    <div className="col-10">
                                                        <div className="card-body">
                                                            <h6 className="f-test-card-title">{item.client_name}</h6>
                                                            <p className="f-test-card-subtitle"><small>{item.client_designation} ,{item.client_company_name}</small></p>
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
            </div>

            <GoogleMap />
        </>
    );
};


export default MainHomePage;
