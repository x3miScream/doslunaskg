import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import useGetImage from '../../hooks/useGetImage.jsx';
import './Item.css';    

import dummyImage from '../../assets/images/items/1/1.jpg';

const Item = (props) => {
    const {item, isShowName, isShowPopularInfo, isShowCreatedDate} = props;
    const {id, name, description, mainImage, mainImageData, category,
        popularTitle, popularDescription, createdDate, createdAt
    } = item;
    const {getImageUrlData} = useGetImage();
    const mainImageUrlData = getImageUrlData(mainImageData);

    const getDisplayDateStr = () => {
        const date = new Date(createdAt);
        const month = date.getMonth();
        let monthStr = month.toString();;
        if(month < 10)
            monthStr = '0' + monthStr;

        return `${date.getDate()}/${monthStr}/${date.getFullYear()}`;
    }

    const initializePage = async () => {
        
    };

    useEffect(() => {
        initializePage();
    }, []);

    return(<div className='item'>
        {item.isNewProduct ? <span className='new-item-badge'>New</span> : ''}
        <figure className='item-image-section'>
            {/* <Link to={`/product-create-update/${id}`}><img className='item-image' onClick={window.scrollTo(0,0)} src={mainImageUrlData == undefined ? '' : mainImageUrlData.serverUrl} alt='Loading...'></img></Link> */}
            <Link to={`/product/${id}`}><img className='item-image' onClick={window.scrollTo(0,0)} src={mainImageUrlData == undefined ? '' : mainImageUrlData.serverUrl} alt='Loading...'></img></Link>
        </figure>

        {
            !isShowName ? '' : 
            <>
                <p>{name}</p>
            </>
        }

        <div className='item-popular-section'>
        {
            !isShowPopularInfo ? '' : 
            <>
                <h3 className='item-popular-section-popular-title'>{popularTitle}</h3>
                <p>{popularDescription}</p>
            </>
        }

        {
            !isShowCreatedDate ? '' : 
            <>
                <h4 className='item-created-info'>{`В ${category.name} / C ${getDisplayDateStr()}`}</h4>
            </>
        }
        </div>
    </div>)
}

export default Item;