import React, {useEffect} from 'react';
import HeaderSocials from '../HeaderSocials/HeaderSocials';
// import NavBar from '../NavBar/NavBar';
import NavBarNew from '../NavBar/NavBarNew.jsx';
// import NavBarNewTemplate from '../NavBar/NavBarNewTemplate.jsx';
import doslunasNavLogo from '../../assets/images/logo/Dos_Lunas_Logo-Horizontal-2.svg';
import {Link} from 'react-router-dom';

import './Header.css';
import Search from '../Seach/Search.jsx';

const Header = () => {
    const onWindowScrollEvent = (e) => {
        const header = document.querySelector('.header-top-section');
        const scrollTop = window.scrollY;
        // scrollTop >= 40 ? header.classList.add('header-top-section-fixed') : header.classList.remove('header-top-section-fixed');
        scrollTop >= 40 ? header.classList.add('fixed') : header.classList.remove('fixed');
    };
    
    useEffect(() => {
        window.addEventListener('scroll', onWindowScrollEvent);

        return () => {
            window.removeEventListener('scroll', onWindowScrollEvent);
        };
    }, []);

    return(<div className='header-container'>
        <HeaderSocials></HeaderSocials>

        <div className='header-top-section app-default-padded'>
            <div className='header-top-logo'>
                <Link className='header-top-logo-image-link' to={'/'}><img src={doslunasNavLogo} className='header-top-logo-image' alt="loading..." /></Link>
            </div>
            {/* <NavBar></NavBar> */}
            <div className='navbar-section'>
                <NavBarNew></NavBarNew>
                {/* <NavBarNewTemplate></NavBarNewTemplate> */}
            </div>
            
            <div className='header-extras'>
                {/* <i className="fa-solid fa-magnifying-glass"></i> */}
                <Search></Search>
                <i className="fa-regular fa-circle-user"></i>

                <button className='btn-pick-location custom-button'>PICK LOCATION</button>
            </div>
        </div>
    </div>)
};

export default Header;