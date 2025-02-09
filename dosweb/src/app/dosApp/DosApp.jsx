import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../../components/Header/Header.jsx';
import Home from '../../pages/home/Home.jsx';
import Footer from '../../components/Footer/Footer.jsx';

import './DosApp.css';

const DosApp = () => {
    const menuLinks = [

    ];
    const settings = {};
    const componentsRegistry = {};

    return(<div className='doslunas-app-container'>
        <BrowserRouter>
            <div className='home-section section-header'>
                <Header></Header>
            </div>
            <div className='home-section section-feature'>
                <Routes>
                    {menuLinks.map((item, index) => {return <Route key={index} path={settings.hostingBaseUrl + item.path} exact element={componentsRegistry[item.element]}></Route>})}

                    <Route key={0} path='/' element={<Home></Home>}></Route>
                </Routes>
            </div>
            <Footer></Footer>
        </BrowserRouter>
    </div>);
};

export default DosApp;