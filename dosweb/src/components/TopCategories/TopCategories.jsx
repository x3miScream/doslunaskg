import React from 'react';
import './TopCategories.css';
import categoriesData from '../../assets/data/categoriesData.js';
import CategoryItem from '../CategoryItem/CategoryItem.jsx';

const TopCategories = () => {
    return(<div className='top-categories-section'>
        <div className='top-categories-list'>
            {categoriesData.map((item, index) => {
                return <CategoryItem key={index} categoryItem={item}></CategoryItem>
            })}
        </div>
    </div>);
};

export default TopCategories;