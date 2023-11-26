import React from 'react';
import IMG1 from '../components/IMG1.jpg'
import IMG2 from '../components/IMG2.jpg'
import IMG3 from '../components/IMG3.jpg'
import IMG4 from '../components/IMG4.jpg'
import IMG5 from '../components/IMG5.jpg'
import IMG6 from '../components/IMG6.jpg'

function Carousel() {
    return (
        <div className="crousalcontainer" id='home'>
            <div className="imagescontainer">
                <img src={IMG1} alt="image" />
                <img src={IMG2} alt="image" />
                <img src={IMG3} alt="image" />
                <img src={IMG4} alt="image" />
                <img src={IMG5} alt="image" />
                <img src={IMG6} alt="image" />
            </div>

            <div className="shortDetails">
                <h1>Gyan Mandir Coaching Center</h1>
                <p>Discover excellence at Gyan Mandir, your go-to coaching center for grades 1-10. With a focus on academic brilliance and personalized guidance, we empower students to excel. Join us in cultivating a passion for learning and unlocking your full potential. Gyan Mandir Coaching Center—where success is a journey, not just a destination.</p>
            </div>
        </div>
    )
}

export default Carousel
