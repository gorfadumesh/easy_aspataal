import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'
export default function Treatment() {
    return (
        <div className="treatment">
            <p className="que-heading"> Treatment</p>
            <hr className="line" />

            <div className="treatment-tab">
                <Tabs defaultActiveKey="Pysiotheraphy" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="Pysiotheraphy" title="Pysiotheraphy" >
                        <p>Physiotherapy is treatment to restore, maintain, and make the most of a patient's mobility, function, and well-being.
                            Physiotherapy helps through physical rehabilitation, injury prevention, and health and fitness. Physiotherapists get you involved in your own recovery.</p>
                    </Tab>
                    <Tab eventKey="Diet" title="Diet and Fitness">
                        <p>Physiotherapy is treatment to restore, maintain, and make the most of a patient's mobility, function, and well-being.
                            Physiotherapy helps through physical rehabilitation, injury prevention, and health and fitness. Physiotherapists get you involved in your own recovery.</p>
                    </Tab>
                    <Tab eventKey="Home" title="Home Remedies and Ayurvedic" >
                        <p>Physiotherapy is treatment to restore, maintain, and make the most of a patient's mobility, function, and well-being.
                            Physiotherapy helps through physical rehabilitation, injury prevention, and health and fitness. Physiotherapists get you involved in your own recovery.</p>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}
