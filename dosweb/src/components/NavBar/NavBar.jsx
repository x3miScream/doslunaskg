import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import doslunasNavLogo from '../../assets/images/logo/Dos_Lunas_Logo-Horizontal-2.svg';
import menuList from '../../assets/data/menuList.js';

import './NavBar.css';

const NavBar = () => {
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
                {menuList.map((item, index) => 
                {
                    return !item.isShowMenu ? '' : 
                    <li key={index} className='nav-item'>
                        <Link to={item.path} className='nav-links' onClick={closeMobileMenu}>{item.label} {item.subMenus.length < 1 ? '' : <i className="menu-toggle-icon fa-solid fa-angle-down"></i>}</Link>
                        {(!item.subMenus.length > 0 ? '' : 
                            <div className='nav-item-submenu-container'>
                                <div className="nav-item-submenu-content">
                                    {
                                        item.subMenus.map((subItem, subIndex) => {
                                            return <Link key={subIndex} className='nav-sub-links' to={subItem.path}>{subItem.label}</Link>
                                        })
                                    }
                                </div>
                            </div>
                        )}
                    </li>
                })}
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