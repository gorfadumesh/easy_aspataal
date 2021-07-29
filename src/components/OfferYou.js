import React from 'react'
import Icon_1 from "../assets/Hospital Page Asset/Icon_1.png"
import Icon_2 from "../assets/Hospital Page Asset/Icon_2.png"
import Icon_3 from "../assets/Hospital Page Asset/Icon_3.png"
import Icon_4 from "../assets/Hospital Page Asset/Icon_4.png"

export default function OfferYou() {
    return (
        <div className="offer-you">
            <p className="que-heading">Easy<span>Aspataal</span> Offers You</p>
            <div className="offer-container">
                <div className="offer-card">
                    <img src={Icon_1} alt="img" style={{ height: "150px", width: "auto", paddingBottom: "25px", width: "auto" }} />

                    <p>Easy Loan</p>
                </div>
                <div className="offer-card">
                    <img src={Icon_2} alt="img" style={{ height: "150px", width: "auto", paddingBottom: "25px" }} />
                    <p>Online Payment</p>
                </div>
                <div className="offer-card">
                    <img src={Icon_3} alt="img" style={{ height: "150px", width: "auto", paddingBottom: "25px" }} />
                    <p>Insurance</p>
                </div>
                <div className="offer-card">
                    <img src={Icon_4} alt="img" style={{ height: "150px", width: "auto", paddingBottom: "25px" }} />
                    <p>Self Checkin</p>
                </div>
            </div>
        </div>
    )
}
