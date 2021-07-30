import React from 'react'
import { Card, Button, CardGroup } from "react-bootstrap"
import Finance from "../assets/Plan A Surgery Section/Finance.png"
import Plan from "../assets/Plan A Surgery Section/Plan.png"

export default function ApplyCards() {
    return (
        <div className="apply-cards">

            <div className="cards">

                <div class="card">
                    <div><img src={Plan} alt="image" className="apl-card-img1" /></div>
                    <h1 className="apl-card-heading">Plan a Surgery</h1>
                    <div className="apl-card-text">
                        <h4 className="apl-card-heading2"  >Looking for a treatment ?</h4>
                        <h4 className="apl-card-p">Find your surgery price and plan your treatment in your nearest Hospital</h4>

                    </div>
                    <div>  <button className="button" style={{ backgroundColor: "#FB8B4C" }}>Apply Now</button></div>


                </div>
                <div class="card">
                    <div><img src={Finance} alt="image" className="apl-card-img1" /></div>
                    <h1 className="apl-card-heading">Finance Your Surgery</h1>

                    <div className="apl-card-text">
                        <h4 className="apl-card-heading2"  >Worried About Medical Expenses</h4>
                        <h4 className="apl-card-p">Avail 0% EMI instant medical <br /> loan for your surgery </h4>

                    </div>
                    <div> <button className="button" style={{ backgroundColor: "#FB8B4C" }}>Apply Now</button></div>

                </div>





            </div>
        </div>
    )
}
