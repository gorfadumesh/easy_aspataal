import React from 'react'
import { Nav, Carousel, Button, Navbar, Dropdown, DropdownButton, Container, NavDropdown } from 'react-bootstrap';
import { BsList } from "react-icons/bs";
import Logo from "../assets/Logo/Logo.png"

export default function NavbarOne() {
    return (
        <div>
            <div >
                <div className="nav-one">



                    <div href="#home">

                        <img className="logo" src={Logo} alt="logo" />
                    </div>
                    <div className="nav-menu" >

                        <Nav.Link href="#home"><h5 style={{ color: "#0C065E" }} className="nav-text">Home</h5></Nav.Link>
                        &emsp;

                        <Nav.Link href="#features"><h5 className="nav-text">For Hospital</h5></Nav.Link>
                        &emsp;

                        <Nav.Link href="#pricing"><h5 className="nav-text">For Corporate</h5></Nav.Link>
                    </div>
                    <div> <button style={{ backgroundColor: "#0C065E" }} className="button">Book Now</button>
                        <button style={{ backgroundColor: "#5032D5" }} className="button">Login</button>
                        <BsList color="#5032D5" size="50px" />
                    </div>

                </div>
            </div>
        </div>
    )
}
