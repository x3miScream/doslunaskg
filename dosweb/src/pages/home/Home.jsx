import React from 'react';
import './Home.css'
import HeaderCardList from '../../components/HeaderCardList/HeaderCardList.jsx';
import NewArrivals from '../../components/NewArrivals/NewArrivals.jsx';
import TopCategories from '../../components/TopCategories/TopCategories.jsx';
import AboutPopularProducts from '../../components/AboutPopularProducts/AboutPopularProducts.jsx';
import Testimonials from '../../components/Testimonials/Testimonials.jsx';

const Home = () => {
    return(<>
        <HeaderCardList></HeaderCardList>
        <NewArrivals></NewArrivals>
        <TopCategories></TopCategories>
        <AboutPopularProducts></AboutPopularProducts>
        <Testimonials></Testimonials>
    </>);
};

export default Home;