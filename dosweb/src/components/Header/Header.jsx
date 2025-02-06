import React, {useEffect} from 'react';
import HeaderSocials from '../HeaderSocials/HeaderSocials';
import NavBar from '../NavBar/NavBar';

import './Header.css';

const Header = () => {
    const onWindowScrollEvent = (e) => {
        const header = document.querySelector('.navbar-section');
        const scrollTop = window.scrollY;
        scrollTop >= 40 ? header.classList.add('navbar-section-fixed') : header.classList.remove('navbar-section-fixed');
    };
    
    useEffect(() => {
        window.addEventListener('scroll', onWindowScrollEvent);

        return () => {
            window.removeEventListener('scroll', onWindowScrollEvent);
        };
    }, []);

    return(<div className='header-container'>
        <HeaderSocials></HeaderSocials>

        <div className='navbar-section'>
            <NavBar></NavBar>
        </div>
    </div>)
};

export default Header;