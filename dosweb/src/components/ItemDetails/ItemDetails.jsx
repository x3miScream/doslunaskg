import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import items_data from '../../assets/data/items_data.js';
import './ItemDetails.css';

const ItemDetails = () => {
    const {productId} = useParams();
    const [productItem, setProductItem] = useState(undefined);

    const getProductDetails = async () => {
        let foundItem = items_data.filter((item) => {if(item.id == productId) return item});

        if(foundItem && foundItem.length > 0)
        {
            setProductItem(foundItem[0]);
        }
    };

    const initializePage = async () => {
        await getProductDetails();
    };

    useEffect(() => {
        initializePage();
    }, [productId]);

    return(<div className='product-item-details-page app-default-padded'>
        {
            productItem === undefined ? 'Loading...' : 
            <div className='product-item-details-info'>
            <div className='product-item-details-info-images'>
                <div className='product-item-details-info-images-selection'>
                    {productItem.otherImages.map((item, index) => {return <figure key={index}><img src={item} alt='Loading...'></img></figure>})}
                </div>
                <div className='product-item-details-info-images-display'>
                    <figure>
                        <img src={productItem.mainImage} alt='Loading...'></img>
                    </figure>
                </div>
            </div>
            <div className='product-item-details-info-text'>
                <h1>{productItem.name}</h1>
                <p>{productItem.description}</p>
                <hr className='divider-thin'></hr>
                <hr className='divider-thin'></hr>
            </div>
        </div>
        }
    </div>);
};

export default ItemDetails;