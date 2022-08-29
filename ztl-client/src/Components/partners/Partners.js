import React, { useState,useEffect} from 'react';
import SocialIcons from './../social_Icons/SocialIcons';
import our_partner from '../../Images/our_partner.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import world_fav from '../../Images/world_fav.png';
import world_quantic from '../../Images/world_quantic.png';
import world_navorium from '../../Images/world_navorium.png';
import world_edb from '../../Images/world_edb.png';
import testimonial_card_img from '../../Images/testimonial_card_img.jpg';
import cardt_invert_coma_top_img from '../../Images/cardt_invert_coma_top_img.png';
import cardt_invert_coma_bottom_img from '../../Images/cardt_invert_coma_bottom_img.png';

import web from '../../Images/web.png';
import android from '../../Images/android.png';
import iOS from '../../Images/iOS.png';
import ioT from '../../Images/ioT.png';
import ai from '../../Images/ai.png';
import block_chain from '../../Images/block_chain.png';
import axios from 'axios';

const Partners = () => {
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
        className: "center mx-4",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        swipeToSlide: true,
        adaptiveHeight: false,
        // adaptiveHeight: true,
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        }
        // className: "center",
        // dots: true,
        // infinite: false,
        // speed: 500,
        // slidesToShow: 4,
        // slidesToScroll: 4,
        // initialSlide: 0,
        // responsive: [
        //     {
        //         breakpoint: 1024,
        //         WebTechnologiesFrameworksSlider: {
        //             slidesToShow: 3,
        //             slidesToScroll: 3,
        //             infinite: true,
        //             dots: true
        //         }
        //     },
        //     {
        //         breakpoint: 600,
        //         WebTechnologiesFrameworksSlider: {
        //             slidesToShow: 2,
        //             slidesToScroll: 2,
        //             initialSlide: 2,
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         WebTechnologiesFrameworksSlider: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1
        //         }
        //     }
        // ]

    };
    const [ourWorldwidePartners, setOurWorldwidePartners] = useState([
        { technologies_img: world_fav, id: 1 },
        { technologies_img: world_quantic, id: 2 },
        { technologies_img: world_navorium, id: 3 },
        { technologies_img: world_edb, id: 4 },
        { technologies_img: world_fav, id: 5 },
        { technologies_img: world_quantic, id: 6 },
        { technologies_img: world_navorium, id: 7 },
        { technologies_img: world_edb, id: 8 },

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

    const [ourPartner, setOurPartner] = useState([]);
    const [allTechnologyIndex, setAllTechnologyIndex] = useState([]);
    const [allTechnologyIndexLogo, setAllTechnologyIndexLogo] = useState([]);
    const [allPartnerTitleLogo, setAllPartnerTitleLogo] = useState([]);
    const [allTestimonial, setAllTestimonial] = useState([]);

    console.log('cjecking',allTestimonial)

     useEffect(()=>{
        axios.get(`/our-partners`).then(res => {
            if (res.data.status === 200) {
                console.log(res.data.our_partner);
                setOurPartner(res.data.our_partner);
            }

        });

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
        axios.get(`/our-partner-title-logo`).then(res => {
            if (res.data.status == 200) {
                setAllPartnerTitleLogo(res.data.partner);
            }
        })
        axios.get(`/our-partner-testimonial`).then(res => {
            if (res.data.status == 200) {
                setAllTestimonial(res.data.testimonial);
            }
        })
     },[])

    return (
        <>
            <div className="container pt-4">
                <SocialIcons />
                <div className="row g-3 mb-3">
                    {
                        allPartnerTitleLogo.map((item,i)=>{
                            {
                                var text2 = " ";
    
                                var x = item.title_name.split(" ");
    
                                for (let i = 1; i < x.length; i++) {
                                    text2 += x[i] + " ";
                                }
                                console.log('text2', text2)
    
                                var text1 = item.title_name.split(" ")[0];
    
    
                            }
                            return(
                                <>
                                    <div className="col-md-7">
                        <div className="header__partner">
                        <h1 className="header-web-development"><span className="header-soft">{text1}</span> {text2}</h1>
                        {/* <h1 className="header-web-development">{item.title_name} </h1> */}
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="our__partner">
                            <img src={`${global.img_url}/images/webdevcare/${item.image}`} className="img-fluid" alt="our_partner" border="0" />
                        </div>
                    </div>
                                </>
                            )
                        })
                    }
                
                </div>

                <div className="row py-4">
                    <div className="col-12">
                        <h3 className="header__world__partner">Our Worldwide Partners</h3>
                        <div className="web__carousel pt-4">
                            <Slider {...WebTechnologiesFrameworksSlider}>
                                {
                                    ourPartner.length > 0 && ourPartner.map((item, id) => {
                                        return (
                                            <div key={id} className="row g-2">
                                                <div className="col-12">
                                                    <div className="web__carousel__box__card">
                                                        <div className="card text-center">
                                                            <div className="d-flex justify-content-center pt-3">
                                                                <img src={`${global.img_url}/images/our_partners/${item.image}`}className="card-img-top" alt="partner img" style={{ width: "210px", height: "90px" }} />
                                                            </div>
                                                            {/* <div className="card-body">
                                                                <p className="web__carousel__box__card__discription ">{item.technologies_name}</p>
                                                            </div> */}
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
                <div className="row g-3 pt-5 ">
                    <div className="col-md-6 ">
                        <h3 className="header__partner__index"><span className="header-soft">Technology Index</span></h3>
                        {
                            allTechnologyIndex.map((item,i)=>{
                                return (
                                    <>
                                      <h3 className="header__partner__subtitle">{item.heading_name}</h3>
                        <p className="software_description pe-md-5">
                           {item.heading_description}
                        </p>
                                    
                                    </>
                                )
                            })
                        }
                      
                    </div>
                    <div className="col-md-6">
                        <div className="row g-3">
                            {
                                allTechnologyIndexLogo.length > 0 && allTechnologyIndexLogo.map((item, id) => (
                                    <div key={id} className="col-md-4">
                                        <div className="card bg_card_technology">
                                            <div className="pt-4">
                                                <img src={`${global.img_url}/images/technology_index_logo/${item.technology_logo}` }  className="rounded" style={{ width: '50px', height: '50px' }} alt="web" />
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
                <div className="row g-3 mb-2 pt-5">
                    <div className="col-12">
                        <h3 className="header__partner__index"><span className="header-soft">Testimonials</span></h3>
                        <p className="key-web-technology-description">
                            Here are some highlights from our client reviews that are featured on
                        </p>
                    </div>
                </div>
                <div className="row g-3 pt-3 mb-5">
                    {
                        allTestimonial.length > 0 && allTestimonial.map((item, id) => {
                            return (
                                <div className="col-md-4">
                                    <div className="testimonials-box-card">
                                        <div className="card pt-3">
                                            <div className="card-body">
                                                <div className="pt-0">
                                                    <h6 className="testimonials_card_subtitle">{item.heading_name}</h6>
                                                    <p className="testimonials_card_discription">{item.heading_description}</p>
                                                </div>
                                                <div className="row g-0 pt-3">
                                                    <div className="col-2">
                                                        <div className="testimonials-profile">
                                                            <img src={`${global.img_url}/landing/testimonial/${item.client_image}` } className="img-fluid" alt="image" />
                                                        </div>
                                                    </div>
                                                    <div className="col-10">
                                                        <div className="card-body">
                                                            <h6 className="f-test-card-title">{item.client_name}</h6>
                                                            <p className="f-test-card-subtitle"><small>{item.client_designation},{item.client_company_name}</small></p>
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
        </>
    );
};

export default Partners;