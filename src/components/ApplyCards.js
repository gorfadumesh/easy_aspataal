import React from 'react'
import { Card, Button, CardGroup } from "react-bootstrap"
import apply_card1 from "../assets/images/apply_card1.png"
import Finance from "../assets/Plan A Surgery Section/Finance.png"
import Plan from "../assets/Plan A Surgery Section/Plan.png"

export default function ApplyCards() {
    return (
        <div className="apply-cards">

            <div className="cards">

                <div class="card">
                    <div><img src={Plan} alt="image" className="apl-card-img" /></div>
                    <div className="apl-card-text">  <h1 className="apl-card-heading">Plan a Surgery</h1>
                        <h4 className="apl-card-heading2"  >Looking for a treatment ?</h4>
                        <h4 className="apl-card-p">Find your surgery price and plan your treatment inyour nearest Hospital</h4>
                        <button className="button" style={{ backgroundColor: "#FB8B4C" }}>Search</button>
                    </div>

                </div>
                <div class="card">
                    <div><img src={Finance} alt="image" className="apl-card-img" /></div>
                    <div className="apl-card-text">  <h1 className="apl-card-heading">Finance Your Surgery</h1>
                        <h4 className="apl-card-heading2"  >Worried About Medical Expenses</h4>
                        <h4 className="apl-card-p">Find your surgery price<br />  and plan your treatment in<br /> your nearest Hospital</h4>
                        <button className="button" style={{ backgroundColor: "#FB8B4C" }}>Search</button>
                    </div>
                </div>





            </div>
        </div>
    )
}
