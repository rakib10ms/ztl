import React, { useState, useEffect } from 'react';
import world_map_circle from '../../Images/world_map_circle.png';
import world_map_rectangle from '../../Images/world_map_rectangle.png';
import crm_img from '../../Images/crm_img.png';
import erp_img from '../../Images/erp_img.png';
import accounting_img from '../../Images/accounting_img.png';
import hospital_img from '../../Images/hospital_img.png';
import microfinance_img from '../../Images/microfinance_img.png';
import inventory_img from '../../Images/inventory_img.png';
import school_img from '../../Images/school_img.png';
import { Link } from 'react-router-dom';

import axios from 'axios';


const Coverage = () => {

    const [allWorldProjects, setAllWorldProjects] = useState([]);


    console.log('all products',allWorldProjects)
    const [allHealthProjects, setAllHealthProjects] = useState([]);
    const [allLegalProjects, setAllLegalProjects] = useState([]);
    const [allIotProjects, setAllIotProjects] = useState([]);
    const [allLogisticsProjects, setAllLogisticsProjects] = useState([]);
    const [allFintechProjects, setAllFintechProjects] = useState([]);
    const [allEcommerceProjects, setAllEcommerceProjects] = useState([]);
    const [allOtherProjects, setAllOtherProjects] = useState([]);
    // console.log('check',allEcommerceProjects)

    const [noOfElement, setnoOfElement] = useState(6);
    const loadmore=()=>{
        setnoOfElement(noOfElement + noOfElement)
    }

    const slice=allWorldProjects.slice(0,noOfElement)

    useEffect(() => {
        axios.get(`/our-world-wide-project`).then(res => {
            console.log(res.data, "res.data")
            if (res.data.status == 200) {
                setAllWorldProjects(res.data.projects);
                setAllHealthProjects(res.data.health_care);
                setAllLegalProjects(res.data.legal);
                setAllIotProjects(res.data.IoT);
                setAllLogisticsProjects(res.data.logistics);
                setAllFintechProjects(res.data.fintech);
                setAllOtherProjects(res.data.others);
                setAllEcommerceProjects(res.data.e_commerce);
            }
        })

    }, [])


    return (
        <div className="container mb-5">
            {/* <div className="row g-3 pt-4">
                <div className="col-12">
                    <h1 className="header__coverage">Coverage</h1>
                </div>
                <div className="col-md-9">
                    <div className="coverage">
                        <img src={world_map_circle} className="coverage__world__map__circle" alt="world_map_circle" />
                    </div>
                </div>
            </div> */}
            <div className="row">
                <div className="col-12">
                    <h1 className="header__coverage">Coverage</h1>
                    <div className="coverage">
                        <img src={world_map_rectangle} className="coverage__world__map__rectangle" alt="world_map_rectangle" />
                    </div>
                </div>
            </div>
            <div className="row g-2 pt-3">
                <div className="col-12">
                    <h4 className="header__coverage__world">Our World wide Projects by Industries</h4>
                    <hr className="header__coverage__world__hr" />
                    <div className="coverage__nav">
                        <ul class="nav nav-pills mb-3 nav-fill" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link coverage__link active" id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all" aria-selected="true">All</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link coverage__link text-nowrap" id="pills-ecommerce-tab" data-bs-toggle="pill" data-bs-target="#pills-ecommerce" type="button" role="tab" aria-controls="pills-ecommerce" aria-selected="false">E-Commerce</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link coverage__link" id="pills-healthcare-tab" data-bs-toggle="pill" data-bs-target="#pills-healthcare" type="button" role="tab" aria-controls="pills-healthcare" aria-selected="false">Healthcare</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link coverage__link" id="pills-logistics-tab" data-bs-toggle="pill" data-bs-target="#pills-logistics" type="button" role="tab" aria-controls="pills-logistics" aria-selected="false">Logistics</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link coverage__link" id="pills-fintech-tab" data-bs-toggle="pill" data-bs-target="#pills-fintech" type="button" role="tab" aria-controls="pills-fintech" aria-selected="false">FinTech</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link coverage__link text-nowrap" id="pills-legal-law-tab" data-bs-toggle="pill" data-bs-target="#pills-legal-law" type="button" role="tab" aria-controls="pills-legal-law" aria-selected="false">Legal & Law</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link coverage__link" id="pills-iot-tab" data-bs-toggle="pill" data-bs-target="#pills-iot" type="button" role="tab" aria-controls="pills-iot" aria-selected="false">IoT</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link coverage__link" id="pills-other-tab" data-bs-toggle="pill" data-bs-target="#pills-other" type="button" role="tab" aria-controls="pills-other" aria-selected="false">Others</button>
                            </li>

                            {/* <li class="nav-item" role="presentation">
                                <button class="nav-link coverage__link" id="pills-iot-tab" data-bs-toggle="pill" data-bs-target="#pills-iot" type="button" role="tab" aria-controls="pills-iot" aria-selected="false">Others</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link coverage__link" id="pills-iot-tab" data-bs-toggle="pill" data-bs-target="#pills-iot" type="button" role="tab" aria-controls="pills-iot" aria-selected="false">Others</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link coverage__link" id="pills-iot-tab" data-bs-toggle="pill" data-bs-target="#pills-iot" type="button" role="tab" aria-controls="pills-iot" aria-selected="false">Others</button>
                            </li> */}
                        </ul>
                    </div>


                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab">



                            <div className="row g-3 pt-4">
                                {
                                    slice.map((item, i) => {

                                        {
                                            var check = i % 2 === 0;
                                            console.log('asd', check)

                                        }

                                        return (
                                            <>


                                                <div key={i} className="col-md-4">
                                                    <Link to="">
                                                        <div className="products__overlay__img">
                                                            <img src={`${global.img_url}/images/projects/${item.image}`} className="img-fluid" alt="crm_img" />
                                                            <h4 class="products__overlay__text">{item.title}</h4>
                                                        </div>
                                                    </Link>

                                                </div>

                                            </>
                                        )



                                    })
                                }

                            </div>



                            <div className="row g-3 pt-4">
                                <div className="col-12">
                                    <div className="text-center pt-4">
                                        <button type="submit" className="btn__worldwide__project"
                                        onClick={()=>loadmore()}
                                        >
                                            Load More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-ecommerce" role="tabpanel" aria-labelledby="pills-ecommerce-tab">

                            <div className="row g-3 pt-4">
                                {
                                    allEcommerceProjects.map((item, i) => {
                                        return (
                                            <>

                                                <div className="col-md-4">
                                                    <Link to="">
                                                        <div className="products__overlay__img">
                                                            <img src={`${global.img_url}/images/projects/${item.image}`} className="img-fluid" alt="crm_img" />
                                                            <h4 class="products__overlay__text">{item.title}</h4>
                                                        </div>
                                                    </Link>
                                                    {/* <Link to=""><img src={`${global.img_url}/images/projects/${item.image}`} className="img-fluid" alt="crm_img" /></Link> */}
                                                </div>


                                            </>
                                        )
                                    })
                                }

                            </div>
                            {/* <div className="row g-3 pt-4">
                                <div className="col-12">
                                    <div className="text-center pt-4">
                                        <button type="submit" className="btn__worldwide__project"
                                        // onClick={openModalApplyNow}
                                        >
                                            Load More
                                        </button>
                                    </div>
                                </div>
                            </div> */}

                        </div>
                        <div class="tab-pane fade" id="pills-healthcare" role="tabpanel" aria-labelledby="pills-healthcare-tab">

                            <div className="row g-3 pt-4">
                                {
                                    allHealthProjects.map((item, i) => {
                                        return (
                                            <>

                                                <div className="col-md-4">
                                                    <Link to="">
                                                        <div className="products__overlay__img">
                                                            <img src={`${global.img_url}/images/projects/${item.image}`} className="img-fluid" alt="crm_img" />
                                                            <h4 class="products__overlay__text">{item.title}</h4>
                                                        </div>
                                                    </Link>
                                                </div>

                                            </>
                                        )
                                    })
                                }

                            </div>
                            {/* <div className="row g-3 pt-4">
                                <div className="col-12">
                                    <div className="text-center pt-4">
                                        <button type="submit" className="btn__worldwide__project"
                                        // onClick={openModalApplyNow}
                                        >
                                            Load More
                                        </button>
                                    </div>
                                </div>
                            </div> */}




                        </div>
                        <div class="tab-pane fade" id="pills-logistics" role="tabpanel" aria-labelledby="pills-logistics-tab">

                            <div className="row g-3 pt-4">
                                {
                                    allLogisticsProjects.map((item, i) => {
                                        return (
                                            <>
                                                <div className="col-md-4">
                                                    <Link to="">
                                                        <div className="products__overlay__img">
                                                            <img src={`${global.img_url}/images/projects/${item.image}`} className="img-fluid" alt="crm_img" />
                                                            <h4 class="products__overlay__text">{item.title}</h4>
                                                        </div>
                                                    </Link>
                                                </div>

                                            </>
                                        )
                                    })
                                }

                            </div>
                            {/* <div className="row g-3 pt-4">
                                <div className="col-12">
                                    <div className="text-center pt-4">
                                        <button type="submit" className="btn__worldwide__project"
                                        // onClick={openModalApplyNow}
                                        >
                                            Load More
                                        </button>
                                    </div>
                                </div>
                            </div> */}




                        </div>
                        <div class="tab-pane fade" id="pills-fintech" role="tabpanel" aria-labelledby="pills-fintech-tab">
                            <div className="row g-3 pt-4">
                                {
                                    allFintechProjects.map((item, i) => {
                                        return (
                                            <>

                                                <div className="col-md-4">
                                                    <Link to="">
                                                        <div className="products__overlay__img">
                                                            <img src={`${global.img_url}/images/projects/${item.image}`} className="img-fluid" alt="crm_img" />
                                                            <h4 class="products__overlay__text">{item.title}</h4>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </>
                                        )
                                    })
                                }

                            </div>
                            {/* <div className="row g-3 pt-4">
                                <div className="col-12">
                                    <div className="text-center pt-4">
                                        <button type="submit" className="btn__worldwide__project"
                                        // onClick={openModalApplyNow}
                                        >
                                            Load More
                                        </button>
                                    </div>
                                </div>
                            </div> */}



                        </div>
                        <div class="tab-pane fade" id="pills-legal-law" role="tabpanel" aria-labelledby="pills-legal-law-tab">

                            <div className="row g-3 pt-4">
                                {
                                    allLegalProjects.map((item, i) => {
                                        return (
                                            <>

                                                <div className="col-md-4">
                                                    <Link to="">
                                                        <div className="products__overlay__img">
                                                            <img src={`${global.img_url}/images/projects/${item.image}`} className="img-fluid" alt="crm_img" />
                                                            <h4 class="products__overlay__text">{item.title}</h4>
                                                        </div>
                                                    </Link>
                                                </div>

                                            </>
                                        )
                                    })
                                }

                            </div>
                            {/* <div className="row g-3 pt-4">
                                <div className="col-12">
                                    <div className="text-center pt-4">
                                        <button type="submit" className="btn__worldwide__project"
                                        // onClick={openModalApplyNow}
                                        >
                                            Load More
                                        </button>
                                    </div>
                                </div>
                            </div> */}



                        </div>
                        <div class="tab-pane fade" id="pills-iot" role="tabpanel" aria-labelledby="pills-iot-tab">

                            <div className="row g-3 pt-4">
                                {
                                    allIotProjects.map((item, i) => {
                                        return (
                                            <>

                                                <div className="col-md-4">
                                                    <Link to="">
                                                        <div className="products__overlay__img">
                                                            <img src={`${global.img_url}/images/projects/${item.image}`} className="img-fluid" alt="crm_img" />
                                                            <h4 class="products__overlay__text">{item.title}</h4>
                                                        </div>
                                                    </Link>
                                                </div>

                                            </>
                                        )
                                    })
                                }

                            </div>
                            {/* <div className="row g-3 pt-4">
                                <div className="col-12">
                                    <div className="text-center pt-4">
                                        <button type="submit" className="btn__worldwide__project"
                                        // onClick={openModalApplyNow}
                                        >
                                            Load More
                                        </button>
                                    </div>
                                </div>
                            </div> */}


                        </div>


                        <div class="tab-pane fade" id="pills-other" role="tabpanel" aria-labelledby="pills-other-tab">

                            <div className="row g-3 pt-4">
                                {
                                    allOtherProjects.map((item, i) => {
                                        return (
                                            <>

                                                <div className="col-md-4">
                                                    <Link to="">
                                                        <div className="products__overlay__img">
                                                            <img src={`${global.img_url}/images/projects/${item.image}`} className="img-fluid" alt="crm_img" />
                                                            <h4 class="products__overlay__text">{item.title}</h4>
                                                        </div>
                                                    </Link>
                                                </div>

                                            </>
                                        )
                                    })
                                }

                            </div>
                            {/* <div className="row g-3 pt-4">
                                <div className="col-12">
                                    <div className="text-center pt-4">
                                        <button type="submit" className="btn__worldwide__project"
                                        // onClick={openModalApplyNow}
                                        >
                                            Load More
                                        </button>
                                    </div>
                                </div>
                            </div> */}


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coverage;