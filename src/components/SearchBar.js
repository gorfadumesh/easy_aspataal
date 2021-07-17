import React from 'react'
import { Container, FormControl, Button, Row, Col } from "react-bootstrap"

export default function SearchBar() {
    return (
        <div className="search-bar">
            {/* <h1>Search Bar</h1> */}
            <Container className="justify-content-md-center">
                {/* <Row className="justify-content-md-center"> */}

                <div className="search-bar-inner">

                    {/* <FormControl
                        type="search"
                        placeholder="Search"
                        // className="mr-2"
                        aria-label="Search"
                    />
                    <Button className="">Search</Button> */}
                    {/* <input></input>
                    <button>Search</button> */}
                    {/* </Row> */}
                    {/* <Row className="justify-content-md-center"> */}
                    <div className="primary-font">
                        <h2>How Can We Help You ?</h2>
                        <input className="search-input"></input>
                        <button className="button" style={{ backgroundColor: "#FB8B4C" }}>Search</button>
                    </div>

                    <div className="recent-search" >
                        <h6 className="primary-font">Recent Searches :</h6>  &emsp; <a className="link-font" href="#home"><h6>Lung Canecer ,</h6></a>  &emsp; <a className="link-font" href="#home"><h6>Angioscopy ,</h6></a>  &emsp; <a className="link-font" href="#home"><h6>Bypass Surgery</h6></a>
                    </div>


                </div>


                {/* </Row> */}
            </Container>
        </div >
    )
}
