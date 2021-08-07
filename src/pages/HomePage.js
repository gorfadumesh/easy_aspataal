import React from 'react'
import NavbarHeader from "../components/Navbar"
import SearchBar from "../components/SearchBar"
import ApplyCards from "../components/ApplyCards"
import Surgeries from "../components/Surgeries"
import Why from "../components/Why"
import Process from "../components/Process"
import AboutUs from "../components/AboutUs"
import Hello from "../components/Hello"
import Questions from "../components/Questions"
import Speciality from "../components/Speciality"
import Conversation from "../components/Conversation"
import News from "../components/News"
import Footer from "../components/Footer"
import NavbarOne from "../components/NavbarOne"
import Carousel from "../components/Carousel"

export default function HomePage() {
    return (
        <div>
            <NavbarOne />
            <NavbarHeader />
            <Carousel />
            <SearchBar />
            <ApplyCards />
            <Surgeries />
            <Why />
            <Process />
            <AboutUs />
            <Hello />
            <Questions />
            <Speciality />
            <Conversation />
            <News />
            <Footer />
        </div>
    )
}
