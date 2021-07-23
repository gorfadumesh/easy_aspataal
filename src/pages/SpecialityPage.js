import React from 'react'
import NavbarOne from "../components/NavbarOne"
import Banner from "../components/Banner"
import BestHospital from "../components/BestHospital"
import CommonSymptoms from "../components/CommonSymptoms"
import Treatment from "../components/Treatment"
import Opinion from "../components/Opinion"
import Process from "../components/Process"
import Questions from "../components/Questions"
import Speciality from "../components/Speciality"
import Conversation from "../components/Conversation"
import News from "../components/News"
import Footer from "../components/Footer"


export default function SpecialityPage() {
    return (
        <div>
            <NavbarOne />
            <Banner />
            <BestHospital />
            <CommonSymptoms />
            <Treatment />
            <Opinion />
            <Process />
            <Questions />
            <Speciality />
            <Conversation />
            <News />
            <Footer />
        </div>
    )
}
