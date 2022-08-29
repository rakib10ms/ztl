import React from 'react';
import { Link } from 'react-router-dom';
// import Location from '../../images/Location.png';
// import Location from '../images/Location.png'
import { useLocation } from 'react-router-dom'

const DashboardSideMenu = () => {
    const location = useLocation();
    return (
        <>
            {/* // <!-- Sidebar --> */}
            <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/* <!-- Sidebar - Brand --> */}
                <a class="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                    <div class="sidebar-brand-icon rotate-n-15">
                        <i class="fas mx-2 mt-1 fa-laugh-wink"></i>
                    </div>
                    <div class="sidebar-brand-text mx-1">Zaimah Tech</div>
                </a>

                {/* <!-- Divider --> */}
                <hr class="sidebar-divider my-0" />

                {/* <!-- Nav Item - Dashboard --> */}
                <li class="nav-item active">
                    <a class="nav-link" href="#">
                        <i class="fas mx-2 mt-1 fa-fw mx-2 mt-1 fa-tachometer-alt"></i>
                        <span>Dashboard</span></a>
                </li>

                {/* <!-- Divider --> */}
                <hr class="sidebar-divider" />

                {/* <!-- Heading --> */}
                <div class="sidebar-heading">
                    Interface
                </div>
                {/* <!-- Nav Item - Pages Collapse Menu --> */}

                <li class="nav-item">
                    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages11"
                        aria-expanded="true" aria-controls="collapsePages">
                        <i class="fas mx-2 mt-1 fa-fw mx-2 mt-1 fa-folder"></i>
                        <span>Landing</span>
                    </a>
                    <div id="collapsePages11" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <h6 class="collapse-header">Heading</h6>
                            <Link class="collapse-item" to="/heading">Heading</Link>
                            <h6 class="collapse-header">Services</h6>
                            <Link class="collapse-item" to="/service-description">Service</Link>
                            <Link class="collapse-item" to="/service-logo">Services Logo</Link>
                            <Link class="collapse-item" to="/service-type">Service Type</Link>

                            <h6 class="collapse-header">Technology Index</h6>
                            <Link class="collapse-item" to="/technology-index">Technology Index</Link>
                            <Link class="collapse-item" to="/technology-index-logo">Technology Index Logo</Link>
                            <h6 class="collapse-header">Counter</h6>

                            <Link class="collapse-item" to="/counter">Counter</Link>
                            <h6 class="collapse-header">Testimonial</h6>

                            <Link class="collapse-item" to="/testimonial">Testimonials</Link>



                            <div class="collapse-divider"></div>



                        </div>
                    </div>
                </li>


                <li class="nav-item">
                    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseService"
                        aria-expanded="true" aria-controls="collapsePages">
                        {/* <i class="fas mx-2 mt-1 fa-fw mx-2 mt-1 fa-folder"></i> */}
                        <i class="fas mx-2 mt-1 fa fa-wrench" aria-hidden="true"></i>
                        {/* <i class="" aria-hidden="true"></i> */}

                        <span>Services</span>
                    </a>
                    <div id="collapseService" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <h6 class="collapse-header">Web Development</h6>
                            <Link class="collapse-item" to="/web-development-title-logo"> Title & Banner</Link>
                            <Link class="collapse-item" to="/web-development-card"> Web Development Card</Link>
                            <Link class="collapse-item" to="/key-web-technologies"> Key web technologies</Link>
                            <Link class="collapse-item" to="/web-technologies-framework-logo"> Web technologies Logo</Link>
                            <Link class="collapse-item" to="/web-development-faq"> Faq</Link>
                            <Link class="collapse-item" to="/web-development-faq-image"> Faq Image</Link>
                            <Link class="collapse-item" to="/web-development-project"> Our Recent projects</Link>
                            {/* <div class="collapse-divider"></div>
                            <h6 class="collapse-header">Partner/Consultant List:</h6>
                            <Link class="collapse-item" to="/all-partners"> All Partners</Link>
                            <Link class="collapse-item" to="/all-consultant"> All Consultant</Link> */}
                        </div>
                    </div>
                </li>

                <li class="nav-item">
                    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePagesIndu"
                        aria-expanded="true" aria-controls="collapsePages">
                        {/* <i class="fas mx-2 mt-1 fa-fw mx-2 mt-1 fa-folder"></i> */}
                        <i class=" fas mx-2 mt-1 fas fa-industry" aria-hidden="true"></i>

                        <span>Industries</span>
                    </a>
                    <div id="collapsePagesIndu" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <h6 class="collapse-header">HealthCare</h6>
                            <Link class="collapse-item" to="/health-care-title-logo"> Title & logo</Link>
                            <Link class="collapse-item" to="/health-care-card"> Health Care Card</Link>
                            <Link class="collapse-item" to="/key-health-technologies"> Key Health technologies</Link>
                            <Link class="collapse-item" to="/health-technologies-framework-logo">Health technologies Logo</Link>
                            <Link class="collapse-item" to="/health-care-solution-card">HealthCare Solutions Card</Link>



                            {/* <div class="collapse-divider"></div>
                            <h6 class="collapse-header">Partner/Consultant List:</h6>
                            <Link class="collapse-item" to="/all-partners"> All Partners</Link>
                            <Link class="collapse-item" to="/all-consultant"> All Consultant</Link> */}
                        </div>
                    </div>
                </li>


                <li class="nav-item">
                    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#experties"
                        aria-expanded="true" aria-controls="collapsePages">
                        {/* <i class="fas mx-2 mt-1 fa-fw mx-2 mt-1 fa-folder"></i> */}
                        <i class=" fas mx-2 mt-1 fas fa-industry" aria-hidden="true"></i>

                        <span>Experties</span>
                    </a>
                    <div id="experties" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <h6 class="collapse-header">Erp Solution</h6>
                            <Link class="collapse-item" to="/erp-solution-title-logo"> Title & logo</Link>
                            <Link class="collapse-item" to="/erp-solution-card"> Erp Solution Card</Link>
                            <Link class="collapse-item" to="/key-erp-technologies"> Key Erp technologies</Link>
                            <Link class="collapse-item" to="/erp-technologies-framework-logo">Erp technologies Logo</Link>
                            <Link class="collapse-item" to="/custom-erp-solution">Custom Erp Solution</Link>



                            {/* <div class="collapse-divider"></div>
                            <h6 class="collapse-header">Partner/Consultant List:</h6>
                            <Link class="collapse-item" to="/all-partners"> All Partners</Link>
                            <Link class="collapse-item" to="/all-consultant"> All Consultant</Link> */}
                        </div>
                    </div>
                </li>





                {/* <!-- Nav Item - Utilities Collapse Menu --> */}
                <li class="nav-item">
                    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                        aria-expanded="true" aria-controls="collapseUtilities">
                        {/* <i class="fas mx-2 mt-1 fa-fw mx-2 mt-1 fa-wrench"></i> */}
                        <i class="mx-2 mt-1 fa-solid mx-2 mt-1 fa-signs-post"></i>
                        <span>Career</span>
                    </a>
                    <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
                        data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <h6 class="collapse-header">Career:</h6>
                            <Link class="collapse-item" to="/career-title-logo">Title & Banner</Link>
                            <Link class="collapse-item" to="/faq">Faq</Link>
                            <Link class="collapse-item" to="/faq-image">Faq Banner</Link>
                            <Link class="collapse-item" to="/recruitment-process">Recruitment Process</Link>
                            <Link class="collapse-item" to="/job-list">Job List</Link>
                            <Link class="collapse-item" to="/job-description">Job Description</Link>

                        </div>
                    </div>
                    <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
                        data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <h6 class="collapse-header">Candidate:</h6>
                            <Link class="collapse-item" to="/all-candidate-cv">Candidate CV</Link>


                        </div>
                    </div>
                </li>

                {/* <!-- Divider --> */}
                <hr class="sidebar-divider" />

                {/* <!-- Heading --> */}
                <div class="sidebar-heading">
                    Addons
                </div>

                {/* <!-- Nav Item - Pages Collapse Menu --> */}
                <li class="nav-item">
                    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                        aria-expanded="true" aria-controls="collapsePages">
                        <i class="fas fa-user mx-2 mt-1 fa-fw mx-2"></i>
                        <span>Clients</span>
                    </a>
                    <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <h6 class="collapse-header">Partners</h6>
                            <Link class="collapse-item" to="/our-partner-title-logo"> Title & Logo</Link>
                            <Link class="collapse-item" to="/our-partners"> Our Partners</Link>
                            <Link class="collapse-item" to="/our-partner-testimonial"> Partner Testimonial</Link>

                            <h6 class="collapse-header">Become a Partner</h6>
                            <Link class="collapse-item" to="/become-a-partner-title-logo"> Title & Logo</Link>
                            <Link class="collapse-item" to="/all-partners"> All Partners</Link>

                    
                            <div class="collapse-divider"></div>
                            <h6 class="collapse-header">Connecting people:</h6>
                            <Link class="collapse-item" to="/all-consultant"> All Consultant</Link>
                            <Link class="collapse-item" to="/all-contact-us"> All Contact us</Link>
                        </div>
                    </div>
                </li>


                <li class="nav-item">
                    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#coverage"
                        aria-expanded="true" aria-controls="collapsePages">
                        <i class=" mx-2 mt-1 mx-2 fa-solid fa-globe"></i>
                        <span>Coverage</span>
                    </a>
                    <div id="coverage" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <h6 class="collapse-header">Partners</h6>
                            <Link class="collapse-item" to="/our-world-wide-project">Our World wide Projects</Link>
                           
                        </div>
                    </div>
                </li>

                <li class="nav-item">
                    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#portfolio"
                        aria-expanded="true" aria-controls="collapsePages">
                        <i class=" mx-2 mt-1 mx-2 fa-solid fa-bullhorn"></i>                 
                           <span>Portfolio</span>
                    </a>
                    <div id="portfolio" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <h6 class="collapse-header">Products</h6>
                            <Link class="collapse-item" to="/product-title-logo">Title & Banner</Link>
                            <Link class="collapse-item" to="/portfolio-product">Products</Link>

                            <h6 class="collapse-header">Case Studies</h6>
                            <Link class="collapse-item" to="/case-studies-title-logo">Title & Banner</Link>
                            <Link class="collapse-item" to="/our-case-studies">Case Studies</Link>

                            <h6 class="collapse-header">R&D Works</h6>
                            <Link class="collapse-item" to="/r-d-work-title-logo">Title & Banner</Link>

                            <Link class="collapse-item" to="/our-rd-work">R&D Work</Link>
                           
                           
                        </div>
                      
                    </div>
                </li>

                {/* <!-- Blog and news --> */}

                <li class="nav-item">
                    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages1"
                        aria-expanded="true" aria-controls="collapsePages">
                        <i class="fas mx-2 mt-1 fa-newspaper"></i>
                        <span>Contacts</span>
                    </a>
                    <div id="collapsePages1" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <h6 class="collapse-header">About Us</h6>
                            <Link class="collapse-item" to="/about-us-title-logo">Title & Logo</Link>
                            <Link class="collapse-item" to="/about-us-mission">Mission</Link>
                            <Link class="collapse-item" to="/about-us-vission">Vission</Link>
                            <Link class="collapse-item" to="/our-values-card">Our Values Card</Link>
                            <Link class="collapse-item" to="/how-we-work">How We Work</Link>
                            <div class="collapse-divider"></div>
                            <h6 class="collapse-header">Other Pages:</h6>
                            <a class="collapse-item" href="404.html">404 Page</a>
                            <a class="collapse-item" href="blank.html">Blank Page</a>
                        </div>
                    </div>
                </li>


                {/* <li class="nav-item">
                    <a class="nav-link" href="charts.html">
                        <i class="fas mx-2 mt-1 fa-fw mx-2 mt-1 fa-chart-area"></i>
                        <span>Charts</span></a>
                </li> */}

                {/* <!-- Nav Item - Tables --> */}
                {/* <li class="nav-item">
                    <a class="nav-link" href="tables.html">
                        <i class="fas mx-2 mt-1 fa-fw mx-2 mt-1 fa-table"></i>
                        <span>Tables</span></a>
                </li> */}

                {/* <!-- Divider --> */}
                <hr class="sidebar-divider d-none d-md-block" />

                {/* <!-- Sidebar Toggler (Sidebar) --> */}
                <div class="text-center d-none d-md-inline">
                    <button class="rounded-circle border-0" id="sidebarToggle"></button>
                </div>

                {/* <!-- Sidebar Message --> */}
                {/* <div class="sidebar-card d-none d-lg-flex">
            <img class="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..."/>
            <p class="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
            <a class="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
        </div> */}

            </ul>
            {/* <!-- End of Sidebar --> */}
        </>
    );
};

export default DashboardSideMenu;