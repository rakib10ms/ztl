import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import SocialIcons from '../social_Icons/SocialIcons';
import php_dev_banner from '../../Images/php_dev_banner.png';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const CareerJobDescription = () => {

    const { job_id } = useParams();

    // console.log('hishu',job_id)

    const [jobDesc, setjobDesc] = useState([]);
    console.log('mejaj kharap', jobDesc)

    useEffect(() => {
        axios.get(`/career-job-description/${job_id}`).then(res => {
            if (res.data.status == 200) {
                // setjobDesc({
                //     job_tittle: res.data.jobDescription.job_tittle,
                //     qualification: res.data.jobDescription.qualification,
                //     job_description1: res.data.jobDescription.job_description1,
                //     job_description2: res.data.jobDescription.job_description2,
                //     // client_designation: res.data.jobDescription.client_designation,
                // });
                // setContent1(res.data.jobDescription.job_requirements);
                // setContent2(res.data.jobDescription.job_responsibilites);
                // setImage(res.data.jobDescription.job_post_logo);

                setjobDesc([res.data.jobDescription])
            }
        })

    }, [])


    //Apply Now popup
    const navigate = useNavigate();
    const [storageData, setstorageData] = useState()
    // console.log('pip', storageData)
    useEffect(() => {
        const storageDatas = localStorage.getItem('user_type');
        setstorageData(storageDatas)
    }, [])
    const customStyles1 = {
        content: {
            marginTop: '70px',
            top: '35%',
            left: '25%',
            right: 'auto',
            bottom: 'auto',
            padding: '5px',
            marginRight: '-50%',
            transform: 'translate(-7%, -45%)',
            width: "55%",
            height: "530px",
            // background: "#ffffff",
        },
        overlay: { zIndex: 1000 }

    };

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

    return (
        <>
            <div className="container mb-5 pt-4">
                <SocialIcons />
                {
                    jobDesc !== null && jobDesc.map((item, i) => {
                        return (
                            <>
                                <div className="row g-3 mb-3">
                                    <div className="col-md-6">
                                        <div className="header__partner">
                                            {/* <h1 className="header-web-development">PHP <span className="header-soft"> Developer</span></h1> */}
                                            { }
                                            <h1 className="header-web-development">{item.job_tittle}</h1>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="php__dev__banner__img">
                                            <img src={`${global.img_url}/images/job_list/${item.job_post_logo}`} className="img-fluid" alt="php_dev_banner" border="0" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row pt-3">
                                    <div className="col-12">
                                        <p className="php__dev__text">
                                            {item.job_description1}
                                        </p>
                                        <p className="php__dev__text pt-3">
                                            {item.job_description2}

                                        </p>
                                    </div>
                                </div>
                                <div className="row py-3">
                                    <div className="col-12">
                                        <h5 className="mb-2">
                                            <span className="header__qualification">Qualification: </span>
                                            <span> {item.qualification}
                                            </span>
                                        </h5>
                                        <hr className="hr__color__jobs" />
                                    </div>
                                </div>

                                <div className="row py-2">
                                    <div className="col-12">
                                        <h3 className="header-key-web-technology">{item.job_tittle} Requirements:</h3>
                                        {/* <ul className="circle pt-3">
                                            <li>Bachelor’s degree in computer science or a similar field.</li>
                                            <li>Knowledge of PHP web frameworks including Yii, Laravel, and CodeIgniter.</li>
                                            <li>Knowledge of front-end technologies including CSS3, JavaScript, and HTML5.</li>
                                            <li>Understanding of object-oriented PHP programming.</li>
                                            <li>Previous experience creating scalable applications.</li>
                                            <li>Proficient with code versioning tools including Git, Mercurial, CVS, and SVN.</li>
                                            <li>Familiarity with SQL/NoSQL databases.</li>
                                            <li>Ability to project manage.</li>
                                            <li>Good problem-solving skills</li>
                                        </ul> */}


                                        <div dangerouslySetInnerHTML={{ __html: item.job_requirements }} />
                                    </div>
                                </div>
                                <div className="row py-2">
                                    <div className="col-12">
                                        <h3 className="header-key-web-technology">{item.job_tittle}  Responsibilities:</h3>
                                        <div dangerouslySetInnerHTML={{ __html: item.job_responsibilites }} />

                                    </div>
                                </div>

                                <div className="row py-4">
                                    <div className="col-12">
                                        <div className="justify-content-center">
                                            <p className="pt-0">
                                                <span className="recruitment__text">To apply for this position mail your updated Resume on</span>
                                                <span className="header-soft"> career@zaimahtech.com</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })

                }

                <div className="row g-3 pt-4">
                    <div className="col-12">
                        <spam type="text" className="btn btn-discover-all-services" onClick={openModalApplyNow}>Apply Now</spam>
                    </div>

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



                </div>
            </div>
        </>
    );
};

export default CareerJobDescription;