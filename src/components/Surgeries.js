import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import Bones from "../assets/Top Surgery Section/Bones.png"
import Brain from "../assets/Top Surgery Section/Brain.png"
import Eye from "../assets/Top Surgery Section/Eye.png"
import Heart from "../assets/Top Surgery Section/Heart.png"
import Liver from "../assets/Top Surgery Section/Liver.png"
import Tooth from "../assets/Top Surgery Section/Tooth.png"
import Toungue from "../assets/Top Surgery Section/Toungue.png"
import Veins from "../assets/Top Surgery Section/Veins.png"

export default function Surgeries() {
    return (
        <div className="surgeries">
            <div className="surgery-content">
                <h1>TOP SURGERIES</h1>

                <div className="surgery-list">
                    <div>
                        <Row>
                            <Col>  <a  > < img src={Tooth} alt="logo" className="sur-image" /> <h5>Tooth</h5> </a></Col>
                            <Col><a > < img src={Veins} alt="logo" className="sur-image" /> <h5>Veins</h5> </a> </Col>
                            <Col><a > < img src={Heart} alt="logo" className="sur-image" /> <h5>Heart</h5> </a> </Col>
                            <Col><a > < img src={Eye} alt="logo" className="sur-image" /> <h5>Eye</h5> </a> </Col>
                            <Col><a > < img src={Bones} alt="logo" className="sur-image" /> <h5>Bones</h5> </a> </Col>
                            <Col><a > < img src={Liver} alt="logo" className="sur-image" /> <h5>Liver</h5> </a> </Col>
                            <Col><a > < img src={Brain} alt="logo" className="sur-image" /> <h5>Brain</h5> </a> </Col>
                            <Col><a > < img src={Toungue} alt="logo" className="sur-image" /> <h5>Toungue</h5> </a> </Col>

                        </Row>

                    </div>
                </div>

            </div>

        </div >
    )
}
