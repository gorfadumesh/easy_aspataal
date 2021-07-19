import React from 'react'
import { Accordion } from "react-bootstrap"
import "./faq.css"
export default function Questions() {
    React.useEffect(() => {
        const items = document.querySelectorAll(".accordion button");

        function toggleAccordion() {
            const itemToggle = this.getAttribute('aria-expanded');

            for (var i = 0; i < items.length; i++) {
                items[i].setAttribute('aria-expanded', 'false');
            }

            if (itemToggle == 'false') {
                this.setAttribute('aria-expanded', 'true');
            }
        }

        items.forEach(item => item.addEventListener('click', toggleAccordion));
    })

    return (
        <div className="qustion">
            <h1 className="que-heading"> Frequently Asked Questions (FAQ)</h1>
            <div className="acordian">
                <div className="container">
                    {/* <h2>Frequently Asked Questions</h2> */}
                    <div className="accordion">
                        <div className="accordion-item">
                            <button id="accordion-button-1" aria-expanded="false"><span className="accordion-title">What is self check in?</span><span className="icon" aria-hidden="true"></span></button>
                            <div className="accordion-content">
                                <p>Upload your documents on our web counters just like you submit them on hospital counters. No need to stand in long queues for hours. We’ve now pioneered the process of web-checkin to hospitals with zero human touch. Why stand in a line when it can all be done online!</p>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <button id="accordion-button-2" aria-expanded="false"><span className="accordion-title">Does EasyAspataal help in finding the right hospital?</span><span className="icon" aria-hidden="true"></span></button>
                            <div className="accordion-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <button id="accordion-button-3" aria-expanded="false"><span className="accordion-title">What surgeries and treatments are treated under EasyAspataal?</span><span className="icon" aria-hidden="true"></span></button>
                            <div className="accordion-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <button id="accordion-button-4" aria-expanded="false"><span className="accordion-title">What is Digital Insurance?</span><span className="icon" aria-hidden="true"></span></button>
                            <div className="accordion-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <button id="accordion-button-5" aria-expanded="false"><span className="accordion-title">Can I consult with a doctor online?</span><span className="icon" aria-hidden="true"></span></button>
                            <div className="accordion-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <button id="accordion-button-5" aria-expanded="false"><span className="accordion-title">Does EasyAspataal provide a second opinion for any disease?</span><span className="icon" aria-hidden="true"></span></button>
                            <div className="accordion-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <button id="accordion-button-5" aria-expanded="false"><span className="accordion-title">How EasyAspataal takes care of patients on the day of the surgery?</span><span className="icon" aria-hidden="true"></span></button>
                            <div className="accordion-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}
