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
                <div >
                    <div className="nav-one">



                        <div href="#home">

                            <img className="logo" src={Logo} alt="logo" />
                        </div>
                        <div className="nav-menu" >

                            <Nav.Link href="#home"><h5 style={{ color: "#0C065E" }} className="nav-text">Home</h5></Nav.Link>
                            &emsp;

                            <Nav.Link href="#features"><h5 className="nav-text">For Hospital</h5></Nav.Link>
                            &emsp;

                            <Nav.Link href="#pricing"><h5 className="nav-text">For Corporate</h5></Nav.Link>
                        </div>
                        <div> <button style={{ backgroundColor: "#0C065E" }} className="button">Book Now</button>
                            <button style={{ backgroundColor: "#5032D5" }} className="button">Login</button>
                            <BsList color="#5032D5" size="50px" />
                        </div>

                    </div>
                </div>
                {/* <br /> */}
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

                <Carousel fade>
                    <Carousel.Item >
                        <div className="overlay">
                            <img
                                className="d-block w-100 slider "
                                src={Slider1}
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
