import React, { useState } from 'react';
import SocialIcons from './../social_Icons/SocialIcons';
import web_dev_img from '../../Images/web_dev_img.png';
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
import Desk from '../../Images/Desk.png';



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "white", borderRadius: "100px" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "white", borderRadius: "100px" }}
            onClick={onClick}
        />
    );
}


const Digitization = () => {
    const DigitizationFrameworksSlider = {
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
        // or 
        className: "center",
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
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
    const [digitizationTechFrameworks, setDigitizationTechFrameworks] = useState([
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
    const [ourRecentDigitizationProjects, setOurRecentDigitizationProjects] = useState([
        { projects_name: "Clinical Management System", id: 1 },
        { projects_name: "E-Commerce Platform for Automotive Products", id: 2 },
        { projects_name: "HR Portal for Job Posting Automatization", id: 3 },
        { projects_name: "Automated Legal Contracts Generation", id: 4 },
        { projects_name: "Clinical Management System", id: 5 },
        { projects_name: "E-Commerce Platform for Automotive Products", id: 6 },
        { projects_name: "HR Portal for Job Posting Automatization", id: 7 },
        { projects_name: "Automated Legal Contracts Generation", id: 8 },
    ]);
    const [ourRecentDigitizationUse, setOurRecentDigitizationUse] = useState([
        { technologies_name: "JavaScript", id: 1 },
        { technologies_name: "Node.JS", id: 2 },
        { technologies_name: "React.JS", id: 3 },
        { technologies_name: "PHP", id: 4 },
        { technologies_name: "Laravel", id: 5 },
        { technologies_name: "Fluter", id: 6 },
        { technologies_name: "MySQL", id: 7 },
        { technologies_name: "MongoDB", id: 8 },
    ]);
    console.log("ourRecentDigitizationUse", ourRecentDigitizationUse)
    return (
        <>
            <div className="container mb-5 pt-4">
                <SocialIcons />
                <div className="row g-3 mb-2">
                    <div className="col-md-6">
                        <div className="mobile__platform">
                            <h1 className="header-web-development">Digitization</h1>
                        </div>
                        <div className="web-development-btn">
                            <a src="#" type="text" className="btn btn-get-quate">Get a Quote</a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mobile__platform__img">
                            <img src={web_dev_img} className=" img-fluid " alt="web_dev_img" border="0" />
                        </div>
                    </div>
                </div>
                <div className="row g-3 pt-3">
                    <div className="col-md-6">
                        <div className="web-development-box">
                            <div className="web-development-box-card">
                                <div className="card">
                                    <div className="card-body">
                                        <h6 className="web-development-card-title ">Back-End Development</h6>
                                        <hr className="web-development-hr" />
                                        <p className="testimonials_card_discription">
                                            Zaimah Technology back-end development team comprises 250+ full-time engineers working
                                            for companies across multiple domains. For the past 20+ years, we have successfully
                                            completed 600+ projects for more than 300+ customers worldwide.
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
                        <div className="web-development-box">
                            <div className="web-development-box-card">
                                <div className="card">
                                    <div className="card-body">
                                        <h6 className="web-development-card-title ">Back-End Development</h6>
                                        <hr className="web-development-hr" />
                                        <p className="testimonials_card_discription">
                                            Zaimah Technology back-end development team comprises 250+ full-time engineers working
                                            for companies across multiple domains. For the past 20+ years, we have successfully
                                            completed 600+ projects for more than 300+ customers worldwide.
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
                <div className="row g-3 mb-2  pt-5">
                    <div className="col-12">
                        <h3 className="header-key-web-technology">Key Web Technologies and</h3>
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
                <div className="row pt-3 mb-4">
                    <div className="col-12">
                        <div className="web__carousel">
                            <Slider {...DigitizationFrameworksSlider}>
                                {
                                    digitizationTechFrameworks.length > 0 && digitizationTechFrameworks.map((item, id) => {
                                        return (
                                            <div key={id} className="row g-2">
                                                <div className="col-12">
                                                    <div className="web__carousel__box__card">
                                                        <div className="card text-center">
                                                            {/* <div className="d-flex justify-content-center pt-4">
                                                                <img src={item.technologies_img} className="card-img-top" alt="..." style={{ width: "50px", height: "40px" }} />
                                                            </div>
                                                            <div className="card-body">
                                                                <p className="card__web__projects__text__list">{item.technologies_name}</p>
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
                <div className="row g-3 pt-5">
                    <div className="col-12">
                        <h3 className="header-key-web-technology">Our Recent Web Projects</h3>
                        <div className="row g-3 pt-2">
                            {
                                ourRecentDigitizationProjects.length > 0 && ourRecentDigitizationProjects.map((item, id) => {
                                    return (
                                        <>
                                            <div key={id} className="col-sm-3">
                                                <div className="web-development-box">
                                                    <div className="card__web__projects__box__card">
                                                        <div className="card">
                                                            <div className="card-body">
                                                                <h6 className="card__web__projects__card__title">{item.projects_name}</h6>
                                                                <div className="card__web__projects__text__list">
                                                                    {
                                                                        ourRecentDigitizationUse.length > 0 && ourRecentDigitizationUse.map((item, id) => {
                                                                            return (
                                                                                <ul key={id} className="pt-1">
                                                                                    <li className="card__web__projects__text">{item.technologies_name}</li>
                                                                                </ul>
                                                                            )
                                                                        })
                                                                    }
                                                                </div>

                                                            </div>
                                                        </div>
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
                <div className="row g-3 pt-4">
                    <div className="col-12">
                        <a src="#" type="text" className="btn btn-discover-all-services">Discover More Projects</a>
                    </div>
                </div>
                <div className="row g-3 mb-2 pt-5">
                    <div className="col-12">
                        <h3 className="header-key-web-technology">FAQ</h3>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <p className="key-web-technology-description">
                                    Starting a new project and have a few questions? Some of the most frequently asked questions
                                    and answers about custom web application development are listed below.
                                </p>
                                <div className="accordion pt-3" id="faqlist">
                                    <div className="accordion-item mb-3 border">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed key-web-technology-description" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                                                What is the best language for web application development ?
                                            </button>
                                        </h2>
                                        <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                            <div className="accordion-body">
                                                <p className="key-web-technology-description"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item mb-3 border">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed key-web-technology-description" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                                                How long does it take to develop a web application ?
                                            </button>
                                        </h2>
                                        <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                            <div className="accordion-body">
                                                <p className="key-web-technology-description">
                                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
                                                    is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item mb-3 border">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed key-web-technology-description" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                                                How much does it cost to develop a web application?
                                            </button>
                                        </h2>
                                        <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                            <div className="accordion-body">
                                                <p className="key-web-technology-description">
                                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item mb-3 border">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed key-web-technology-description" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-4">
                                                How to choose a technology stack for web application development?
                                            </button>
                                        </h2>
                                        <div id="faq-content-4" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                            <div className="accordion-body">
                                                <p className="key-web-technology-description">
                                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 ">
                                <div className="faq__img">
                                    <img src={Desk} className=" img-fluid" alt="Desk" border="0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Digitization;