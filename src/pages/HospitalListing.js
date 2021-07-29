import React from 'react'
import NavbarOne from '../components/NavbarOne'
import HospitalBanner from "../components/HospitalBanner"
import OfferYou from "../components/OfferYou"
import HospitalInfo from "../components/HospitalInfo"
import Surgeries from "../components/Surgeries"
import Process from "../components/Process"
import BestHospital from "../components/BestHospital"
import Questions from "../components/Questions"
import Speciality from "../components/Speciality"
import Conversation from "../components/Conversation"
import News from "../components/News"
import Footer from "../components/Footer"

export default function HospitalListing() {
    return (
        <div>
            <NavbarOne />
            <HospitalBanner />
            <OfferYou />
            <HospitalInfo />
            <Surgeries />
            <Process />
            <BestHospital />
            <Questions />
            <Speciality />
            <Conversation />
            <News />
            <Footer />

        </div>
    )
}
