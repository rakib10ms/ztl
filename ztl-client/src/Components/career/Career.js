import React, { useState, useEffect } from 'react';
import career_img from '../../Images/career_img.png';
import Recruitment from '../../Images/Recruitment.png';
import SocialIcons from '../social_Icons/SocialIcons';
import react from '../../Images/react.png';
import product_designer from '../../Images/product_designer.png';
import full_stack_dev from '../../Images/full_stack_dev.png';
import php_dev from '../../Images/php_dev.png';
import laravel from '../../Images/laravel.png';
import fluter_dev from '../../Images/fluter_dev.png';
import Modal from 'react-modal';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const Career = () => {
    const navigate = useNavigate();

    const [storageData, setstorageData] = useState()
    // console.log('local storage check', storageData)
    useEffect(() => {
        const storageDatas = localStorage.getItem('username')
        setstorageData(storageDatas)
    }, [])
    const [jobsTechnologies, seJobsTechnologies] = useState([
        { job_type: "Full Time or Contract", job_link: "", no_of_duration: "2-6 Years", job_technologies_name: "PHP Developer", technologies_img: php_dev, id: 1 },
        { job_type: "Full Time or Contract", job_link: "", no_of_duration: "1-3 Years", job_technologies_name: "React Developer", technologies_img: react, id: 2 },
        { job_type: "Full Time or Contract", job_link: "", no_of_duration: "2-6 Years", job_technologies_name: "Product Designer", technologies_img: product_designer, id: 3 },
        { job_type: "Full Time or Contract", job_link: "", no_of_duration: "2-3 Years", job_technologies_name: "Full Stack Developer", technologies_img: full_stack_dev, id: 4 },
        { job_type: "Full Time or Contract", job_link: "", no_of_duration: "2-4 Years", job_technologies_name: "Flutter Developer", technologies_img: fluter_dev, id: 5 },
        { job_type: "Full Time or Contract", job_link: "", no_of_duration: "2-7 Years", job_technologies_name: "Product Designer", technologies_img: laravel, id: 6 },

    ]);
    // //Apply Now popup
    // const customStyles1 = {
    //     content: {
    //         marginTop: '70px',
    //         top: '35%',
    //         left: '25%',
    //         right: 'auto',
    //         bottom: 'auto',
    //         padding: '5px',
    //         marginRight: '-50%',
    //         transform: 'translate(-7%, -45%)',
    //         width: "55%",
    //         height: "530px",
    //         // background: "#ffffff",
    //     },
    //     overlay: { zIndex: 1000 }

    // };

    const [modalApplyNowIsOpen, setModalApplyNowIsOpen] = useState(false);
    function openModalApplyNow(e) {
        e.preventDefault();
        // alert("mmm")
        if (storageData !== null) {
            setModalApplyNowIsOpen(true);

        }
        else {
            navigate('/user-registration')
        }
        // setModalApplyNowIsOpen(true);
    }
    function closeModalApplyNow(e) {
        setModalApplyNowIsOpen(false);

    }

    const [fresherOrExperienced, setFresherOrExperienced] = useState('experienced');
    console.log(' check', fresherOrExperienced)

    const [careerData, setCarerData] = useState({
        name: '',
        email: '',
        phone: '',
        emergency_no: '',
        highest_qualificiation: "",
        current_employeer: "",
        experience_from_year: '',
        experience_from_month: '',
        notice_period: '',
    })
    const handleChange = (e) => {
        setCarerData({
            ...careerData, [e.target.name]: e.target.value
        })

    }
    const [cv, setCv] = useState('');
    const handleFileChange = (e) => {
        setCv(e.target.files[0])
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', careerData.heading_name);
        formData.append('email', careerData.email);
        formData.append('phone', careerData.phone);
        formData.append('emergency_no', careerData.emergency_no);
        formData.append('highest_qualificiation', careerData.highest_qualificiation);
        formData.append('current_employeer', careerData.current_employeer);
        formData.append('experience_from_year', careerData.experience_from_year);
        formData.append('experience_from_month', careerData.experience_from_month);
        formData.append('notice_period', careerData.notice_period);
        formData.append('cv', cv);

        console.log('state data checking', formData)
        if (careerData.name == '' || careerData.phone == '' || careerData.message == '' || cv == '' || fresherOrExperienced == '') {
            Swal.fire("Please fill up all inputs", '', 'error')

        }
        else {

            axios.post(`/save-apply-job`, formData).then(res => {
                if (res.data.status == 200) {
                    Swal.fire(res.data.message, '', 'success')
                    setCarerData({
                        name: '',
                        email: '',
                        phone: '',
                        emergency_no: '',
                        highest_qualificiation: "",
                        current_employeer: "",
                        experience_from_year: '',
                        experience_from_month: '',
                        notice_period: '',
                    })
                    setCv('');

                    let check = document.getElementsByName('cv');
                    // console.log('check cvs',check)
                    for (var x = 0; x <= check.length; x++) {
                        check[x].value = "";
                    }
                }
                else if (res.data.status == 400) {
                    setCarerData({ ...careerData, error_list: res.data.errors });

                }
            })
        }
    }
    const handleSelectChange = (e) => {
        setFresherOrExperienced(e.target.value)
        if (e.target.value == 'fresher' || e.target.value == 'experienced') {
            setCarerData({
                name: '',
                email: '',
                phone: '',
                emergency_no: '',
                highest_qualificiation: "",
                current_employeer: "",
                experience_from_year: '',
                experience_from_month: '',
                notice_period: '',
            })
            setCv('');
        }
    }
    const [CareerTitleLogo, setCareerTitleLogo] = useState([]);
    const [allFaq, setallFaq] = useState([]);
    const [allRecruitment, setallRecruitment] = useState([]);
    const [allJobList, setAllJobList] = useState([]);
    const [allFaqImage, setAllFaqImage] = useState([]);

    console.log('all job', allJobList)

    useEffect(() => {
        axios.get(`/career-title-logo`).then(res => {
            if (res.data.status == 200) {
                setCareerTitleLogo(res.data.career);
            }
        })
        axios.get(`/faq`).then(res => {
            if (res.data.status == 200) {
                setallFaq(res.data.faq);
            }
        })
        axios.get(`/recruitment-process`).then(res => {
            if (res.data.status == 200) {
                setallRecruitment(res.data.recruitment);
            }
        })
        axios.get(`/job-list`).then(res => {
            if (res.data.status == 200) {
                setAllJobList(res.data.jobList);
            }
        })
        axios.get(`/faq-image`).then(res => {
            if (res.data.status == 200) {
                setAllFaqImage(res.data.faq_image);
            }
        })


    }, [])


    return (
        <>
            <div className="container pt-4">
                <SocialIcons />
                <div className="row g-3 mb-3">
                    {
                        CareerTitleLogo.map((item, i) => {
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
                                        <div className="header__career">
                                            {/* <h1 className="header-web-development">{item.title_name}</h1> */}
                                            <h1 className="header-web-development"> {text1} <span className="header-soft">{text2}</span></h1>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="career__img">
                                            <img src={`${global.img_url}/images/healthcare/${item.image}`} className="img-fluid" alt="career_img" border="0" />
                                        </div>
                                    </div>
                                </>

                            )
                        })
                    }

                </div>
                <div className="row py-4">
                    <div className="col-12">
                        <h3 className="header-key-web-technology">Jobs at Zaimah Technologies</h3>
                        <div className="row g-3 pt-3">

                            <>
                                <Modal
                                    isOpen={modalApplyNowIsOpen}
                                    onRequestClose={closeModalApplyNow}
                                    // style={customStyles1}
                                    className="my__modal__career"
                                    overlayClassName="my__modal__career__overlay"
                                    contentLabel="Example Modal"
                                >

                                    <div className='card-body modal__body'>
                                        <div className="row">
                                            <div className="col-12">
                                                <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeModalApplyNow}><i class="fa-solid fa-xmark close_btn"></i></span>
                                                <div className="mb-3">
                                                    <div className="form-check form-check-inline pr-3">
                                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineFresher" value="fresher" onChange={handleSelectChange} />
                                                        <label className="form-check-label" htmlfor="inlineFresher">Fresher</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineExperienced" value="experienced" defaultChecked onChange={handleSelectChange} />
                                                        <label className="form-check-label" htmlfor="inlineExperienced">Experienced</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <form className="pt-0" onSubmit={handleSubmit}>
                                            {
                                                fresherOrExperienced == 'fresher' &&
                                                <>

                                                    <div className="row mb-2">
                                                        <div className="col-sm-12">
                                                            <label htmlFor="InputApplyNowName" className="col-form-label col-form-label-sm d-block " >Name</label>
                                                            <input type="text" className="form-control form-control-sm " id="InputApplyNowName" aria-describedby="emailHelp"
                                                                name="name" value={careerData.name} onChange={handleChange}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-2">
                                                        <div className="col-sm-12">
                                                            <label htmlFor="InputEmail" className="col-form-label col-form-label-sm d-block" >Email</label>
                                                            <input type="email" className="form-control form-control-sm " id="InputEmail" aria-describedby="emailHelp"
                                                                name="email" value={careerData.email} onChange={handleChange}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-2">
                                                        <div className="col-sm-6">
                                                            <label htmlFor="InputMobileNo" className="col-form-label col-form-label-sm d-block" >Mobile No.</label>
                                                            <input type="text" className="form-control form-control-sm " id="InputMobileNo" aria-describedby="MobileNoHelp"
                                                                name="phone" value={careerData.phone} onChange={handleChange}
                                                            />
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <label htmlFor="InputEmergencyContactNo" className="col-form-label col-form-label-sm d-block" >Emergency Contact No.</label>
                                                            <input type="text" className="form-control form-control-sm " id="InputEmergencyContactNo" aria-describedby="EmergencyContactNoHelp"
                                                                name="emergency_no" value={careerData.emergency_no} onChange={handleChange}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-2">
                                                        <div className="col-sm-6">
                                                            <label htmlFor="InputHighestQualification" className="col-form-label col-form-label-sm d-block" >Highest Qualification</label>
                                                            <input type="text" className="form-control form-control-sm " id="InputHighestQualification" aria-describedby="HighestQualificationHelp"
                                                                name="highest_qualificiation" value={careerData.highest_qualificiation} onChange={handleChange}
                                                            />
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <label htmlFor="InputUploadFile" className="col-form-label col-form-label-sm d-block" >Upload CV</label>
                                                            <input type="file" className="form-control form-control-sm " id="InputUploadFile" aria-describedby="CurrentEmployeerHelp"
                                                                name="cv" onChange={handleFileChange}
                                                            />
                                                        </div>
                                                    </div>
                                                </>
                                            }

                                            {/* <div className="row mb-2">
                                                <div className="col-sm-12">
                                                    <label htmlFor="InputCurrentEmployeer" className="col-form-label col-form-label-sm d-block" >Current Employeer</label>
                                                    <input type="text" className="form-control form-control-sm " id="InputCurrentEmployeer" aria-describedby="CurrentEmployeerHelp"
                                                        name="current_employeer" value={careerData.current_employeer} onChange={handleChange}
                                                    />
                                                </div>
                                            </div> */}
                                            {
                                                fresherOrExperienced == 'experienced' &&
                                                <>
                                                    <div className="row mb-2">
                                                        <div className="col-sm-6">
                                                            <label htmlFor="InputApplyNowName" className="col-form-label col-form-label-sm d-block " >Name</label>
                                                            <input type="text" className="form-control form-control-sm " id="InputApplyNowName" aria-describedby="emailHelp"
                                                                name="name" value={careerData.name} onChange={handleChange}
                                                            />
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <label htmlFor="InputEmail" className="col-form-label col-form-label-sm d-block" >Email</label>
                                                            <input type="email" className="form-control form-control-sm " id="InputEmail" aria-describedby="emailHelp"
                                                                name="email" value={careerData.email} onChange={handleChange}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-2">
                                                        <div className="col-sm-6">
                                                            <label htmlFor="InputMobileNo" className="col-form-label col-form-label-sm d-block" >Mobile No.</label>
                                                            <input type="text" className="form-control form-control-sm " id="InputMobileNo" aria-describedby="MobileNoHelp"
                                                                name="phone" value={careerData.phone} onChange={handleChange}
                                                            />
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <label htmlFor="InputEmergencyContactNo" className="col-form-label col-form-label-sm d-block" >Emergency Contact No.</label>
                                                            <input type="text" className="form-control form-control-sm " id="InputEmergencyContactNo" aria-describedby="EmergencyContactNoHelp"
                                                                name="emergency_no" value={careerData.emergency_no} onChange={handleChange}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-2">
                                                        <div className="col-sm-12">
                                                            <label htmlFor="InputHighestQualification" className="col-form-label col-form-label-sm d-block" >Highest Qualification</label>
                                                            <input type="text" className="form-control form-control-sm " id="InputHighestQualification" aria-describedby="HighestQualificationHelp"
                                                                name="highest_qualificiation" value={careerData.highest_qualificiation} onChange={handleChange}
                                                            />
                                                        </div>

                                                    </div>





                                                    <div className="row mb-2">
                                                        <div className="col-sm-12">
                                                            <label htmlFor="InputExperience" className="col-form-label col-form-label-sm d-block" >Experience</label>
                                                            <div className="row g-2">
                                                                <div className="col-sm-6">
                                                                    <select className="form-select form-select-sm" id="InputExperience"
                                                                        name="experience_from_year" value={careerData.experience_from_year} onChange={handleChange}

                                                                    >
                                                                        <option selected>Year</option>
                                                                        <option value="0.5 Year">0.5 Year</option>
                                                                        <option value="1 Year">1 Year</option>
                                                                        <option value="2 Years">2 Years</option>
                                                                        <option value="3 Years">3 Years</option>
                                                                        <option value="4 Years">4 Years</option>
                                                                        <option value="5 Years">5 Years</option>
                                                                        <option value="6 Years">6 Years</option>
                                                                        <option value="7 Years">7 Years</option>
                                                                        <option value="8 Years">8 Years</option>
                                                                        <option value="9 Years">9 Years</option>
                                                                        <option value="10 Years">10 Years</option>

                                                                    </select>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <select className="form-select form-select-sm" id="InputExperience"
                                                                        name="experience_from_month" value={careerData.experience_from_month} onChange={handleChange}

                                                                    >
                                                                        <option selected>Month</option>
                                                                        <option value="January">1 Month</option>
                                                                        <option value="2 Months">2 Months</option>
                                                                        <option value="3 Months">3 Months</option>
                                                                        <option value="4 Months">4 Months</option>
                                                                        <option value="5 Months">5 Months</option>
                                                                        <option value="6 Months">6 Months</option>
                                                                        <option value="7 Months">7 Months</option>
                                                                        <option value="8 Months">8 Months</option>
                                                                        <option value="9 Months">9 Months</option>
                                                                        <option value="10 Months">10 Months</option>
                                                                        <option value="11 Months">11 Months</option>
                                                                        <option value="12 Months">12 Months</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row g-2 mb-2">
                                                        <div className="col-sm-6">
                                                            <label htmlFor="InputNoticePeriod" className="col-form-label col-form-label-sm d-block" >Notice Period</label>
                                                            <select className="form-select form-select-sm" id="InputNoticePeriod"
                                                                name="notice_period" value={careerData.notice_period} onChange={handleChange}
                                                            >
                                                                <option selected>Select</option>
                                                                <option value="immidiate">Immediate</option>
                                                                <option value="1 week">1 week</option>
                                                                <option value="15 days">15 days</option>
                                                                <option value="1 month">1 Month</option>
                                                                <option value="Others">Others</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <label htmlFor="InputUploadFile" className="col-form-label col-form-label-sm d-block" >Upload CV</label>
                                                            <input type="file" className="form-control form-control-sm " id="InputUploadFile" aria-describedby="CurrentEmployeerHelp"
                                                                name="cv" onChange={handleFileChange}
                                                            />
                                                        </div>
                                                    </div>
                                                </>

                                            }

                                            {/* <div className="row mb-2">
                                                <div className="col-sm-12">
                                                    {fresherOrExperienced =='experienced' &&
                                                                
                                                                }
                                                    <label htmlFor="InputNoticePeriod" className="col-form-label col-form-label-sm d-block" >Notice Period</label>
                                                    <div className="row g-2">
                                                        <div className="col-sm-6">
                                                            <select className="form-select form-select-sm" id="InputNoticePeriod"
                                                                name="notice_period" value={careerData.notice_period} onChange={handleChange}

                                                            >
                                                                <option selected>Select</option>
                                                                <option value="immidiate">Immediate</option>
                                                                <option value="1 week">1 week</option>
                                                                <option value="15 days">15 days</option>
                                                                <option value="1 month">1 Month</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <input type="file" className="form-control form-control-sm " id="InputNoticePeriod" aria-describedby="CurrentEmployeerHelp"
                                                                name="cv" onChange={handleFileChange}
                                                            // value={regularMedicineEight.indication}
                                                            // onChange={inputRegularMedicineChangeEight} 
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}

                                            {/* <div className="row g-2 mb-2">
                                                <div className="col-sm-6">
                                                    <label htmlFor="InputNoticePeriod" className="col-form-label col-form-label-sm d-block" >Notice Period</label>
                                                    <select className="form-select form-select-sm" id="InputNoticePeriod"
                                                        name="notice_period" value={careerData.notice_period} onChange={handleChange}
                                                    >
                                                        <option selected>Select</option>
                                                        <option value="immidiate">Immediate</option>
                                                        <option value="1 week">1 week</option>
                                                        <option value="15 days">15 days</option>
                                                        <option value="1 month">1 Month</option>
                                                        <option value="Others">Others</option>
                                                    </select>
                                                </div>
                                                <div className="col-sm-12">
                                                    <label htmlFor="InputUploadFile" className="col-form-label col-form-label-sm d-block" >Upload CV</label>
                                                    <input type="file" className="form-control form-control-sm " id="InputUploadFile" aria-describedby="CurrentEmployeerHelp"
                                                        name="cv" onChange={handleFileChange}
                                                    />
                                                </div>
                                            </div> */}
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="text-start pt-4 mr-0">
                                                        <button type="submit" className="btn__apply"
                                                        // onClick={openModalApplyNow}
                                                        >
                                                            <b>Submit</b>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </Modal>
                                {
                                    allJobList.map((item, i) => {
                                        return (

                                            <div key={i} className="col-sm-4">
                                                <div className="web-development-box">
                                                    <div className="card__web__projects__box__card">
                                                        <div className="card ">

                                                            <div className="d-flex justify-content-center pt-4">
                                                                <img src={`${global.img_url}/images/job_list/${item.job_post_logo}`} className="card-img-top" alt="Image" style={{ width: "70px", height: "60px" }} />
                                                            </div>
                                                            <div className="card-body text-center">
                                                                <h6 className=""><b>{item.job_tittle}</b></h6>
                                                                <p className="job__tech__card__text">
                                                                    <span className="header-soft">{item.job_experience}</span> ||
                                                                    <span className="header__job"> {item.job_status}</span>
                                                                </p>
                                                                {/* title = title.replace(/\s/g , "-"); */}
                                                                <div className="d-flex justify-content-center pt-4">
                                                                    {/* <Link to={`/career-job-description/${item.job_tittle.replace(/\s/g , "-")}`}> */}
                                                                    <Link to={`/career-job-description/${item.job_id}`}>
                                                                        <button className="btn__job mx-2"
                                                                        // onClick={openModalApplyNow}
                                                                        >
                                                                            <b>Job Desc.</b>
                                                                        </button>
                                                                    </Link>
                                                                    <button type="button" className="btn__apply"
                                                                        onClick={openModalApplyNow}
                                                                    >
                                                                        <b>Apply Now</b>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        )
                                    })
                                }

                            </>


                        </div>
                    </div>
                </div>

                <div className="row g-2 pt-3">
                    <h3 className="header-key-web-technology mb-4">Our Recruitment Process</h3>
                    {
                        allRecruitment.map((item, i) => {
                            return (
                                <>
                                    <div className="col-sm-3">
                                        <div className="d-flex ">
                                            <div className="rerutment1 w-100">
                                                <h6 className="card__recrutment__card__title ms-2">{item.process_name}</h6>
                                            </div>
                                            <div className=" btg p-2"></div>
                                        </div>
                                        <div className="card__rerutment__box__card">
                                            <div className="card">
                                                <div className="card-body">
                                                    <p className="card__recrutment__text">{item.process_description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }

                </div>




                <div className="row py-4">
                    <div className="col-12">
                        <h3 className="header-key-web-technology">Recruitment FAQ’s</h3>
                        <div className="row g-3">
                            <div className="col-md-6">


                                <p className="key-web-technology-description">
                                    What are the typical steps in the recruiting process?The process that begins with a need or requirement for a candidate and ends when the candidate is successfully hired or placed.
                                </p>


                                <div className="accordion pt-3" id="faqlist">

                                    {/* {
                                        allFaq.map((item, i) => {
                                            return (
                                                <>
                                                    <div className="accordion-item mb-3 border">
                                                        <h2 className="accordion-header" id={`Ti${i + 1}`}>
                                                            <button className="accordion-button collapsed key-web-technology-description" type="button" data-bs-toggle="collapse" aria-expanded={`${i}==Ti1? True: False`} data-bs-target={`#Ti${i + 1}`} aria-controls={`Ti${i + 1}`}  >
                                                                {item.faq_qtn}
                                                            </button>
                                                        </h2>
                                                        <div id={`Ti${i + 1}`} className="accordion-collapse collapse" data-bs-parent="#faqlist" aria-labelledby={`Ti${i + 1}`}>
                                                            <div className="accordion-body">
                                                                <p className="key-web-technology-description">     {item.faq_ans}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </>
                                            )
                                        })
                                    } */}


                                    {
                                        allFaq.map((item, i) => {
                                            return (
                                                <>
                                                    <div className="accordion-item mb-3 border">

                                                        <h2 className="accordion-header">
                                                            <button className="accordion-button collapsed key-web-technology-description" type="button" data-bs-toggle="collapse" data-bs-target={`#${item.faq_qtn.split(" ")[1]}`} aria-expanded={`${i}==0? True: False`} aria-controls={`#${item.faq_qtn.split(" ")[1]}`} >
                                                                {item.faq_qtn}
                                                            </button>
                                                        </h2>
                                                        {/* {console.log('check split',item.faq_qtn.split(" ")[4])} */}
                                                        <div id={item.faq_qtn.split(" ")[1]} className="accordion-collapse collapse" data-bs-parent="#faqlist" aria-labelledby={`Ti${i + 1}`}>
                                                            <div className="accordion-body">
                                                                <p className="key-web-technology-description">
                                                                    {item.faq_ans}

                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </>
                                            )
                                        })
                                    }
                                </div>




                            </div>
                            {
                                allFaqImage.map((item, i) => {
                                    return (
                                        <div className="col-md-6 ">
                                            <div className="recruitment__img">
                                                <img src={`${global.img_url}/images/our_partners/${item.image}`} className="img-fluid" alt="Recruitment" border="0" />
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
                <div className="row py-4">
                    <div className="col-12">
                        <div className="justify-content-center">
                            <p className="recruitment__discription">We are always glad to add talented techies to our team.</p>
                            <p className="recruitment__discription">
                                <span className="recruitment__text">Find the open positions listed below and apply via on</span>
                                <span className="header-soft"> career@zaimahtech.com</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Career;