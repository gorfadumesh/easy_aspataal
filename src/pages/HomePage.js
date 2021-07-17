import React from 'react'
import NavbarHeader from "../components/Navbar"
import homeCarousel from "../components/Carousel"
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

export default function HomePage() {
    return (
        <div>
            <NavbarHeader />
            <homeCarousel />
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
