import React from 'react';
import pppp from '../../Images/pppp.jpg';
import prr from '../../Images/prr.jpg';
import EventWhite from '../../Images/EventWhite.png';
import EventRead from '../../Images/EventRead.png';
import EventReadYellow from '../../Images/EventReadYellow.png';
import Slider_1 from '../../Images/Slider_1.png';

const Slider = () => {
    return (
        <>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="300000">
                        <div class="row g-4">
                            <div class="col-4">
                                <div class="card_bg">
                                    <img src={EventWhite} class="card-img-top" alt="EventWhite" />
                                    <div class="p-3">
                                        <div className="row g-0">
                                            <div className="col-3">
                                                <h5 className="header_event_card_month">SEP</h5>
                                                <p className="text-muted header_event_card_date">16</p>
                                            </div>
                                            <div className="col-9">
                                                <h6 className="letest_event_card_title">Id anim sint occaecat amet laboris pariatur aute ipsum. </h6>
                                                <p className="text-muted letest_event_description_card">Id anim sint occaecat amet laboris pariatur aute ipsum.
                                                    Laborum eu Lorem consequat sit
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="card_bg">
                                    <img src={EventRead} class="card-img-top" alt="EventRead" />
                                    <div class="p-3">
                                        <div className="row g-0">
                                            <div className="col-3">
                                                <h5 className="header_event_card_month">SEP</h5>
                                                <p className="text-muted header_event_card_date">16</p>
                                            </div>
                                            <div className="col-9">
                                                <h6 className="letest_event_card_title">Id anim sint occaecat amet laboris pariatur aute ipsum. </h6>
                                                <p className="text-muted letest_event_description_card">Id anim sint occaecat amet laboris pariatur aute ipsum.
                                                    Laborum eu Lorem consequat sit
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="card_bg">
                                    <img src={EventReadYellow} class="card-img-top" alt="EventReadYellow" />
                                    <div class="p-3">
                                        <div className="row g-0">
                                            <div className="col-3">
                                                <h5 className="header_event_card_month">SEP</h5>
                                                <p className="text-muted header_event_card_date">16</p>
                                            </div>
                                            <div className="col-9">
                                                <h6 className="letest_event_card_title">Id anim sint occaecat amet laboris pariatur aute ipsum. </h6>
                                                <p className="text-muted letest_event_description_card">Id anim sint occaecat amet laboris pariatur aute ipsum.
                                                    Laborum eu Lorem consequat sit
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        <div class="row row-cols-1 row-cols-md-3 g-4">

                            <div class="col">
                                <div class="card">
                                    <img src={Slider_1} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img src={Slider_1} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img src={Slider_1} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
};

export default Slider;


//// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

// import React from 'react';
// // import "~slick-carousel/slick/slick.css"; 
// // import "~slick-carousel/slick/slick-theme.css";
// // import '../node_modules/slick-carousel/slick/fonts/slick.css';
// import '../../../node_modules/slick-carousel/slick/slick.css';
// import '../../../node_modules/slick-carousel/slick/slick-theme.css';
// import '../../../node_modules/slick-carousel/slick/slick.js';
// // import './../../node_modules/slick-carousel/slick/slick.js';

// const Slider = () => {
//     const settings = {
//         dots: true,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 4,
//         slidesToScroll: 4,
//         initialSlide: 0,
//         responsive: [
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 3,
//               slidesToScroll: 3,
//               infinite: true,
//               dots: true
//             }
//           },
//           {
//             breakpoint: 600,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 2,
//               initialSlide: 2
//             }
//           },
//           {
//             breakpoint: 480,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1
//             }
//           }
//         ]
//       };
//     return (
//         <div>
//              <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//         </div>
//     );
// };

// export default Slider;