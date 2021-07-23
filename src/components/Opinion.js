import React from 'react'

export default function Opinion() {
    return (
        <div className="opinion">
            <p className="opinion-heading"> Get <span style={{ color: "#FB8B4C" }}>Second</span>  Opinion</p>
            <div className="opinion-body">
                <input className="opinion-input" style={{ color: "grey" }} placeholder=" Full Name" />
                <input className="opinion-input" style={{ color: "grey" }} placeholder=" Mobile" />
                <button className="opnion-button" style={{ backgroundColor: "#FB8B4C" }}>Submit</button>
            </div>
        </div >
    )
}
