import React from 'react'
import { Row, Col, Container } from "react-bootstrap"
import About from "../assets/About Us/About.png"

export default function AboutUs() {
    return (
        <div className="about_us">

            <Container>
                <Row className="about_us">
                    <Col sm={3} >
                        <h1 className="about-heading">About Us</h1>
                        <h2 className="about-heading2">One stop solution in hospitalization</h2>
                        <h4 className="about-p"> Integrated health-tech platform that co-ordinates with Hositals, Financiers and insurance to deliver quality hospitalization care to patients</h4>
                    </Col>
                    <Col sm={7}><img src={About} alt="about_image" /></Col>
                </Row>
            </Container>

        </div>
    )
}
