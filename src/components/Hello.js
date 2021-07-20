import React from 'react'
import hello from "../assets/Say Hello Section/hello.png"
import ContactForm from './ContactForm'
import { Row, Container } from 'react-bootstrap'

export default function Hello() {
    return (
        <div className="say-hello">
            <div className="hello-inner">
                <div className="hello-container">
                    <div className="hello-image" ><img src={hello} alt="hello" className="hello-image" /></div>

                    <div className="hello-text">
                        <h1 className="title">Say <span style={{ color: "#FB8B4C" }} >hello!</span></h1>
                        <h2 className="title2">to your</h2>
                        <h1 className="title"> New  <span style={{ color: "#FB8B4C" }} >Care!</span></h1>
                        <h2 className="title2">team</h2>
                    </div>
                    <div >
                        <ContactForm />
                    </div>
                </div>
            </div>


        </div>
    )
}
