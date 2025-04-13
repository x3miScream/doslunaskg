import React, {useState, useEffect} from 'react';
import Item from '../Item/Item.jsx';
import './LimitedSales.css';
import useGetProducts from '../../hooks/useGetProducts.jsx';

const LimitedSales = () => {

    const [itemsData, setItemsData] = useState({
        data: []
    });

    const {loadingState, getProducts} = useGetProducts();

    const loadData = async () => {
        await getProducts(setItemsData);
    };

    const initializePate = async () => {
        await loadData();
    };

    useEffect(() => {
        initializePate();
    }, []);

    return(<div className='limited-sales-section'>
        <div className='limited-sales-section-inner'>
            <div className='sales-information mobile'>
                <h2>ОГРАНИЧЕННОЕ ВРЕМЯ!</h2>
                <h1>Финальная распродажа</h1>
                <p>Не пропустите нашу ограниченную по времени финальную распродажу! Приобретите наши высококачественные, экологически чистые косметические средства по непревзойденным ценам. Запаситесь любимыми средствами по уходу за волосами, лицом и телом, пока не стало слишком поздно.</p>
                <div className='all-deals-button-section'>
                    <button className='custom-button-secondary'>ВСЕ ПРЕДЛОЖЕНИЯ</button>
                </div>
            </div>


            <div className='sales-items-list'>
                {itemsData.data.map((item, index) => {
                    if(item.isOnSale)
                        return <Item key={index} isShowName={true} item={item}></Item>
                })}
            </div>

            <div className='sales-information'>
                <h2>ОГРАНИЧЕННОЕ ВРЕМЯ!</h2>
                <h1>Финальная распродажа</h1>
                <p>Не пропустите нашу ограниченную по времени финальную распродажу! Приобретите наши высококачественные, экологически чистые косметические средства по непревзойденным ценам. Запаситесь любимыми средствами по уходу за волосами, лицом и телом, пока не стало слишком поздно.</p>
                <div className='all-deals-button-section'>
                    <button className='custom-button-secondary'>ВСЕ ПРЕДЛОЖЕНИЯ</button>
                </div>
            </div>
        </div>
    </div>);
};

export default LimitedSales;