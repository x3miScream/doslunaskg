import React from 'react';
import './AboutPopularProducts.css';
import Item from '../Item/Item.jsx'
import items_data from '../../assets/data/items_data.js';

const AboutPopularProducts = () => {
    return(<div className='about-popular-products-section'>
        <div className='about-popular-products-header'>
            <h3>Check out popular products</h3>
            <h1>About Out Popular Products</h1>
        </div>
        <div className='popular-products-section'>
            {items_data.map((item, index) => {
                if(item.isPopular)
                    return <Item key={index} item={item} isShowPopularInfo={true} isShowCreatedDate={true}></Item>
            })}
        </div>
    </div>);
};

export default AboutPopularProducts;