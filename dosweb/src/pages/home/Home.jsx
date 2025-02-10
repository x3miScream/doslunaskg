import React from 'react';
import './Home.css'
import HeaderCardList from '../../components/HeaderCardList/HeaderCardList.jsx';
import NewArrivals from '../../components/NewArrivals/NewArrivals.jsx';
import TopCategories from '../../components/TopCategories/TopCategories.jsx';
import AboutPopularProducts from '../../components/AboutPopularProducts/AboutPopularProducts.jsx';
import Testimonials from '../../components/Testimonials/Testimonials.jsx';
import FollowUs from '../../components/FollowUs/FollowUs.jsx';
import LimitedSales from '../../components/LimitedSales/LimitedSales.jsx';

const Home = () => {
    return(<>
        <h1>HOME</h1>
        <HeaderCardList></HeaderCardList>
        <NewArrivals></NewArrivals>
        <TopCategories></TopCategories>
        <AboutPopularProducts></AboutPopularProducts>
        <Testimonials></Testimonials>
        <FollowUs></FollowUs>
        <LimitedSales></LimitedSales>
    </>);
};

export default Home;