import React from 'react';
import Item from '../Item/Item.jsx';
import items_data from '../../assets/data/items_data.js';

import './NewArrivals.css';

const NewArrivals = () => {
    return(<div className='new-arrivals-container'>
        <div className="new-arrivals-header">
            <div className="new-arrivals-header-left">
                <h3>Check our latest products</h3>
                <h1>New Arrivals</h1>
            </div>
            <div className="new-arrivals-header-right">
                <button>VIEW ALL</button>
            </div>
        </div>

        <div className='new-arrivals-item-list'>
            {items_data.map((item, index) => {
                return <Item key={index} item={item}></Item>
            })}
        </div>
    </div>)
};

export default NewArrivals;