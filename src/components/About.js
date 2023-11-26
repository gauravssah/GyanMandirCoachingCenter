import React from 'react';
import img1 from '../components/IMG1.jpg'

function About() {
    return (
        <div className='aboutcontainer' id='about'>
            <h1>About Us</h1>

            <div className="aboutus">
                <div className="imgcontainer">
                    <img src={img1} alt="" />
                </div>

                <div className="tetxcontainer">
                    <p>Welcome to Gyan Mandir Coaching Center, an educational haven committed to shaping the future of students under the visionary leadership of our founder, Pawan Anjan. Established in Supna, Muzaffarpur, Bihar. Gyan Mandir is not just an institute, it's a community dedicated to academic excellence and holistic development.</p>

                    <button className='readmorebtn'>Read More</button>
                </div>


            </div>


        </div>
    )
}

export default About
