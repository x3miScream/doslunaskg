import React from 'react';
import './Home.css'
import HeaderCardList from '../../components/HeaderCardList/HeaderCardList.jsx';
import NewArrivals from '../../components/NewArrivals/NewArrivals.jsx';
import TopCategories from '../../components/TopCategories/TopCategories.jsx';

const Home = () => {
    return(<>
        <HeaderCardList></HeaderCardList>
        <NewArrivals></NewArrivals>
        <TopCategories></TopCategories>
    </>);
};

export default Home;