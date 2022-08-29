<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Authentication\AuthController;
use App\Http\Controllers\Heading\HeadingController;
use App\Http\Controllers\Landing\TestimonialController;
use App\Http\Controllers\Landing\OurPartnerTestimonialController;
use App\Http\Controllers\Faq\FaqController;
use App\Http\Controllers\Faq\FaqImageController;

use App\Http\Controllers\RecruitmentProcess\RecruitmentProcessController;
use App\Http\Controllers\RecruitmentProcess\CareerTitleLogoController;
use App\Http\Controllers\Counter\CounterController;
use App\Http\Controllers\JobList\JobListController;

use App\Http\Controllers\Service\ServiceTypeController;
use App\Http\Controllers\HealthCare\HealthCareTitleLogoController;

use App\Http\Controllers\Erp\ErpSolutionTitleLogoController;
use App\Http\Controllers\AboutUs\AboutUsTitleLogoController;
use App\Http\Controllers\AboutUs\AboutUsMissionController;
use App\Http\Controllers\AboutUs\AboutUsVissionController;
use App\Http\Controllers\AboutUs\OurValuesCardController;
use App\Http\Controllers\AboutUs\HowWeWorkController;


use App\Http\Controllers\RDWork\RdWorkItemController;



use App\Http\Controllers\Erp\ErpSolutionCardController;
use App\Http\Controllers\Erp\KeyErpTechnologyController;
use App\Http\Controllers\Erp\CustomErpSolutionController;
use App\Http\Controllers\Erp\ErpTechnologyFrameWorkLogoController;


use App\Http\Controllers\HealthCare\HealthCareCardController;
use App\Http\Controllers\HealthCare\KeyHealthCareTechnologyController;
use App\Http\Controllers\HealthCare\HealthTechnologyFrameWorkLogoController;
use App\Http\Controllers\HealthCare\HealthCareSolutionCardController;

use App\Http\Controllers\WeDdevelopment\WebDevelopmentTitleLogoController;
use App\Http\Controllers\WeDdevelopment\WebDevelopmentFaqController;
use App\Http\Controllers\WeDdevelopment\WebDevelopmentFaqImageController;
use App\Http\Controllers\WeDdevelopment\WebDevelopmentProjectsController;
use App\Http\Controllers\WeDdevelopment\WebDevelopmentCardsController;
use App\Http\Controllers\WeDdevelopment\KeyWebTechnologyController;
use App\Http\Controllers\WeDdevelopment\WebTechnologyFrameWorkLogoController;

use App\Http\Controllers\Projects\OurWorldWideProjectController;

use App\Http\Controllers\Service\ServiceDescriptionController;
use App\Http\Controllers\Service\ServiceLogoController;

use App\Http\Controllers\Portfolio\ProductTitleLogoController;
use App\Http\Controllers\Portfolio\PortfolioProductController;
use App\Http\Controllers\Portfolio\OurCaseStudiesController;
use App\Http\Controllers\Portfolio\CaseStudiesTitleLogoController;
use App\Http\Controllers\Portfolio\RdWorkTitleLogoController;

use App\Http\Controllers\Partner\PartnerController;
use App\Http\Controllers\Partner\OurPartnersController;
use App\Http\Controllers\Partner\PartnerTitleLogoController;
use App\Http\Controllers\Partner\BecomeAPartnerTitleLogoController;
use App\Http\Controllers\NewsSection\AllNewsController;
use App\Http\Controllers\Job\JobController;
use App\Http\Controllers\TechnologyIndex\TechnologyIndexController;
use App\Http\Controllers\TechnologyIndex\TechnologyIndexLogoController;
use App\Http\Controllers\JobList\JobDescriptionsController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::middleware(['auth:sanctum'])->group(function()=>{

// Route::post('/logout',[AuthController::class,'logout']);

// });


Route::group(['middleware' => 'auth:sanctum'], function()
{
   Route::post('/logout',[AuthController::class,'logout']);
      Route::post('/admin-logout',[AuthController::class,'adminLogout']);


});



//register
Route::post('/register',[AuthController::class,'register']);
Route::post('/login',[AuthController::class,'login']);
//user register and login
Route::post('/save-user-register',[AuthController::class,'saveUserRegister']);
//admin register
Route::post('/save-admin-register',[AuthController::class,'saveAdminRegister']);
Route::post('/admin-login',[AuthController::class,'superAdminLogin']);


//forgot password
Route::post('forgot-password', [AuthController::class, 'submitForgetPasswordForm']); 


//landing heading
Route::get('/heading',[HeadingController::class,'index']);
Route::post('/add-heading',[HeadingController::class,'store']);
Route::get('/edit-heading/{id}',[HeadingController::class,'edit']);
Route::post('/update-heading/{id}',[HeadingController::class,'update']);
Route::delete('/delete-heading/{id}',[HeadingController::class,'destroy']);

//testimonial

Route::get('/testimonial',[TestimonialController::class,'index']);
Route::post('/add-testimonial',[TestimonialController::class,'store']);
Route::get('/edit-testimonial/{id}',[TestimonialController::class,'edit']);
Route::post('/update-testimonial/{id}',[TestimonialController::class,'update']);
Route::delete('/delete-testimonial/{id}',[TestimonialController::class,'destroy']);

//our partner testimonial
Route::get('/our-partner-testimonial',[OurPartnerTestimonialController::class,'index']);
Route::post('/add-our-partner-testimonial',[OurPartnerTestimonialController::class,'store']);
Route::get('/edit-our-partner-testimonial/{id}',[OurPartnerTestimonialController::class,'edit']);
Route::post('/update-our-partner-testimonial/{id}',[OurPartnerTestimonialController::class,'update']);
Route::delete('/delete-our-partner-testimonial/{id}',[OurPartnerTestimonialController::class,'destroy']);

//faq

Route::get('/faq',[FaqController::class,'index']);
Route::post('/add-faq',[FaqController::class,'store']);
Route::get('/edit-faq/{id}',[FaqController::class,'edit']);
Route::put('/update-faq/{id}',[FaqController::class,'update']);
Route::delete('/delete-faq/{id}',[FaqController::class,'destroy']);

//web development faq
Route::get('/web-development-faq',[WebDevelopmentFaqController::class,'index']);
Route::post('/add-web-development-faq',[WebDevelopmentFaqController::class,'store']);
Route::get('/edit-web-development-faq/{id}',[WebDevelopmentFaqController::class,'edit']);
Route::put('/update-web-development-faq/{id}',[WebDevelopmentFaqController::class,'update']);
Route::delete('/delete-web-development-faq/{id}',[WebDevelopmentFaqController::class,'destroy']);


//recruitment process

Route::get('/recruitment-process',[RecruitmentProcessController::class,'index']);
Route::post('/add-recruitment-process',[RecruitmentProcessController::class,'store']);
Route::get('/edit-recruitment-process/{id}',[RecruitmentProcessController::class,'edit']);
Route::put('/update-recruitment-process/{id}',[RecruitmentProcessController::class,'update']);
Route::delete('/delete-recruitment-process/{id}',[RecruitmentProcessController::class,'destroy']);

//counter

Route::get('/counter',[CounterController::class,'index']);
Route::post('/add-counter',[CounterController::class,'store']);
Route::get('/edit-counter/{id}',[CounterController::class,'edit']);
Route::put('/update-counter/{id}',[CounterController::class,'update']);
Route::delete('/delete-counter/{id}',[CounterController::class,'destroy']);

//joblist 
Route::get('/job-list',[JobListController::class,'index']);
Route::post('/add-job-list',[JobListController::class,'store']);
Route::get('/edit-job-list/{id}',[JobListController::class,'edit']);
Route::post('/update-job-list/{id}',[JobListController::class,'update']);
Route::delete('/delete-job-list/{id}',[JobListController::class,'destroy']);

//career-title-logo
Route::get('/career-title-logo',[CareerTitleLogoController::class,'index']);
Route::post('/add-career-title-logo',[CareerTitleLogoController::class,'store']);
Route::get('/edit-career-title-logo/{id}',[CareerTitleLogoController::class,'edit']);
Route::post('/update-career-title-logo/{id}',[CareerTitleLogoController::class,'update']);
Route::delete('/delete-career-title-logo/{id}',[CareerTitleLogoController::class,'destroy']);


//job description


Route::get('/job-description',[JobDescriptionsController::class,'index']);
Route::post('/add-job-description',[JobDescriptionsController::class,'store']);
Route::get('/edit-job-description/{id}',[JobDescriptionsController::class,'edit']);
Route::post('/update-job-description/{id}',[JobDescriptionsController::class,'update']);
Route::delete('/delete-job-description/{id}',[JobDescriptionsController::class,'destroy']);

//specific job description

Route::get('/career-job-description/{id}',[JobDescriptionsController::class,'getJobDescriptionById']);


//our-world-wide-projects
Route::get('/our-world-wide-project',[OurWorldWideProjectController::class,'index']);
Route::post('/add-our-world-wide-project',[OurWorldWideProjectController::class,'store']);
Route::get('/edit-our-world-wide-project/{id}',[OurWorldWideProjectController::class,'edit']);
Route::post('/update-our-world-wide-project/{id}',[OurWorldWideProjectController::class,'update']);
Route::delete('/delete-our-world-wide-project/{id}',[OurWorldWideProjectController::class,'destroy']);

//portfolio product
Route::get('/portfolio-product',[PortfolioProductController::class,'index']);
Route::post('/add-portfolio-product',[PortfolioProductController::class,'store']);
Route::get('/edit-portfolio-product/{id}',[PortfolioProductController::class,'edit']);
Route::post('/update-portfolio-product/{id}',[PortfolioProductController::class,'update']);
Route::delete('/delete-portfolio-product/{id}',[PortfolioProductController::class,'destroy']);

//our case studies 


Route::get('/our-case-studies',[OurCaseStudiesController::class,'index']);
Route::post('/add-our-case-studies',[OurCaseStudiesController::class,'store']);
Route::get('/edit-our-case-studies/{id}',[OurCaseStudiesController::class,'edit']);
Route::post('/update-our-case-studies/{id}',[OurCaseStudiesController::class,'update']);
Route::delete('/delete-our-case-studies/{id}',[OurCaseStudiesController::class,'destroy']);



//service description
Route::get('/service-description',[ServiceDescriptionController::class,'index']);
Route::post('/add-service-description',[ServiceDescriptionController::class,'store']);
Route::get('/edit-service-description/{id}',[ServiceDescriptionController::class,'edit']);
Route::post('/update-service-description/{id}',[ServiceDescriptionController::class,'update']);
Route::delete('/delete-service-description/{id}',[ServiceDescriptionController::class,'destroy']);

//service type
Route::get('/service-type',[ServiceTypeController::class,'index']);
Route::post('/add-service-type',[ServiceTypeController::class,'store']);
Route::get('/edit-service-type/{id}',[ServiceTypeController::class,'edit']);
Route::post('/update-service-type/{id}',[ServiceTypeController::class,'update']);
Route::delete('/delete-service-type/{id}',[ServiceTypeController::class,'destroy']);

//health care title logo
Route::get('/health-care-title-logo',[HealthCareTitleLogoController::class,'index']);
Route::post('/add-health-care-title-logo',[HealthCareTitleLogoController::class,'store']);
Route::get('/edit-health-care-title-logo/{id}',[HealthCareTitleLogoController::class,'edit']);
Route::post('/update-health-care-title-logo/{id}',[HealthCareTitleLogoController::class,'update']);
Route::delete('/delete-health-care-title-logo/{id}',[HealthCareTitleLogoController::class,'destroy']);

//erp solution title logo

Route::get('/erp-solution-title-logo',[ErpSolutionTitleLogoController::class,'index']);
Route::post('/add-erp-solution-title-logo',[ErpSolutionTitleLogoController::class,'store']);
Route::get('/edit-erp-solution-title-logo/{id}',[ErpSolutionTitleLogoController::class,'edit']);
Route::post('/update-erp-solution-title-logo/{id}',[ErpSolutionTitleLogoController::class,'update']);
Route::delete('/delete-erp-solution-title-logo/{id}',[ErpSolutionTitleLogoController::class,'destroy']);

//about us title logo

Route::get('/about-us-title-logo',[AboutUsTitleLogoController::class,'index']);
Route::post('/add-about-us-title-logo',[AboutUsTitleLogoController::class,'store']);
Route::get('/edit-about-us-title-logo/{id}',[AboutUsTitleLogoController::class,'edit']);
Route::post('/update-about-us-title-logo/{id}',[AboutUsTitleLogoController::class,'update']);
Route::delete('/delete-about-us-title-logo/{id}',[AboutUsTitleLogoController::class,'destroy']);

//about us mission vission

Route::get('/about-us-mission',[AboutUsMissionController::class,'index']);
Route::post('/add-about-us-mission',[AboutUsMissionController::class,'store']);
Route::get('/edit-about-us-mission/{id}',[AboutUsMissionController::class,'edit']);
Route::post('/update-about-us-mission/{id}',[AboutUsMissionController::class,'update']);
Route::delete('/delete-about-us-mission/{id}',[AboutUsMissionController::class,'destroy']);


//about us vission'

Route::get('/about-us-vission',[AboutUsVissionController::class,'index']);
Route::post('/add-about-us-vission',[AboutUsVissionController::class,'store']);
Route::get('/edit-about-us-vission/{id}',[AboutUsVissionController::class,'edit']);
Route::post('/update-about-us-vission/{id}',[AboutUsVissionController::class,'update']);
Route::delete('/delete-about-us-vission/{id}',[AboutUsVissionController::class,'destroy']);


//web development title logo
Route::get('/web-development-title-logo',[WebDevelopmentTitleLogoController::class,'index']);
Route::post('/add-web-development-title-logo',[WebDevelopmentTitleLogoController::class,'store']);
Route::get('/edit-web-development-title-logo/{id}',[WebDevelopmentTitleLogoController::class,'edit']);
Route::post('/update-web-development-title-logo/{id}',[WebDevelopmentTitleLogoController::class,'update']);
Route::delete('/delete-web-development-title-logo/{id}',[WebDevelopmentTitleLogoController::class,'destroy']);


//our partner title logo

Route::get('/our-partner-title-logo',[PartnerTitleLogoController::class,'index']);
Route::post('/add-our-partner-title-logo',[PartnerTitleLogoController::class,'store']);
Route::get('/edit-our-partner-title-logo/{id}',[PartnerTitleLogoController::class,'edit']);
Route::post('/update-our-partner-title-logo/{id}',[PartnerTitleLogoController::class,'update']);
Route::delete('/delete-our-partner-title-logo/{id}',[PartnerTitleLogoController::class,'destroy']);



//product title logo


Route::get('/product-title-logo',[ProductTitleLogoController::class,'index']);
Route::post('/add-product-title-logo',[ProductTitleLogoController::class,'store']);
Route::get('/edit-product-title-logo/{id}',[ProductTitleLogoController::class,'edit']);
Route::post('/update-product-title-logo/{id}',[ProductTitleLogoController::class,'update']);
Route::delete('/delete-product-title-logo/{id}',[ProductTitleLogoController::class,'destroy']);


//case studies title-logo

Route::get('/case-studies-title-logo',[CaseStudiesTitleLogoController::class,'index']);
Route::post('/add-case-studies-title-logo',[CaseStudiesTitleLogoController::class,'store']);
Route::get('/edit-case-studies-title-logo/{id}',[CaseStudiesTitleLogoController::class,'edit']);
Route::post('/update-case-studies-title-logo/{id}',[CaseStudiesTitleLogoController::class,'update']);
Route::delete('/delete-case-studies-title-logo/{id}',[CaseStudiesTitleLogoController::class,'destroy']);



//rd work title logo 
Route::get('/r-d-work-title-logo',[RdWorkTitleLogoController::class,'index']);
Route::post('/add-r-d-work-title-logo',[RdWorkTitleLogoController::class,'store']);
Route::get('/edit-r-d-work-title-logo/{id}',[RdWorkTitleLogoController::class,'edit']);
Route::post('/update-r-d-work-title-logo/{id}',[RdWorkTitleLogoController::class,'update']);
Route::delete('/delete-r-d-work-title-logo/{id}',[RdWorkTitleLogoController::class,'destroy']);


//become a partner title logo

Route::get('/become-a-partner-title-logo',[BecomeAPartnerTitleLogoController::class,'index']);
Route::post('/add-become-a-partner-title-logo',[BecomeAPartnerTitleLogoController::class,'store']);
Route::get('/edit-become-a-partner-title-logo/{id}',[BecomeAPartnerTitleLogoController::class,'edit']);
Route::post('/update-become-a-partner-title-logo/{id}',[BecomeAPartnerTitleLogoController::class,'update']);
Route::delete('/delete-become-a-partner-title-logo/{id}',[BecomeAPartnerTitleLogoController::class,'destroy']);



//our-health-solutions-card
Route::get('/health-care-solution-card',[HealthCareSolutionCardController::class,'index']);
Route::post('/add-health-care-solution-card',[HealthCareSolutionCardController::class,'store']);
Route::get('/edit-health-care-solution-card/{id}',[HealthCareSolutionCardController::class,'edit']);
Route::post('/update-health-care-solution-card/{id}',[HealthCareSolutionCardController::class,'update']);
Route::delete('/delete-health-care-solution-card/{id}',[HealthCareSolutionCardController::class,'destroy']);


//our values card
Route::get('/our-values-card',[OurValuesCardController::class,'index']);
Route::post('/add-our-values-card',[OurValuesCardController::class,'store']);
Route::get('/edit-our-values-card/{id}',[OurValuesCardController::class,'edit']);
Route::post('/update-our-values-card/{id}',[OurValuesCardController::class,'update']);
Route::delete('/delete-our-values-card/{id}',[OurValuesCardController::class,'destroy']);

//how we work

Route::get('/how-we-work',[HowWeWorkController::class,'index']);
Route::post('/add-how-we-work',[HowWeWorkController::class,'store']);
Route::get('/edit-how-we-work/{id}',[HowWeWorkController::class,'edit']);
Route::post('/update-how-we-work/{id}',[HowWeWorkController::class,'update']);
Route::delete('/delete-how-we-work/{id}',[HowWeWorkController::class,'destroy']);

//our r-d work r&d

Route::get('/our-rd-work',[RdWorkItemController::class,'index']);
Route::post('/add-our-rd-work',[RdWorkItemController::class,'store']);
Route::get('/edit-our-rd-work/{id}',[RdWorkItemController::class,'edit']);
Route::post('/update-our-rd-work/{id}',[RdWorkItemController::class,'update']);
Route::delete('/delete-our-rd-work/{id}',[RdWorkItemController::class,'destroy']);

//specific rd work item by click by id

Route::get('/rd-item/{id}',[RdWorkItemController::class,'getRDItem']);




//web development projects


Route::get('/web-development-project',[WebDevelopmentProjectsController::class,'index']);
Route::post('/add-web-development-project',[WebDevelopmentProjectsController::class,'store']);
Route::get('/edit-web-development-project/{id}',[WebDevelopmentProjectsController::class,'edit']);
Route::post('/update-web-development-project/{id}',[WebDevelopmentProjectsController::class,'update']);
Route::delete('/delete-web-development-project/{id}',[WebDevelopmentProjectsController::class,'destroy']);


//web development card

Route::get('/web-development-card',[WebDevelopmentCardsController::class,'index']);
Route::post('/add-web-development-card',[WebDevelopmentCardsController::class,'store']);
Route::get('/edit-web-development-card/{id}',[WebDevelopmentCardsController::class,'edit']);
Route::post('/update-web-development-card/{id}',[WebDevelopmentCardsController::class,'update']);
Route::delete('/delete-web-development-card/{id}',[WebDevelopmentCardsController::class,'destroy']);

//health care card

Route::get('/health-care-card',[HealthCareCardController::class,'index']);
Route::post('/add-health-care-card',[HealthCareCardController::class,'store']);
Route::get('/edit-health-care-card/{id}',[HealthCareCardController::class,'edit']);
Route::post('/update-health-care-card/{id}',[HealthCareCardController::class,'update']);
Route::delete('/delete-health-care-card/{id}',[HealthCareCardController::class,'destroy']);

//custom erp solution

Route::get('/custom-erp-solution',[CustomErpSolutionController::class,'index']);
Route::post('/add-custom-erp-solution',[CustomErpSolutionController::class,'store']);
Route::get('/edit-custom-erp-solution/{id}',[CustomErpSolutionController::class,'edit']);
Route::post('/update-custom-erp-solution/{id}',[CustomErpSolutionController::class,'update']);
Route::delete('/delete-custom-erp-solution/{id}',[CustomErpSolutionController::class,'destroy']);

//erp solution card
Route::get('/erp-solution-card',[ErpSolutionCardController::class,'index']);
Route::post('/add-erp-solution-card',[ErpSolutionCardController::class,'store']);
Route::get('/edit-erp-solution-card/{id}',[ErpSolutionCardController::class,'edit']);
Route::post('/update-erp-solution-card/{id}',[ErpSolutionCardController::class,'update']);
Route::delete('/delete-erp-solution-card/{id}',[ErpSolutionCardController::class,'destroy']);



//all news section

Route::get('/all-news',[AllNewsController::class,'index']);
Route::post('/add-all-news',[AllNewsController::class,'store']);
Route::get('/edit-all-news/{id}',[AllNewsController::class,'edit']);
Route::put('/update-all-news/{id}',[AllNewsController::class,'update']);
Route::delete('/delete-all-news/{id}',[AllNewsController::class,'destroy']);


//save become a partner
Route::post('/save-become-a-partner',[PartnerController::class,'saveBecomePartner']);
//all-partner
Route::get('/all-partner',[PartnerController::class,'allPartner']);
Route::delete('/delete-all-partner/{id}',[PartnerController::class,'deleteAllPartner']);
//save consultation
Route::post('/save-consultation',[PartnerController::class,'saveConsultation']);
//save contact us 
Route::post('/save-contact-us',[PartnerController::class,'saveContactUs']);
Route::get('/all-contact-us',[PartnerController::class,'allContactUs']);

//all-consultant
Route::get('/all-consultant',[PartnerController::class,'allConsultant']);
Route::delete('/delete-all-consultant/{id}',[PartnerController::class,'deleteAllConsultant']);


//save job apply
Route::post('/save-apply-job',[JobController::class,'saveApplication']);
//all-candidtate-cv
Route::get('/all-candidate-cv',[JobController::class,'allCandidatesCv']);
Route::delete('/delete-candidate-cv/{id}',[JobController::class,'deleteCandidateCv']);


//our partners logo

Route::get('/our-partners',[OurPartnersController::class,'index']);
Route::post('/add-our-partners',[OurPartnersController::class,'store']);
Route::get('/edit-our-partners/{id}',[OurPartnersController::class,'edit']);
Route::post('/update-our-partners/{id}',[OurPartnersController::class,'update']);
Route::delete('/delete-our-partners/{id}',[OurPartnersController::class,'destroy']);

//service logo


Route::get('/service-logo',[ServiceLogoController::class,'index']);
Route::post('/add-service-logo',[ServiceLogoController::class,'store']);
Route::get('/edit-service-logo/{id}',[ServiceLogoController::class,'edit']);
Route::post('/update-service-logo/{id}',[ServiceLogoController::class,'update']);
Route::delete('/delete-service-logo/{id}',[ServiceLogoController::class,'destroy']);

//faq image

Route::get('/faq-image',[FaqImageController::class,'index']);
Route::post('/add-faq-image',[FaqImageController::class,'store']);
Route::get('/edit-faq-image/{id}',[FaqImageController::class,'edit']);
Route::post('/update-faq-image/{id}',[FaqImageController::class,'update']);
Route::delete('/delete-faq-image/{id}',[FaqImageController::class,'destroy']);

Route::get('/web-development-faq-image',[WebDevelopmentFaqImageController::class,'index']);
Route::post('/add-web-development-faq-image',[WebDevelopmentFaqImageController::class,'store']);
Route::get('/edit-web-development-faq-image/{id}',[WebDevelopmentFaqImageController::class,'edit']);
Route::post('/update-web-development-faq-image/{id}',[WebDevelopmentFaqImageController::class,'update']);
Route::delete('/delete-web-development-faq-image/{id}',[WebDevelopmentFaqImageController::class,'destroy']);

//key web technologies short description

Route::get('/key-web-technologies',[KeyWebTechnologyController::class,'index']);
Route::post('/add-key-web-technologies',[KeyWebTechnologyController::class,'store']);
Route::get('/edit-key-web-technologies/{id}',[KeyWebTechnologyController::class,'edit']);
Route::post('/update-key-web-technologies/{id}',[KeyWebTechnologyController::class,'update']);
Route::delete('/delete-key-web-technologies/{id}',[KeyWebTechnologyController::class,'destroy']);


//key health technolgies

Route::get('/key-health-technologies',[KeyHealthCareTechnologyController::class,'index']);
Route::post('/add-key-health-technologies',[KeyHealthCareTechnologyController::class,'store']);
Route::get('/edit-key-health-technologies/{id}',[KeyHealthCareTechnologyController::class,'edit']);
Route::post('/update-key-health-technologies/{id}',[KeyHealthCareTechnologyController::class,'update']);
Route::delete('/delete-key-health-technologies/{id}',[KeyHealthCareTechnologyController::class,'destroy']);


//key erp technologies

Route::get('/key-erp-technologies',[KeyErpTechnologyController::class,'index']);
Route::post('/add-key-erp-technologies',[KeyErpTechnologyController::class,'store']);
Route::get('/edit-key-erp-technologies/{id}',[KeyErpTechnologyController::class,'edit']);
Route::post('/update-key-erp-technologies/{id}',[KeyErpTechnologyController::class,'update']);
Route::delete('/delete-key-erp-technologies/{id}',[KeyErpTechnologyController::class,'destroy']);



//key web technologies framework logo
Route::get('/web-technologies-framework-logo',[WebTechnologyFrameWorkLogoController::class,'index']);
Route::post('/add-web-technologies-framework-logo',[WebTechnologyFrameWorkLogoController::class,'store']);
Route::get('/edit-web-technologies-framework-logo/{id}',[WebTechnologyFrameWorkLogoController::class,'edit']);
Route::post('/update-web-technologies-framework-logo/{id}',[WebTechnologyFrameWorkLogoController::class,'update']);
Route::delete('/delete-web-technologies-framework-logo/{id}',[WebTechnologyFrameWorkLogoController::class,'destroy']);

//health technologies framework logo

Route::get('/health-technologies-framework-logo',[HealthTechnologyFrameWorkLogoController::class,'index']);
Route::post('/add-health-technologies-framework-logo',[HealthTechnologyFrameWorkLogoController::class,'store']);
Route::get('/edit-health-technologies-framework-logo/{id}',[HealthTechnologyFrameWorkLogoController::class,'edit']);
Route::post('/update-health-technologies-framework-logo/{id}',[HealthTechnologyFrameWorkLogoController::class,'update']);
Route::delete('/delete-health-technologies-framework-logo/{id}',[HealthTechnologyFrameWorkLogoController::class,'destroy']);


//erp technology framework logo

Route::get('/erp-technologies-framework-logo',[ErpTechnologyFrameWorkLogoController::class,'index']);
Route::post('/add-erp-technologies-framework-logo',[ErpTechnologyFrameWorkLogoController::class,'store']);
Route::get('/edit-erp-technologies-framework-logo/{id}',[ErpTechnologyFrameWorkLogoController::class,'edit']);
Route::post('/update-erp-technologies-framework-logo/{id}',[ErpTechnologyFrameWorkLogoController::class,'update']);
Route::delete('/delete-erp-technologies-framework-logo/{id}',[ErpTechnologyFrameWorkLogoController::class,'destroy']);



//technology index
Route::get('/technology-index',[TechnologyIndexController::class,'index']);
Route::post('/add-technology-index',[TechnologyIndexController::class,'store']);
Route::get('/edit-technology-index/{id}',[TechnologyIndexController::class,'edit']);
Route::put('/update-technology-index/{id}',[TechnologyIndexController::class,'update']);
Route::delete('/delete-technology-index/{id}',[TechnologyIndexController::class,'destroy']);

//technology index logo
Route::get('/technology-index-logo',[TechnologyIndexLogoController::class,'index']);
Route::post('/add-technology-index-logo',[TechnologyIndexLogoController::class,'store']);
Route::get('/edit-technology-index-logo/{id}',[TechnologyIndexLogoController::class,'edit']);
Route::post('/update-technology-index-logo/{id}',[TechnologyIndexLogoController::class,'update']);
Route::delete('/delete-technology-index-logo/{id}',[TechnologyIndexLogoController::class,'destroy']);




