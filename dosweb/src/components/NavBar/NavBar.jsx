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

    const loadCategoriesMenu = async () => {
        
    };

    useEffect(() => {
        showButton();
    }, []);

    return (<div className='navbar app-default-padded'>
        <div className='navbar-logo'>
            <Link className='navbar-logo-image-link' to={'/'}><img src={doslunasNavLogo} className='navbar-logo-image' alt="loading..." /></Link>
        </div>

        <div className='navbar-menu-section'>
            <ul className={isClicked ? 'nav-menu active' : 'nav-menu'}>
                {menuList.slice(0,3).map((item, index) => 
                {
                    return !item.isShowMenu ? '' : <>
                    <li key={index} className='nav-item'>
                        <div className='nav-item-link-container'>
                            <Link to={item.path} className='nav-links' onClick={closeMobileMenu}>{item.label}</Link>
                            {item.subMenus.length < 1 ? '' : <button><i className="expand-menu-icon down menu-toggle-icon fa-solid fa-angle-down"></i></button>}
                        </div>


                            {(!item.subMenus.length > 0 ? '' : 
                                <ul className='nav-menu-l1'>
                                {
                                    item.subMenus.map((subItem, subIndex) => {
                                        return <li key={subIndex} className='nav-item-l1'>
                                            <div className='nav-item-link-l1-container'>
                                                <Link className='nav-links-l1' onClick={closeMobileMenu} to={subItem.path}>{subItem.label}</Link>
                                            </div>
                                            </li>
                                    })
                                }
                                </ul>
                            )}
                    </li>
                    </>
                })}
            </ul>
        </div>

        <div className='navbar-extras'>
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-regular fa-circle-user"></i>
            
            <div className="menu-icon" onClick={handleClick}>
                <i className={isClicked ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
                {/* <i class="fa-solid fa-xmark"></i> */}
                {/* <i class="fa-solid fa-bars"></i> */}
            </div>

            <button className='custom-button'>PICK LOCATION</button>
        </div>
    </div>);
};

export default NavBar;