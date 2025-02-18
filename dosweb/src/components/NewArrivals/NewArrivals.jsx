import React, {useEffect, useState} from 'react';
import Item from '../Item/Item.jsx';
import items_data from '../../assets/data/items_data.js';

import './NewArrivals.css';

const NewArrivals = () => {
    const [filteredData, setFilteredData] = useState([]);

    const initializePage = async () => {
        setFilteredData(items_data.filter((item) => {return item.isNew}).slice(0, 6));
    };

    useEffect(() => {
        initializePage();
    }, []);

    return(<div className='new-arrivals-container'>
        <div className="new-arrivals-header">
            <div className="new-arrivals-header-left">
                <h3>Check our latest products</h3>
                <h1>New Arrivals</h1>
            </div>
            <div className="new-arrivals-header-right">
                <button className='custom-button-secondary'>VIEW ALL</button>
            </div>
        </div>

        <div className='new-arrivals-item-list'>
            {filteredData.map((item, index) => {
                if(item.isNew)
                    return <Item key={index} isShowName={true} item={item}></Item>
            })}
        </div>
    </div>)
};

export default NewArrivals;