import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import hospital from "../assets/Our Process Section/hospital.png"
import recovery from "../assets/Our Process Section/recovery.png"
import Self from "../assets/Our Process Section/Self.png"
import Surgery from "../assets/Our Process Section/Surgery.png"




export default function Process() {
    return (
        <div className="our-process">
            <div className="surgery-content">
                <h1>Our Process</h1>

                <div className="surgery-list">
                    <Container>
                        <Row>
                            <Col>  <a  > <h5 className="process-title">STEP 1</h5><br /> < img src={Surgery} alt="logo" className="sur-image" /> <h5 className="process-font2">Search your surgery</h5><p>type the treatment you are looking for and find multiple options to choose from (One stop platform for all treatment requirement)</p> </a></Col>
                            <Col><a > <h5 className="process-title">STEP 2</h5> <br />< img src={hospital} alt="logo" className="sur-image" /> <h5 className="process-font2">Choose the hospital</h5> <p>Connect easily and Speak to our medical experts and make your choice in your budget and as per your requirements.</p>  </a> </Col>
                            <Col><a > <h5 className="process-title">STEP 3</h5> <br />< img src={Self} alt="logo" className="sur-image" /> <h5 className="process-font2">Self Check-in</h5> <p>Fill in all the necessary details and reports. Make payment directly to the hospital or avail instant medical loan to finance your surgery.</p> </a> </Col>
                            <Col><a ><h5 className="process-title">STEP 4</h5>  <br />< img src={recovery} alt="logo" className="sur-image" /> <h5 className="process-font2">You are on your path to Recovery</h5> <p>All set to go get treated with no stress and complete assistance from our end.</p> </a> </Col>


                        </Row>

                    </Container>
                </div>

            </div>
        </div>
    )
}
