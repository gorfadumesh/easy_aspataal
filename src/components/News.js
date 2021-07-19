import React from 'react'
import Image4 from "../assets/Latest News Section/Image4.png"
import Image5 from "../assets/Latest News Section/Image5.png"

export default function News() {
    return (
        <div className="latest-news">
            <h1 className="about-heading">Latest News</h1>
            <div className="news-cards">
                <div class="news-card">
                    <img src={Image4} alt="Avatar" />
                    <div class="card-text">
                        <p className="grey-font">July 13th, 2021</p>
                        <h4 className="black-font">How EasyAspataal takes care of patients on the day of surgery?</h4>
                        <p className="grey-font">1 hour ago</p>
                        <p className="read-more" style={{ color: "#FB8B4C" }}> Read More</p>
                    </div>
                </div>
                <div class="news-card">
                    <img src={Image5} alt="Avatar" />
                    <div class="card-text">
                        <p className="grey-font">July 13th, 2021</p>
                        <h4 className="black-font">How EasyAspataal takes care of patients on the day of surgery?</h4>
                        <p className="grey-font">1 hour ago</p>
                        <p className="read-more" style={{ color: "#FB8B4C" }}> Read More</p>
                    </div>
                </div>

            </div>

            <button className="news-btn" style={{ backgroundColor: "#FB8B4C" }}>More News</button>
        </div>
    )
}
