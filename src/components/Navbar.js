import React from 'react'
import Logo from '../components/GMCC.png'
function Navbar() {
    return (
        <div div className='topheaderandnav'>
            <div className="topHeader">
                <div className="logo">
                    <img src={Logo} alt="Gyan Mandir Logo" />
                </div>
                <div className="header">
                    <h1>Gyan Mandir Coaching Center Supna, Muzaffarpur</h1>
                    <h4>Best Institute for Students from 1st to 10th Grade.</h4>
                </div>
            </div>


            <div className='navbarContainer'>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="/Contact Us">Contact Us</a></li>
                        <li><a href="/More">More</a></li>
                    </ul>
                </nav>

            </div>
        </div>
    )
}

export default Navbar
