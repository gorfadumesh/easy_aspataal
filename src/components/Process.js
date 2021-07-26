import React from 'react'
import { Container } from "react-bootstrap"
import hospital from "../assets/Our Process Section/hospital.png"
import recovery from "../assets/Our Process Section/recovery.png"
import Self from "../assets/Our Process Section/Self.png"
import Surgery from "../assets/Our Process Section/Surgery.png"
import { BsChevronRight } from "react-icons/bs";



export default function Process() {
    return (
        <div className="our-process">
            <div className="surgery-content">
                <p className="process-title1">Our Process</p>

                <div className="process-list ">
                    {/* <Container> */}
                    {/* <div> */}
                    <div className="list-item">  <a  > <h5 className="process-title">STEP 1</h5><br /> < img src={Surgery} alt="process-img" className="proce-image" /> <h5 className="process-font2">Search your surgery</h5><p>type the treatment you are looking for and find multiple options to choose from (One stop platform for all treatment requirement)</p> </a></div><div className="process-arrow">------<BsChevronRight /></div>
                    <div className="list-item"><a > <h5 className="process-title">STEP 2</h5> <br />< img src={hospital} alt="process-img" className="proce-image" /> <h5 className="process-font2">Choose the hospital</h5> <p>Connect easily and Speak to our medical experts and make your choice in your budget and as per your requirements.</p>  </a> </div><div className="process-arrow">------<BsChevronRight /></div>
                    <div className="list-item"><a > <h5 className="process-title">STEP 3</h5> <br />< img src={Self} alt="process-img" className="proce-image" /> <h5 className="process-font2">Self Check-in</h5> <p>Fill in all the necessary details and reports. Make payment directly to the hospital or avail instant medical loan to finance your surgery.</p> </a> </div><div className="process-arrow">------<BsChevronRight /></div>
                    <div className="list-item"><a ><h5 className="process-title">STEP 4</h5>  <br />< img src={recovery} alt="process-img" className="proce-image" /> <h5 className="process-font2">You are on your path to Recovery</h5> <p>All set to go get treated with no stress and complete assistance from our end.</p> </a> </div>


                    {/* </div> */}

                    {/* </Container> */}
                </div>

            </div>
        </div>
    )
}
