import React, { useState, useEffect } from 'react';
import products_img from '../../Images/products_img.png';
import crm_img from '../../Images/crm_img.png';
import erp_img from '../../Images/erp_img.png';
import accounting_img from '../../Images/accounting_img.png';
import hospital_img from '../../Images/hospital_img.png';
import microfinance_img from '../../Images/microfinance_img.png';
import inventory_img from '../../Images/inventory_img.png';
import school_img from '../../Images/school_img.png';
import tours_travel_management_img from '../../Images/tours_travel_management_img.png';
import hrm_payroll_management_img from '../../Images/hrm_payroll_management_img.png';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Products = () => {
    const [allProductTitleLogo, setAllProductTitleLogo] = useState([]);


    const [allIndustriesProjects, setAllIndustriesProjects] = useState([]);
    const [allHealthProjects, setAllHealthProjects] = useState([]);
    const [allLegalProjects, setAllLegalProjects] = useState([]);
    const [allIotProjects, setAllIotProjects] = useState([]);
    const [allLogisticsProjects, setAllLogisticsProjects] = useState([]);
    const [allFintechProjects, setAllFintechProjects] = useState([]);
    const [allEcommerceProjects, setAllEcommerceProjects] = useState([]);
    const [allIndustriesOtherProjects, setAllIndustriesOtherProjects] = useState([]);



    //by technology
    // all_technologies
    const [allTechnologiesProjects, setAllTechnologiesProjects] = useState([]);
    const [allPythonProjects, setAllPythonProjects] = useState([]);
    const [allPhpProjects, setAllPhpProjects] = useState([]);
    const [allJavascriptProjects, setAllJavascriptProjects] = useState([]);
    const [allDjangoProjects, setAllDjangoProjects] = useState([]);
    const [allLaravelProjects, setAllLaravelProjects] = useState([]);
    const [allFlutterProjects, setAllFlutterProjects] = useState([]);
    const [allAspProjects, setAllAspProjects] = useState([]);
    const [allMachineProjects, setAllMachineProjects] = useState([]);
    const [allJavaProjects, setAllJavaProjects] = useState([]);
    const [allReactJsProjects, setAllReactJsProjects] = useState([]);
    const [allTechnologyOtherProjects, setAllTechnologyOtherProjects] = useState([]);

    console.log('all tech other projects',allTechnologyOtherProjects)


    const [noOfElement, setnoOfElement] = useState(6);
    const loadmore=()=>{
        setnoOfElement(noOfElement + noOfElement)
    }

    const slice=allTechnologiesProjects.slice(0,noOfElement)

    console.log('slcie',slice)


    useEffect(() => {
        axios.get(`/product-title-logo`).then(res => {
            if (res.data.status == 200) {
                setAllProductTitleLogo(res.data.product);
            }
        })



        axios.get(`/portfolio-product`).then(res => {
            if (res.data.status == 200) {
                setAllIndustriesProjects(res.data.all_industries);
                setAllHealthProjects(res.data.health_care);
                setAllLegalProjects(res.data.legal);
                setAllIotProjects(res.data.IoT);
                setAllLogisticsProjects(res.data.logistics);
                setAllFintechProjects(res.data.fintech);
                setAllIndustriesOtherProjects(res.data.industries_others);
                setAllEcommerceProjects(res.data.e_commerce);


                setAllTechnologiesProjects(res.data.all_technologies)
                setAllPythonProjects(res.data.Python);
                setAllPhpProjects(res.data.Php);
                setAllJavascriptProjects(res.data.Javascript);
                setAllDjangoProjects(res.data.Django);
                setAllLaravelProjects(res.data.Laravel);
                setAllFlutterProjects(res.data.Flutter);
                setAllAspProjects(res.data.Asp);
                setAllMachineProjects(res.data.Machine);
                setAllJavaProjects(res.data.Java);
                setAllReactJsProjects(res.data.React);
                setAllTechnologyOtherProjects(res.data.tech_Others);
            }
        })

    }, [])
    return (
        <div className="container mb-5 pt-4">
            <div className="row g-3 mb-3">

                {
                    allProductTitleLogo.map((item, i) => {
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
                                <div className="col-md-6">
                                    <div className="header__products">
                                        {/* <h1 className="header-web-development">{item.title_name}</h1> */}
                                        <h1 className="header-web-development"><span className="header-soft">{text1}</span> {text2}</h1>

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="products__img">
                                        <img src={`${global.img_url}/images/webdevcare/${item.image}`} className="img-fluid" alt="products_img" border="0" />
                                    </div>
                                </div>
                            </>
                        )
                    })
                }



            </div>

            <div className="row g-3 pt-5">
                <div className="col-12">
                    <div className="products__tab">
                        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link products__link active" id="pills-by-technologies-tab" data-bs-toggle="pill" data-bs-target="#pills-by-technologies" type="button" role="tab" aria-controls="pills-by-technologies" aria-selected="true"><span>By Technologies</span></button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link products__link" id="pills-by-industries-tab" data-bs-toggle="pill" data-bs-target="#pills-by-industries" type="button" role="tab" aria-controls="pills-by-industries" aria-selected="false"><span>By Industries</span></button>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-by-technologies" role="tabpanel" aria-labelledby="pills-by-technologies-tab">
                            <div className="row g-2 pt-1">
                                <div className="col-12">
                                    <div className="coverage__nav">
                                        <ul class="nav nav-pills mb-3 nav-fill" id="pills-tab" role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link coverage__link active" id="pills-all-by-technologies-tab" data-bs-toggle="pill" data-bs-target="#pills-all-by-technologies" type="button" role="tab" aria-controls="pills-all-by-technologies" aria-selected="true">All</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link coverage__link text-nowrap" id="pills-php-tab" data-bs-toggle="pill" data-bs-target="#pills-php" type="button" role="tab" aria-controls="pills-php" aria-selected="false">Php</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link coverage__link" id="pills-laravel-tab" data-bs-toggle="pill" data-bs-target="#pills-laravel" type="button" role="tab" aria-controls="pills-laravel" aria-selected="false">Laravel</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link coverage__link" id="pills-flutter-tab" data-bs-toggle="pill" data-bs-target="#pills-flutter" type="button" role="tab" aria-controls="pills-flutter" aria-selected="false">Flutter</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link coverage__link" id="pills-reactjs-tab" data-bs-toggle="pill" data-bs-target="#pills-reactjs" type="button" role="tab" aria-controls="pills-reactjs" aria-selected="false">React JS</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link coverage__link text-nowrap" id="pills-django-tab" data-bs-toggle="pill" data-bs-target="#pills-django" type="button" role="tab" aria-controls="pills-django" aria-selected="false">Django</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link coverage__link" id="pills-javascript-tab" data-bs-toggle="pill" data-bs-target="#pills-javascript" type="button" role="tab" aria-controls="pills-javascript" aria-selected="false">Javascript</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link coverage__link" id="pills-asp.net-tab" data-bs-toggle="pill" data-bs-target="#pills-asp.net" type="button" role="tab" aria-controls="pills-asp.net" aria-selected="false">Asp.Net</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link coverage__link" id="pills-machine-tab" data-bs-toggle="pill" data-bs-target="#pills-machine" type="button" role="tab" aria-controls="pills-machine" aria-selected="false">Machine Learning</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link coverage__link" id="pills-java-tab" data-bs-toggle="pill" data-bs-target="#pills-java" type="button" role="tab" aria-controls="pills-java" aria-selected="false">Java</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link coverage__link" id="pills-python-tab" data-bs-toggle="pill" data-bs-target="#pills-python" type="button" role="tab" aria-controls="pills-python" aria-selected="false">Python</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link coverage__link" id="pills-others-tab" data-bs-toggle="pill" data-bs-target="#pills-others" type="button" role="tab" aria-controls="pills-others" aria-selected="false">Others</button>
                                            </li>

                                        </ul>
                                    </div>

                                    <div class="tab-content" id="pills-tabContent">
                                        <div class="tab-pane fade show active" id="pills-all-by-technologies" role="tabpanel" aria-labelledby="pills-all-by-technologies-tab">





                                            <div className="row g-3 pt-4">
                                                {
                                                    slice.map((item, i) => {
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
                                        <div class="tab-pane fade" id="pills-php" role="tabpanel" aria-labelledby="pills-php-tab">


                                            <div className="row g-3 pt-4">
                                                {
                                                    allPhpProjects.map((item, i) => {
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



                                           

                                        </div>
                                        <div class="tab-pane fade" id="pills-laravel" role="tabpanel" aria-labelledby="pills-laravel-tab">

                                            <div className="row g-3 pt-4">
                                                {
                                                    allLaravelProjects.map((item, i) => {
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




                                        </div>
                                        <div class="tab-pane fade" id="pills-flutter" role="tabpanel" aria-labelledby="pills-flutter-tab">
                                            <div className="row g-3 pt-4">
                                                {
                                                    allFlutterProjects.map((item, i) => {
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

                                        </div>
                                        <div class="tab-pane fade" id="pills-reactjs" role="tabpanel" aria-labelledby="pills-reactjs-tab">
                                            <div className="row g-3 pt-4">
                                                {
                                                    allReactJsProjects.map((item, i) => {
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

                                        </div>
                                        <div class="tab-pane fade" id="pills-django" role="tabpanel" aria-labelledby="pills-django-tab">
                                            <div className="row g-3 pt-4">
                                                {
                                                    allDjangoProjects.map((item, i) => {
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

                                        </div>
                                        <div class="tab-pane fade" id="pills-javascript" role="tabpanel" aria-labelledby="pills-javascript-tab">
                                            <div className="row g-3 pt-4">
                                                {
                                                    allJavascriptProjects.map((item, i) => {
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

                                        </div>
                                        <div class="tab-pane fade" id="pills-asp.net" role="tabpanel" aria-labelledby="pills-asp.net-tab">
                                            <div className="row g-3 pt-4">
                                                {
                                                    allAspProjects.map((item, i) => {
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

                                        </div>
                                        <div class="tab-pane fade" id="pills-machine" role="tabpanel" aria-labelledby="pills-machine-tab">

                                            <div className="row g-3 pt-4">
                                                {
                                                    allMachineProjects.map((item, i) => {
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

                                        </div>
                                        <div class="tab-pane fade" id="pills-java" role="tabpanel" aria-labelledby="pills-java-tab">
                                            <div className="row g-3 pt-4">
                                                {
                                                    allJavaProjects.map((item, i) => {
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

                                        </div>



                                        <div class="tab-pane fade" id="pills-python" role="tabpanel" aria-labelledby="pills-python-tab">
                                            <div className="row g-3 pt-4">
                                                {
                                                    allPythonProjects.map((item, i) => {
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

                                        </div>
                                        <div class="tab-pane fade" id="pills-others" role="tabpanel" aria-labelledby="pills-others-tab">

                                            <div className="row g-3 pt-4">
                                                {
                                                    allTechnologyOtherProjects.map((item, i) => {
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

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-by-industries" role="tabpanel" aria-labelledby="pills-by-industries-tab">
                            <div className="row g-2 pt-1">
                                <div className="col-12">
                                    <div className="coverage__nav">
                                        <ul class="nav nav-pills mb-3 nav-fill" id="pills-tab" role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link coverage__link active" id="pills-by-idustries-tab" data-bs-toggle="pill" data-bs-target="#pills-by-idustries" type="button" role="tab" aria-controls="pills-by-idustries" aria-selected="true">All</button>
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
                                        </ul>
                                    </div>

                                    <div class="tab-content" id="pills-tabContent">
                                        <div class="tab-pane fade show active" id="pills-by-idustries" role="tabpanel" aria-labelledby="pills-by-idustries-tab">


                                            <div className="row g-3 pt-4">
                                                {
                                                    allIndustriesProjects.map((item, i) => {
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
                                                                </div>

                                                            </>
                                                        )
                                                    })
                                                }

                                            </div>
                                           

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
                                           

                                        </div>
                                        <div class="tab-pane fade" id="pills-other" role="tabpanel" aria-labelledby="pills-other-tab">

                                            <div className="row g-3 pt-4">
                                                {
                                                    allIndustriesOtherProjects.map((item, i) => {
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
                                      
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Products;