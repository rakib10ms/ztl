import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SocialIcons from './../social_Icons/SocialIcons';
import Character from '../../Images/Character.png';
import Slider from "react-slick";
import javascript from '../../Images/javascript.png';
import nodejs from '../../Images/nodejs.png';
import react from '../../Images/react.png';
import angular from '../../Images/angular.png';
import php from '../../Images/php.png';
import laravel from '../../Images/laravel.png';
import mysql from '../../Images/mysql.png';
import fluter from '../../Images/fluter.png';
import Desk from '../../Images/Desk.png';

import axios from 'axios';


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


const WebDevelopment = () => {
    const WebTechnologiesFrameworksSlider = {
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
    const [webTechFrameworks, setWebTechFrameworks] = useState([
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
    const [ourRecentWebProjects, setOurRecentWebProjects] = useState([
        { projects_name: "Clinical Management System", id: 1 },
        { projects_name: "E-Commerce Platform for Automotive Products", id: 2 },
        { projects_name: "HR Portal for Job Posting Automatization", id: 3 },
        { projects_name: "Automated Legal Contracts Generation", id: 4 },
        { projects_name: "Clinical Management System", id: 5 },
        { projects_name: "E-Commerce Platform for Automotive Products", id: 6 },
        { projects_name: "HR Portal for Job Posting Automatization", id: 7 },
        { projects_name: "Automated Legal Contracts Generation", id: 8 },
    ]);
    const [ourRecentWebUse, setOurRecentWebUse] = useState([
        { technologies_name: "JavaScript", id: 1 },
        { technologies_name: "Node.JS", id: 2 },
        { technologies_name: "React.JS", id: 3 },
        { technologies_name: "PHP", id: 4 },
        { technologies_name: "Laravel", id: 5 },
        { technologies_name: "Fluter", id: 6 },
        { technologies_name: "MySQL", id: 7 },
        { technologies_name: "MongoDB", id: 8 },
    ]);
    console.log("ourRecentWebUse", ourRecentWebUse);

    const [allWeb, setAllWeb] = useState([]);
    const [allWebCard, setAllWebCard] = useState([]);
    const [keyWeb, setkeyWeb] = useState([]);
    const [allWebLogo, setAllWebLogo] = useState([]);
    const [allFaqImage, setAllFaqImage] = useState([]);
    const [allFaq, setallFaq] = useState([]);
    const [allWebProject, setAllWebProject] = useState([]);


    console.log('all web check', allWebProject)

    useEffect(() => {
        axios.get(`/web-development-title-logo`).then(res => {
            if (res.data.status == 200) {
                setAllWeb(res.data.webdev);
            }
        })
        axios.get(`/web-development-card`).then(res => {
            if (res.data.status == 200) {
                setAllWebCard(res.data.web_dev);
            }
        })
        axios.get(`/key-web-technologies`).then(res => {
            if (res.data.status == 200) {
                setkeyWeb(res.data.web);
            }
        })
        axios.get(`/web-technologies-framework-logo`).then(res => {
            if (res.data.status == 200) {
                setAllWebLogo(res.data.web);
            }
        })
        axios.get(`/web-development-faq-image`).then(res => {
            if (res.data.status == 200) {
                setAllFaqImage(res.data.faq_image);
            }
        })
        axios.get(`/web-development-faq`).then(res => {
            if (res.data.status == 200) {
                setallFaq(res.data.faq);
            }
        })

        axios.get(`/web-development-project`).then(res => {
            if (res.data.status == 200) {
                setAllWebProject(res.data.web_dev);
            }
        })
    }, []);




    return (
        <>
            <div className="container mb-5 pt-5">
                <SocialIcons />

                {
                    allWeb.map((item, i) => {

                        var text2 = " ";

                        {
                            var x = item.title_name.split(" ");

                            for (let i = 1; i < x.length; i++) {
                                text2 += x[i] + " ";
                            }
                            console.log('text2', text2)

                            var text1 = item.title_name.split(" ")[0];


                        }

                        return (

                            <>
                                <div className="row g-3">
                                    <div className="col-md-7 pe-md-5">
                                        <div className="header__dev">
                                            <h1 className="header-web-development">{text1} <span className="header-soft">{text2}</span></h1>
                                            {/* <h1 className="header-web-development"> {item.title_name}</h1> */}
                                            <div className="web-development-btn">
                                                <a src="#" type="text" className="btn btn-get-quate">Get a Quote</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5 ">
                                        <div className="character__img">
                                            <img src={`${global.img_url}/images/webdevcare/${item.image}`} className="img-fluid" alt="Character" border="0" />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
                {/* <div className="row g-3">
                    <div className="col-md-7 pe-md-5">
                      <div className="header__dev">
                            <h1 className="header-web-development">Web <span className="header-soft">Development</span></h1>
                            <h1 className="header-web-development"> Services</h1>
                            <div className="web-development-btn">
                                <a src="#" type="text" className="btn btn-get-quate">Get a Quote</a>
                            </div>
                      </div>
                    </div>
                    <div className="col-md-5 ">
                        <div className="character__img">
                            <img src={Character} className="img-fluid" alt="Character" border="0" />
                        </div>
                    </div>
                </div> */}
                <div className="row g-3 pt-5">
                    {
                        allWebCard.map((item, i) => {
                            return (

                                <>

                                    <div className="col-md-6">
                                        <div className="web-development-box">
                                            <div className="web-development-box-card">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h6 className="web-development-card-title">{item.title}</h6>
                                                        <hr className="web-development-hr" />
                                                        <p className="testimonials_card_discription">
                                                            {item.short_description}
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


                                </>

                            )
                        })
                    }

                </div>
                <div className="row g-3 pt-5">
                    <div className="col-12">
                        <h3 className="header-key-web-technology">Key Web Technologies and</h3>
                        <h3 className="header-key-web-technology">Frameworks</h3>
                        {
                            keyWeb.map((item, i) => {
                                return (
                                    <>
                                        <p className="key-web-technology-description">
                                            {item.short_description}
                                        </p>

                                    </>
                                )
                            })
                        }

                    </div>
                </div>
                <div className="row g-3 pt-4">
                    <div className="col-12">
                        <div className="web__carousel">
                            <Slider {...WebTechnologiesFrameworksSlider}>
                                {
                                    allWebLogo.length > 0 && allWebLogo.map((item, id) => {
                                        return (
                                            <div key={id} className="web__carousel__box__card">
                                                <div className="card text-center">
                                                    {/* <div className="d-flex justify-content-center pt-4">
                                                        <img src={`${global.img_url}/images/our_partners/${item.image}`} className="card-img-top" alt="..." style={{ width: "50px", height: "40px" }} />
                                                    </div>
                                                    <div className="card-body">
                                                        <p className="web__carousel__box__card__discription">{item.technologies_name}</p>
                                                    </div> */}
                                                    <div className="pt-0">
                                                        <img src={`${global.img_url}/images/our_partners/${item.image}`} className="img-fluid" alt="..." style={{ width: "100%", height: "120px" }} />
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
                        <div className="row g-3 pt-3">
                            {
                                allWebProject.length > 0 && allWebProject.map((item, id) => {
                                    return (
                                        <>
                                            <div key={id} className="col-sm-3">
                                                <div className="web-development-box">
                                                    <div className="card__web__projects__box__card">
                                                        <div className="card">
                                                            <div className="card-body">
                                                                <h6 className="card__web__projects__card__title">{item.project_name}</h6>
                                                                <div className="card__web__projects__text__list pt-2">



                                                                    <div dangerouslySetInnerHTML={{ __html: item.technologies }} />




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
                <div className="row g-3 pt-5">
                    <h3 className="header-key-web-technology">FAQ</h3>
                    <div className="col-md-6">
                        <p className="key-web-technology-description">
                            Starting a new project and have a few questions? Some of the most frequently asked questions
                            and answers about custom web application development are listed below.
                        </p>
                        <div className="accordion pt-3" id="faqlist">
                            {
                                allFaq.map((item, i) => {
                                    return (
                                        <>
                                            <div className="accordion-item mb-3 border">

                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed key-web-technology-description" type="button" data-bs-toggle="collapse" data-bs-target={`#${item.faq_qtn.split(" ")[2]}`} aria-expanded={`${i}==0? True: False`} aria-controls={`#${item.faq_qtn.split(" ")[2]}`} >
                                                        {item.faq_qtn}
                                                    </button>
                                                </h2>
                                                {/* {console.log('check split',item.faq_qtn.split(" ")[4])} */}
                                                <div id={item.faq_qtn.split(" ")[2]} className="accordion-collapse collapse" data-bs-parent="#faqlist" aria-labelledby={`Ti${i + 1}`}>
                                                    <div className="accordion-body">
                                                        <p className="key-web-technology-description">
                                                            {item.faq_ans}

                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                        </>
                                    )
                                })
                            }


                            {/* <div className="accordion-item mb-3 border">
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
                            </div> */}
                        </div>
                    </div>
                    <div className="col-md-6 ">
                        {
                            allFaqImage.map((item, i) => {
                                return (
                                    <>
                                        <div className="faq__img">
                                            <img src={`${global.img_url}/images/our_partners/${item.image}`} className="img-fluid" alt="Desk" border="0" />
                                        </div>

                                    </>

                                )
                            })
                        }

                    </div>
                </div>


            </div>
        </>
    );
};

export default WebDevelopment;