import React from 'react'
import NavbarOne from "../components/NavbarOne"
import SearchHospital from "../components/SearchHospital"
import HospitalListing from "../components/HospitalListing"
import BestHospital from "../components/BestHospital"
import Footer from "../components/Footer"

export default function HospitalList() {
    return (
        <div>
            <NavbarOne />
            <SearchHospital />
            <HospitalListing />
            <BestHospital />
            <Footer />

        </div>
    )
}
