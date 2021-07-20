import React from 'react'
import { Nav, Carousel, Button, Navbar, Dropdown, DropdownButton, Container, NavDropdown } from 'react-bootstrap';
import { BsList } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../assets/Logo/Logo.png"
import Slider1 from "../assets/Carousel Section/Slider1.jpg"
import Slider2 from "../assets/Carousel Section/Slider2.jpg"

export default function NavbarHeader() {
    return (
        <div>
            <>
                <Navbar bg="white" expand="xxl " className="nav">
                    <Container>



                        <Navbar.Brand href="#home">

                            <img className="logo" src={Logo} alt="logo" />
                        </Navbar.Brand>
                        <Nav >

                            <Nav.Link href="#home"><h6>Home</h6></Nav.Link>
                            &emsp;

                            <Nav.Link href="#features"><h6>For Hospital</h6></Nav.Link>
                            &emsp;

                            <Nav.Link href="#pricing"><h6>For Corporate</h6></Nav.Link>
                        </Nav>
                        <Nav> <button style={{ backgroundColor: "#0C065E" }} className="button">Book Now</button>
                            <button style={{ backgroundColor: "#5032D5" }} className="button">Login</button>
                            <BsList color="#5032D5" size="50px" />
                        </Nav>

                    </Container>
                </Navbar>
                {/* <br /> */}
                <Navbar className="navbar" variant="dark">
                    <Container>


                        <Nav className="me-auto">

                            <NavDropdown
                                id="nav-dropdown-basic-example"
                                title="Eyes"
                                menuVariant="light"
                                className="nav-items"
                            >
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                id="nav-dropdown-basic-example"
                                title="Maternity"
                                menuVariant="light"
                            >
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                id="nav-dropdown-basic-example"
                                title="Nose"
                                menuVariant="light"
                            >
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                id="nav-dropdown-basic-example"
                                title="Knee"
                                menuVariant="light"
                            >
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                id="nav-dropdown-basic-example"
                                title="General Surgery"
                                menuVariant="light"
                            >
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                id="nav-dropdown-basic-example"
                                title=" Woman's Care"
                                menuVariant="light"
                            >
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>


                        </Nav>
                    </Container>
                </Navbar>

            </>
            <div className="carousel">

                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Slider1}
                            alt="First slide"
                        />
                        {/* <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Slider2}
                            alt="Second slide"
                        />

                        {/* <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>

                </Carousel>
            </div>

        </div >
    )
}
