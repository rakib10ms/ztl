import React, { useState } from 'react';
import SocialIcons from './../social_Icons/SocialIcons';
import news_dev from '../../Images/news_dev.png';
import news_1 from '../../Images/news_1.png';
import news_2 from '../../Images/news_2.png';
import news_3 from '../../Images/news_3.png';
import news_4 from '../../Images/news_4.png';
import news_5 from '../../Images/news_5.png';
import news_6 from '../../Images/news_6.png';

const News = () => {

    const [contactNews, setcontactNews] = useState([
        {
            description: "If you want to keep ahead of your competitors you need to stay updated about the new technologies and trends in web development. Check out what web development trends are ruling in 2020.",
            news_date: "06 July 2022", technologies_img: news_1, id: 1
        },
        {
            description: "Java is excellent for building enterprise applications in any industry. Discover the pillars of successful enterprise application development in this article.",
            news_date: "06 July 2022", technologies_img: news_2, id: 2
        },
        {
            description: "There are many eCommerce CMSs available in the market right now but which one is the best for your business? We've created a comparison guide for the 10 best eCommerce platforms to use in 2020.",
            news_date: "06 July 2022", technologies_img: news_3, id: 3
        },
        {
            description: "If you want to keep ahead of your competitors you need to stay updated about the new technologies and trends in web development. Check out what web development trends are ruling in 2020.",
            news_date: "06 July 2022", technologies_img: news_4, id: 4
        },
        {
            description: "Java is excellent for building enterprise applications in any industry. Discover the pillars of successful enterprise application development in this article.",
            news_date: "06 July 2022", technologies_img: news_5, id: 5
        },
        {
            description: "There are many eCommerce CMSs available in the market right now but which one is the best for your business? We've created a comparison guide for the 10 best eCommerce platforms to use in 2020.",
            news_date: "06 July 2022", technologies_img: news_6, id: 6
        },
        {
            description: "Java is excellent for building enterprise applications in any industry. Discover the pillars of successful enterprise application development in this article.",
            news_date: "06 July 2022", technologies_img: news_5, id: 7
        },
        {
            description: "There are many eCommerce CMSs available in the market right now but which one is the best for your business? We've created a comparison guide for the 10 best eCommerce platforms to use in 2020.",
            news_date: "06 July 2022", technologies_img: news_6, id: 8
        },
        
    ]);


    return (
        <>
            <div className="container pt-4">
                <SocialIcons />
                <div className="row g-3 mb-3">
                    <div className="col-md-6">
                        <div className="header__partner">
                            <h1 className="header-web-development">News</h1>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="news__dev">
                            <img src={news_dev} className=" img-fluid "  alt="news_dev" border="0" />
                        </div>
                    </div>
                </div>
                <div className="row g-4 py-5">
                    {
                        contactNews.length > 0 && contactNews.map((item, id) => {
                            return (
                                <div key={id} className="col-md-3">
                                    <div className="news__box__card">
                                        <div className="card">
                                            <div className="">
                                                <img src={item.technologies_img} className="card-img-top" alt="image" style={{ width: "100%" }} />
                                            </div>
                                            <div className="card-body">
                                                <p className="card-text"><small className="text-muted">{item.news_date}</small></p>
                                                <p className="testimonials__discription ">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
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

export default News;