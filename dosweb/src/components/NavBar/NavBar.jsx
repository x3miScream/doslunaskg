import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import doslunasNavLogo from '../../assets/images/logo/Dos_Lunas_Logo-Horizontal-2.svg';

import './NavBar.css';

const NavBar = () => {
    const menuLinks = [
        {
            label: 'BODY CARE',
            path: '',
            isShowMenu: true
        },
        {
            label: 'FACE CARE',
            path: '',
            isShowMenu: true
        },
        {
            label: 'HAIR CARE',
            path: '',
            isShowMenu: true
        },
        {
            label: 'MY HOME SPRAY',
            path: '',
            isShowMenu: true
        },
        {
            label: 'MORE',
            path: '',
            isShowMenu: true
        }
    ];

    const [isClicked, setIsClicked] = useState(false);
    const [button, setButton] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    const closeMobileMenu = () => {
        setIsClicked(false);
    };

    const showButton = () => {
        if(window.innerWidth <= 960) 
        {
            setButton(false);
        }
        else
        {
            setButton(false);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    return (<div className='navbar app-default-padded'>
        <div className='navbar-logo'>
            <img src={doslunasNavLogo} className='navbar-logo-image' alt="loading..." />
        </div>

        <div className='navbar-menu-section'>
            <ul className={isClicked ? 'nav-menu active' : 'nav-menu'}>
                {menuLinks.map((item, index) => {return item.isShowMenu ? <li key={index} className='nav-item'><Link to={item.path} className='nav-links' onClick={closeMobileMenu}>{item.label}</Link></li> : ''})}
            </ul>
        </div>

        <div className='navbar-extras'>
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-regular fa-circle-user"></i>
            
            <div className="menu-icon" onClick={handleClick}>
                <i className={isClicked ? 'fas fa-times' : 'fas fa-bars'} />
            </div>

            <button className='custom-button'>PICK LOCATION</button>
        </div>
    </div>);
};

export default NavBar;