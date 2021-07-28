import React from 'react'
import portrait from "../assets/Speciality Page Asset/portrait.png"

export default function Opinion() {
    return (
        <div className="opinion">
            <p className="opinion-heading"> Get <span style={{ color: "#FB8B4C" }}>Second</span>  Opinion</p>
            <div className="opinion-body">
                <div>
                    <img src={portrait}></img>
                </div>
                <div className="opinion-form">
                    <input className="opinion-input" style={{ color: "grey" }} placeholder=" Full Name" />
                    <input className="opinion-input" style={{ color: "grey" }} placeholder=" Mobile" />
                    <button className="opnion-button" style={{ backgroundColor: "#FB8B4C" }}>Submit</button>
                </div>

            </div>
        </div >
    )
}
