import React from 'react'
import Banner_BG from "../assets/Speciality Page Asset/Banner_BG.png"
import Image_4 from "../assets/Hospital Page Asset/Image_4.png"
import Image_5 from "../assets/Hospital Page Asset/Image_5.png"
import Image_8 from "../assets/Hospital Page Asset/Image_8.png"
import Image_9 from "../assets/Hospital Page Asset/Image_9.png"
import Image_10 from "../assets/Hospital Page Asset/Image_10.png"
import { MdLocalPhone, MdKeyboardArrowRight } from "react-icons/md"
import { Carousel } from "react-bootstrap"


export default function HospitalBanner() {
    return (
        <div className="spe-banner">
            <div className="banner-img">
                <img src={Banner_BG} alt="banner" className="banner-bg" />

            </div>
            <div className="banner-content">
                <div className="page-path">
                    <a > Home <MdKeyboardArrowRight /> </a>  <a > Cardiology <MdKeyboardArrowRight /> </a> <a > Angiography  (Day Care)<MdKeyboardArrowRight /> </a>  <a style={{ color: "#FB8B4C" }} > Fortis Hospital   </a>
                </div>
                <div className="banner-inner" >

                    <div className="hospital-banner-part">
                        {/* <Swiper pagination={true} className="mySwiper">
                            <SwiperSlide> <img src={Image_4} alt="img" /></SwiperSlide><SwiperSlide><img src={Image_4} alt="img" /></SwiperSlide><SwiperSlide><img src={Image_4} alt="img" /></SwiperSlide><SwiperSlide><img src={Image_4} alt="img" /></SwiperSlide>
                        </Swiper> */}
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Image_4}
                                    alt="First slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Image_5}
                                    alt="Second slide"
                                />


                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Image_8}
                                    alt="Third slide"
                                />


                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Image_9}
                                    alt="Third slide"
                                />


                            </Carousel.Item>    <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Image_10}
                                    alt="Third slide"
                                />


                            </Carousel.Item>
                        </Carousel>


                    </div>
                    <div className="hospital-banner-part2">
                        <p className="banner-heading"> Fortis  <span style={{ color: "#5032d5" }} > Hospital</span>  </p>
                        <button className="banner-tag"> Multi Speciality Hospital </button>
                        <hr />
                        <p className="banner-location-text">Mini, Seashore Rd, Juhu Nagar, Sector 10A, Vashi, Navi Mumbai, Maharashtra 400703 </p>
                        <div style={{ textAlign: "center" }}>
                            <div className="amount" >
                                <ul>
                                    <li> Well Sanitized Hospital</li>
                                    <li> Easy Loan Assitance</li>
                                </ul>
                            </div>
                            <div className="amount" >
                                <button className="banner-btn"> Book an Appointment</button>
                                <button className="banner-btn"><MdLocalPhone /> + 91 72920 05098</button>
                            </div>
                            <div className="banner-footer-text">
                                <p className="footer-font1" >+100</p> <p className="footer-font2">Patients Selected<br />this Hospital </p>
                                <p>Rating  4.7/5</p>
                            </div>


                        </div>
                        {/* <img src={Cardiology_Speciality_Page_Ass} alt="banner" /> */}

                    </div>
                </div>


            </div>

        </div >
    )
}
