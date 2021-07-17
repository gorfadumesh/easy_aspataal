import React from 'react'

export default function Conversation() {
    return (
        <div className="conversation">
            <h1 className="about-heading">Start the Conversation</h1>
            <div>
                <select className="conver-input-select" style={{ color: "grey" }}  >
                    <option value="" disabled selected hidden>Select the City</option>
                    <option>Junagadh</option>
                    <option>Junagadh</option>
                    <option>Junagadh</option>
                    <option>Junagadh</option>
                </select>
                <input className="conver-input" style={{ color: "grey" }} placeholder=" Enter Your Mobile" />


                <button className="conv-button" style={{ backgroundColor: "#FB8B4C" }}>Plan a Surgery</button></div>

        </div>
    )
}
