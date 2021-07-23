import React from 'react'
import common from "../assets/Speciality Page Asset/common.png"

export default function CommonSymptoms() {
    return (
        <div className="common-symptoms">

            <div className="common-part">
                <img src={common} alt="img" className="common-image" />
            </div>
            <div className="common-part">
                <div>
                    <p className="common-heading"> Most Common <span>Symptoms</span> </p>
                    <hr className="line" />
                </div>
                <div className="common-text">
                    <p>Your doctor may recommend that you have a coronary angiogram if you have:</p>
                    <ul>
                        <li>Symptoms of coronary artery disease, such as chest pain (angina) </li>
                        <li>Pain in your chest, jaw, neck or arm that can't be explained by other tests </li>
                        <li>New or increasing chest pain (unstable angina) A heart defect you were born with (congenital heart disease) </li>
                        <li>Abnormal results on a noninvasive heart stress test Other blood vessel problems or a chest injury </li>
                        <li> A heart valve problem that requires surgery </li>
                    </ul>

                </div>

            </div>

        </div>
    )
}
