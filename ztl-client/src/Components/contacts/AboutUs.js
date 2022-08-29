import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import about_us_img from "../../Images/about_us_img.png";
import our_mission_img from "../../Images/our_mission_img.png";
import our_vission_img from "../../Images/our_vission_img.png";
import healthcare_doctors from '../../Images/healthcare_doctors.png';
import healthcare_patients from '../../Images/healthcare_patients.png';
import healthcare_mangements from '../../Images/healthcare_mangements.png';

import axios from 'axios';


const AboutUs = () => {
    const [allAboutTitleLogo, setAllAboutTitleLogo] = useState([]);
    const [allAboutMissionVission, setAllAboutMissionVission] = useState([]);
    const [allAboutVission, setAllAboutVission] = useState([]);
    const [AllOurValuesCard, setAllOurValuesCard] = useState([]);
    const [allHowWeWork, setAllHowWeWork] = useState([]);

    useEffect(() => {
        axios.get(`/about-us-title-logo`).then(res => {
            if (res.data.status == 200) {
                setAllAboutTitleLogo(res.data.about);
            }
        })
        axios.get(`/about-us-mission`).then(res => {
            if (res.data.status == 200) {
                setAllAboutMissionVission(res.data.about);
            }
        })
        axios.get(`/about-us-vission`).then(res => {
            if (res.data.status == 200) {
                setAllAboutVission(res.data.about);
            }
        })
        axios.get(`/our-values-card`).then(res => {
            if (res.data.status == 200) {
                setAllOurValuesCard(res.data.value);
            }
        })
        axios.get(`/how-we-work`).then(res => {
            if (res.data.status == 200) {
                setAllHowWeWork(res.data.work);
            }
        })

    }, [])



    const ourValuesSlider = {
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

        // or 
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
    const [ourValues, setOurHealthcareITSolutions] = useState([
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
            <div className="container mb-4 pt-3">
                <div className="row g-3 mb-3">
                    {
                        allAboutTitleLogo.map((item, i) => {
                            
                              
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
                                    <div className="col-md-5">
                                        <div className="header__about__us">
                                            <h1 className="header-web-development">{text1}<span className="header-soft">{text2}</span></h1>
                                            {/* <h1 className="header-web-development">{item.title_name}</h1> */}
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="about__us__img">
                                            <img src={`${global.img_url}/images/about/${item.image}`} className="img-fluid" alt="about_us_img" />
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }

                </div>
                <div className="row g-3 mb-3 pt-4">
                    <div className="col-md-8 pe-md-5">
                        <h3 className="header-sub-services"><span className="header-soft">Our Mission</span></h3>
                        {
                            allAboutMissionVission.map((item, i) => {
                                return (
                                    <>
                                        <p className="services_description">
                                            {
                                                item.mission_description
                                            }

                                        </p>
                                    </>
                                )
                            })
                        }


                    </div>
                    <div className="col-md-4">
                        {

                            allAboutMissionVission.map((item, i) => {
                                return (
                                    <>
                                        <div className="our__mission__img">
                                            <img src={`${global.img_url}/images/about/${item.image}`}
                                                className="img-fluid" alt="our_mission_img" />
                                        </div>
                                    </>
                                )
                            })
                        }



                    </div>
                </div>
                <div className="row g-3 mb-3 pt-4">
                    {
                        allAboutVission.map((item, i) => {
                            return (
                                <>
                                    <div className="col-md-4 order-first order-last">
                                        <div className="our_vission_img">
                                            <img src={`${global.img_url}/images/about/${item.image}`} className="img-fluid" alt="our_vission_img" />
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }


                    <div className="col-md-8 pl-md-5 order-sm-first order-sm-last">
                        <h3 className="header-sub-services"><span className="header-soft">Our Vission</span></h3>
                        {
                            allAboutVission.map((item, i) => {
                                return (
                                    <>
                                        <p className="services_description">
                                            {
                                                item.vission_description
                                            }
                                        </p>
                                    </>
                                )
                            })
                        }

                    </div>
                </div>
                <div className="row g-3 pt-4">
                    <div className="col-12">
                        <h3 className="header__let text-center">Our Values</h3>
                        <p className="our__values__description">
                            While the names of our clients and developed software are protected by strong NDAs, here are some examples of solutions
                            we’ve delivered to healthcare and medical organizations.
                        </p>
                    </div>
                </div>
                <div className="row mb-5 pt-3">
                    <div className="col-12">
                        <div className="web__carousel">
                            <Slider {...ourValuesSlider}>


                                {
                                    AllOurValuesCard.length > 0 && AllOurValuesCard.map((item, i) => {
                                        return (
                                            <div key={i} className="row g-2">
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
                <div className="row g-3 pt-4">
                    <div className="col-12">
                        <h3 className="header__let text-center">How We Works</h3>
                        {
                            allHowWeWork.map((item, i) => {
                                return (
                                    <>
                                        <p className="our__values__description">
                                            {
                                                item.short_description
                                            }
                                        </p>
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

export default AboutUs;