import React from 'react'
import { Container, FormControl, Button, Row, Col } from "react-bootstrap"

export default function SearchBar() {
    return (
        <div className="search-bar">


            <div className="search-bar-inner">


                <div className="primary-font">
                    <h1 >How Can We Help You ?</h1>
                    <div className="search-bar2">
                        <input className="search-input" placeholder="Diagnosis, Type of Treatment" ></input>
                        <button className="search-button" style={{ backgroundColor: "#FB8B4C" }}>Search</button>
                    </div>
                </div>

                <div className="recent-search" >
                    <h6 style={{ color: "white" }} >Recent Searches :</h6>  &emsp; <a className="link-font" href="#home"><h6>Lung Canecer ,</h6></a>  &emsp; <a className="link-font" href="#home"><h6>Angioscopy ,</h6></a>  &emsp; <a className="link-font" href="#home"><h6>Bypass Surgery</h6></a>
                </div>


            </div>



        </div >
    )
}
