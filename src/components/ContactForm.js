import React from 'react'

export default function ContactForm() {
    return (
        <div>
            <div class="form">

                <div class="input-container ic1">
                    <input id="firstname" class="input" type="text" placeholder="Full Name" />
                    <div class="cut"></div>
                </div>
                <div class="input-container ic2">
                    <input id="lastname" class="input" type="text" placeholder=" Mobile" />
                    <div class="cut"></div>
                </div>
                <div class="input-container ic2">
                    <input id="email" class="input" type="text" placeholder="City" />
                    <div class="cut cut-short"></div>
                </div>
                <div class="input-container ic2">
                    <input id="lastname" class="input" type="text" placeholder=" Surgery / Treatment" />
                    <div class="cut"></div>
                </div>
                <button type="text" class="submit" style={{ backgroundColor: "#FB8B4C" }}>Plan a Surgery</button>
                <button type="text" class="submit" style={{ backgroundColor: "#C4C4C4" }}>Avail Medical Finance</button>
            </div>



        </div>
    )
}
