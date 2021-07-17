import React from 'react'
import Loan from "../assets/Why Choose Us/Loan.png"
import EasyAssets1 from "../assets/Why Choose Us/EasyAssets1.png"
import EasyAssets2 from "../assets/Why Choose Us/EasyAssets2.png"
import EasyAssets3 from "../assets/Why Choose Us/EasyAssets3.png"


export default function Why() {
    return (
        <div className="why">
            <h1>WHY CHOOSE  Easy<span>Aspataal</span></h1>
            <hr className="line" />
            <h4>"Bulding a Better India For Patient"</h4>

            <div>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
                <div class="container">
                    <div class="section ourTeam">
                        {/* <header class="text-center">
                            <h2>Meet <strong>Our Team</strong></h2>
                        </header> */}
                        <div class="row">
                            <div class="col-xs-6 col-sm-4 col-md-3 i">
                                <div class="c text-center">
                                    <div class="wrap">
                                        <img src={Loan} alt="#" width="270" height="270" class="img-responsive" />
                                        <div class="info">
                                            <h4 class="name">Easy Loan</h4>
                                            {/* <h4 class="position">Chief Executive Officer</h4> */}
                                        </div>
                                    </div>
                                    <div class="more">
                                        <p> The only platform for all your surgery care decisions, information and treatment <br /> Search, book and get connected with the quality care around you.</p>
                                        <div class="socials">
                                            <button className="button" style={{ backgroundColor: "#FB8B4C" }}>Apply</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-6 col-sm-4 col-md-3 i">
                                <div class="c text-center">
                                    <div class="wrap">
                                        <img src={EasyAssets2} alt="#" width="270" height="270" class="img-responsive" />
                                        <div class="info">
                                            <h4 class="name">Online Payment</h4>
                                            {/* <h4 class="position">Chief Executive Officer</h4> */}
                                        </div>
                                    </div>
                                    <div class="more">
                                        <p> The only platform for all your surgery care decisions, information and treatment <br /> Search, book and get connected with the quality care around you.</p>
                                        <div class="socials">
                                            <button className="button" style={{ backgroundColor: "#FB8B4C" }}>Apply</button>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-xs-6 col-sm-4 col-md-3 i">
                                <div class="c text-center">
                                    <div class="wrap">
                                        <img src={EasyAssets1} alt="#" width="270" height="270" class="img-responsive" />
                                        <div class="info">
                                            <h4 class="name">Insurance</h4>
                                            {/* <h4 class="position">Chief Executive Officer</h4> */}
                                        </div>
                                    </div>
                                    <div class="more">
                                        <p> The only platform for all your surgery care decisions, information and treatment <br /> Search, book and get connected with the quality care around you.</p>
                                        <div class="socials">
                                            <button className="button" style={{ backgroundColor: "#FB8B4C" }}>Apply</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-6 col-sm-4 col-md-3 i">
                                <div class="c text-center">
                                    <div class="wrap">
                                        <img src={EasyAssets3} alt="#" width="270" height="270" class="img-responsive" />
                                        <div class="info">
                                            <h4 class="name">Self Checking</h4>
                                            {/* <h4 class="position">Chief Executive Officer</h4> */}
                                        </div>
                                    </div>
                                    <div class="more">
                                        <p> The only platform for all your surgery care decisions, information and treatment <br /> Search, book and get connected with the quality care around you.</p>
                                        <div class="socials">
                                            <button className="button" style={{ backgroundColor: "#FB8B4C" }}>Apply</button>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
