import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './CategoryItem.css';

import useGetImage from '../../hooks/useGetImage.jsx';

const CategoryItem = (props) => {
    const {categoryItem} = props;
    const {id, name, description, mainImage} = categoryItem;
    const {loadingState, getImageById} = useGetImage();
    const [mainImageSrc, setMainImageSrc] = useState('');

    const mainImageStr = '../../assets/images/items/1/1.jpg';

    const loadImage = async () => {
        let imageSrc = await getImageById(mainImage, setMainImageSrc);
    };

    const initializePage = async () => {
        await loadImage();
    };

    useEffect(() => {
        initializePage();
    }, [id]);

    return(<div className='category-item'>
        {mainImageSrc == '' ? '' : <Link to={`/category/${id}`}><img className='category-item-image' onClick={window.scrollTo(0,0)} src={mainImageSrc}></img></Link> }
        <div className='category-item-description-box'>
            <h4>Показать категорию</h4>
            <h1>{name}</h1>
            <div className='check-it-out-buttom'>
                <button className='custom-button'>Посмотреть <i className="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    </div>)
};

export default CategoryItem;