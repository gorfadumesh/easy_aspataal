import React from 'react'
import hello from "../assets/Say Hello Section/hello.png"
import { Col, Row, Container } from 'react-bootstrap'

export default function Hello() {
    return (
        <div className="say-hello">
            <Container className="hello-inner">
                <Row>
                    <Col className="hello-image" ><img src={hello} alt="hello" /></Col>

                    <Col className="hello-text">
                        <h1 className="title">Say <span style={{ color: "#FB8B4C" }} >hello!</span></h1>
                        <h2 className="title2">to your</h2>
                        <h1 className="title"> New  <span style={{ color: "#FB8B4C" }} >Care!</span></h1>
                        <h2 className="title2">team</h2>
                    </Col>
                    <Col sm>
                        <div class="form">

                            <div class="input-container ic1">
                                <input id="firstname" class="input" type="text" placeholder="Full Name" />
                                <div class="cut"></div>
                            </div>
                            <div class="input-container ic2">
                                <input id="lastname" class="input" type="text" placeholder=" Mobile" />
                                <div class="cut"></div>
                            </div>
                            <div class="input-container ic2">
                                <input id="email" class="input" type="text" placeholder="City" />
                                <div class="cut cut-short"></div>
                            </div>
                            <div class="input-container ic2">
                                <input id="lastname" class="input" type="text" placeholder=" Surgery / Treatment" />
                                <div class="cut"></div>
                            </div>
                            <button type="text" class="submit" style={{ backgroundColor: "#FB8B4C" }}>Plan a Surgery</button>
                            <button type="text" class="submit" style={{ backgroundColor: "#C4C4C4" }}>Avail Medical Finance</button>
                        </div>



                    </Col>
                </Row>
            </Container>


        </div>
    )
}
