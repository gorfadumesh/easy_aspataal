import React from 'react'
import Banner_BG from "../assets/Speciality Page Asset/Banner_BG.png"
import Cardiology_Speciality_Page_Ass from "../assets/Speciality Page Asset/Cardiology_Speciality_Page_Ass.png"
import { MdLocalPhone, MdKeyboardArrowRight } from "react-icons/md"

export default function Banner() {
    return (
        <div className="spe-banner">
            <div className="banner-img">
                <img src={Banner_BG} alt="banner" className="banner-bg" />

            </div>
            <div className="banner-content">
                <div className="page-path"> <a > Home <MdKeyboardArrowRight /> </a>  <a > Cardiology <MdKeyboardArrowRight /> </a>  <a style={{ color: "#FB8B4C" }} > Angiography (Day Care) </a></div>

                <div className="banner-inner" >

                    <div className="banner-part">

                        <p className="banner-heading"> What is <span style={{ color: "#5032d5" }} > Angiography? </span>  </p>
                        <p>Angiography is a type of X-ray used to check blood essels. Blood vessels do not show clearly on a normal X-ray,
                            so a special dye need to be injected to your blood first. This highlights your blood vessels, allowing your doctor to see
                            any problems. The X-rey images created during angiography </p>
                        <div style={{ textAlign: "center" }}>
                            <div className="amount" >
                                <ul>
                                    <li> Covid Safe Hospital</li>
                                    <li> Instant Medical Finance  at 0% Interest</li>
                                </ul>
                            </div>
                            <div className="amount" >
                                <button className="banner-btn"><MdLocalPhone /> + 91 72920 05098</button> <p>Average cost of Surgery <br></br> <span className="price-tag1"> 5 LAKH</span> <span className="price-tag2">4 LAKH</span> </p>
                            </div>
                            <p className="banner-text"> Eassy<span style={{ color: "#5032d5" }}>Aspataal</span> <span style={{ fontWeight: 500 }}>helps you to finance your surgery</span> </p>
                        </div>
                    </div>
                    <div>
                        <img src={Cardiology_Speciality_Page_Ass} alt="banner" />

                    </div>
                </div>

            </div>

        </div >
    )
}
