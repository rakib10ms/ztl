import React, { useState, useEffect } from 'react';
import "../headerTop/HeaderTop.css";

const HeaderTop = () => {
    const [show, setShow] = useState(false)
    const controlNavbar = () => {
        if (window.scrollY > 250) {
            setShow(true)
        } else {
            setShow(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, []);

    return (
        <div className="header__top">
            <div className={`active1 ${show && 'hidden'}`}>
                <div className="container pt-1">
                    <div className="row d-flex justify-content-between">
                        <div className="col-md-8 ">
                            <div className="ht-email">
                                <span className="mr-3">
                                    <i className="mr-1 fa-solid fa-phone"></i> +8809617209581
                                </span>
                                <span className="mr-3">
                                    <i className="mr-1 fa-solid fa-envelope"></i> info@zaimahtech.com
                                </span>
                                <span className="mr-3">
                                    <i className="mr-1 fa-solid fa-location-dot"></i> 3 Dhakeswari Road, Lalbagh Dhaka
                                </span>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="ht-social">
                                <a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="twitter"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="linkedin"><i className="fab fa-linkedin-in"></i></a>
                                <a href="#" className="whatsapp"><i className="fab fa-whatsapp"></i></a>
                                <a href="#" className="instagram"><i className="fab fa-instagram"></i></a>
                                {/* <a href="#" className="pinterest"><i className="fab fa-pinterest-p"></i></a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;

