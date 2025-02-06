import React from 'react';
import HeaderSocials from '../HeaderSocials/HeaderSocials';
import NavBar from '../NavBar/NavBar';

import './Header.css';

const Header = () => {
    return(<div className='header-container'>
        <HeaderSocials></HeaderSocials>

        <div className='app-default-padded'>
            <NavBar></NavBar>
        </div>
    </div>)
};

export default Header;