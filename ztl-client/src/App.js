
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import NotFound from './Components/NotFound/NotFound';
import axios, { AxiosError } from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";
import Swal from 'sweetalert2';

import Layouts from './Components/layouts/Layouts';
import MainHomePage from './Components/main_home_page/MainHomePage';
import WebDevelopment from './Components/services/WebDevelopment';
import MobilePlatform from './Components/services/MobilePlatform';
import IndustryRevolutions from './Components/services/IndustryRevolutions';
import BusinessManagement from './Components/services/BusinessManagement';
import TechConsultancyServices from './Components/services/TechConsultancyServices';
import Digitization from './Components/services/Digitization';
import UIUXDesign from './Components/services/UIUXDesign';
import ITSupportServices from './Components/services/ITSupportServices';
import SCS from './Components/services/SCS';
import BPO from './Components/services/BPO';
import TrainingSkillDevelopment from './Components/services/TrainingSkillDevelopment';
import ECommerce from './Components/industries/ECommerce';
import Healthcare from './Components/industries/Healthcare';
import Logistics from './Components/industries/Logistics';
import FinTech from './Components/industries/FinTech';
import LegalLaw from './Components/industries/LegalLaw';
import IoT from './Components/industries/IoT';
import CRMSolutions from './Components/expertise/CRMSolutions';
import ERPSolutions from './Components/expertise/ERPSolutions';
import AccountingSolutions from './Components/expertise/AccountingSolutions';
import InventorySolutions from './Components/expertise/InventorySolutions';
import HRMPayrollManagement from './Components/expertise/HRMPayrollManagement';
import SchoolManagement from './Components/expertise/SchoolManagement';
import HospitalManagement from './Components/expertise/HospitalManagement';
import ToursTravelManagement from './Components/expertise/ToursTravelManagement';
import MicrofinanceSoftware from './Components/expertise/MicrofinanceSoftware';
import DigitalLegalComplianceSystem from './Components/expertise/DigitalLegalComplianceSystem';
import Products from './Components/portfolio/Products';
import CaseStudies from './Components/portfolio/CaseStudies';
import RDWorks from './Components/portfolio/RDWorks';
import Partners from './Components/partners/Partners';
import BecomeaPartner from './Components/partners/BecomeaPartner';
import Career from './Components/career/Career';
import Membership from './Components/membership/Membership';
import Coverage from './Components/coverage/Coverage';
import ContactUs from './Components/contacts/ContactUs';
import Blog from './Components/contacts/Blog';
import News from './Components/contacts/News';
import AboutUs from './Components/contacts/AboutUs';
import MasterDashboardLayout from './dashboard/MasterDashboardLayout';
import Heading from './BackendComponents/LandingPageHome/Heading/Heading';
import AddHeading from './BackendComponents/LandingPageHome/Heading/AddHeading';
import EditHeading from './BackendComponents/LandingPageHome/Heading/EditHeading';
import Testimonial from './BackendComponents/LandingPageHome/Testimonial/Testimonial';
import AddTestimonial from './BackendComponents/LandingPageHome/Testimonial/AddTestimonial';
import EditTestimonial from './BackendComponents/LandingPageHome/Testimonial/EditTestimonial';

import OurPartnerTestimonial from './BackendComponents/LandingPageHome/OurPartnerTestimonial/OurPartnerTestimonial';

import AddOurPartnerTestimonial from './BackendComponents/LandingPageHome/OurPartnerTestimonial/AddOurPartnerTestimonial';
import EditOurPartnerTestimonial from './BackendComponents/LandingPageHome/OurPartnerTestimonial/EditOurPartnerTestimonial';

import Faq from './BackendComponents/Faq/Faq';
import AddFaq from './BackendComponents/Faq/AddFaq';
import EditFaq from './BackendComponents/Faq/EditFaq';



import WebDevelopmentFaq from './BackendComponents/Faq/WebDevelopment/WebDevelopmentFaq';
import AddWebDevelopmentFaq from './BackendComponents/Faq/WebDevelopment/AddWebDevelopmentFaq';
import EditWebDevelopmentFaq from './BackendComponents/Faq//WebDevelopment/EditWebDevelopmentFaq';

import FaqImage from './BackendComponents/Faq/FaqImage/FaqImage';
import AddFaqImage from './BackendComponents/Faq/FaqImage/AddFaqImage';
import EditFaqImage from './BackendComponents/Faq/FaqImage/EditFaqImage';

import WebDevelopmentFaqImage from './BackendComponents/Faq/WebDevelopmentFaqImage/WebDevelopmentFaqImage';
import AddWebDevelopmentFaqImage from './BackendComponents/Faq/WebDevelopmentFaqImage/AddWebDevelopmentFaqImage';
import EditWebDevelopmentFaqImage from './BackendComponents/Faq/WebDevelopmentFaqImage/EditWebDevelopmentFaqImage';

import RecruitmentProcess from './BackendComponents/RecruitmentProcess/RecruitmentProcess';
import AddRecruitmentProcess from './BackendComponents/RecruitmentProcess/AddRecruitmentProcess';
import EditRecruitmentProcess from './BackendComponents/RecruitmentProcess/EditRecruitmentProcess';

import Counter from './BackendComponents/Counter/Counter';
import AddCounter from './BackendComponents/Counter/AddCounter';
import EditCounter from './BackendComponents/Counter/EditCounter';

import TechnologyIndex from './BackendComponents/LandingPageHome/TechnologyIndex/TechnologyIndex';
import AddTechnologyIndex from './BackendComponents/LandingPageHome/TechnologyIndex/AddTechnologyIndex';
import EditTechnologyIndex from './BackendComponents/LandingPageHome/TechnologyIndex/EditTechnologyIndex';

import TechnologyIndexLogo from './BackendComponents/LandingPageHome/TechnologyIndexLogo/TechnologyIndexLogo';
import AddTechnologyIndexLogo from './BackendComponents/LandingPageHome/TechnologyIndexLogo/AddTechnologyIndexLogo';
import EditTechnologyIndexLogo from './BackendComponents/LandingPageHome/TechnologyIndexLogo/EditTechnologyIndexLogo';



import JobList from './BackendComponents/JobList/JobList';
import AddJobList from './BackendComponents/JobList/AddJobList';
import EditJobList from './BackendComponents/JobList/EditJobList';

import HealthCareTitleLogo from './BackendComponents/Menu/HealthCareTitleLogo/HealthCareTitleLogo';
import AddHealthCareTitleLogo from './BackendComponents/Menu/HealthCareTitleLogo/AddHealthCareTitleLogo';
import EditHealthCareTitleLogo from './BackendComponents/Menu/HealthCareTitleLogo/EditHealthCareTitleLogo';

import ErpSolutionTitleLogo from './BackendComponents/Menu/ErpSolutionTitleLogo/ErpSolutionTitleLogo';
import AddErpSolutionTitleLogo from './BackendComponents/Menu/ErpSolutionTitleLogo/AddErpSolutionTitleLogo';
import EditErpSolutionTitleLogo from './BackendComponents/Menu/ErpSolutionTitleLogo/EditErpSolutionTitleLogo';

import WebDevelopmentTitleLogo from './BackendComponents/Menu/WebDevelopmentTitleLogo/WebDevelopmentTitleLogo';
import AddWebDevelopmentTitleLogo from './BackendComponents/Menu/WebDevelopmentTitleLogo/AddWebDevelopmentTitleLogo';
import EditWebDevelopmentTitleLogo from './BackendComponents/Menu/WebDevelopmentTitleLogo/EditWebDevelopmentTitleLogo';

import OurPartnerTitleLogo from './BackendComponents/Menu/OurPartnerTitleLogo/OurPartnerTitleLogo';
import AddOurPartnerTitleLogo from './BackendComponents/Menu/OurPartnerTitleLogo/AddOurPartnerTitleLogo';
import EditOurPartnerTitleLogo from './BackendComponents/Menu/OurPartnerTitleLogo/EditOurPartnerTitleLogo';

import ProductTitleLogo from './BackendComponents/Menu/Portfolio/Products/ProductTitleLogo';
import AddProductTitleLogo from './BackendComponents/Menu/Portfolio/Products/AddProductTitleLogo';
import EditProductTitleLogo from './BackendComponents/Menu/Portfolio/Products/EditProductTitleLogo';

import CaseStudiesTitleLogo from './BackendComponents/Menu/Portfolio/CaseStudiesTitleLogo/CaseStudiesTitleLogo';
import AddCaseStudiesTitleLogo from './BackendComponents/Menu/Portfolio/CaseStudiesTitleLogo/AddCaseStudiesTitleLogo';
import EditCaseStudiesTitleLogo from './BackendComponents/Menu/Portfolio/CaseStudiesTitleLogo/EditCaseStudiesTitleLogo';


import RdWorkTitleLogo from './BackendComponents/Menu/Portfolio/RdWorkTitleLogo/RdWorkTitleLogo';
import AddRdWorkTitleLogo from './BackendComponents/Menu/Portfolio/RdWorkTitleLogo/AddRdWorkTitleLogo';
import EditRdWorkTitleLogo from './BackendComponents/Menu/Portfolio/RdWorkTitleLogo/EditRdWorkTitleLogo';


import BecomeAPartnerTitleLogo from './BackendComponents/Menu/BecomeAPartnerTitleLogo/BecomeAPartnerTitleLogo';
import AddBecomeAPartnerTitleLogo from './BackendComponents/Menu/BecomeAPartnerTitleLogo/AddBecomeAPartnerTitleLogo';
import EditBecomeAPartnerTitleLogo from './BackendComponents/Menu/BecomeAPartnerTitleLogo/EditBecomeAPartnerTitleLogo';

import CareerTitleLogo from './BackendComponents/CareerTitleLogo/CareerTitleLogo';
import AddCareerTitleLogo from './BackendComponents/CareerTitleLogo/AddCareerTitleLogo';
import EditCareerTitleLogo from './BackendComponents/CareerTitleLogo/EditCareerTitleLogo';

import JobDescription from './BackendComponents/JobDescription/JobDescription';
import AddJobDescription from './BackendComponents/JobDescription/AddJobDescription';
import EditJobDescription from './BackendComponents/JobDescription/EditJobDescription';

import ServiceType from './BackendComponents/ServiceType/ServiceType';
import AddServiceType from './BackendComponents/ServiceType/AddServiceType';
import EditServiceType from './BackendComponents/ServiceType/EditServiceType';

import ServiceDescription from './BackendComponents/ServiceDescription/ServiceDescription';
import AddServiceDescription from './BackendComponents/ServiceDescription/AddServiceDescription';
import EditServiceDescription from './BackendComponents/ServiceDescription/EditServiceDescription';


import WebDevelopmentProject from './BackendComponents/Menu/WebDevelopmentProjects/WebDevelopmentProject';
import AddWebDevelopmentProject from './BackendComponents/Menu/WebDevelopmentProjects/AddWebDevelopmentProject';
import EditWebDevelopmentProject from './BackendComponents/Menu/WebDevelopmentProjects/EditWebDevelopmentProject';

import KeyWebTechnologies from './BackendComponents/Menu/KeyWebTechnologies/KeyWebTechnologies';
import AddKeyWebTechnologies from './BackendComponents/Menu/KeyWebTechnologies/AddKeyWebTechnologies';
import EditKeyWebTechnologies from './BackendComponents/Menu/KeyWebTechnologies/EditKeyWebTechnologies';

import KeyHealthTechnologies from './BackendComponents/Menu/KeyHealthTechnologies/KeyHealthTechnologies';
import AddKeyHealthTechnologies from './BackendComponents/Menu/KeyHealthTechnologies/AddKeHealthTechnologies';
import EditKeyHealthTechnologies from './BackendComponents/Menu/KeyHealthTechnologies/EditKeyHealthTechnologies';


import KeyErpTechnologies from './BackendComponents/Menu/KeyErpTechnologies/KeyErpTechnologies';
import AddKeyErpTechnologies from './BackendComponents/Menu/KeyErpTechnologies/AddKeyErpTechnologies';
import EditKeyErpTechnologies from './BackendComponents/Menu/KeyErpTechnologies/EditKeyErpTechnologies';


import OurValuesCard from './BackendComponents/Menu/AboutUs/OurValuesCard/OurValuesCard';
import AddOurValuesCard from './BackendComponents/Menu/AboutUs/OurValuesCard/AddOurValuesCard';
import EditOurValuesCard from './BackendComponents/Menu/AboutUs/OurValuesCard/EditOurValuesCard';

import AddWebTechnologiesFrameWorkLogo from './BackendComponents/Menu/WebTechnologyFrameWork/AddWebTechnologiesFrameWorkLogo';
import WebTechnologiesFrameWorkLogo from './BackendComponents/Menu/WebTechnologyFrameWork/WebTechnologiesFrameWorkLogo';
import EditWebTechnologiesFrameWorkLogo from './BackendComponents/Menu/WebTechnologyFrameWork/EditWebTechnologiesFrameWorkLogo';

import HealthTechnologiesFrameWorkLogo from './BackendComponents/Menu/HealthTechnologyFrameWork/HealthTechnologiesFrameWorkLogo';
import AddHealthTechnologiesFrameWorkLogo from './BackendComponents/Menu/HealthTechnologyFrameWork/AddHealthTechnologiesFrameWorkLogo';
import EditHealthTechnologiesFrameWorkLogo from './BackendComponents/Menu/HealthTechnologyFrameWork/EditHealthTechnologiesFrameWorkLogo';


import ErpTechnologiesFrameWorkLogo from './BackendComponents/Menu/ErpTechnologyFrameWork/ErpTechnologiesFrameWorkLogo';
import AddErpTechnologiesFrameWorkLogo from './BackendComponents/Menu/ErpTechnologyFrameWork/AddErpTechnologiesFrameWorkLogo';
import EditErpTechnologiesFrameWorkLogo from './BackendComponents/Menu/ErpTechnologyFrameWork/EditErpTechnologiesFrameWorkLogo';



import AboutUsTitleLogo from './BackendComponents/Menu/AboutUs/Title & Logo/AboutUsTitleLogo';
import AddAboutUsTitleLogo from './BackendComponents/Menu/AboutUs/Title & Logo/AddAboutUsTitleLogo';
import EditAboutUsTitleLogo from './BackendComponents/Menu/AboutUs/Title & Logo/EditAboutUsTitleLogo';

import AboutUsMission from './BackendComponents/Menu/AboutUs/Mission/AboutUsMission';
import AddAboutUsMission from './BackendComponents/Menu/AboutUs/Mission/AddAboutUsMission';
import EditAboutUsMission from './BackendComponents/Menu/AboutUs/Mission/EditAboutUsMission';

import AboutUsVission from './BackendComponents/Menu/AboutUs/Vission/AboutUsVission';
import AddAboutUsVission from './BackendComponents/Menu/AboutUs/Vission/AddAboutUsVission';
import EditAboutUsVission from './BackendComponents/Menu/AboutUs/Vission/EditAboutUsVission';

import WebDevelopmentCard from './BackendComponents/Menu/WebDevelopmentCard/WebDevelopmentCard';
import AddWebDevelopmentCard from './BackendComponents/Menu/WebDevelopmentCard/AddWebDevelopmentCard';
import EditWebDevelopmentCard from './BackendComponents/Menu/WebDevelopmentCard/EditWebDevelopmentCard';

import HealthCareCard from './BackendComponents/Menu/HealthCareCard/HealthCareCard';
import AddHealthCareCard from './BackendComponents/Menu/HealthCareCard/AddHealthCareCard';
import EditHealthCareCard from './BackendComponents/Menu/HealthCareCard/EditHealthCareCard';


import CustomErpSolution from './BackendComponents/Menu/CustomErpSolution/CustomErpSolution';
import AddCustomErpSolution from './BackendComponents/Menu/CustomErpSolution/AddCustomErpSolution';
import EditCustomErpSolution from './BackendComponents/Menu/CustomErpSolution/EditCustomErpSolution';

import HowWeWork from './BackendComponents/Menu/AboutUs/HowWeWork/HowWeWork';
import AddHowWeWork from './BackendComponents/Menu/AboutUs/HowWeWork/AddHowWeWork';
import EditHowWeWork from './BackendComponents/Menu/AboutUs/HowWeWork/EditHowWeWork';

import RDWorkItem from './BackendComponents/Menu/RDWork/RDWorkItem/RDWorkItem';
import AddRDWorkItem from './BackendComponents/Menu/RDWork/RDWorkItem/AddRDWorkItem';
import EditRDWorkItem from './BackendComponents/Menu/RDWork/RDWorkItem/EditRDWorkItem';

import OurCaseStudies from './BackendComponents/Menu/Portfolio/OurCaseStudies/OurCaseStudies';
import AddOurCaseStudies from './BackendComponents/Menu/Portfolio/OurCaseStudies/AddOurCaseStudies';
import EditOurCaseStudies from './BackendComponents/Menu/Portfolio/OurCaseStudies/EditOurCaseStudies';


import ErpSolutionCard from './BackendComponents/Menu/ErpSolutionCard/ErpSolutionCard';
import AddErpSolutionCard from './BackendComponents/Menu/ErpSolutionCard/AddErpSolutionCard';
import EditErpSolutionCard from './BackendComponents/Menu/ErpSolutionCard/EditErpSolutionCard';



import HealthCareSolutionCard from './BackendComponents/Menu/HealthCareSolutionCard/HealthCareSolutionCard';
import AddHealthCareSolutionCard from './BackendComponents/Menu/HealthCareSolutionCard/AddHealthCareSolutionCard';
import EditHealthCareSolutionCard from './BackendComponents/Menu/HealthCareSolutionCard/EditHealthCareSolutionCard';


import OurPartners from './BackendComponents/OurPartners/OurPartners';
import AddOurPartners from './BackendComponents/OurPartners/AddOurPartners';
import EditOurPartners from './BackendComponents/OurPartners/EditOurPartners';

import OurWorldWideProject from './BackendComponents/Menu/Coverage/OurWorldWideProject/OurWorldWideProject';
import AddOurWorldWideProject from './BackendComponents/Menu/Coverage/OurWorldWideProject/AddOurWorldWideProject';
import EditOurWorldWideProject from './BackendComponents/Menu/Coverage/OurWorldWideProject/EditOurWorldWideProject';

import PortfolioProduct from './BackendComponents/Menu/Portfolio/PortfolioProduct/PortfolioProduct';
import AddPortfolioProduct from './BackendComponents/Menu/Portfolio/PortfolioProduct/AddPortfolioProduct';
import EditPortfolioProduct from './BackendComponents/Menu/Portfolio/PortfolioProduct/EditPortfolioProduct';


import ServiceLogo from './BackendComponents/ServiceLogo/ServiceLogo';
import AddServiceLogo from './BackendComponents/ServiceLogo/AddServiceLogo';
import EditServiceLogo from './BackendComponents/ServiceLogo/EditServiceLogo';


import News1 from './BackendComponents/NewsSection/News/News';
import AddNews1 from './BackendComponents/NewsSection/News/AddNews';
import EditNews1 from './BackendComponents/NewsSection/News/EditNews';
import AllCandidateCv from './BackendComponents/AllCandidateCv/AllCandidateCv';
import AllConsultant from './BackendComponents/AllConsultant/AllConsultant';
import AllContactUs from './BackendComponents/AllContactUs/AllContactUs';

import AllPartner from './BackendComponents/AllPartner/AllPartner';

import ProtectedRoutes from './BackendComponents/ProtectedRoutes/ProtectedRoutes';

import UserLogin from './BackendComponents/Authentication/UserLogin';
import AdminLogin from './BackendComponents/Authentication/AdminLogin';

import UserRegistrationForm from './BackendComponents/Authentication/UserRegistrationForm';
import ForgotPasswordForm from './BackendComponents/Authentication/ForgotPasswordForm';



import CareerJobDescription from './Components/career/CareerJobDescription';
import HospitalMSystem from './Components/portfolio/HospitalMSystem';
function App() {
  const navigate=useNavigate();
// const [trigger,setTrigger]=useState();
// console.log('hel',trigger);

    // axios.interceptors.response.use(response => {
    //   return response;

    // }, error => {
    //   if (error.response.status === 401) {
    //     // setTrigger(error.response.status);
    //     console.log('use effect triggered');
    //       // Swal.fire("Unauthorized", '', 'error')
    //       navigate('/user-login')
    //   }
    //   return error;

    // });


// useEffect(()=>{
//   if(trigger){
//     navigate('/user-login');

//   }

// },[trigger]);

// axios.interceptors.request.use(function (config) {
//   // Do something before request is sent
//   return config;
// }, function (error) {
//   // Do something with request error
//   return Promise.reject(error);
// });

// // Add a response interceptor
// axios.interceptors.response.use(function (response) {
//   // Do something with response data
//   return response;
// }, function (error) {
//   // Do something with response error
//   return Promise.reject(error);
// });

  const [storageData, setstorageData] = useState()
  // console.log('local storage check', storageData)
  useEffect(() => {
    const storageDatas = localStorage.getItem('user_type');
    setstorageData(storageDatas)
  }, [])
  return (
    <>
      <Routes>
        {/* morshed */}
        <Route path="/" element={<Layouts />}>
          <Route index element={<MainHomePage />}></Route>
          <Route path="user-login" element={<UserLogin />}></Route>
          <Route path="user-registration" element={<UserRegistrationForm/>}></Route>
          <Route path="forgot-password" element={<ForgotPasswordForm/>}></Route>

          <Route path="web-development" element={<WebDevelopment />}></Route>
          <Route path="mobile-platform" element={<MobilePlatform />}></Route>
          <Route path="industry-revolutions" element={<IndustryRevolutions />}></Route>
          <Route path="business-management" element={<BusinessManagement />}></Route>
          <Route path="tech-consultancy-services" element={<TechConsultancyServices />}></Route>
          <Route path="digitization" element={<Digitization />}></Route>
          <Route path="ui-ux-design" element={<UIUXDesign />}></Route>
          <Route path="it-support-services" element={<ITSupportServices />}></Route>
          <Route path="scs" element={<SCS />}></Route>
          <Route path="bpo" element={<BPO />}></Route>
          <Route path="training-skill-development" element={<TrainingSkillDevelopment />}></Route>

          <Route path="e-commerce" element={<ECommerce />}></Route>
          <Route path="healthcare" element={<Healthcare />}></Route>
          <Route path="logistics" element={<Logistics />}></Route>
          <Route path="fin-tech" element={<FinTech />}></Route>
          <Route path="legal-law" element={<LegalLaw />}></Route>
          <Route path="iot" element={<IoT />}></Route>

          <Route path="crm-solutions" element={<CRMSolutions />}></Route>
          <Route path="erp-solutions" element={<ERPSolutions />}></Route>
          <Route path="accounting-solutions" element={<AccountingSolutions />}></Route>
          <Route path="inventory-solutions" element={<InventorySolutions />}></Route>
          <Route path="hrm-payroll-management" element={<HRMPayrollManagement />}></Route>
          <Route path="school-management" element={<SchoolManagement />}></Route>
          <Route path="hospital-management" element={<HospitalManagement />}></Route>
          <Route path="tours-travel-management" element={<ToursTravelManagement />}></Route>
          <Route path="microfinance-software" element={<MicrofinanceSoftware />}></Route>
          <Route path="digital-legal-compliance-system" element={<DigitalLegalComplianceSystem />}></Route>

          <Route path="products" element={<Products />}></Route>
          <Route path="case-studies" element={<CaseStudies />}></Route>
          <Route path="r-d-works" element={<RDWorks />}></Route>

          <Route path="hospital-management-system" element={<HospitalMSystem />}></Route>

          <Route path="partners" element={<Partners />}></Route>
          <Route path="become-a-partner" element={<BecomeaPartner />}></Route>

          <Route path="career" element={<Career />}></Route>
          <Route path="career-job-description/:job_id" element={<CareerJobDescription />}></Route>
          <Route path="membership" element={<Membership />}></Route>
          <Route path="coverage" element={<Coverage />}></Route>

          <Route path="contact-us" element={<ContactUs />}></Route>
          <Route path="about-us" element={<AboutUs />}></Route>
          <Route path="blog" element={<Blog />}></Route>
          <Route path="news" element={<News />}></Route>
          <Route path="*" element={<NotFound />}></Route>


        </Route>
     
        {/* <Route path="*" element={<UserLogin />} /> */}
        {/* <Route path="user-login" element={<UserLogin />}></Route> */}
        <Route path="admin-login" element={<AdminLogin />}></Route>
        {/* <Route path="user-registration" element={<UserRegistrationForm/>}></Route> */}
        {/* <Route path="forgot-password" element={<ForgotPasswordForm/>}></Route> */}





    {/* backend components start*/}

 
    {/* <Route path="heading" element={<Heading />}></Route> */}

        <Route element={<ProtectedRoutes/>}>
            {
              storageData==='super_admin' &&
              <>
           <Route path="dashboard" element={<MasterDashboardLayout />}></Route>
            <Route path="heading" element={<Heading />}></Route>
            <Route path="add-heading" element={<AddHeading />}></Route>
            <Route path="edit-heading/:id" element={<EditHeading />}></Route>


            <Route path="testimonial" element={<Testimonial />}></Route>
            <Route path="add-testimonial" element={<AddTestimonial />}></Route>
            <Route path="edit-testimonial/:id" element={<EditTestimonial />}></Route>

            

            <Route path="our-partner-testimonial" element={<OurPartnerTestimonial />}></Route>
            <Route path="add-our-partner-testimonial" element={<AddOurPartnerTestimonial />}></Route>
            <Route path="edit-our-partner-testimonial/:id" element={<EditOurPartnerTestimonial />}></Route>

           

            <Route path="faq" element={<Faq />}></Route>
            <Route path="add-faq" element={<AddFaq />}></Route>
            <Route path="edit-faq/:id" element={<EditFaq />}></Route>

            <Route path="web-development-faq" element={<WebDevelopmentFaq />}></Route>
            <Route path="add-web-development-faq" element={<AddWebDevelopmentFaq/>}></Route>
            <Route path="edit-web-development-faq/:id" element={<EditWebDevelopmentFaq />}></Route>

            

            <Route path="faq-image" element={<FaqImage/>}></Route>
            <Route path="add-faq-image" element={<AddFaqImage/>}></Route>
            <Route path="edit-faq-image/:id" element={<EditFaqImage />}></Route>

            <Route path="web-development-faq-image" element={<WebDevelopmentFaqImage/>}></Route>
            <Route path="add-web-development-faq-image" element={<AddWebDevelopmentFaqImage/>}></Route>
            <Route path="edit-web-development-faq-image/:id" element={<EditWebDevelopmentFaqImage />}></Route>

            <Route path="career-title-logo" element={<CareerTitleLogo />}></Route>
            <Route path="add-career-title-logo" element={<AddCareerTitleLogo />}></Route>
            <Route path="edit-career-title-logo/:id" element={<EditCareerTitleLogo />}></Route>

            <Route path="recruitment-process" element={<RecruitmentProcess />}></Route>
            <Route path="add-recruitment-process" element={<AddRecruitmentProcess />}></Route>
            <Route path="edit-recruitment-process/:id" element={<EditRecruitmentProcess />}></Route>

            <Route path="counter" element={<Counter />}></Route>
            <Route path="add-counter" element={<AddCounter />}></Route>
            <Route path="edit-counter/:id" element={<EditCounter />}></Route>

            <Route path="job-list" element={<JobList />}></Route>
            <Route path="add-job-list" element={<AddJobList />}></Route>
            <Route path="edit-job-list/:id" element={<EditJobList />}></Route>

            <Route path="service-type" element={<ServiceType />}></Route>
            <Route path="add-service-type" element={<AddServiceType />}></Route>
            <Route path="edit-service-type/:id" element={<EditServiceType />}></Route>

            <Route path="service-description" element={<ServiceDescription />}></Route>
            <Route path="add-service-description" element={<AddServiceDescription />}></Route>
            <Route path="edit-service-description/:id" element={<EditServiceDescription />}></Route>


            <Route path="key-web-technologies" element={<KeyWebTechnologies />}></Route>
            <Route path="add-key-web-technologies" element={<AddKeyWebTechnologies />}></Route>
            <Route path="edit-key-web-technologies/:id" element={<EditKeyWebTechnologies />}></Route>

            
            <Route path="key-health-technologies" element={<KeyHealthTechnologies />}></Route>
            <Route path="add-key-health-technologies" element={<AddKeyHealthTechnologies />}></Route>
            <Route path="edit-key-health-technologies/:id" element={<EditKeyHealthTechnologies />}></Route>


            
            
            <Route path="key-erp-technologies" element={<KeyErpTechnologies />}></Route>
            <Route path="add-key-erp-technologies" element={<AddKeyErpTechnologies />}></Route>
            <Route path="edit-key-erp-technologies/:id" element={<EditKeyErpTechnologies />}></Route>



            <Route path="web-technologies-framework-logo" element={<WebTechnologiesFrameWorkLogo />}></Route>
            <Route path="add-web-technologies-framework-logo" element={<AddWebTechnologiesFrameWorkLogo />}></Route>
            <Route path="edit-web-technologies-framework-logo/:id" element={<EditWebTechnologiesFrameWorkLogo />}></Route>


            <Route path="health-technologies-framework-logo" element={<HealthTechnologiesFrameWorkLogo />}></Route>
            <Route path="add-health-technologies-framework-logo" element={<AddHealthTechnologiesFrameWorkLogo />}></Route>
            <Route path="edit-health-technologies-framework-logo/:id" element={<EditHealthTechnologiesFrameWorkLogo />}></Route>


            
            <Route path="erp-technologies-framework-logo" element={<ErpTechnologiesFrameWorkLogo />}></Route>
            <Route path="add-erp-technologies-framework-logo" element={<AddErpTechnologiesFrameWorkLogo />}></Route>
            <Route path="edit-erp-technologies-framework-logo/:id" element={<EditErpTechnologiesFrameWorkLogo />}></Route>


            <Route path="technology-index" element={<TechnologyIndex />}></Route>
            <Route path="add-technology-index" element={<AddTechnologyIndex />}></Route>
            <Route path="edit-technology-index/:id" element={<EditTechnologyIndex />}></Route>

            <Route path="job-description" element={<JobDescription />}></Route>
            <Route path="add-job-description" element={<AddJobDescription />}></Route>
            <Route path="edit-job-description/:id" element={<EditJobDescription />}></Route>

            
            <Route path="our-world-wide-project" element={<OurWorldWideProject />}></Route>
            <Route path="add-our-world-wide-project" element={<AddOurWorldWideProject />}></Route>
            <Route path="edit-our-world-wide-project/:id" element={<EditOurWorldWideProject />}></Route>

            <Route path="technology-index-logo" element={<TechnologyIndexLogo />}></Route>
            <Route path="add-technology-index-logo" element={<AddTechnologyIndexLogo />}></Route>
            <Route path="edit-technology-index-logo/:id" element={<EditTechnologyIndexLogo />}></Route>

            <Route path="all-news" element={<News1 />}></Route>
            <Route path="add-all-news" element={<AddNews1 />}></Route>
            <Route path="edit-all-news/:id" element={<EditNews1 />}></Route>


            <Route path="our-partners" element={<OurPartners />}></Route>
            <Route path="add-our-partners" element={<AddOurPartners />}></Route>
            <Route path="edit-our-partners/:id" element={<EditOurPartners />}></Route>


            <Route path="service-logo" element={<ServiceLogo />}></Route>
            <Route path="add-service-logo" element={<AddServiceLogo />}></Route>
            <Route path="edit-service-logo/:id" element={<EditServiceLogo />}></Route>

            <Route path="all-candidate-cv" element={<AllCandidateCv />}></Route>
            <Route path="all-contact-us" element={<AllContactUs />}></Route>

            <Route path="all-consultant" element={<AllConsultant />}></Route>
            <Route path="all-partners" element={<AllPartner />}></Route>

            <Route path="health-care-title-logo" element={<HealthCareTitleLogo/>}></Route>
            <Route path="add-health-care-title-logo" element={<AddHealthCareTitleLogo />}></Route>
            <Route path="edit-health-care-title-logo/:id" element={<EditHealthCareTitleLogo/>}></Route>

            <Route path="health-care-solution-card" element={<HealthCareSolutionCard/>}></Route>
            <Route path="add-health-care-solution-card" element={<AddHealthCareSolutionCard />}></Route>
            <Route path="edit-health-care-solution-card/:id" element={<EditHealthCareSolutionCard/>}></Route>

            
            
            <Route path="erp-solution-title-logo" element={<ErpSolutionTitleLogo/>}></Route>
            <Route path="add-erp-solution-title-logo" element={<AddErpSolutionTitleLogo />}></Route>
            <Route path="edit-erp-solution-title-logo/:id" element={<EditErpSolutionTitleLogo/>}></Route>

            <Route path="health-care-solution-card" element={<HealthCareSolutionCard/>}></Route>
            <Route path="add-health-care-solution-card" element={<AddHealthCareSolutionCard />}></Route>
            <Route path="edit-health-care-solution-card/:id" element={<EditHealthCareSolutionCard/>}></Route>

            <Route path="custom-erp-solution" element={<CustomErpSolution/>}></Route>
            <Route path="add-custom-erp-solution" element={<AddCustomErpSolution />}></Route>
            <Route path="edit-custom-erp-solution/:id" element={<EditCustomErpSolution/>}></Route>

            
            
            <Route path="our-partner-title-logo" element={<OurPartnerTitleLogo/>}></Route>
            <Route path="add-our-partner-title-logo" element={<AddOurPartnerTitleLogo />}></Route>
            <Route path="edit-our-partner-title-logo/:id" element={<EditOurPartnerTitleLogo/>}></Route>

              
            <Route path="product-title-logo" element={<ProductTitleLogo/>}></Route>
            <Route path="add-product-title-logo" element={<AddProductTitleLogo />}></Route>
            <Route path="edit-product-title-logo/:id" element={<EditProductTitleLogo/>}></Route>

            <Route path="case-studies-title-logo" element={<CaseStudiesTitleLogo/>}></Route>
            <Route path="add-case-studies-title-logo" element={<AddCaseStudiesTitleLogo />}></Route>
            <Route path="edit-case-studies-title-logo/:id" element={<EditCaseStudiesTitleLogo/>}></Route>

            
            <Route path="r-d-work-title-logo" element={<RdWorkTitleLogo/>}></Route>
            <Route path="add-r-d-work-title-logo" element={<AddRdWorkTitleLogo />}></Route>
            <Route path="edit-r-d-work-title-logo/:id" element={<EditRdWorkTitleLogo/>}></Route>

      
            <Route path="portfolio-product" element={<PortfolioProduct/>}></Route>
            <Route path="add-portfolio-product" element={<AddPortfolioProduct />}></Route>
            <Route path="edit-portfolio-product/:id" element={<EditPortfolioProduct/>}></Route>


                        
            <Route path="become-a-partner-title-logo" element={<BecomeAPartnerTitleLogo/>}></Route>
            <Route path="add-become-a-partner-title-logo" element={<AddBecomeAPartnerTitleLogo />}></Route>
            <Route path="edit-become-a-partner-title-logo/:id" element={<EditBecomeAPartnerTitleLogo/>}></Route>


       
            <Route path="web-development-title-logo" element={<WebDevelopmentTitleLogo/>}></Route>
            <Route path="add-web-development-title-logo" element={<AddWebDevelopmentTitleLogo />}></Route>
            <Route path="edit-web-development-title-logo/:id" element={<EditWebDevelopmentTitleLogo/>}></Route>


            <Route path="web-development-project" element={<WebDevelopmentProject/>}></Route>
            <Route path="add-web-development-project" element={<AddWebDevelopmentProject />}></Route>
            <Route path="edit-web-development-project/:id" element={<EditWebDevelopmentProject/>}></Route>

            
            <Route path="web-development-card" element={<WebDevelopmentCard/>}></Route>
            <Route path="add-web-development-card" element={<AddWebDevelopmentCard />}></Route>
            <Route path="edit-web-development-card/:id" element={<EditWebDevelopmentCard/>}></Route>

            <Route path="health-care-card" element={<HealthCareCard/>}></Route>
            <Route path="add-health-care-card" element={<AddHealthCareCard />}></Route>
            <Route path="edit-health-care-card/:id" element={<EditHealthCareCard/>}></Route>


            <Route path="erp-solution-card" element={<ErpSolutionCard/>}></Route>
            <Route path="add-erp-solution-card" element={<AddErpSolutionCard />}></Route>
            <Route path="edit-erp-solution-card/:id" element={<EditErpSolutionCard/>}></Route>


            <Route path="about-us-title-logo" element={<AboutUsTitleLogo/>}></Route>
            <Route path="add-about-us-title-logo" element={<AddAboutUsTitleLogo />}></Route>
            <Route path="edit-about-us-title-logo/:id" element={<EditAboutUsTitleLogo/>}></Route>

            <Route path="about-us-mission" element={<AboutUsMission/>}></Route>
            <Route path="add-about-us-mission" element={<AddAboutUsMission />}></Route>
            <Route path="edit-about-us-mission/:id" element={<EditAboutUsMission/>}></Route>

            <Route path="about-us-vission" element={<AboutUsVission/>}></Route>
            <Route path="add-about-us-vission" element={<AddAboutUsVission />}></Route>
            <Route path="edit-about-us-vission/:id" element={<EditAboutUsVission/>}></Route>

            
            <Route path="our-values-card" element={<OurValuesCard/>}></Route>
            <Route path="add-our-values-card" element={<AddOurValuesCard />}></Route>
            <Route path="edit-our-values-card/:id" element={<EditOurValuesCard/>}></Route>

            <Route path="how-we-work" element={<HowWeWork/>}></Route>
            <Route path="add-how-we-work" element={<AddHowWeWork />}></Route>
            <Route path="edit-how-we-work/:id" element={<EditHowWeWork/>}></Route>

            

            <Route path="how-we-work" element={<HowWeWork/>}></Route>
            <Route path="add-how-we-work" element={<AddHowWeWork />}></Route>
            <Route path="edit-how-we-work/:id" element={<EditHowWeWork/>}></Route>


            <Route path="our-rd-work" element={<RDWorkItem/>}></Route>
            <Route path="add-our-rd-work" element={<AddRDWorkItem />}></Route>
            <Route path="edit-our-rd-work/:id" element={<EditRDWorkItem/>}></Route>

            

            <Route path="our-case-studies" element={<OurCaseStudies/>}></Route>
            <Route path="add-our-case-studies" element={<AddOurCaseStudies />}></Route>
            <Route path="edit-our-case-studies/:id" element={<EditOurCaseStudies/>}></Route>



              </>

    
            }

 
          
       
        </Route>


        {/* backend components end*/}
      </Routes>
    </>
  )
}






export default App;