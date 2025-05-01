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
        <div className='home-section section-feature home-custom-app-default-padded'><HeaderCardList></HeaderCardList></div>
        <div className='home-section section-feature app-default-padded'><NewArrivals></NewArrivals></div>
        <div className='home-section section-feature app-default-padded m-t-xl'><TopCategories></TopCategories></div>
        <div className='home-section section-feature app-default-padded m-t-xl'><AboutPopularProducts></AboutPopularProducts></div>
        <div className='home-section section-feature'><Testimonials></Testimonials></div>
        <div className='home-section section-feature app-default-padded'><FollowUs></FollowUs></div>
        <div className='home-section section-feature m-t-xl'><LimitedSales></LimitedSales></div>
    </>);
};

// const Home = () => {
//     return(<div className='home-section section-feature home-custom-app-default-padded'><HeaderCardList></HeaderCardList></div>);
// };

export default Home;