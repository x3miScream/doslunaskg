import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './NavBarNewTemplate.css';

const NavBarNewTemplate = () => {
    const [isResponsiveClicked, setIsResponsiveClicked] = useState(false);

    const onResponsiveButtonClick = async (e) => {
        setIsResponsiveClicked(!isResponsiveClicked);
    };



    const onDropDownClick = async (e) => {
        alert('trigger navigation');
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
            <Link to="#home">Home</Link>
            
            <div className="subnav">
                <button className="subnavbtn"><span onClick={onDropDownClick}>Drop Down Menu 1</span>
                    <i onClick={onDropDownExpandClick} className="subnav-icon-expand-down fa-solid fa-angle-down"></i>
                    <i onClick={onDropDownExpandClick} className="subnav-icon-collapse-up fa-solid fa-angle-up"></i>
                </button>
                <div className="subnav-content">
                    <Link to="#">Link 1</Link>
                    <Link to="#">Link 2</Link>

                    <div className="subnav inner-subnav l2">
                        <button className="subnavbtn">Sub Drop Down Menu 0
                            <i onClick={onDropDownExpandClick} className="subnav-icon-expand-right fa-solid fa-angle-right"></i>
                            <i onClick={onDropDownExpandClick} className="subnav-icon-expand-down fa-solid fa-angle-down"></i>
                            <i onClick={onDropDownExpandClick} className="subnav-icon-collapse-up fa-solid fa-angle-up"></i>
                        </button>
                        <div className="subnav-content">
                            <Link to="#">Link 1</Link>
                            <Link to="#">Link 2</Link>
                            <Link to="#">Link 3</Link>
                        </div>
                    </div>

                    <Link to="#">Link 3</Link>
                </div>
            </div>
            
            <Link to="#news">News</Link>
            
            <div className="subnav">
                <button  className="subnavbtn">Drop Down Menu 2 
                    <i onClick={onDropDownExpandClick} className="subnav-icon-expand-down fa-solid fa-angle-down"></i>
                    <i onClick={onDropDownExpandClick} className="subnav-icon-collapse-up fa-solid fa-angle-up"></i>
                </button>
                <div className="subnav-content">
                    <Link to="#">Link 1</Link>
                    <Link to="#">Link 2</Link>

                    <div className="subnav inner-subnav l2">
                        <button className="subnavbtn">Sub Drop Down Menu 1
                            <i onClick={onDropDownExpandClick} className="subnav-icon-expand-right fa-solid fa-angle-right"></i>
                            <i onClick={onDropDownExpandClick} className="subnav-icon-expand-down fa-solid fa-angle-down"></i>
                            <i onClick={onDropDownExpandClick} className="subnav-icon-collapse-up fa-solid fa-angle-up"></i>
                        </button>
                        <div className="subnav-content">
                            <Link to="#">Link 1</Link>
                            <Link to="#">Link 2</Link>
                            <Link to="#">Link 3</Link>
                            <Link to="#">Link 4</Link>
                            <Link to="#">Link 5</Link>
                            <Link to="#">Link 6</Link>
                            <Link to="#">Link 7</Link>
                            
                            <div className="subnav inner-subnav l3">
                                <button className="subnavbtn">Link 8 DDL menu
                                    <i onClick={onDropDownExpandClick} className="subnav-icon-expand-right fa-solid fa-angle-right"></i>
                                    <i onClick={onDropDownExpandClick} className="subnav-icon-expand-down fa-solid fa-angle-down"></i>
                                    <i onClick={onDropDownExpandClick} className="subnav-icon-collapse-up fa-solid fa-angle-up"></i>
                                </button>
                                <div className="subnav-content">
                                    <Link to="#">Link 1</Link>
                                    <Link to="#">Link 2</Link>
                                    <Link to="#">Link 3</Link>
                                    <Link to="#">Link 4</Link>
                                    <Link to="#">Link 5</Link>
                                    <Link to="#">Link 6</Link>
                                    <Link to="#">Link 7</Link>
                                    <Link to="#">Link 8</Link>
                                    <Link to="#">Link 9</Link>
                                    <Link to="#">Link 10</Link>
                                </div>
                            </div>

                            <Link to="#">Link 9</Link>
                            <Link to="#">Link 10</Link>
                        </div>
                    </div>

                    <Link to="#">Link 3</Link>
                    <Link to="#">Link 4</Link>
                    <Link to="#">Link 5</Link>
                </div>
            </div> 


            <Link to="#contact">Contact</Link>
            
            <div className="subnav">
                <button className="subnavbtn">Drop Down Menu 3
                    <i onClick={onDropDownExpandClick} className="subnav-icon-expand-down fa-solid fa-angle-down"></i>
                    <i onClick={onDropDownExpandClick} className="subnav-icon-collapse-up fa-solid fa-angle-up"></i>
                </button>
                <div className="subnav-content">
                    <Link to="#">Link 1</Link>
                    <Link to="#">Link 2</Link>
                    <Link to="#">Link 4</Link>
                    <Link to="#">Link 5</Link>
                </div>
            </div> 


            <Link to="#about">About</Link>


            <Link to="#" className="responsive-menu-icon" onClick={onResponsiveButtonClick}>
                <i className="responsive-open fa fa-bars"></i>
                <i className="responsive-close fa-solid fa-xmark"></i>
            </Link>
        </div>
    </>)
};

export default NavBarNewTemplate;