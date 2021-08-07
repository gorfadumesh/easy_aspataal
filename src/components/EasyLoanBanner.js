import React from 'react'
import Easy from "../assets/Easy Loan Page Asset/Easy.jpeg"
import { MdLocalPhone, MdKeyboardArrowRight } from "react-icons/md"

export default function EasyLoanBanner() {
    return (
        <div>
            <div className="spe-banner">
                <div className="banner-img">
                    <img src={Easy} alt="banner" className="banner-bg" />

                </div>
                <div className="banner-content">

                    <div className="banner-inner" >

                        <div className="easy-banner-part">

                            <p className="banner-heading">No<span style={{ color: "#F88E54" }} > Income</span> ? </p>
                            <p className="banner-heading">Not <span style={{ color: "#F88E54" }} > Salaried</span> ? </p>
                            <p className="easy-banner-text">You're Still Google Enough to get Easy<span>Loan</span></p>
                            <p>Our alternate customized, affordable and instant finance solutions are ready to help you out! </p>
                            <div style={{ textAlign: "center" }}>

                                <div className="amount" >
                                    <button className="banner-btn"><MdLocalPhone /> + 91 72920 05098</button>
                                    <button className="banner-btn" style={{ backgroundColor: "#F88E54" }}> Apply Now</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            {/* <img src={Cardiology_Speciality_Page_Ass} alt="banner" /> */}

                        </div>
                    </div>

                </div>

            </div >
        </div>
    )
}
