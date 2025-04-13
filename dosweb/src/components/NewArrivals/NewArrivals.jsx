import React, {useEffect, useState} from 'react';
import Item from '../Item/Item.jsx';
// import items_data from '../../assets/data/items_data.js';

import './NewArrivals.css';

const NewArrivals = () => {
    const [filteredData, setFilteredData] = useState([]);
    const [itemsData, setItemsData] = useState([]);

    const getAllProducts = async () => {
        const url = `${process.env.REACT_APP_SERVER_URL}/api/products/getProducts`;
        const fetchObject = {
            method: 'GET',
            credentials: 'include',
            mode: 'cors'
        };

        try{
            const res = await fetch(url, fetchObject);
            const data = await res.json();

            setItemsData(data.data);
        }
        catch(error){
            console.log(`Failed to fetch products for New Arrivals: ${error}`);
        }
    };

    const filterData = async () => {
        setFilteredData(itemsData.filter((item) => {return item.isNewProduct}).slice(0, 6));
    };

    const initializePage = async () => {
        await getAllProducts();
        // setFilteredData(itemsData.filter((item) => {return item.isNewProduct}).slice(0, 6));
    };

    useEffect(() => {
        initializePage();
    }, []);

    useEffect(() => {
        filterData();
    }, [itemsData]);

    return(<div className='new-arrivals-container'>
        <div className="new-arrivals-header">
            <div className="new-arrivals-header-top">
                <h3>Проверьте наши последние продукты</h3>
                <button className='custom-button-secondary'>СМОТРЕТЬ ВСЕ</button>
            </div>
            <div className="new-arrivals-header-bottom">
                <h1>Новые поступления</h1>
            </div>
        </div>

        <div className='new-arrivals-item-list'>
            {filteredData.map((item, index) => {
                if(item.isNewProduct)
                    return <Item key={index} isShowName={true} item={item}></Item>
            })}
        </div>
    </div>)
};

export default NewArrivals;