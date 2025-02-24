import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import Item from '../Item/Item.jsx';
import items_data from '../../assets/data/items_data.js';
import './ItemDetails.css';

const ItemDetails = () => {
    const {productId} = useParams();
    const [productItem, setProductItem] = useState(undefined);
    const [relatedProducts, setRelatedProducts] = useState(undefined);
    const [activeTab, setActiveTab] = useState(0);
    const [productMainDisplayImage, setProductMainDisplayImage] = useState(undefined);

    const getProductDetails = async () => {
        let foundItem = items_data.filter((item) => {if(item.id == productId) return item});

        if(foundItem && foundItem.length > 0)
        {
            setProductItem(foundItem[0]);
        }
    };

    const getRelatedProducts = async () => {
        if(productItem != undefined)
        {
            setRelatedProducts(items_data.filter((item) => {
                if(item.category == productItem.category)
                    return item;
            }).slice(0, 4));
        }
    };

    const refreshProductDetailsInfo = async () => {
        setProductMainDisplayImage(productItem?.mainImage);
    };

    const initializePage = async () => {
        await getProductDetails();
    };

    const onTabButtonClick = async (e) => {
        setActiveTab(e.target.getAttribute('target-tab'));
    };

    const onImageSelectionClick = async (e) => {
        setProductMainDisplayImage(e.target.getAttribute('src'));
    };

    const scrollToTop = async () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    useEffect(() => {
        initializePage();
        scrollToTop();
    }, [productId]);

    useEffect(() => {
        refreshProductDetailsInfo();
        getRelatedProducts();
    }, [productItem])

    return(<div className='product-item-details-page app-default-padded'>
        {
            productItem === undefined ? 'Loading...' : 
            <div className='product-item-details-info-container'>
                <div className='product-item-details-info'>
                    <div className='product-item-details-info-images'>
                        <div className='product-item-details-info-images-selection'>
                            {productItem.otherImages.map((item, index) => {return <figure key={index}><img onClick={onImageSelectionClick} src={item} alt='Loading...'></img></figure>})}
                        </div>
                        <div className='product-item-details-info-images-display'>
                            <figure>
                                <img src={productMainDisplayImage} alt='Loading...'></img>
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

                <div className='product-item-footer'>
                    <div className='product-item-footer-tab-buttons'>
                        <button onClick={onTabButtonClick} className={`custom-button-tertiary custom-tab-header ${(activeTab == 0 ? 'active' : '')}`} target-tab='0' >DESCRIPTION</button>
                        <button onClick={onTabButtonClick} className={`custom-button-tertiary custom-tab-header ${(activeTab == 1 ? 'active' : '')}`} target-tab='1'>HOW TO USE</button>
                        <button onClick={onTabButtonClick} className={`custom-button-tertiary custom-tab-header ${(activeTab == 2 ? 'active' : '')}`} target-tab='2'>ADDITIONAL INFORMATION</button>
                    </div>
                    <div className={`product-item-footer-description custom-tab-data ${(activeTab == 0 ? 'active' : '')}`} target-tab='0'>
                        {productItem.description}
                    </div>

                    <div className={`product-item-footer-how-to-use custom-tab-data ${(activeTab == 1 ? 'active' : '')}`} target-tab='1'>
                        HOW TO USE
                    </div>

                    <div className={`product-item-footer-additional-information custom-tab-data ${(activeTab == 2 ? 'active' : '')}`} target-tab='2'>
                        additional-information
                    </div>
                </div>
            </div>
        }

        <div className='product-details-related-products'>
            <h2>Related Products</h2>
            <div className='product-details-related-products-container'>
                {
                    ((relatedProducts == undefined || relatedProducts.length < 1) ? '' : 
                        relatedProducts.map((item, index) => {
                            return <Item key={index} isShowName={true} item={item}></Item>
                        })
                    )
                }
            </div>
        </div>

    </div>);
};

export default ItemDetails;