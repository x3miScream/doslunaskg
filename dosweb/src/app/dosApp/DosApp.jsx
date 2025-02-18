import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../../components/Header/Header.jsx';
import Home from '../../pages/home/Home.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import ProductsGridPage from '../../pages/ProductsGridPage/ProductsGridPage.jsx';

import './DosApp.css';
import AppFloatingButton from '../../components/AppFloatingButton/AppFloatingButton.jsx';
import ItemDetails from '../../components/ItemDetails/ItemDetails.jsx';

const DosApp = () => {
    const menuLinks = [
        {
            path: '/',
            element: 'Home',
            isAppPadded: true
        }
    ];
    const settings = {};
    const componentsRegistry = {
        'Home': <Home></Home>
    };

    return(<div className='doslunas-app-container'>
        <BrowserRouter basename='/doslunaskg'>
            <div className='home-section section-header'>
                <Header></Header>
            </div>
            
            <Routes>
                {menuLinks.map((item, index) => {return <Route key={index} path={item.path} exact element={componentsRegistry[item.element]}></Route>})}
                <Route path='/products' element={<ProductsGridPage></ProductsGridPage>}>
                    <Route path=':categoryId' element={<ProductsGridPage></ProductsGridPage>}>
                        <Route path=':subCategoryId' element={<ProductsGridPage></ProductsGridPage>}></Route>
                    </Route>
                </Route>

                <Route path='/product' element={<ItemDetails></ItemDetails>}>
                    <Route path=':productId' element={<ItemDetails></ItemDetails>}>
                    </Route>
                </Route>
            </Routes>

            <Footer></Footer>
            <AppFloatingButton></AppFloatingButton>
        </BrowserRouter>
    </div>);
};

export default DosApp;