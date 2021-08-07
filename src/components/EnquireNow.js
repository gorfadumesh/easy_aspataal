import React from 'react'

export default function EnquireNow() {
    return (
        <div className="enquire-now">
            <div className="enquire-form">
                <div class="enquire-now-form">
                    <p>Enquire Now</p>
                    <div class="input-container ic1">
                        <input id="firstname" class="input" type="text" placeholder="Full Name" />
                    </div>
                    <div class="input-container ic2">
                        <input id="lastname" class="input" type="text" placeholder=" Mobile" />
                    </div>
                    <div class="input-container ic2">
                        <input id="email" class="input" type="text" placeholder="City" />
                    </div>
                    <div class="input-container ic2">
                        <input id="lastname" class="input" type="text" placeholder=" Surgery / Treatment" />
                    </div>
                    <button type="text" class="submit" style={{ backgroundColor: "#FB8B4C" }}>Submit</button>

                </div>

            </div>

            <div className="inquire-text">
                <p className="inquire-font">We <span>lend</span>  you our <span>hand</span>,<br /> when other <span>finance companies</span>  leave you off.</p>
                <p className="inquire-font2">Finance companies reject almost 50% of underbankedand credit challenged loan applications. Which also means turning away
                    genuine patients in need of assistance. We’re not a finance company, but we’re here to help!</p>
            </div>
        </div>
    )
}
