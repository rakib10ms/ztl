import React, { useState,useEffect } from 'react';
import SocialIcons from './../social_Icons/SocialIcons';
import case_studies_img from '../../Images/case_studies_img.png';
import news_1 from '../../Images/news_1.png';
import news_2 from '../../Images/news_2.png';
import news_3 from '../../Images/news_3.png';
import news_4 from '../../Images/news_4.png';
import news_5 from '../../Images/news_5.png';
import news_6 from '../../Images/news_6.png';

import ecommerce_img1 from '../../Images/ecommerce_img1.png';
import mobile_app_img1 from '../../Images/mobile_app_img1.png';
import ui_ux_img1 from '../../Images/ui_ux_img1.png';
import software_web_dev_img1 from '../../Images/software_web_dev_img1.png';

import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CaseStudies = () => {

    const [caseStudies, setCaseStudies] = useState([
        {
            title: "E-commerce Software to Support Market Places", rd_works_img: news_1, id: 1
        },
        {
            title: "Web Application for Online Advertising Management", rd_works_img: news_2, id: 2
        },
        {
            title: "Business Process Management and KPI System", rd_works_img: news_3, id: 3
        },
        {
            title: "E-commerce Software to Support Market Places", rd_works_img: news_4, id: 4
        },
        {
            title: "Web Application for Online Advertising Management", rd_works_img: news_5, id: 5
        },
        {
            title: "Business Process Management and KPI System", rd_works_img: news_6, id: 6
        },
        {
            title: "E-commerce Software to Support Market Places", rd_works_img: news_5, id: 7
        },
        {
            title: "Web Application for Online Advertising Management", rd_works_img: news_5, id: 8
        },
        {
            title: "Business Process Management and KPI System", rd_works_img: news_6, id: 9
        },

    ]);
    const [caseStudiesFix, setCaseStudiesFix] = useState([
        {
            title: "E-commerce Software to Support Market Places", rd_works_img: news_1, id: 1
        },
        {
            title: "Web Application for Online Advertising Management", rd_works_img: news_2, id: 2
        },
        {
            title: "Business Process Management and KPI System", rd_works_img: news_3, id: 3
        },
        {
            title: "E-commerce Software to Support Market Places", rd_works_img: news_4, id: 4
        },
        {
            title: "Web Application for Online Advertising Management", rd_works_img: news_5, id: 5
        },
        {
            title: "Business Process Management and KPI System", rd_works_img: news_6, id: 6
        },
        {
            title: "E-commerce Software to Support Market Places", rd_works_img: news_5, id: 7
        },
        {
            title: "Web Application for Online Advertising Management", rd_works_img: news_5, id: 8
        },
        {
            title: "Business Process Management and KPI System", rd_works_img: news_6, id: 9
        },

    ]);

    const [allCaseTitleLogo, setAllCaseTitleLogo] = useState([]);

    
    const [allCase, setAllCase] = useState([]);
    console.log('ress',allCase)


    useEffect(() => {
        axios.get(`/case-studies-title-logo`).then(res => {
            if (res.data.status == 200) {
                setAllCaseTitleLogo(res.data.case);
            }
        })

        axios.get(`/our-case-studies`).then(res => {
            if (res.data.status == 200) {
                setAllCase(res.data.case);
            }
        })

    }, [])


    return (
        <>
            <div className="container mb-5 mt-4">
                <SocialIcons />
                <div className="row g-3 mb-3">
                    {
                        allCaseTitleLogo.map((item,i)=>{
                            var text2 = " ";

                            var x = item.title_name.split(" ");

                            for (let i = 1; i < x.length; i++) {
                                text2 += x[i] + " ";
                            }
                            console.log('text2', text2)

                            var text1 = item.title_name.split(" ")[0];

                            return(

                                <>
                                     <div className="col-md-5">
                        <div className="header__case__studies">
                        <h1 className="header-web-development"><span className="header-soft">{text1}</span> {text2}</h1>
                        {/* <h1 className="header-web-development">{item.title_name}</h1> */}
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="case__studies__img">
                            <img src={`${global.img_url}/images/webdevcare/${item.image}`}  className="img-fluid" alt="case_studies_img" border="0" />
                        </div>
                    </div>
                                
                                </>
                            )
                        })
                    }
               
                </div>
                <div className="row g-3 pt-5">
                    <div className="col-md-4">
                        <div className="row g-3">
                            <div className="col-12">
                                <div className="border">
                                    <Accordion>
                                        <div className="categories__blog">
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <div>All Technologies</div>
                                            </AccordionSummary>
                                        </div>
                                        <AccordionDetails>
                                            <div className="categories__blog__subtitle">
                                                <ul className="list-unstyled ">
                                                    <li><Link to="/" className="blog__list__item">PHP</Link></li>
                                                    <li><Link to="/web-development" className="blog__list__item">Laravel</Link></li>
                                                    <li><Link to="/" className="blog__list__item">Flutter</Link></li>
                                                    <li><Link to="/mobile-platform" className="blog__list__item">React.JS</Link></li>
                                                    <li><Link to="/" className="blog__list__item">Node.JS</Link></li>
                                                    <li><Link to="/" className="blog__list__item">Javascript</Link></li>
                                                    <li><Link to="/" className="blog__list__item">Python</Link></li>
                                                    <li><Link to="/" className="blog__list__item">Machine Learning</Link></li>
                                                    <li><Link to="/" className="blog__list__item">IoT</Link></li>
                                                    <li><Link to="/" className="blog__list__item">Asp .Net</Link></li>
                                                    <li><Link to="/" className="blog__list__item">Java</Link></li>
                                                    <li><Link to="/" className="blog__list__item">Django</Link></li>
                                                </ul>
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                        <div className="row g-3 pt-3">
                            <div className="col-12">
                                <div className="border">
                                    <Accordion>
                                        <div className="categories__blog">
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <div>All Expertise</div>
                                            </AccordionSummary>
                                        </div>
                                        <AccordionDetails>
                                            <div className="categories__blog__subtitle">
                                                <ul className="list-unstyled ">
                                                    <li><Link to="/" className="blog__list__item">CRM Solutions</Link></li>
                                                    <li><Link to="/web-development" className="blog__list__item">ERP Solutions</Link></li>
                                                    <li><Link to="/" className="blog__list__item">Accounting Solutions</Link></li>
                                                    <li><Link to="/mobile-platform" className="blog__list__item">Inventory Solutions</Link></li>
                                                    <li><Link to="/" className="blog__list__item">HRM & Payroll Management</Link></li>
                                                    <li><Link to="/" className="blog__list__item">School Management</Link></li>
                                                    <li><Link to="/" className="blog__list__item">Hospital Management</Link></li>
                                                    <li><Link to="/" className="blog__list__item">Tours & Travel Management</Link></li>
                                                    <li><Link to="/" className="blog__list__item">Microfinance Software</Link></li>
                                                    <li><Link to="/products" className="blog__list__item">Digital Legal Compliance System</Link></li>
                                                </ul>
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                        <div className="row g-3 pt-3">
                            <div className="col-12">
                                <div className="border">
                                    <Accordion>
                                        <div className="categories__blog">
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <div>All Services</div>
                                            </AccordionSummary>
                                        </div>
                                        <AccordionDetails>
                                            <div className="categories__blog__subtitle">
                                                <ul className="list-unstyled ">
                                                    <li><Link to="/" className="blog__list__item">General</Link></li>
                                                    <li><Link to="/web-development" className="blog__list__item">Web Development</Link></li>
                                                    <li><Link to="/" className="blog__list__item">Technologies</Link></li>
                                                    <li><Link to="/mobile-platform" className="blog__list__item">Mobile Development</Link></li>
                                                    <li><Link to="/" className="blog__list__item">Front-End Development</Link></li>
                                                    <li><Link to="/" className="blog__list__item">Desktop Development</Link></li>
                                                    <li><Link to="/" className="blog__list__item">Cloud Computing</Link></li>
                                                    <li><Link to="/" className="blog__list__item">Industries</Link></li>
                                                    <li><Link to="/" className="blog__list__item">Expertise</Link></li>
                                                    <li><Link to="/products" className="blog__list__item">Products</Link></li>
                                                    <li><Link to="/" className="blog__list__item">DevOps</Link></li>
                                                    <li><Link to="/" className="blog__list__item">News & Events</Link></li>
                                                </ul>
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                        <div className="row g-3 pt-3">
                            <div className="col-12">
                                <div className="border">
                                    <Accordion>
                                        <div className="categories__blog">
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <div>All Industries</div>
                                            </AccordionSummary>
                                        </div>
                                        <AccordionDetails>
                                            <div className="categories__blog__subtitle">
                                                <ul className="list-unstyled ">
                                                    <li><Link to="/" className="blog__list__item">General</Link></li>
                                                    <li><Link to="/web-development" className="blog__list__item">Web Development</Link></li>
                                                    <li><Link to="/" className="blog__list__item">Technologies</Link></li>
                                                    <li><Link to="/mobile-platform" className="blog__list__item">Mobile Development</Link></li>
                                                    <li><Link to="/" className="blog__list__item">Front-End Development</Link></li>
                                                    <li><Link to="/" className="blog__list__item">Desktop Development</Link></li>
                                                    <li><Link to="/" className="blog__list__item">Cloud Computing</Link></li>
                                                    <li><Link to="/" className="blog__list__item">Industries</Link></li>
                                                    <li><Link to="/" className="blog__list__item">Expertise</Link></li>
                                                    <li><Link to="/products" className="blog__list__item">Products</Link></li>
                                                    <li><Link to="/" className="blog__list__item">DevOps</Link></li>
                                                    <li><Link to="/" className="blog__list__item">News & Events</Link></li>
                                                </ul>
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row g-3">
                            {
                                allCase.length > 0 && allCase.map((item, id) => {
                                    return (
                                        <div key={id} className="col-md-6">
                                            <div className="case__studies__box__card">
                                                <div className="card">
                                                    <div className="">
                                                        <img src={`${global.img_url}/images/job_list/${item.image}`} className="card-img-top" alt="image" style={{ width: "100%" }} />
                                                    </div>
                                                    <div className="card-body">
                                                        <h3 className="header__rdworks__card ">{item.title}</h3>
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

                <div className="row g-3 pt-4">
                    <div className="col-12">
                        <div className="text-center pt-4">
                            <button type="submit" className="btn__worldwide__project"
                            // onClick={openModalApplyNow}
                            >
                               View more Cases
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default CaseStudies;