import React from 'react'
import hospital1 from "../assets/Speciality Page Asset/hospital1.png"
import hospital2 from "../assets/Speciality Page Asset/hospital2.png"
import hospital3 from "../assets/Speciality Page Asset/hospital3.png"
import hospital4 from "../assets/Speciality Page Asset/hospital4.png"

export default function BestHospital() {
    return (
        <div className="best-hospital">
            <p className="que-heading"> Best <span>Hospitals</span>  of Your <span>Choice</span> </p>
            <hr className="line" />

            <div className="hospital-cards">

                <div class="hospital-card">
                    <div className="hospital-card-image"><img src={hospital1} alt="image" className="hospital-logo" /></div>
                    <div className="apl-card-text">
                        <p className="hospital-card-p">Multi Speciality Hospital with Surgeries and Treatment with Best Doctors</p>
                        <div className="card-footer-text" >
                            <p className="footer-font1" >+100</p> <p className="footer-font2">Patients Selected<br />this Hospital </p>
                        </div>
                    </div>


                </div>
                <div class="hospital-card">
                    <div className="hospital-card-image"><img src={hospital2} alt="image" className="hospital-logo" /></div>
                    <div className="apl-card-text">
                        <p className="hospital-card-p">Multi Speciality Hospital with Surgeries and Treatment with Best Doctors</p>
                        <div className="card-footer-text" >
                            <p className="footer-font1" >+50</p> <p className="footer-font2">Patients Selected<br />this Hospital </p>
                        </div>
                    </div>

                </div>
                <div class="hospital-card">
                    <div className="hospital-card-image"><img src={hospital3} alt="image" className="hospital-logo" /></div>
                    <div className="apl-card-text">
                        <p className="hospital-card-p">Multi Speciality Hospital with Surgeries and Treatment with Best Doctors</p>
                        <div className="card-footer-text" >
                            <p className="footer-font1" >+30</p> <p className="footer-font2">Patients Selected<br />this Hospital </p>
                        </div>
                    </div>

                </div>
                <div class="hospital-card">
                    <div className="hospital-card-image"><img src={hospital4} alt="image" className=" hospital-logo  " /></div>
                    <div className="apl-card-text">
                        <p className="hospital-card-p">Multi Speciality Hospital with Surgeries and Treatment with Best Doctors</p>
                        <div className="card-footer-text" >
                            <p className="footer-font1" >+80</p> <p className="footer-font2">Patients Selected<br />this Hospital </p>
                        </div>
                    </div>

                </div>





            </div>
        </div>
    )
}
