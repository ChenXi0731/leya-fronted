import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';

function Header({ setActivePage }) {
    return (
        <>
            <header className="header">
                <div className="logo" onClick={() => setActivePage('home-page')}>
                    <img src="./src/AP/app-components/assets/images/LeyaLogo.png" alt="樂壓Logo" className="logo-img" />
                </div>
                <div className='header-title'>
                    樂壓Talks
                </div>
                <div className="user-icon" onClick={() => setActivePage('user-page')}>
                    <FontAwesomeIcon icon={faCircleUser} />
                </div>
            </header>
        </>
    );
};

export default Header;
