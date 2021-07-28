import React from 'react'
import hospital from "../assets/Speciality Page Asset/hospital.png"
import image1 from "../assets/Hospital Search Asset/image1.png"
import iso from "../assets/Hospital Search Asset/iso.png"
import Filter from "../assets/Hospital Search Asset/Filter.png"




export default function HospitalListing() {
    return (
        <div className="hospital-listing">
            <div className="hospital-list">
                <div className="hospital-list-card">
                    <img src={image1} alt="Avatar" className="hospital-card-img" />
                    <div className="hospital-card-text">
                        <div className="hospital-card-header">
                            <div className="hospital-card-title" >Fortis <span style={{ color: "#5032d5" }}> Hospital</span></div>
                            <div className="hospital-card-footer-text " >
                                <p className="footer-font1" >+100</p> <p className="footer-font2">Patients Selected<br />this Hospital </p>
                            </div>
                        </div>
                        <p>Established in 2007, Hiranandani Hospital, Vashi – A Fortis network Hospital is an advanced tertiary care, multi-specialty hospital equipped with 149 beds and spread over an area of 1, 20,000 sq. ft. We possess wealth of medical </p>

                        <div className="hospital-card-header">
                            <img src={iso} alt="Avatar" /> <button className="hospital-footer-button">Read More</button></div>

                    </div>
                </div>
                <hr className="hospital-list-line" />
                <div className="hospital-list-card">
                    <img src={image1} alt="Avatar" className="hospital-card-img" />
                    <div className="hospital-card-text">
                        <div className="hospital-card-header">
                            <div className="hospital-card-title" >Fortis <span style={{ color: "#5032d5" }}> Hospital</span></div>
                            <div className="hospital-card-footer-text " >
                                <p className="footer-font1" >+100</p> <p className="footer-font2">Patients Selected<br />this Hospital </p>
                            </div>
                        </div>
                        <p>Established in 2007, Hiranandani Hospital, Vashi – A Fortis network Hospital is an advanced tertiary care, multi-specialty hospital equipped with 149 beds and spread over an area of 1, 20,000 sq. ft. We possess wealth of medical </p>

                        <div className="hospital-card-header">
                            <img src={iso} alt="Avatar" /> <button className="hospital-footer-button">Read More</button></div>

                    </div>
                </div>
                <hr className="hospital-list-line" />
                <div className="hospital-list-card">
                    <img src={image1} alt="Avatar" className="hospital-card-img" />
                    <div className="hospital-card-text">
                        <div className="hospital-card-header">
                            <div className="hospital-card-title" >Fortis <span style={{ color: "#5032d5" }}> Hospital</span></div>
                            <div className="hospital-card-footer-text " >
                                <p className="footer-font1" >+100</p> <p className="footer-font2">Patients Selected<br />this Hospital </p>
                            </div>
                        </div>
                        <p>Established in 2007, Hiranandani Hospital, Vashi – A Fortis network Hospital is an advanced tertiary care, multi-specialty hospital equipped with 149 beds and spread over an area of 1, 20,000 sq. ft. We possess wealth of medical </p>

                        <div className="hospital-card-header">
                            <img src={iso} alt="Avatar" /> <button className="hospital-footer-button">Read More</button></div>

                    </div>
                </div>
                <hr className="hospital-list-line" />
                <div className="hospital-list-card">
                    <img src={image1} alt="Avatar" className="hospital-card-img" />
                    <div className="hospital-card-text">
                        <div className="hospital-card-header">
                            <div className="hospital-card-title" >Fortis <span style={{ color: "#5032d5" }}> Hospital</span></div>
                            <div className="hospital-card-footer-text " >
                                <p className="footer-font1" >+100</p> <p className="footer-font2">Patients Selected<br />this Hospital </p>
                            </div>
                        </div>
                        <p>Established in 2007, Hiranandani Hospital, Vashi – A Fortis network Hospital is an advanced tertiary care, multi-specialty hospital equipped with 149 beds and spread over an area of 1, 20,000 sq. ft. We possess wealth of medical </p>

                        <div className="hospital-card-header">
                            <img src={iso} alt="Avatar" /> <button className="hospital-footer-button">Read More</button></div>

                    </div>
                </div>

            </div>

            <div>
                <div className="hospital-list-filter">
                    <p className="filter-title"> <img src={Filter} className="filter-img" />Filter</p>
                    <hr />
                    <p className="filter-font">SORT BY</p>
                    <p className="filter-list-font">  <input type="checkbox" ></input> Most Recommended</p>
                    <p className="filter-list-font">  <input type="checkbox" ></input> Low in Price</p>
                    <p className="filter-list-font">  <input type="checkbox" ></input> High in Price</p>
                    <p className="filter-list-font">  <input type="checkbox" ></input> ISO Certified</p>
                    <p className="filter-list-font">  <input type="checkbox" ></input> Highest Rated Hospitals</p>
                </div>
            </div>
        </div>
    )
}
