import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './NavBarNew.css';

// import menuList from '../../assets/data/menuList.js';
import menuList from '../../assets/data/menuList_ru.js';

const NavBarNew = () => {
    const navigate = useNavigate();
    
    const [isResponsiveClicked, setIsResponsiveClicked] = useState(false);

    const closeMobileMenu = () => {
        setIsResponsiveClicked(false);
    };

    const onDropDownClick = async (e) => {
        closeMobileMenu();
        navigate(e.target.getAttribute('to'));
    };

    const onResponsiveButtonClick = async (e) => {
        setIsResponsiveClicked(!isResponsiveClicked);
    };

    const onDropDownExpandClick = async (e) => {
        if(!e.target.parentElement.parentElement.classList.contains('active'))
        {
            e.target.parentElement.parentElement.classList.add('active');
        }
        else{
            e.target.parentElement.parentElement.classList.remove('active');
        }
    };

    return(<>
            <div className={isResponsiveClicked ? 'topnav responsive' : 'topnav'} id="myTopnav">

            {menuList.map((menu, menuIndex) => {
                return <>
                    {(menu.subMenus == undefined || menu.subMenus.length == 0) ? 
                        <Link onClick={closeMobileMenu} key={menuIndex} index={menuIndex} to={menu.path}>{menu.label}</Link> : <div key={menuIndex} index={menuIndex} className="subnav">
                            <button className="subnavbtn">
                                <span to={menu.path} onClick={onDropDownClick}>{menu.label}</span>
                                <i onClick={onDropDownExpandClick} className="subnav-icon-expand-down fa-solid fa-angle-down"></i>
                                <i onClick={onDropDownExpandClick} className="subnav-icon-collapse-up fa-solid fa-angle-up"></i>
                            </button>
                            <div className="subnav-content">
                                {menu.subMenus.map((subMenu, subMenuIndex) => { return <>
                                    {(subMenu.subMenus == undefined || subMenu.subMenus.length == 0) ?
                                        <Link onClick={closeMobileMenu} key={subMenuIndex} index={subMenuIndex} to={subMenu.path}>{subMenu.label}</Link> : <div key={subMenuIndex} index={subMenuIndex} className="subnav inner-subnav l1">
                                            <button className="subnavbtn">
                                                <span to={subMenu.path} onClick={onDropDownClick}>{subMenu.label}</span>
                                                <i onClick={onDropDownExpandClick} className="subnav-icon-expand-right fa-solid fa-angle-right"></i>
                                                <i onClick={onDropDownExpandClick} className="subnav-icon-expand-down fa-solid fa-angle-down"></i>
                                                <i onClick={onDropDownExpandClick} className="subnav-icon-collapse-up fa-solid fa-angle-up"></i>
                                            </button>
                                            <div className="subnav-content">
                                                {subMenu.subMenus.map((subSubMenu, subSubMenuIndex) => {
                                                    return <Link key={subSubMenuIndex} index={subSubMenuIndex} to={subSubMenu.path}>{subSubMenu.label}</Link>
                                                })}
                                            </div>
                                        </div>
                                    }
                                </>})}
                            </div>
                        </div>
                    }
                </>
            })}

            <Link to="#" className="responsive-menu-icon" onClick={onResponsiveButtonClick}>
                <i className="responsive-open fa fa-bars"></i>
                <i className="responsive-close fa-solid fa-xmark"></i>
            </Link>
        </div>
    </>)
};

export default NavBarNew;