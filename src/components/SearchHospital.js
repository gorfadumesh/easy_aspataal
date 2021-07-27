import React from 'react'
import { Container, FormControl, Button, Row, Col } from "react-bootstrap"

export default function SearchHospital() {
    return (
        <div className="search-bar">


            <div className="search-bar-inner">


                <div className="primary-font">
                    <h1 >How Can We Help You ?</h1>
                    <div className="search-bar2">
                        <input className="search-hospitals-input" placeholder="Diagnosis, Type of Treatment" ></input>
                        <select className="serarch-input-select" style={{ color: "grey" }}  >
                            <option value="" disabled selected hidden>Select the City</option>
                            <option>Junagadh</option>
                            <option>Junagadh</option>
                            <option>Junagadh</option>
                            <option>Junagadh</option>
                        </select>
                        <button className="search-button" style={{ backgroundColor: "#FB8B4C" }}>Search</button>
                    </div>
                </div>

                <div className="recent-search" >
                    <span style={{ color: "white" }} >Recent Searches :</span>  &emsp; <a className="link-font" href="#home">Lung Cancer </a>  &emsp; <a className="link-font" href="#home">Angioscopy </a>  &emsp; <a className="link-font" href="#home">Bypass Surgery</a>
                </div>


            </div>



        </div >
    )
}
