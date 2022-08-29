import React, { useEffect, useState } from 'react';
import SocialIcons from './../social_Icons/SocialIcons';
import erp_web from '../../Images/erp_web.png';
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
import custom_document from '../../Images/custom_document.png';
import custom_buisness from '../../Images/custom_buisness.png';
import custom_supply from '../../Images/custom_supply.png';


import axios from 'axios';

const ERPSolutions = () => {
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

        // Or 
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
    const CustomEnterpriseSolutionsSlider = {
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

        // Or 
        className: "center",
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
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
    const [customEnterpriseSolutions, setCustomEnterpriseSolutions] = useState([
        {
            description: "Healthcare workplace solutions we deliver are aimed at automating daily routine and enabling care coordination for nurses and doctors. Our goal is to digitize medical information, so clinical pictures of patients become quickly and easily accessible for doctors. Solutions we develop work both on desktops and mobiles.",
            title_name: "Document Management System", technologies_img: custom_document, id: 1
        },
        {
            description: "Healthcare workplace solutions we deliver are aimed at automating daily routine and enabling care coordination for nurses and doctors. Our goal is to digitize medical information, so clinical pictures of patients become quickly and easily accessible for doctors. Solutions we develop work both on desktops and mobiles.",
            title_name: "Business Process Management System", technologies_img: custom_buisness, id: 2
        },
        {
            description: "Healthcare workplace solutions we deliver are aimed at automating daily routine and enabling care coordination for nurses and doctors. Our goal is to digitize medical information, so clinical pictures of patients become quickly and easily accessible for doctors. Solutions we develop work both on desktops and mobiles.",
            title_name: "Medication and Supply Management Solutions", technologies_img: custom_supply, id: 3
        },
        {
            description: "Healthcare workplace solutions we deliver are aimed at automating daily routine and enabling care coordination for nurses and doctors. Our goal is to digitize medical information, so clinical pictures of patients become quickly and easily accessible for doctors. Solutions we develop work both on desktops and mobiles.",
            title_name: "Document Management System", technologies_img: custom_document, id: 4
        },
        {
            description: "Healthcare workplace solutions we deliver are aimed at automating daily routine and enabling care coordination for nurses and doctors. Our goal is to digitize medical information, so clinical pictures of patients become quickly and easily accessible for doctors. Solutions we develop work both on desktops and mobiles.",
            title_name: "Business Process Management System", technologies_img: custom_buisness, id: 5
        },
        {
            description: "Healthcare workplace solutions we deliver are aimed at automating daily routine and enabling care coordination for nurses and doctors. Our goal is to digitize medical information, so clinical pictures of patients become quickly and easily accessible for doctors. Solutions we develop work both on desktops and mobiles.",
            title_name: "Medication and Supply Management Solutions", technologies_img: custom_supply, id: 6
        },

    ]);
    const [allErpTitleLogo, setAllErpTitleLogo] = useState([]);
    const [allErpSolutionCard, setAllErpSolutionCard] = useState([]);
    const [keyErp, setkeyErp] = useState([]);
    const [AllErpSolution, setAllErpSolution] = useState([]);
    const [allErpTechnologies, setAllErpTechnologies] = useState([]);

    useEffect(() => {
        axios.get(`/erp-solution-title-logo`).then(res => {
            if (res.data.status == 200) {
                setAllErpTitleLogo(res.data.erp);
            }
        })
        axios.get(`/erp-solution-card`).then(res => {
            if (res.data.status == 200) {
                setAllErpSolutionCard(res.data.erp);
            }
        })
        axios.get(`/key-erp-technologies`).then(res => {
            if (res.data.status == 200) {
                setkeyErp(res.data.erp);
            }
        })
        axios.get(`/custom-erp-solution`).then(res => {
            if (res.data.status == 200) {
                setAllErpSolution(res.data.erp);
            }
        })
        axios.get(`/erp-technologies-framework-logo`).then(res => {
            if (res.data.status == 200) {
                setAllErpTechnologies(res.data.erp);
            }
        })


    }, [])

    return (
        <>
            <div className="container mb-5 mt-4">
                <SocialIcons />
                <div className="row g-3 mb-3">
                    {
                        allErpTitleLogo.map((item, i) => {
                            {
                                var text2 = " ";

                                var x = item.title_name.split(" ");

                                for (let i = 1; i < x.length; i++) {
                                    text2 += x[i] + " ";
                                }
                                console.log('text2', text2)

                                var text1 = item.title_name.split(" ")[0];


                            }
                            return (

                                <>

                                    <div className="col-md-7 pe-md-5 pt-5">
                                        <h1 className="header-web-development"><span className="header-soft">{text1}</span> {text2}</h1>
                                        {/* <h1 className="header-web-development"> {item.title_name}</h1> */}
                                        <div className="web-development-btn">
                                            <a src="#" type="text" className="btn btn-get-quate">Get a Quote</a>
                                        </div>
                                    </div>
                                    <div className="col-md-5 pt-2 ">
                                        <div className="erp__web">
                                            <img src={`${global.img_url}/images/erp/${item.image}`} className="img-fluid" alt="erp_web" border="0" />
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }

                </div>
                <div className="row g-3 pt-4">
                    {
                        allErpSolutionCard.map((item, i) => {
                            return (
                                <>
                                    <div className="col-md-6">
                                        <div className="healthcare__box">
                                            <div className="healthcare__box__card">
                                                <div className="card pt-2">
                                                    <div className="card-body">
                                                        <h6 className="healthcare__box__card__title">{item.title}</h6>
                                                        <hr className="healthcare__hr" />
                                                        <p className="healthcare__box__card__discription">
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
                <div className="row g-3 mb-2">
                    <div className="col-12 pt-5">
                        <h3 className="header-key-web-technology">Key Erp Solutions Technology and</h3>
                        <h3 className="header-key-web-technology">Frameworks</h3>
                        {
                            keyErp.map((item, i) => {
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
                <div className="row pt-3">
                    <div className="col-12">
                        <div className="web__carousel">
                            <Slider {...WebTechnologiesFrameworksSlider}>
                                {
                                    allErpTechnologies.length > 0 && allErpTechnologies.map((item, id) => {
                                        return (
                                            <div key={id} className="row g-2">
                                                <div className="col-12">
                                                    <div className="web__carousel__box__card">
                                                        <div className="card text-center">
                                                            {/* <div className="d-flex justify-content-center pt-4">
                                                                <img src={`${global.img_url}/images/our_partners/${item.image}`} className="card-img-top" alt="..." style={{ width: "50px", height: "40px" }} />
                                                            </div>
                                                            <div className="card-body">
                                                                <p className="web__carousel__box__card__discription ">{item.technologies_name}</p>
                                                            </div> */}
                                                            <div className="pt-0">
                                                                <img src={`${global.img_url}/images/our_partners/${item.image}`} className="img-fluid" alt="..." style={{ width: "100%", height: "120px" }} />
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

                <div className="row g-3 mb-2">
                    <div className="col-12 pt-5">
                        <h3 className="header-key-web-technology">Custom Enterprise Solutions</h3>
                        <p className="key-web-technology-description ">
                            Zaimah Technologies delivers custom enterprise software solutions for businesses of all sizes
                            and industry domains. We create mobile, desktop and cloud solutions for small, mid-sized and
                            large companies operating in logistics, education, energy, healthcare, manufacturing, e-commerce
                            and retail fields. Among the systems we develop are: orders management, warehouse management,
                            document management, insurance, HR management, job vacancies management, BPM and KPI management systems.
                        </p>
                    </div>
                </div>

                <div className="row mb-5 pt-3">
                    <div className="col-12">
                        <div className="web__carousel">
                            <Slider {...CustomEnterpriseSolutionsSlider}>
                                {
                                    AllErpSolution.length > 0 && AllErpSolution.map((item, id) => {
                                        return (
                                            <div key={id} className="row g-2">
                                                <div className="col-12">
                                                    <div className="healthcare__it__carousel__box__card">
                                                        <div className="card text-center">
                                                            <div className="d-flex justify-content-center pt-4">
                                                                <img src={`${global.img_url}/images/service_type/${item.image}`} className="card-img-top" alt="image" style={{ width: "80px", height: "85px" }} />
                                                            </div>
                                                            <div className="card-body">
                                                                <h6 className="header-soft mb-2">{item.title}</h6>
                                                                <p className="healthcare__it__carousel__discription">{item.short_description}</p>
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

export default ERPSolutions;