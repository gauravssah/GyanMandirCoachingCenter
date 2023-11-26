import React from 'react';
import Logo from '../components/GMCC.png'

function Header() {
    return (

        <div className="topHeader">
            <div className="logo">
                <img src={Logo} alt="Gyan Mandir Logo" />
            </div>
            <div className="header">
                <h1>Gyan Mandir Coaching Center Supna, Muzaffarpur</h1>
                <h4>Best Institute for Students from 1st to 10th Grade.</h4>
            </div>
        </div>


    )
}

export default Header;
