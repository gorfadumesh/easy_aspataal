import React from 'react'
import { Row, Col, Container } from "react-bootstrap"
import Whit_Logo from "../assets/Logo/Whit_Logo.png"
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa"


export default function Footer() {
    return (
        <div>
            <div style={{ height: "50px" }}>

            </div>

            <div className="footer">
                {/* <h1 className="about-heading"> Our Company</h1> */}

                <Container className="footer-content">
                    <img className="logo" src={Whit_Logo} alt="logo" />
                    <Row>
                        <Col >

                            <li  >  <h3 className="footer-font" >Our Company</h3> </li>
                            <li  >  <a style={{ color: "white" }} >About Us</a> </li>
                            <li  >  <a >Terms and Condition</a> </li>
                            <li  >  <a>Privacy Policy</a> </li>
                            <li  >  <a>Careers</a> </li>
                            <li  >  <a>Call Us Now</a> </li>

                        </Col>
                        <Col>
                            <li  >  <h3 className="footer-font">Patient Take Action</h3> </li>
                            <li  >  <a>Request for Surgery</a> </li>
                            <li  >  <a>Apply for EasyLoan</a> </li>
                            <li  >  <a>Do Self Chekin</a> </li>
                            <li  >  <a>Take a virtual tour</a> </li>
                            <li  >  <a>Download Hospital Brochure</a> </li>
                            <li  >  <a>Online Payment</a> </li>
                            <li  >  <a>Create your HealthID</a> </li>
                            <li  >  <a>Have a Query?</a> </li>
                            <li  >  <a>Read Blog</a> </li>
                            <li  >  <a>Refer a Patients</a> </li>

                        </Col>
                        <Col>
                            <li  >  <h3 className="footer-font"> For Hospital</h3> </li>
                            <li  >  <a>Partner with us</a> </li>
                            <li  >  <a>FaQs</a> </li>
                            <li  >  <a>Patient PreChekin</a> </li>
                            <li  >  <a>Need a Technology Help</a> </li>

                        </Col>
                        <Col>
                            <li  >  <h3 className="footer-font">For Corporates</h3> </li>
                            <li  >  <a>Partner with us</a> </li>
                            <li  >  <a>FaQs</a> </li>
                            <li  >  <a>Patient PreChekin</a> </li>
                            <li  >  <a>Need a Technology Help</a> </li>

                        </Col>


                    </Row>

                </Container>
                <hr className="footer-divider" />
                <div className="footer2">
                    <div className="footer2-content" >
                        <div className="footer-part">

                            <h2 style={{ color: "white" }}> <span className="bold-font"> EasyAspataal </span>  emails are pretty awesome. </h2>
                            <div className="footer-inputs">
                                <input placeholder="Enter Email Address" className="footer-input"></input>
                                <button className="footer-button" >Sign Up</button>
                            </div>
                            <h5 className="footer-font1" style={{ color: "white" }}>By signing up , i agree to the <span style={{ color: "#FB8B4C" }}>terms and condition </span> and to receive emails.</h5>

                        </div>
                        <div className="footer-part">
                            <h2 className="footer-font">Follows Us on</h2>
                            <br />
                            <div > < FaFacebook className="social-media" /><FaTwitter className="social-media" />< FaLinkedinIn className="social-media" /><FaInstagram className="social-media" /></div>

                        </div>
                    </div>
                    <h4 className="footer-last" style={{ color: "white" }}>Ⓒ  2021 EasyAspataal | All Rights Reserved</h4>
                </div>


            </div>
        </div>
    )
}
