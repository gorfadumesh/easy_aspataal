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
                    <div><img src={Finance} alt="image" /></div>

                    <h1>Plan a Surgery</h1>
                    <p class="price">Looking for a treatment ?</p>
                    <p>Find your surgery price and plan your treatment in your nearest Hospital</p>
                    <button className="button" style={{ backgroundColor: "#FB8B4C" }}>Search</button>
                </div>
                <div class="card">
                    <div><img src={Plan} alt="image" /></div>
                    <h1>Finance Your Sergery</h1>
                    <p class="price">$19.99</p>
                    <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
                    <button className="button" style={{ backgroundColor: "#FB8B4C" }}>Search</button>
                </div>





            </div>
        </div>
    )
}
