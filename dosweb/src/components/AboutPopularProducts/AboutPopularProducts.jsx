import React, {useState, useEffect} from 'react';
import './AboutPopularProducts.css';
import Item from '../Item/Item.jsx'
import useGetProducts from '../../hooks/useGetProducts.jsx';

const AboutPopularProducts = () => {
    const [itemsData, setItemsData] = useState({
        data: []
    });
    const {loadingState, getProducts} = useGetProducts();

    const loadData = async () => {
        await getProducts(setItemsData);
    };

    const initializePage = async () => {
        await loadData();
    };
    
    useEffect(() => {
        initializePage();
    }, []);

    return(<div className='about-popular-products-section'>
        <div className='about-popular-products-header'>
            <h3>Check out popular products</h3>
            <h1>About Out Popular Products</h1>
        </div>
        <div className='popular-products-section'>
            {itemsData.data .map((item, index) => {
                if(item.isPopular)
                    return <Item key={index} item={item} isShowPopularInfo={true} isShowCreatedDate={true}></Item>
            })}
        </div>
    </div>);
};

export default AboutPopularProducts;