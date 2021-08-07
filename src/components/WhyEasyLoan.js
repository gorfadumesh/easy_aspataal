import React from 'react'
import icon1 from "../assets/Easy Loan Page Asset/icon1.png"
import icon2 from "../assets/Easy Loan Page Asset/icon2.png"
import icon3 from "../assets/Easy Loan Page Asset/icon3.png"
import Icon4 from "../assets/Easy Loan Page Asset/Icon4.png"

export default function WhyEasyLoan() {
    return (
        <div className="why-easy-loan">
            <p className="que-heading">Why Easy<span>Loan</span>?</p>
            <div className="offer-container">
                <div className="easy-card">
                    <img src={icon1} />
                    <p>20 lakhs Sum Insured</p>
                </div>
                <div className="easy-card">
                    <img src={icon2} />
                    <p>Cashless Facility in 6500+ Hospitals</p>
                </div>
                <div className="easy-card">
                    <img src={icon3} />
                    <p>No Medical<br /> Test</p>
                </div>
                <div className="easy-card">
                    <img src={Icon4} />
                    <p>Instant<br />  Easy Loan</p>
                </div>
            </div>
        </div>
    )
}
