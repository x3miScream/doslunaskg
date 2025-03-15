import React, { useEffect, useRef, useState } from 'react';
import {useParams} from 'react-router-dom';
import Item from '../Item/Item.jsx';
import items_data from '../../assets/data/items_data.js';
import useGetImage from '../../hooks/useGetImage.jsx';
import useGetProducts from '../../hooks/useGetProducts.jsx';
import './ItemDetails.css';

const ItemDetails = () => {
    const leftImage = useRef();
    const rightImage = useRef();
    const mainImage = useRef();

    const {productId} = useParams();
    const [productItem, setProductItem] = useState(undefined);
    const [relatedProducts, setRelatedProducts] = useState(undefined);
    const [activeTab, setActiveTab] = useState(0);
    const [productMainDisplayImage, setProductMainDisplayImage] = useState(undefined);
    const {loadingState, getImageById, getImageUrlData} = useGetImage();
    const {getProducts} = useGetProducts();

    const getProductDetails = async () => {

        const url = `${process.env.REACT_APP_SERVER_URL}/api/products/getProduct/${productId}`;
        const fetchObject = 
        {
            method: 'GET',
            credentials: 'include',
            mode: 'cors',
        };

        try{
            const res = await fetch(url, fetchObject);
            const data = await res.json();
            
            setProductItem(data.data);
        }
        catch(error){
            console.log(`Failed fetching product details: ${error}`);
        }
    };

    const getRelatedProducts = async () => {
        if(productItem != undefined)
        {
            await getProducts(setRelatedProducts, {
                categoryCode: productItem.category.code,
                getFirstN: 4
            });
        }
    };

    const getProductActualImages = async () => {
        if(productItem != undefined)
        {
            if(productItem.mainImage != undefined && productItem.mainImage != '')
            {
                setProductMainDisplayImage(getImageUrlData(productItem.mainImageData).serverUrl);
            }
        }
    };

    const refreshProductDetailsInfo = async () => {
        await getProductActualImages();
    };

    const initializePage = async () => {
        await getProductDetails();
    };

    const onTabButtonClick = async (e) => {
        setActiveTab(e.target.getAttribute('target-tab'));
    };

    const onImageSelectionClick = async (e) => {
        mainImage.current.setAttribute('src', e.target.getAttribute('src'));
    };

    const scrollToTop = async () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    const scrollMainImage = async (scrollDirection) => {
        mainImage.current.classList.remove('hide');
        rightImage.current.classList.add('hide');
        leftImage.current.classList.add('hide');

        mainImage.current.classList.add(scrollDirection);

        switch(scrollDirection)
        {
            case 'left':
                rightImage.current.classList.remove('hide');
                rightImage.current.classList.add('move-in-left');
            break;
            case 'right':
                leftImage.current.classList.remove('hide');
                leftImage.current.classList.add('move-in-right');
            break;
        }

        setTimeout(() => {
            mainImage.current.classList.remove(scrollDirection);

            rightImage.current.classList.remove('move-in-left');
            leftImage.current.classList.remove('move-in-right');

            mainImage.current.classList.add('hide');

            rightImage.current.classList.add('hide');
            leftImage.current.classList.add('hide');

            mainImage.current.classList.remove('hide');
        }, 1000);
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
                        <div className='product-item-details-info-images-selection before'>
                            {
                                productItem?.otherImagesData.map((item, index) => {return <figure key={index}><img onClick={onImageSelectionClick} src={getImageUrlData(item).serverUrl} alt='Loading...'></img></figure>})
                            }
                        </div>
                        <div className='product-item-details-info-images-display'>
                            <figure>
                                <i onClick={() => {scrollMainImage('left')}} className="image-scroll-icon left fa-regular fa-circle-left"></i>
                                <img className='image-prev hide' ref={leftImage} src={productMainDisplayImage} alt='Loading...'></img>
                                <img ref={mainImage} src={productMainDisplayImage} alt='Loading...'></img>
                                <img className='image-next hide' ref={rightImage} src={productMainDisplayImage} alt='Loading...'></img>
                                <i onClick={() => {scrollMainImage('right')}} className="image-scroll-icon right fa-regular fa-circle-right"></i>
                            </figure>
                        </div>
                        <div className='product-item-details-info-images-selection after'>
                            {
                                productItem?.otherImagesData.map((item, index) => {return <figure key={index}><img onClick={onImageSelectionClick} src={getImageUrlData(item).serverUrl} alt='Loading...'></img></figure>})
                            }
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
                    ((relatedProducts == undefined || relatedProducts.data.length < 1) ? '' : 
                        relatedProducts.data.map((item, index) => {
                            return <Item key={index} isShowName={true} item={item}></Item>
                        })
                    )
                }
            </div>
        </div>

    </div>);
};

export default ItemDetails;