import React from 'react'
import { Container, FormControl, Button, Row, Col } from "react-bootstrap"

export default function SearchBar() {
    return (
        <div className="search-bar">


            <div className="search-bar-inner">


                <div className="primary-font">
                    <h1 >How Can We Help You ?</h1>
                    <div>
                        <div className="search-bar2">
                            <input className="search-input" placeholder="Diagnosis, Type of Treatment" ></input>
                            <button className="search-button" style={{ backgroundColor: "#FB8B4C" }}>Search</button>
                        </div>
                        <div className="search-bar2" >
                            <span style={{ color: "white" }} >Recent Searches :</span>  &emsp; <a className="link-font" href="#home">Lung Cancer,</a>&emsp; <a className="link-font" href="#home">Angioscopy,</a>&emsp; <a className="link-font" href="#home">Bypass Surgery</a>
                        </div>
                    </div>
                </div>




            </div>



        </div >
    )
}
