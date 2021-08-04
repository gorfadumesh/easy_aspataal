import React from 'react'
import { Nav, Carousel, Button, Navbar, Dropdown, DropdownButton, Container, NavDropdown } from 'react-bootstrap';
import { BsList, BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa"
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../assets/Logo/Logo.png"
import Slider1 from "../assets/Carousel Section/Slider1.jpg"
import Slider2 from "../assets/Carousel Section/Slider2.jpg"
import img1 from "../assets/Carousel Section/img1.jpeg"
import img2 from "../assets/Carousel Section/img2.jpeg"
import ContactForm from './ContactForm';


export default function NavbarHeader() {


    const prevIcon = <BsChevronCompactLeft className="prev-icon" />
    const nextIcon = <BsChevronCompactRight className="prev-icon" />
    return (
        <div>
            <>

                <div className="navbar navbar-c" >



                    <div className="nav-drop-down">

                        <div class="dropdown">
                            <button class="dropbtn">Cardiology <FaChevronDown /> </button>
                            <div class="dropdown-content">
                                <a href="/speciality">Angiography(Day Care)</a>
                                <a href="/speciality">Angiography With Angioplasty</a>
                                <a href="/speciality">Temporary / Permanent Pacemaker Implantation</a>
                            </div>
                        </div>

                        <div class="dropdown">
                            <button class="dropbtn">E.N.T <FaChevronDown /> </button>
                            <div class="dropdown-content">
                                <a href="/speciality">Tonsillectomy / Adenotonsillectomy</a>
                                <a href="/speciality">Tympanoplasty</a>
                                <a href="/speciality">Septoplasty + Turbinoplasty / Conchoplasty</a>
                                <a href="/speciality">Nasal Polyps/ Sinusitis (Fess)</a>
                                <a href="/speciality">Cortical Mastoidectomy With Myringoplasty</a>
                            </div>
                        </div>
                        <div class="dropdown">
                            <button class="dropbtn">Gen. Surgery <FaChevronDown /></button>
                            <div class="dropdown-content">
                                <a href="/speciality">Haemorrhoidectomy</a>
                                <a href="/speciality">Fistula repair</a>
                                <a href="/speciality">Fissurectomy</a>
                                <a href="/speciality">Appendectomy (OPEN) / (LAP)</a>
                                <a href="/speciality">Cholecystectomy (OPEN)/ (LAP)</a>
                                <a href="/speciality">Inguinal Herniorraphy / Hernioplasty</a>
                                <a href="/speciality">Umbilical Herniorraphy / Hernioplasty</a>
                                <a href="/speciality">Incisional Herniorraphy / Hernioplasty</a>
                                <a href="/speciality">Circumcision</a>
                                <a href="/speciality">Breast Lumpectomy</a>
                                <a href="/speciality">Hydrocele, Normal / Forcep Delivery</a>

                            </div>
                        </div>
                        <div class="dropdown">
                            <button class="dropbtn">OBS & GYNE <FaChevronDown /></button>
                            <div class="dropdown-content">
                                <a href="/speciality">Lap Hysterectomy (Abdominal/Vaginal)</a>
                                <a href="/speciality">Dilatation & Curettage (D&C)</a>
                                <a href="/speciality">IVF</a>
                            </div>
                        </div>
                        <div class="dropdown">
                            <button class="dropbtn">Ophthalmology <FaChevronDown /></button>
                            <div class="dropdown-content">
                                <a href="/speciality">Cataract - Phaco / MICS</a>
                                <a href="/speciality">Unifocal/Multifocal</a>
                                <a href="/speciality">Vitrectomy</a>
                                <a href="/speciality">Glaucoma</a>
                            </div>
                        </div>
                        <div class="dropdown">
                            <button class="dropbtn">Orthopaedics <FaChevronDown /></button>
                            <div class="dropdown-content">
                                <a href="/speciality">Total Knee Replacement (Unilateral)/ (Bilateral)</a>
                                <a href="/speciality">Hip Replacement (Unilateral) / (Bilateral)</a>
                                <a href="/speciality"> Arthroscopic Surgery knee ( Other Than Acl) / Meniscectomy</a>
                                <a href="/speciality"> ACL / MCL Reconstructiony</a>
                                <a href="/speciality"> Laminectomy/Discectomy</a>

                                <a href="/speciality"> Carpal Tunnel Release</a>
                                <a href="/speciality"> Close/ open Reduction of Fracture of Limbs and POP</a>
                            </div>
                        </div>
                        <div class="dropdown">
                            <button class="dropbtn">Urology & Nephrology <FaChevronDown /></button>
                            <div class="dropdown-content">
                                <a href="/speciality">Pcnl- Unilateral / Bilateral</a>
                                <a href="/speciality">TURP (HOLEP)</a>
                                <a href="/speciality">Cystoscopy Urs With Dj Stenting (Unilateral)</a>
                            </div>
                        </div>
                        <div class="dropdown">
                            <button class="dropbtn">ascular Surgery <FaChevronDown /> </button>
                            <div class="dropdown-content">
                                <a href="/speciality">Varicose Veins(surgical) / Laser</a>

                            </div>
                        </div>



                    </div>

                    <div className="nav-drop-down-mobile">
                        <div >




                        </div>
                    </div>

                </div>

            </>
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
                                    <div> <h1 className="care-text" ><span style={{ color: "#FB8B4C" }}>Sugery</span>  Bhi <br /> Finance <span style={{ color: "#FB8B4C" }}>Bhi</span></h1></div>
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

        </div >
    )
}
