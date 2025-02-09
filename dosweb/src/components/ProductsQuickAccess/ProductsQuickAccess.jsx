import React from 'react';
import items_data from '../../assets/data/items_data.js';
import './ProductsQuickAccess.css';

const ProductsQuickAccess = () => {
    return(<div className='products-quick-access-section'>
        <div className='products-quick-access-section-inner'>
            <div className='quick-access-item-list'>
                {items_data.map((item, index) => {
                    if(item.isOnQuickAccess)
                        return <div className='quick-access-item-card'>
                                <figure className='quick-access-item-image-secion'><img className='quick-access-item-image' src={item.mainImage} alt='Loading...'></img></figure>
                                <h4 className='quick-access-item-name-secion'>{item.name}</h4>
                            </div>
                })}
            </div>
        </div>
    </div>);
}

export default ProductsQuickAccess;