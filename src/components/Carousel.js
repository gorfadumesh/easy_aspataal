import React from 'react'
import { Carousel } from "react-bootstrap"
import Slider1 from "../assets/Carousel Section/Slider1.jpg"
import Slider2 from "../assets/Carousel Section/Slider2.jpg"
import img1 from "../assets/Carousel Section/img1.jpeg"
import img2 from "../assets/Carousel Section/img2.jpeg"
import { BsList, BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export default function homeCarousel() {
    const prevIcon = <BsChevronCompactLeft className="prev-icon" />
    const nextIcon = <BsChevronCompactRight className="prev-icon" />
    return (
        <div>
            <div className="carousel-desktop">

                <Carousel fade nextLabel="" prevLabel="" prevIcon={prevIcon} nextIcon={nextIcon} interval={2000}>
                    <Carousel.Item >
                        <div className="overlay">
                            <img
                                className="d-block w-100 slider "
                                src={Slider1}
                                alt="First slide"
                            />
                            <div className="overlap-form">
                                <div className="carosel-text">
                                    <div> <h1 className="care-text" ><span style={{ color: "#FB8B4C" }}>Do you</span>  really  <br /> need <span style={{ color: "#FB8B4C" }}>Surgery?</span></h1></div>
                                    <div className="carosel-list">
                                        <li>40% of Surgeries are avoidable</li>
                                        <li>Specialist Doctors for consultation</li>
                                    </div>
                                    <div>
                                        <button className="carosel-btn" style={{ backgroundColor: "#0C065E" }}>+91 72920 05098</button>
                                        <button className="carosel-btn" style={{ backgroundColor: "#FB8B4C" }}>Consult Now</button>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </Carousel.Item>
                    <Carousel.Item >
                        <div className="overlay">
                            <img
                                className="d-block w-100 slider "
                                src={Slider2}
                                alt="First slide"
                            />
                            <div className="overlap-form">
                                <div className="carosel-text">
                                    <div> <h1 className="care-text" ><span style={{ color: "#FB8B4C" }}>Surgery</span>  Bhi <br /> Finance <span style={{ color: "#FB8B4C" }}>Bhi</span></h1></div>
                                    <div className="carosel-list">
                                        <li> Covid Safe Hospital</li>
                                        <li>Instant Medical Finance
                                            at 0% Interest</li>
                                    </div>
                                    <div>
                                        <button className="carosel-btn" style={{ backgroundColor: "#0C065E" }}>+91 72920 05098</button>
                                        <button className="carosel-btn" style={{ backgroundColor: "#FB8B4C" }}>Apply Now</button>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </Carousel.Item>



                </Carousel>
            </div>


            <div className="carousel-mobile">

                <Carousel fade nextLabel="" prevLabel="" prevIcon={prevIcon} nextIcon={nextIcon} interval={100000}>
                    <Carousel.Item >
                        <div className="overlay">
                            <img
                                className="d-block w-100 slider "
                                src={img1}
                                alt="First slide"
                            />
                            <div className="overlap-form">
                                <div className="carosel-text">
                                    <div> <h1 className="care-text" ><span style={{ color: "#FB8B4C" }}>Do you</span>  really  <br /> need <span style={{ color: "#FB8B4C" }}>Surgery?</span></h1></div>
                                    <div className="carosel-list">
                                        <li>  40% of Surgeries are avoidable</li>
                                        <li> Specialist Doctors for consultation</li>
                                    </div>
                                    <div>
                                        <button className="carosel-btn" style={{ backgroundColor: "#0C065E" }}>+91 72920 05098</button>
                                        <button className="carosel-btn" style={{ backgroundColor: "#FB8B4C" }}>Consult Now</button>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </Carousel.Item>
                    <Carousel.Item >
                        <div className="overlay">
                            <img
                                className="d-block w-100 slider "
                                src={img2}
                                alt="First slide"
                            />
                            <div className="overlap-form">
                                <div className="carosel-text">
                                    <div> <h1 className="care-text" ><span style={{ color: "#FB8B4C" }}>Sugery</span>  Bhi <br /> Loan <span style={{ color: "#FB8B4C" }}>Bhi</span></h1></div>
                                    <div className="carosel-list">
                                        <li> Covid Safe Hospital</li>
                                        <li>Instant Medical Finance
                                            at 0% Interest</li>
                                    </div>
                                    <div>
                                        <button className="carosel-btn" style={{ backgroundColor: "#0C065E" }}>+91 72920 05098</button>
                                        <button className="carosel-btn" style={{ backgroundColor: "#FB8B4C" }}>Apply Now</button>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </Carousel.Item>



                </Carousel>
            </div>
        </div>
    )
}
