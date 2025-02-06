import React from 'react';
import './TopCategories.css';
import categories_data from '../../assets/data/categories_data.js';
import CategoryItem from '../CategoryItem/CategoryItem.jsx';

const TopCategories = () => {
    return(<div className='top-categories-section'>
        <div className='top-categories-list'>
            {categories_data.map((item, index) => {
                return <CategoryItem key={index} categoryItem={item}></CategoryItem>
            })}
        </div>
    </div>);
};

export default TopCategories;