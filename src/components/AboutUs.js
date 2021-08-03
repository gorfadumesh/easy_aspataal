import React from 'react'
import { Row, Col, Container } from "react-bootstrap"
import About from "../assets/About Us/About.png"
import Phone from "../assets/Carousel Section/Phone.png"
import { AiOutlineCheck } from "react-icons/ai"

export default function AboutUs() {
    return (
        <div className="about_us">

            <>
                <div className="about_us">
                    <div className="about-part" >
                        <div className="about-text">
                            <h1 className="about-heading">Get Treated Now</h1>
                            <li> <AiOutlineCheck color="#fb8b4c" /> &nbsp; Book same day appointments </li>
                            <li> <AiOutlineCheck color="#fb8b4c" /> &nbsp; Chat with your health team </li>
                            <li> <AiOutlineCheck color="#fb8b4c" /> &nbsp; Prescription at your doorstep</li>
                            <li> <AiOutlineCheck color="#fb8b4c" /> &nbsp; All your health in one place</li>
                            <button className="get-button"> Apply Now</button>
                            {/* <h2 className="about-heading2">One stop solution in hospitalization</h2>
                            <h4 className="about-p"> Integrated health-tech  platform that co-ordinates with Hospitals, Financiers and insurance to deliver quality hospitalization care to patients</h4> */}
                        </div>

                    </div>
                    <div className="about-part">< img src={Phone} alt="about_image" className="about-image" /></div>
                </div>
            </>

        </div>
    )
}
