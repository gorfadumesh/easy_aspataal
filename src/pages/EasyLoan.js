import React from 'react'
import NavbarOne from "../components/NavbarOne"
import Navbar from "../components/Navbar"
import EasyLoanBanner from "../components/EasyLoanBanner"
import EnquireNow from "../components/EnquireNow"
import WhyEasyLoan from "../components/WhyEasyLoan"
import HowEasyLoan from "../components/HowEasyLoan"
import WhatsCovered from "../components/WhatsCovered"
import HowToClaim from "../components/HowToClaim"
import Questions from "../components/Questions"
import Speciality from "../components/Speciality"
import Conversation from "../components/Conversation"
import News from "../components/News"
import Footer from "../components/Footer"

export default function EasyLoan() {
    return (
        <div>
            <NavbarOne />
            <Navbar />
            <EasyLoanBanner />
            <EnquireNow />
            <WhyEasyLoan />
            <HowEasyLoan />
            <WhatsCovered />
            <HowToClaim />
            <Questions />
            <Speciality />
            <Conversation />
            <News />
            <Footer />
        </div>
    )
}
