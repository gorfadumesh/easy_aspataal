import React from 'react'
import { Nav, Carousel, Button, Navbar, Dropdown, DropdownButton, Container, NavDropdown } from 'react-bootstrap';
import { BsList } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa"
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../assets/Logo/Logo.png"
import Slider1 from "../assets/Carousel Section/Slider1.jpg"
import Slider2 from "../assets/Carousel Section/Slider2.jpg"
import ContactForm from './ContactForm';
export default function NavbarHeader() {
    return (
        <div>
            <>

                <div className="navbar navbar-c" >



                    <div className="nav-drop-down">

                        <div class="dropdown">
                            <button class="dropbtn">Eyes <FaChevronDown /> </button>
                            <div class="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        </div>

                        <div class="dropdown">
                            <button class="dropbtn">Maternity <FaChevronDown /> </button>
                            <div class="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        </div>
                        <div class="dropdown">
                            <button class="dropbtn">Nose <FaChevronDown /></button>
                            <div class="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        </div>
                        <div class="dropdown">
                            <button class="dropbtn">Knee <FaChevronDown /></button>
                            <div class="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        </div>
                        <div class="dropdown">
                            <button class="dropbtn">General Surgery <FaChevronDown /></button>
                            <div class="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        </div>
                        <div class="dropdown">
                            <button class="dropbtn">Woman's Care <FaChevronDown /></button>
                            <div class="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        </div><div class="dropdown">
                            <button class="dropbtn">Woman's Care <FaChevronDown /></button>
                            <div class="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        </div><div class="dropdown">
                            <button class="dropbtn">Woman's Care <FaChevronDown /> </button>
                            <div class="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        </div>



                    </div>

                </div>

            </>
            <div className="carousel">

                <Carousel fade nextLabel="" prevLabel="">
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
