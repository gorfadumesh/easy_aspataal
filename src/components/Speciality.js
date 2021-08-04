import React, { useState } from 'react'
import { Collapse } from "react-bootstrap"


export default function Speciality() {
    const [open, setOpen] = useState(false);

    return (
        <div className="speciality">
            <h1 className="about-heading"> Our Specialities</h1>
            <div className="speciality-container">
                <div className="speciality-desktop">
                    <div className="speciality-list">
                        <div >
                            <a  >  <h3 className="spec-font" style={{ color: "#0C065E" }}>Cardiology </h3> </a>
                            <a href="./speciality" >  <h5>Angiography(Day Care)</h5> </a>
                            <a href="./speciality" >  <h5>Angiography With Angioplasty</h5> </a>
                            <a href="./speciality" >  <h5>Temporary / Permanent Pacemaker Implantation</h5> </a>


                        </div>
                        <div>
                            <a  >  <h3 className="spec-font">Vascular Surgery</h3> </a>
                            <a href="./speciality">  <h5> Varicose Veins(surgical) / Laser</h5> </a>


                        </div>

                        <div>
                            <a  >  <h3 className="spec-font">OBS & GYNE</h3> </a>
                            <a href="./speciality">  <h5> Lap Hysterectomy (Abdominal/Vaginal)</h5> </a>
                            <a href="./speciality">  <h5>Dilatation & Curettage (D&C)</h5> </a>
                            <a href="./speciality">  <h5>IVF</h5> </a>
                        </div>
                        <div>
                            <a  >  <h3 className="spec-font">Ophthalmology </h3> </a>
                            <a href="./speciality">  <h5> Cataract - Phaco / MICS</h5> </a>
                            <a href="./speciality">  <h5> unifocal/Multifocal</h5> </a>
                            <a href="./speciality">  <h5>Vitrectomy</h5> </a>
                            <a href="./speciality">  <h5>Glaucoma</h5> </a>

                        </div>


                    </div>
                    <div className="speciality-list">
                        <div >
                            <a  >  <h3 className="spec-font">Gen. Surgery</h3> </a>
                            <a href="./speciality" >  <h5>Haemorrhoidectomy</h5> </a>
                            <a href="./speciality">  <h5> Fistula repair</h5> </a>
                            <a href="./speciality">  <h5>Fissurectomy</h5> </a>
                            <a href="./speciality">  <h5>Appendectomy (OPEN) / (LAP)</h5> </a>
                            <a href="./speciality">  <h5>Cholecystectomy (OPEN)/ (LAP)</h5> </a>
                            <a href="./speciality">  <h5>Inguinal Herniorraphy / Hernioplasty</h5> </a>
                            <a href="./speciality">  <h5>Umbilical Herniorraphy / Hernioplasty</h5> </a>
                            <a href="./speciality">  <h5>Incisional Herniorraphy / Hernioplasty</h5> </a>
                            <a href="./speciality">  <h5>Circumcision</h5> </a>
                            <a href="./speciality">  <h5>Breast Lumpectomy</h5> </a>
                            <a href="./speciality">  <h5> Hydrocele, Normal / Forcep Delivery</h5> </a>


                        </div>
                        <div>
                            <a  >  <h3 className="spec-font">Orthopaedics </h3> </a>
                            <a href="./speciality">  <h5>Total Knee Replacement (Unilateral)/ (Bilateral)</h5> </a>
                            <a href="./speciality">  <h5> Hip Replacement (Unilateral) / (Bilateral)</h5> </a>
                            <a href="./speciality">  <h5> Arthroscopic Surgery knee ( Other Than Acl) / Meniscectomy</h5> </a>
                            <a href="./speciality">  <h5>ACL / MCL Reconstruction</h5> </a>
                            <a href="./speciality">  <h5>Laminectomy/Discectomy</h5> </a>
                            <a href="./speciality">  <h5>Carpal Tunnel Release</h5> </a>
                            <a href="./speciality">  <h5>Close/ open Reduction of Fracture of Limbs and POP</h5> </a>

                        </div>
                        <div>
                            <a  >  <h3 className="spec-font">Urology & Nephrology</h3> </a>
                            <a href="./speciality">  <h5>Pcnl- Unilateral / Bilateral</h5> </a>
                            <a href="./speciality">  <h5>TURP (HOLEP)</h5> </a>
                            <a href="./speciality">  <h5>Cystoscopy Urs With Dj Stenting (Unilateral)</h5> </a>

                        </div>
                        <div>
                            <a  >  <h3 className="spec-font" style={{ color: "#0C065E" }}>E.N.T</h3> </a>
                            <a href="./speciality" >  <h5>Tonsillectomy / Adenotonsillectomy</h5> </a>
                            <a href="./speciality">  <h5>Tympanoplasty</h5> </a>
                            <a href="./speciality">  <h5>Septoplasty + Turbinoplasty / Conchoplasty</h5> </a>
                            <a href="./speciality">  <h5>Nasal Polyps/ Sinusitis (Fess)</h5> </a>
                            <a href="./speciality">  <h5>Cortical Mastoidectomy With Myringoplasty</h5> </a>
                        </div>
                    </div>

                </div>
                <div className="speciality-mobile">
                    <div className="speciality-container">

                        <div className="speciality-list">
                            <div >
                                <a  >  <h3 className="spec-font" style={{ color: "#0C065E" }}>Cardiology </h3> </a>
                                <a href="./speciality" >  <h5>Angiography(Day Care)</h5> </a>
                                <a href="./speciality" >  <h5>Angiography With Angioplasty</h5> </a>
                                <a href="./speciality" >  <h5>Temporary / Permanent Pacemaker Implantation</h5> </a>


                            </div>
                            <div>
                                <a  >  <h3 className="spec-font">Vascular Surgery</h3> </a>
                                <a href="./speciality">  <h5> Varicose Veins(surgical) / Laser</h5> </a>


                            </div>
                            {!open ? <p className="see-more-btn" onClick={() => setOpen(!open)}
                                aria-controls="example-collapse-text"
                                aria-expanded={open}>
                                See More
                            </p> : ""}

                            <Collapse in={open}>
                                <div id="example-collapse-text">


                                    <div>
                                        <a  >  <h3 className="spec-font">OBS & GYNE</h3> </a>
                                        <a href="./speciality">  <h5> Lap Hysterectomy (Abdominal/Vaginal)</h5> </a>
                                        <a href="./speciality">  <h5>Dilatation & Curettage (D&C)</h5> </a>
                                        <a href="./speciality">  <h5>IVF</h5> </a>
                                    </div>
                                    <div>
                                        <a  >  <h3 className="spec-font">Ophthalmology </h3> </a>
                                        <a href="./speciality">  <h5> Cataract - Phaco / MICS</h5> </a>
                                        <a href="./speciality">  <h5> unifocal/Multifocal</h5> </a>
                                        <a href="./speciality">  <h5>Vitrectomy</h5> </a>
                                        <a href="./speciality">  <h5>Glaucoma</h5> </a>

                                    </div>



                                    <div>
                                        <a  >  <h3 className="spec-font">Gen. Surgery</h3> </a>
                                        <a href="./speciality" >  <h5>Haemorrhoidectomy</h5> </a>
                                        <a href="./speciality">  <h5> Fistula repair</h5> </a>
                                        <a href="./speciality">  <h5>Fissurectomy</h5> </a>
                                        <a href="./speciality">  <h5>Appendectomy (OPEN) / (LAP)</h5> </a>
                                        <a href="./speciality">  <h5>Cholecystectomy (OPEN)/ (LAP)</h5> </a>
                                        <a href="./speciality">  <h5>Inguinal Herniorraphy / Hernioplasty</h5> </a>
                                        <a href="./speciality">  <h5>Umbilical Herniorraphy / Hernioplasty</h5> </a>
                                        <a href="./speciality">  <h5>Incisional Herniorraphy / Hernioplasty</h5> </a>
                                        <a href="./speciality">  <h5>Circumcision</h5> </a>
                                        <a href="./speciality">  <h5>Breast Lumpectomy</h5> </a>
                                        <a href="./speciality">  <h5> Hydrocele, Normal / Forcep Delivery</h5> </a>


                                    </div>
                                    <div>
                                        <a  >  <h3 className="spec-font">Orthopaedics </h3> </a>
                                        <a href="./speciality">  <h5>Total Knee Replacement (Unilateral)/ (Bilateral)</h5> </a>
                                        <a href="./speciality">  <h5> Hip Replacement (Unilateral) / (Bilateral)</h5> </a>
                                        <a href="./speciality">  <h5> Arthroscopic Surgery knee ( Other Than Acl) / Meniscectomy</h5> </a>
                                        <a href="./speciality">  <h5>ACL / MCL Reconstruction</h5> </a>
                                        <a href="./speciality">  <h5>Laminectomy/Discectomy</h5> </a>
                                        <a href="./speciality">  <h5>Carpal Tunnel Release</h5> </a>
                                        <a href="./speciality">  <h5>Close/ open Reduction of Fracture of Limbs and POP</h5> </a>

                                    </div>
                                    <div>
                                        <a  >  <h3 className="spec-font">Urology & Nephrology</h3> </a>
                                        <a href="./speciality">  <h5>Pcnl- Unilateral / Bilateral</h5> </a>
                                        <a href="./speciality">  <h5>TURP (HOLEP)</h5> </a>
                                        <a href="./speciality">  <h5>Cystoscopy Urs With Dj Stenting (Unilateral)</h5> </a>

                                    </div>
                                    <div>
                                        <a  >  <h3 className="spec-font" style={{ color: "#0C065E" }}>E.N.T</h3> </a>
                                        <a href="./speciality" >  <h5>Tonsillectomy / Adenotonsillectomy</h5> </a>
                                        <a href="./speciality">  <h5>Tympanoplasty</h5> </a>
                                        <a href="./speciality">  <h5>Septoplasty + Turbinoplasty / Conchoplasty</h5> </a>
                                        <a href="./speciality">  <h5>Nasal Polyps/ Sinusitis (Fess)</h5> </a>
                                        <a href="./speciality">  <h5>Cortical Mastoidectomy With Myringoplasty</h5> </a>
                                    </div>

                                </div>

                            </Collapse>

                            {/* {open ? <button onClick={() => setOpen(!open)}
                                aria-controls="example-collapse-text"
                                aria-expanded={open}>
                                See Less
                            </button> : ""} */}
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}
