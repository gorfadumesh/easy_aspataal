import React from 'react'
import { Nav, Carousel, Button, Navbar, Dropdown, DropdownButton, Container, NavDropdown } from 'react-bootstrap';
import { BsList, BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa"
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../assets/Logo/Logo.png"
import Slider1 from "../assets/Carousel Section/Slider1.jpg"
import Slider2 from "../assets/Carousel Section/Slider2.jpg"
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
                                <a href="#">Angiography(Day Care)</a>
                                <a href="#">Angiography With Angioplasty</a>
                                <a href="#">Temporary / Permanent Pacemaker Implantation</a>
                            </div>
                        </div>

                        <div class="dropdown">
                            <button class="dropbtn">E.N.T <FaChevronDown /> </button>
                            <div class="dropdown-content">
                                <a href="#">Tonsillectomy / Adenotonsillectomy</a>
                                <a href="#">Tympanoplasty</a>
                                <a href="#">Septoplasty + Turbinoplasty / Conchoplasty</a>
                                <a href="#">Nasal Polyps/ Sinusitis (Fess)</a>
                                <a href="#">Cortical Mastoidectomy With Myringoplasty</a>
                            </div>
                        </div>
                        <div class="dropdown">
                            <button class="dropbtn">Gen. Surgery <FaChevronDown /></button>
                            <div class="dropdown-content">
                                <a href="#">Haemorrhoidectomy</a>
                                <a href="#">Fistula repair</a>
                                <a href="#">Fissurectomy</a>
                                <a href="#">Appendectomy (OPEN) / (LAP)</a>
                                <a href="#">Cholecystectomy (OPEN)/ (LAP)</a>
                                <a href="#">Inguinal Herniorraphy / Hernioplasty</a>
                                <a href="#">Umbilical Herniorraphy / Hernioplasty</a>
                                <a href="#">Incisional Herniorraphy / Hernioplasty</a>
                                <a href="#">Circumcision</a>
                                <a href="#">Breast Lumpectomy</a>
                                <a href="#">Hydrocele, Normal / Forcep Delivery</a>

                            </div>
                        </div>
                        <div class="dropdown">
                            <button class="dropbtn">OBS & GYNE <FaChevronDown /></button>
                            <div class="dropdown-content">
                                <a href="#">Lap Hysterectomy (Abdominal/Vaginal)</a>
                                <a href="#">Dilatation & Curettage (D&C)</a>
                                <a href="#">IVF</a>
                            </div>
                        </div>
                        <div class="dropdown">
                            <button class="dropbtn">Ophthalmology <FaChevronDown /></button>
                            <div class="dropdown-content">
                                <a href="#">Cataract - Phaco / MICS</a>
                                <a href="#">Unifocal/Multifocal</a>
                                <a href="#">Vitrectomy</a>
                                <a href="#">Glaucoma</a>
                            </div>
                        </div>
                        <div class="dropdown">
                            <button class="dropbtn">Orthopaedics <FaChevronDown /></button>
                            <div class="dropdown-content">
                                <a href="#">Total Knee Replacement (Unilateral)/ (Bilateral)</a>
                                <a href="#">Hip Replacement (Unilateral) / (Bilateral)</a>
                                <a href="#"> Arthroscopic Surgery knee ( Other Than Acl) / Meniscectomy</a>
                                <a href="#"> ACL / MCL Reconstructiony</a>
                                <a href="#"> Laminectomy/Discectomy</a>

                                <a href="#"> Carpal Tunnel Release</a>
                                <a href="#"> Close/ open Reduction of Fracture of Limbs and POP</a>
                            </div>
                        </div><div class="dropdown">
                            <button class="dropbtn">Urology & Nephrology <FaChevronDown /></button>
                            <div class="dropdown-content">
                                <a href="#">Pcnl- Unilateral / Bilateral</a>
                                <a href="#">TURP (HOLEP)</a>
                                <a href="#">Cystoscopy Urs With Dj Stenting (Unilateral)</a>
                            </div>
                        </div><div class="dropdown">
                            <button class="dropbtn">ascular Surgery <FaChevronDown /> </button>
                            <div class="dropdown-content">
                                <a href="#">Varicose Veins(surgical) / Laser</a>
                                {/* <a href="#">Link 2</a>
                                <a href="#">Link 3</a> */}
                            </div>
                        </div>



                    </div>

                </div>

            </>
            <div className="carousel">

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
                                        <li>  1.40% of Surgeries are avoidable</li>
                                        <li>2. Specialist Doctors for consultation</li>
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
