import React, { useState, useEffect } from 'react';
import SocialIcons from './../social_Icons/SocialIcons';
import become_partner from '../../Images/become_partner.png';
import ReactPhoneInput from "react-phone-input-2";
// import 'react-phone-input-2/lib/style.css';
import 'react-phone-input-2/lib/bootstrap.css'
import Swal from 'sweetalert2';
import axios from 'axios';
import es from 'react-phone-input-2/lang/es.json'

const BecomeaPartner = () => {
    var country_list = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];

    const [inputMobileWithFlag, setInputMobileWithFlag] = useState([
        { phone: "" },
    ]);

    const handleOnChangeMobileNo = (value) => {
        console.log(value);
        setInputMobileWithFlag({ phone: value }, () => {
            console.log(inputMobileWithFlag.phone);
        });
    };
    const [becomePartnerCountry, setBecomePartnerCountry] = useState([
        { country_name: "Bangladesh", id: 1 },
        { country_name: "Pakistan", id: 2 },
        { country_name: "Nepal", id: 3 },
        { country_name: "Iran", id: 4 },
        { country_name: "Others", id: 5 },
    ]);
    const [becomePartnerTypicalCustomer, setBecomePartnerTypicalCustomer] = useState([
        { typical_customer: "Bangladesh", id: 1 },
        { typical_customer: "Pakistan", id: 2 },
        { typical_customer: "Nepal", id: 3 },
        { typical_customer: "Iran", id: 4 },
        { typical_customer: "Others", id: 5 },
    ]);
    const [becomePartnerTypePartner, setBecomePartnerTypePartner] = useState([
        { type_of_partner: "Active", id: 1 },
        { type_of_partner: "Inactive", id: 2 },
        { type_of_partner: "Others", id: 3 },
    ]);

    const [becomePartner, setBecomePartner] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        // customer_type: '',
        description: '',
        partner_type: '',
        country: '',
        job_title: '',
        company_name:"",
        company_name:'',
        notification: false,
    })
    const handleChange = (e) => {
        console.log('changing',e.target.value)
        setBecomePartner({
            ...becomePartner, [e.target.name]: e.target.value
        })
        // if (e.target.checked) {
        //     setBecomePartner({
        //         ...becomePartner, 'notification': true
        //     })
        // }
        // else {
        //     setBecomePartner({
        //         ...becomePartner, 'notification': false
        //     })
        // }

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('state data checking', becomePartner)
        axios.post(`/save-become-a-partner`, becomePartner).then(res => {
            if (res.data.status == 200) {
                Swal.fire(res.data.message, '', 'success')

                setBecomePartner({
                    first_name: '',
                    last_name: '',
                    email: '',
                    phone: '',
                    // customer_type: '',
                    description: '',
                    partner_type: '',
                    country: '',
                    job_title: '',
                    company_name:'',
                    notification: false,
                })
            }
            else if (res.data.status == 400) {
                setBecomePartner({ ...becomePartner, error_list: res.data.errors });

            }
        })
    }

    const [allPartnerTitleLogo, setAllPartnerTitleLogo] = useState([]);
    useEffect(() => {
        axios.get(`/become-a-partner-title-logo`).then(res => {
            if (res.data.status == 200) {
                setAllPartnerTitleLogo(res.data.partner);
            }
        })

    }, [])

    return (
        <>
            <div className="container pt-4">
                <SocialIcons />
                <div className="row g-3 mb-3">
                    {
                        allPartnerTitleLogo.map((item, i) => {
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
                                    <div className="col-md-5">
                                        <div className="header__become__partner">
                                            <h1 className="header-web-development"><span className="header-soft">{text1}</span>{text2}</h1>
                                            {/* <h1 className="header-web-development">{item.title_name}</h1> */}
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="become__partner">
                                            <img src={`${global.img_url}/images/webdevcare/${item.image}`} className="img-fluid" alt="become_partner" border="0" />
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }

                </div>

                <div className="row g-3 py-3">
                    <div className="col-12">
                        <h3 className="header__let text-center">Let’s get to work and work together</h3>
                        <p className="key-web-technology-description text-center">
                            Apply for the Zaimah Technologies Partner Program now
                        </p>
                    </div>
                </div>
                <div className="row g-3 py-3 justify-content-center">
                    <div className="col-12 become__partner__form">
                        <div className="pt-0">
                            <div className="card p-3">
                                <div className='card-body become__partner__card__body'>
                                    <form className="pt-0" onSubmit={handleSubmit}>
                                        <div className="row mb-2">
                                            <div className="col-sm-12">
                                                <label htmlFor="InputBecomePartnerApplyNowFirstName" className="col-form-label col-form-label-sm d-block " >First Name</label>
                                                <input type="text" className="form-control form-control-sm " id="InputBecomePartnerApplyNowFirstName" aria-describedby="emailHelp"
                                                    name="first_name" value={becomePartner.first_name} onChange={handleChange}
                                                // value={regularMedicineEight.indication}
                                                // onChange={inputRegularMedicineChangeEight} 
                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-2">
                                            <div className="col-sm-12">
                                                <label htmlFor="InputBecomePartnerApplyNowLastName" className="col-form-label col-form-label-sm d-block " >Last Name</label>
                                                <input type="text" className="form-control form-control-sm " id="InputBecomePartnerApplyNowLastName" aria-describedby="emailHelp"
                                                    name="last_name" value={becomePartner.last_name} onChange={handleChange}
                                                // value={regularMedicineEight.indication}
                                                // onChange={inputRegularMedicineChangeEight} 
                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-2">
                                            <div className="col-sm-12">
                                                <label htmlFor="InputBecomePartnerEmail" className="col-form-label col-form-label-sm d-block" >Email</label>
                                                <input type="email" className="form-control form-control-sm " id="InputBecomePartnerEmail" aria-describedby="emailHelp"
                                                    name="email" value={becomePartner.email} onChange={handleChange}
                                                // value={regularMedicineEight.indication}
                                                // onChange={inputRegularMedicineChangeEight} 
                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-2">
                                            <div className="col-sm-12">
                                                <label htmlFor="InputBecomePartnerMobileNo" className="col-form-label col-form-label-sm d-block" >Mobile No.</label>
                                                <div >
                                                    <ReactPhoneInput
                                                        country='bd'
                                                        regions={['america', 'europe', 'asia', 'oceania', 'africa']}


                                                        inputExtraProps={{
                                                            name: "phone",
                                                            required: true,
                                                            autoFocus: true
                                                        }}
                                                        // inputStyle={{color:'red', width: '100%'}}
                                                        inputClass="w-100"
                                                        // defaultCountry={"sg"}
                                                        value={becomePartner.phone}
                                                        onChange={(val) => {
                                                            setBecomePartner({ ...becomePartner, 'phone': val })
                                                        }
                                                        }
                                                    // onChange={handleOnChangeMobileNo}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-2">
                                            <div className="col-sm-12">
                                                <label htmlFor="InputJobTitle" className="col-form-label col-form-label-sm d-block" >Job Title</label>
                                                <input type="text" className="form-control form-control-sm " id="InputJobTitle" aria-describedby="JobTitleHelp"
                                                    name="job_title" value={becomePartner.job_title} onChange={handleChange}

                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-2">
                                            <div className="col-sm-12">
                                                <label htmlFor="InputCompanyName" className="col-form-label col-form-label-sm d-block" >Company Name</label>
                                                <input type="text" className="form-control form-control-sm " id="InputCompany Name" aria-describedby="CompanyNameHelp"
                                                    name="company_name" value={becomePartner.company_name} onChange={handleChange}

                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-2">
                                            <div className="col-sm-12">
                                                <label htmlFor="InputCountry" className="col-form-label col-form-label-sm d-block" >Country</label>
                                                <div className="g-2">
                                                    <select className="form-select form-select-sm" id="InputCountry"
                                                        name="country" value={becomePartner.country} onChange={handleChange}
                                                    >
                                                        <option selected>Select</option>
                                                        {
                                                            country_list.length > 0 && country_list.map((item, i) => {
                                                                return (
                                                                    <option key={i} value={item}>{item}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="row mb-2">
                                            <div className="col-sm-12">
                                                <label htmlFor="InputTypicalCustomer" className="col-form-label col-form-label-sm d-block" >Typical Customer</label>
                                                <div className="g-2">
                                                    <select className="form-select form-select-sm" id="InputTypicalCustomer"
                                                        name="customer_type" value={becomePartner.customer_type} onChange={handleChange}
                                                    >
                                                        <option selected>Select</option>
                                                        {
                                                            becomePartnerTypicalCustomer.length > 0 && becomePartnerTypicalCustomer.map((item, id) => {
                                                                return (
                                                                    <option key={id} value="1">{item.typical_customer}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                        </div> */}
                                        <div className="row mb-2">
                                            <div className="col-sm-12">
                                                <label htmlFor="exampleFormControlTextarea1" className="form-label col-form-label-sm">How would you like to work with Zaimah Technologies ?</label>
                                                <textarea className="form-control form-control-sm" id="exampleFormControlTextarea1" rows="3" placeholder="Write here ..."
                                                    name="description" value={becomePartner.description} onChange={handleChange}

                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="row mb-2">
                                            <div className="col-sm-12">
                                                <label htmlFor="InputTypePartner" className="col-form-label col-form-label-sm d-block" >Type of Partner</label>
                                                <div className="g-2">
                                                    <select className="form-select form-select-sm" id="InputTypePartner"
                                                        name="partner_type" value={becomePartner.partner_type} onChange={handleChange}
                                                    >
                                                        <option selected>Select</option>
                                                        <option value="Business Partner">Business Partner</option>
                                                        <option value="Growth Partner">Growth Partner</option>
                                                        <option value="Product Partner"> Product Partner</option>
                                                        <option value="Others"> Others</option>

                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-2 pt-3">
                                            <div className="col-12">
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1"
                                                        name="notification" value={becomePartner.notification} onChange={handleChange}
                                                        checked={becomePartner.notification}

                                                    />
                                                    <label className="form-check-label" htmlfor="inlineCheckbox1"> Yes, I want to get emails from Zaimah Technologies about products, promotions, events, and featured content at the email address above.</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-2">
                                            <div className="col-12">
                                                <div className="text-center pt-4">
                                                    <button type="submit" className="btn__apply__partner"
                                                    // onClick={openModalBecomePartnerApplyNow}
                                                    >
                                                        <b>Become a Partner</b>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-2">
                                            <div className="col-12">
                                                <div className="text-center pt-4">
                                                    <p className="partner__click">By clicking this button, you agree to our
                                                        <a href="#" className="header-soft"><span> Privacy Notice</span></a> and
                                                        <a href="#" className="header-soft"><span> Terms of Service.</span></a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default BecomeaPartner;