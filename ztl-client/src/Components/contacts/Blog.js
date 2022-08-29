import React, { useState } from 'react';
import SocialIcons from './../social_Icons/SocialIcons';
import blog_web from '../../Images/blog_web.png';
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

const Blog = () => {

    const [corporateBlog, setCorporateBlog] = useState([
        {
            description: "If you want to keep ahead of your competitors you need to stay updated about the new technologies and trends in web development. Check out what web development trends are ruling in 2020.",
            title: "E-Commerce Project Management: A Guide for Fast-Growing Businesses", news_date: "06 July 2022", technologies_img: ecommerce_img1, id: 1
        },
        {
            description: "Java is excellent for building enterprise applications in any industry. Discover the pillars of successful enterprise application development in this article.",
            title: "Top Mobile App Development Trends in 2022", news_date: "06 July 2022", technologies_img: mobile_app_img1, id: 2
        },
        {
            description: "There are many eCommerce CMSs available in the market right now but which one is the best for your business? We've created a comparison guide for the 10 best eCommerce platforms to use in 2020.",
            title: "UI/UX Design Trends in 2022", news_date: "06 July 2022", technologies_img: ui_ux_img1, id: 3
        },
        {
            description: "If you want to keep ahead of your competitors you need to stay updated about the new technologies and trends in web development. Check out what web development trends are ruling in 2020.",
            title: "Why Hire a Software Development Team in Bangladesh", news_date: "06 July 2022", technologies_img: software_web_dev_img1, id: 4
        },

    ]);
    const [corporateBlogFix, setCorporateBlogFix] = useState([
        {
            description: "If you want to keep ahead of your competitors you need to stay updated about the new technologies and trends in web development. Check out what web development trends are ruling in 2020.",
            title: "E-Commerce Project Management: A Guide for Fast-Growing Businesses", news_date: "06 July 2022", technologies_img: ecommerce_img1, id: 1
        },
        {
            description: "Java is excellent for building enterprise applications in any industry. Discover the pillars of successful enterprise application development in this article.",
            title: "Top Mobile App Development Trends in 2022", news_date: "06 July 2022", technologies_img: mobile_app_img1, id: 2
        },
        {
            description: "There are many eCommerce CMSs available in the market right now but which one is the best for your business? We've created a comparison guide for the 10 best eCommerce platforms to use in 2020.",
            title: "UI/UX Design Trends in 2022", news_date: "06 July 2022", technologies_img: ui_ux_img1, id: 3
        },
        {
            description: "If you want to keep ahead of your competitors you need to stay updated about the new technologies and trends in web development. Check out what web development trends are ruling in 2020.",
            title: "Why Hire a Software Development Team in Bangladesh", news_date: "06 July 2022", technologies_img: software_web_dev_img1, id: 4
        },

    ]);


    return (
        <>
            <div className="container mb-5 mt-4">
                <SocialIcons />
                <div className="row g-3 mb-3">
                    <div className="col-md-6">
                        <div className="header__partner">
                            <h1 className="header-web-development">Corporate<span className="header-soft"> Blog</span> </h1>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="blog__web">
                            <img src={blog_web} className="img-fluid" alt="blog_web" border="0" />
                        </div>
                    </div>
                </div>
                <div className="row g-3 pt-5">
                    <div className="col-md-8 order-first order-last">
                        <div className="row g-3">
                            {
                                corporateBlog.map((item, id) => {
                                    return (
                                        <div className="col-12">
                                            <div className="blog__box__card">
                                                <div className="card ">
                                                    <div className="row g-0 ">
                                                        <div className="col-md-4">
                                                            <img src={item.technologies_img} className="img-fluid" alt="image" />
                                                        </div>
                                                        <div className="col-md-8">
                                                            <div className="card-body">
                                                                <p className="card-text"><small className="text-muted">{item.news_date}</small></p>
                                                                <h6 className="header__blog">{item.title}</h6>
                                                                <p className="corporate__discription ">{item.description}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                    <div className="col-md-4 order-sm-first order-sm-last">
                        <div className="row">
                            <div className="col-12">
                                <div className="p-2 border" >
                                    <div className="search__bar" style={{ padding: "5px", fontSize: "12px", marginBottom: "6px", borderWidth: "10px" }}>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }} >
                                            <TextField
                                                fullWidth
                                                className="text"
                                                onChange={(e) => {
                                                    const searchKey = corporateBlog.filter(item => item.title.toLowerCase().match(e.target.value.toLowerCase()))
                                                    //    console.log(searchKey, "searchKey")
                                                    e.target.value.length > 0 ?
                                                        setCorporateBlog(searchKey) :
                                                        setCorporateBlog(corporateBlogFix)
                                                }}
                                                label="Type your keyword"
                                                variant="standard"
                                                placeholder="Search..."
                                                size="small"
                                                id="standard-search"
                                            />
                                            <SearchIcon style={{ fill: "#F7921E" }} />
                                        </Box>
                                    </div>
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
                                                <div>Categories</div>
                                            </AccordionSummary>
                                        </div>
                                        <AccordionDetails>
                                            <div className="categories__blog__subtitle">
                                                <ul className="list-unstyled ">
                                                    <li><Link to ="/" className="blog__list__item">General</Link></li>
                                                    <li><Link to ="/web-development" className="blog__list__item">Web Development</Link></li>
                                                    <li><Link to ="/" className="blog__list__item">Technologies</Link></li>
                                                    <li><Link to ="/mobile-platform" className="blog__list__item">Mobile Development</Link></li>
                                                    <li><Link to ="/" className="blog__list__item">Front-End Development</Link></li>
                                                    <li><Link to ="/" className="blog__list__item">Desktop Development</Link></li>
                                                    <li><Link to ="/" className="blog__list__item">Cloud Computing</Link></li>
                                                    <li><Link to ="/" className="blog__list__item">Industries</Link></li>
                                                    <li><Link to ="/" className="blog__list__item">Expertise</Link></li>
                                                    <li><Link to ="/products" className="blog__list__item">Products</Link></li>
                                                    <li><Link to ="/" className="blog__list__item">DevOps</Link></li>
                                                    <li><Link to ="/" className="blog__list__item">News & Events</Link></li>
                                                </ul>
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row g-4 py-4">
                    <div className="col-12">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-center">
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">...</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Blog;