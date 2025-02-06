import React from 'react';
import {Link} from 'react-router-dom';
import './CategoryItem.css';

const CategoryItem = (props) => {
    const {categoryItem} = props;
    const {id, name, description, mainImage} = categoryItem;

    return(<div className='category-item'>
        <Link to={`/category/${id}`}><img className='category-item-image' onClick={window.scrollTo(0,0)} src={mainImage}></img></Link>
        <div className='category-item-description-box'>
            <h4>Check Category</h4>
            <h1>{name}</h1>
            <div className='check-it-out-buttom'>
                <button className='custom-button'>Check it out <i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    </div>)
};

export default CategoryItem;