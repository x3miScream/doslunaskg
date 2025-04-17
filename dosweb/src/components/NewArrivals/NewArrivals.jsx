import React, {useEffect, useState} from 'react';
import Item from '../Item/Item.jsx';
import useGetProducts from '../../hooks/useGetProducts.jsx';

import './NewArrivals.css';

const NewArrivals = () => {
    const [itemsData, setItemsData] = useState({
        data: []
    });
    const {loadingState, getProducts} = useGetProducts();

    const getAllProducts = async () => {
        await getProducts(setItemsData, {
            isNewProduct: true,
            getFirstN: 6
        });
    };

    const initializePage = async () => {
        await getAllProducts();
    };

    useEffect(() => {
        initializePage();
    }, []);

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
            {itemsData.data.map((item, index) => {
                return <Item key={index} isShowName={true} item={item}></Item>
            })}
        </div>
    </div>)
};

export default NewArrivals;