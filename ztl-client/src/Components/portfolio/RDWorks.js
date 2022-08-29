import React, { useState, useEffect } from 'react';
import rdworks_img from '../../Images/rdworks_img.png';
import news_1 from '../../Images/news_1.png';
import news_2 from '../../Images/news_2.png';
import news_3 from '../../Images/news_3.png';
import news_4 from '../../Images/news_4.png';
import news_5 from '../../Images/news_5.png';
import news_6 from '../../Images/news_6.png';
import Modal from 'react-modal';
import axios from 'axios';


const RDWorks = () => {


    const [rdWorks, setRdWorks] = useState([
        {
            title: "E-commerce Software to Support Market Places", rd_works_img: news_1, id: 1
        },
        {
            title: "Web Application for Online Advertising Management", rd_works_img: news_2, id: 2
        },
        {
            title: "Business Process Management and KPI System", rd_works_img: news_3, id: 3
        },
        {
            title: "E-commerce Software to Support Market Places", rd_works_img: news_4, id: 4
        },
        {
            title: "Web Application for Online Advertising Management", rd_works_img: news_5, id: 5
        },
        {
            title: "Business Process Management and KPI System", rd_works_img: news_6, id: 6
        },
        {
            title: "E-commerce Software to Support Market Places", rd_works_img: news_5, id: 7
        },
        {
            title: "Web Application for Online Advertising Management", rd_works_img: news_5, id: 8
        },
        {
            title: "Business Process Management and KPI System", rd_works_img: news_6, id: 9
        },

    ]);


    const [allRd, setAllRd] = useState([]);
    console.log('ress', allRd)

    const [allRdTitleLogo, setAllRdTitleLogo] = useState([]);




    useEffect(() => {
        axios.get(`/our-rd-work`).then(res => {
            if (res.data.status == 200) {
                setAllRd(res.data.rd);
            }
        })

        axios.get(`/r-d-work-title-logo`).then(res => {
            if (res.data.status == 200) {
                setAllRdTitleLogo(res.data.rd);
            }
        })

    }, [])

    const [modalId, setModalId] = useState('');
    console.log('checking modal id', modalId)

    const [rdItem, setRdItem] = useState();
    console.log('rdItem', rdItem);


    const [modalApplyNowIsOpen, setModalApplyNowIsOpen] = useState(false);
    function openModalApplyNow(ids) {
        // e.preventDefault();
        // alert("mmm")
        setModalId(ids)
        setModalApplyNowIsOpen(true);
    }
    function closeModalApplyNow(e) {
        setModalApplyNowIsOpen(false);

    }

    useEffect(() => {

        axios.get(`/rd-item/${modalId}`).then(res => {
            if (res.data.status == 200) {
                setRdItem(res.data.rd_item);
            }
        })
    }, [modalId])

    return (
        <div className="container mb-5 mt-4">
            <div className="row g-3 mb-3">
                {
                    allRdTitleLogo.map((item, i) => {
                        var text2 = " ";

                        var x = item.title_name.split(" ");

                        for (let i = 1; i < x.length; i++) {
                            text2 += x[i] + " ";
                        }
                        console.log('text2', text2)

                        var text1 = item.title_name.split(" ")[0];

                        return (
                            <>
                                <div className="col-md-6">
                                    <div className="header__rdworks">
                                        <h1 className="header-web-development"><span className="header-soft">{text1}</span> {text2}</h1>
                                        {/* <h1 className="header-web-development">{item.title_name}</h1> */}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="rdworks__img">
                                        <img src={`${global.img_url}/images/webdevcare/${item.image}`} className=" img-fluid " alt="rdworks_img" border="0" />
                                    </div>
                                </div>
                            </>
                        )
                    })
                }

            </div>
            <div className="row g-3 pt-5">
                {
                    allRd.length > 0 && allRd.map((item, id) => {
                        return (
                            <div key={id} className="col-md-4">
                                <div className="rd__works__box__card">
                                    <div className="card">
                                        <div className="">
                                            <img src={`${global.img_url}/images/job_list/${item.image}`} className="card-img-top" alt="image" style={{ width: "100%" }} />
                                        </div>
                                        <div className="card-body">
                                            <h3 className="header__rdworks__card ">{item.project_name}</h3>
                                        </div>
                                        <div className="text-center">
                                            {/* <button type="button" className="btn__rdworks" onClick={() => setModalId(item.id)} data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                                            // onClick={openModalApplyNow}
                                            >
                                                View
                                            </button> */}
                                            <button type="button" className="btn__rdworks"
                                                onClick={()=>openModalApplyNow(item.id)}
                                            >
                                                View
                                            </button>
                                        </div>

                                        <Modal
                                            isOpen={modalApplyNowIsOpen}
                                            onRequestClose={closeModalApplyNow}
                                            // style={customStyles1}
                                            className="my__modal__career"
                                            overlayClassName="my__modal__career__overlay"
                                            contentLabel="Example Modal"
                                        >
                                            <div className='card-body project__modal__body'>
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="staticBackdropLabel">Our Projects R&D Section</h5>
                                                    <span className='float-end' style={{ fontSize: "20px", cursor: "pointer" }} onClick={closeModalApplyNow}><i class="fa-solid fa-xmark close_btn"></i></span>
                                                </div>
                                                <div class="card-body" >
                                                    {
                                                        rdItem !== undefined &&
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <h5><b>Project Name:</b>{rdItem.project_name} </h5>
                                                                <b>R&D Topic:</b>{rdItem.rd_title}
                                                                <div dangerouslySetInnerHTML={{ __html: rdItem.rd_description }} className="mt-3" />
                                                                <b className=''> ScreenShot</b>
                                                                <div className='our__project__img' >
                                                                    <img src={`${global.img_url}/images/job_list/${rdItem.image}`} />

                                                                </div>
                                                            </div>
                                                        </div>
                                                    }
                                                </div>

                                            </div>
                                        </Modal>

{/* 
                                        <div class="modal fade " style={{ height: '700px', marginTop: '2%' }} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                            <div class="modal-dialog modal-dialog modal-dialog-scrollable modal-lg our__project__modal" >
                                                <div class="modal-content" >
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="staticBackdropLabel">Our Projects R&D Section</h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body" >
                                                        {
                                                            rdItem !== undefined &&
                                                            <>
                                                                <h5><b>Project Name:</b>{rdItem.project_name} </h5>
                                                                <b>R&D Topic:</b>{rdItem.rd_title}
                                                                <div dangerouslySetInnerHTML={{ __html: rdItem.rd_description }} className="mt-3" />
                                                                <b className=''> ScreenShot</b>
                                                                <div className='mt-2' style={{ width: '740px', height: '500px' }}>
                                                                    <img src={`${global.img_url}/images/job_list/${rdItem.image}`} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />

                                                                </div>
                                                            </>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}



                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="row g-3 pt-4">
                <div className="col-12">
                    <div className="text-center pt-4">
                        <button type="submit" className="btn__worldwide__project"
                        // onClick={openModalApplyNow}
                        >
                            Load More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RDWorks;