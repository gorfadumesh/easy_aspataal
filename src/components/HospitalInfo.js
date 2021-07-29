import React from 'react'
import { Tabs, Col, Tab } from 'react-bootstrap'

export default function HospitalInfo() {
    return (
        <div>
            <div className="hospital-tab">
                <Tabs defaultActiveKey="Pysiotheraphy" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="Pysiotheraphy" title="Hospital Information" >

                        <p> <h4 >About Fortis<span> Hospital</span> </h4> <span className="tab-text">
                            Established in 2007, Hiranandani Hospital, Vashi – A Fortis network Hospital is an advanced tertiary care,<span> multi-specialty hospital equipped with 149 beds and spread over an area of 1, 20,000 sq. ft.</span>  We possess wealth of medical expertise with the finest talents amongst doctors, nurses, technicians and management professionals. The hospital is equipped with a super ICU to provide emergency medical care to critically ill patients. The critical care facility is augmented with the state-of-the-art facilities that facilitate speedier diagnosis and efficient monitoring. Our team of highly dedicated professionals works here in an environment that enables them to deliver the highest quality of healthcare.</span>
                            <h6 >URL :<a href="www.fortishospital.com">  www.fortishospital.com</a> </h6>
                        </p>
                    </Tab>
                    <Tab eventKey="Diet" title="Doctor with Speciality">
                        <div className="doctor-list-container">
                            <div className="doctor-list">
                                <div>
                                    <h5>Gynaecologist</h5>
                                    <li>Dr. John Doe</li>
                                    <li>Dr. John Doe</li>
                                    <li>Dr. John Doe</li>
                                    <li>Dr. John Doe</li>

                                </div>
                                <div>
                                    <h5>Cardiologist</h5>
                                    <li>Dr. John Doe</li>
                                    <li>Dr. John Doe</li>
                                    <li>Dr. John Doe</li>
                                    <li>Dr. John Doe</li>
                                </div>
                                <div>
                                    <h5>Opthalogist</h5>
                                    <li>Dr. John Doe</li>
                                    <li>Dr. John Doe</li>
                                    <li>Dr. John Doe</li>
                                    <li>Dr. John Doe</li>
                                </div>
                                <div>
                                    <h5>Neurologist</h5>
                                    <li>Dr. John Doe</li>
                                    <li>Dr. John Doe</li>
                                    <li>Dr. John Doe</li>
                                    <li>Dr. John Doe</li>
                                </div>
                                <div>
                                    <h5>Diabetologist</h5>
                                    <li>Dr. John Doe</li>
                                    <li>Dr. John Doe</li>
                                    <li>Dr. John Doe</li>
                                    <li>Dr. John Doe</li>
                                </div>
                                <div>
                                    <h5>Dermatologist</h5>
                                    <li>Dr. John Doe</li>
                                    <li>Dr. John Doe</li>
                                    <li>Dr. John Doe</li>
                                    <li>Dr. John Doe</li>
                                </div>
                            </div>
                            <div className="doctor-list">
                                <div>
                                    <h5>Gynaecologist</h5>
                                    <li>Dr. John Doe</li>
                                    <li>Dr. John Doe</li>
                                    <li>Dr. John Doe</li>
                                    <li>Dr. John Doe</li>

                                </div>
                                <div>
                                    <h5>Cardiologist</h5>
                                    <li>Dr. John Doe</li>
                                    <li>Dr. John Doe</li>
                                    <li>Dr. John Doe</li>
                                    <li>Dr. John Doe</li>
                                </div>

                            </div></div>
                    </Tab>
                    <Tab eventKey="Home" title="Achievements" >
                        <div className="achievement">
                            hiii
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}
