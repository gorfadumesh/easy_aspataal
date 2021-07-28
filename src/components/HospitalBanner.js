import React from 'react'
import Banner_BG from "../assets/Speciality Page Asset/Banner_BG.png"
import Image_4 from "../assets/Hospital Page Asset/Image_4.png"
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
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Image_4}
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Image_4}
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>


                    </div>
                    <div className="hospital-banner-part2">
                        <p className="banner-heading"> What is <span style={{ color: "#5032d5" }} > Angiography? </span>  </p>
                        <p>Angiography is a type of X-ray used to check blood essels. Blood vessels do not show clearly on a normal X-ray,
                            so a special dye need to be injected to your blood first. This highlights your blood vessels, allowing your doctor to see
                            any problems. The X-rey images created during angiography </p>
                        <div style={{ textAlign: "center" }}>
                            <div className="amount" >
                                <ul>
                                    <li> Covid Safe Hospital</li>
                                    <li> Instant Medical Finance  at 0% Interest</li>
                                </ul>
                            </div>
                            <div className="amount" >
                                <button className="banner-btn"><MdLocalPhone /> + 91 72920 05098</button> <p>Average cost of Surgery <br></br> <span className="price-tag1"> 5 LAKH</span> <span className="price-tag2">4 LAKH</span> </p>
                            </div>
                            <p>Eassyaspataal helps you to finance your surgery</p>
                        </div>
                        {/* <img src={Cardiology_Speciality_Page_Ass} alt="banner" /> */}

                    </div>
                </div>


            </div>

        </div >
    )
}
