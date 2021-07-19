import React from 'react'
import { Row, Col, Container } from "react-bootstrap"
import About from "../assets/About Us/About.png"

export default function AboutUs() {
    return (
        <div className="about_us">

            <>
                <div className="about_us">
                    <div className="about-part" >
                        <div className="about-text">
                            <h1 className="about-heading">About Us</h1>
                            <h2 className="about-heading2">One stop solution in hospitalization</h2>
                            <h4 className="about-p"> Integrated health-tech <br /> platform that co-ordinates <br /> with Hositals, Financiers and <br />insurance to deliver quality<br /> hospitalization care to patients</h4>
                        </div>

                    </div>
                    <div className="about-part">< img src={About} alt="about_image" className="about-image" /></div>
                </div>
            </>

        </div>
    )
}
