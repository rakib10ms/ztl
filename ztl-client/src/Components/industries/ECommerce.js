import React, { useState } from 'react';
import SocialIcons from './../social_Icons/SocialIcons';
import healthcare_dev from '../../Images/healthcare_dev.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import javascript from '../../Images/javascript.png';
import nodejs from '../../Images/nodejs.png';
import react from '../../Images/react.png';
import angular from '../../Images/angular.png';
import php from '../../Images/php.png';
import laravel from '../../Images/laravel.png';
import mysql from '../../Images/mysql.png';
import fluter from '../../Images/fluter.png';
import healthcare_doctors from '../../Images/healthcare_doctors.png';
import healthcare_patients from '../../Images/healthcare_patients.png';
import healthcare_mangements from '../../Images/healthcare_mangements.png';



const ECommerce = () => {
    const EcommerceTechFrameworksSlider = {
        // className: "center mx-4",
        // infinite: true,
        // centerPadding: "60px",
        // slidesToShow: 5,
        // swipeToSlide: true,
        // adaptiveHeight: true,
        // afterChange: function (index) {
        //     console.log(
        //         `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        //     );
        // }
        className: "center",
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };
    const OurEcommerceTSolutionsSlider = {
        // className: "center mx-4",
        // infinite: true,
        // centerPadding: "60px",
        // slidesToShow: 3,
        // swipeToSlide: true,
        // adaptiveHeight: false,
        // // adaptiveHeight: true,
        // afterChange: function (index) {
        //     console.log(
        //         `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        //     );
        // }
        className: "center",
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };
    const [ecommerceTechFrameworks, setEcommerceTechFrameworks] = useState([
        { technologies_name: "JavaScript", technologies_img: javascript, id: 1 },
        { technologies_name: "Node.js", technologies_img: nodejs, id: 2 },
        { technologies_name: "React.js", technologies_img: react, id: 3 },
        { technologies_name: "Angular.js", technologies_img: angular, id: 4 },
        { technologies_name: "PHP", technologies_img: php, id: 5 },
        { technologies_name: "Laravel", technologies_img: laravel, id: 6 },
        { technologies_name: "MySql", technologies_img: mysql, id: 7 },
        { technologies_name: "Fluter", technologies_img: fluter, id: 8 },
        { technologies_name: "PHP", technologies_img: php, id: 9 },

    ]);
    const [ourEcommerceITSolutions, setOurHealthcareITSolutions] = useState([
        {
            description: "Healthcare workplace solutions we deliver are aimed at automating daily routine and enabling care coordination for nurses and doctors. Our goal is to digitize medical information, so clinical pictures of patients become quickly and easily accessible for doctors. Solutions we develop work both on desktops and mobiles.",
            title_name: "Healthcare Solutions for Doctors", technologies_img: healthcare_doctors, id: 1
        },
        {
            description: "Healthcare workplace solutions we deliver are aimed at automating daily routine and enabling care coordination for nurses and doctors. Our goal is to digitize medical information, so clinical pictures of patients become quickly and easily accessible for doctors. Solutions we develop work both on desktops and mobiles.",
            title_name: "Healthcare Solutions for Patients", technologies_img: healthcare_patients, id: 2
        },
        {
            description: "Healthcare workplace solutions we deliver are aimed at automating daily routine and enabling care coordination for nurses and doctors. Our goal is to digitize medical information, so clinical pictures of patients become quickly and easily accessible for doctors. Solutions we develop work both on desktops and mobiles.",
            title_name: "Medication and Supply Management Solutions", technologies_img: healthcare_mangements, id: 3
        },
        {
            description: "Healthcare workplace solutions we deliver are aimed at automating daily routine and enabling care coordination for nurses and doctors. Our goal is to digitize medical information, so clinical pictures of patients become quickly and easily accessible for doctors. Solutions we develop work both on desktops and mobiles.",
            title_name: "Healthcare Solutions for Doctors", technologies_img: healthcare_doctors, id: 4
        },
        {
            description: "Healthcare workplace solutions we deliver are aimed at automating daily routine and enabling care coordination for nurses and doctors. Our goal is to digitize medical information, so clinical pictures of patients become quickly and easily accessible for doctors. Solutions we develop work both on desktops and mobiles.",
            title_name: "Healthcare Solutions for Patients", technologies_img: healthcare_patients, id: 5
        },
        {
            description: "Healthcare workplace solutions we deliver are aimed at automating daily routine and enabling care coordination for nurses and doctors. Our goal is to digitize medical information, so clinical pictures of patients become quickly and easily accessible for doctors. Solutions we develop work both on desktops and mobiles.",
            title_name: "Medication and Supply Management Solutions", technologies_img: healthcare_mangements, id: 6
        },

    ]);
    return (
        <>
            <div className="container mb-5 pt-4">
                <SocialIcons />
                <div className="row g-3 mb-3">
                    <div className="col-md-7">
                        <div className="healthcare">
                            <h1 className="header-web-development"><span className="header-soft">E</span>-Commerce</h1>
                        </div>
                        <div className="web-development-btn">
                            <a src="#" type="text" className="btn btn-get-quate">Get a Quote</a>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="healthcare__dev">
                            <img src={healthcare_dev} className="img-fluid" alt="healthcare_dev" border="0" />
                        </div>
                    </div>
                </div>
                <div className="row g-3 pt-5">
                    <div className="col-md-6">
                        <div className="healthcare__box">
                            <div className="healthcare__box__card">
                                <div className="card pt-2">
                                    <div className="card-body">
                                        <h6 className="healthcare__box__card__title">Ecommerce Web App Development</h6>
                                        <hr className="healthcare__hr" />
                                        <p className="healthcare__box__card__discription">
                                            Zaimah Technology back-end development team comprises 250+ full-time engineers
                                            working for companies across multiple domains. For the past 20+ years, we have
                                            successfully completed 600+ projects for more than 300+ customers worldwide.
                                        </p>
                                        <div className="backend-development-btn">
                                            <a src="#" type="text" className="btn-learn-more">
                                                <span>Learn More</span>
                                                <span> <i className="fa-solid fa-arrow-right-long"></i></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="healthcare__box">
                            <div className="healthcare__box__card">
                                <div className="card pt-2">
                                    <div className="card-body">
                                        <h6 className="healthcare__box__card__title ">E-commerce Mobile App Development</h6>
                                        <hr className="healthcare__hr" />
                                        <p className="healthcare__box__card__discription">
                                            With 15+ years of experience and 170+ Javascript developers on board, Zaimah Technology provides
                                            its clients with top-notch front end web development solutions. We have successfully implemented
                                            more than 50 projects for over 40 clients across the globe.
                                        </p>
                                        <div className="backend-development-btn">
                                            <a src="#" type="text" className="btn-learn-more">
                                                <span>Learn More</span>
                                                <span> <i className="fa-solid fa-arrow-right-long"></i></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-3 mb-2 pt-5">
                    <div className="col-12">
                        <h3 className="header-key-web-technology">Key E-commerce Technologies and</h3>
                        <h3 className="header-key-web-technology">Frameworks</h3>
                        <p className="key-web-technology-description">
                            As a custom web application development company we offer a wide range of technologies
                            to deliver exquisitely robust web app solutions for our clients. Along with core fundamental
                            languages and technologies as Java, .Net and PHP, we use innovative frameworks to better
                            serve our customers. By mixing technology stacks effectively, we build apps that deliver
                            value to customers and give companies strong online presence.
                        </p>
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col-12">
                        <div className="web__carousel">
                            <Slider {...EcommerceTechFrameworksSlider}>
                                {
                                    ecommerceTechFrameworks.length > 0 && ecommerceTechFrameworks.map((item, id) => {
                                        return (
                                            <div key={id} className="row g-2">
                                                <div className="col-12">
                                                    <div className="web__carousel__box__card">
                                                        <div className="card text-center">
                                                            {/* <div className="d-flex justify-content-center pt-4">
                                                                <img src={item.technologies_img} className="card-img-top" alt="..." style={{ width: "50px", height: "40px" }} />
                                                            </div>
                                                            <div className="card-body">
                                                                <p className="web__carousel__box__card__discription ">{item.technologies_name}</p>
                                                            </div> */}
                                                            <div className="pt-0">
                                                                <img src={item.technologies_img} className="img-fluid" alt="..." style={{ width: "100%", height: "120px" }} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className="row g-3 mb-2  pt-5">
                    <div className="col-12">
                        <h3 className="header-key-web-technology">Our E-commerce IT Solutions</h3>
                        <p className="healthcare__description">
                            While the names of our clients and developed software are protected by strong NDAs,
                            here are some examples of solutions we’ve delivered to healthcare and medical organizations.
                        </p>
                    </div>
                </div>
                <div className="row mb-5 pt-3">
                    <div className="col-12">
                        <div className="web__carousel">
                            <Slider {...OurEcommerceTSolutionsSlider}>
                                {
                                    ourEcommerceITSolutions.length > 0 && ourEcommerceITSolutions.map((item, id) => {
                                        return (
                                            <div key={id} className="row g-2">
                                                <div className="col-12">
                                                    <div className="healthcare__it__carousel__box__card">
                                                        <div className="card text-center">
                                                            <div className="d-flex justify-content-center pt-4">
                                                                <img src={item.technologies_img} className="card-img-top" alt="image" style={{ width: "80px", height: "85px" }} />
                                                            </div>
                                                            <div className="card-body">
                                                                <h6 className="header-soft mb-2">{item.title_name}</h6>
                                                                <p className="healthcare__it__carousel__discription">{item.description}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </Slider>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default ECommerce;