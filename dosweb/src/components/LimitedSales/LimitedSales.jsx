import React from 'react';
import Item from '../Item/Item.jsx';
import './LimitedSales.css';

import items_data from '../../assets/data/items_data.js';

const LimitedSales = () => {
    return(<div className='limited-sales-section'>
        <div className='limited-sales-section-inner'>
            <div className='sales-items-list'>
                {items_data.map((item, index) => {
                    if(item.isOnSale)
                        return <Item key={index} isShowName={true} item={item}></Item>
                })}

                <div className='sales-information'>
                    <h2>LIMITED TIME!</h2>
                    <h1>Final Sale</h1>
                    <p>Don’t miss out on our limited time final sale! Get your hands on our high-quality, eco-friendly beauty products at unbeatable prices. Stock up on your favorite hair, face, and body care essentials before it’s too late.</p>
                    <div className='all-deals-button-section'>
                        <button className='custom-button-secondary'>ALL DEALS</button>
                    </div>
                </div>
            </div>
        </div>
    </div>);
};

export default LimitedSales;