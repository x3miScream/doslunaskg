import React from 'react';
import {Link} from 'react-router-dom';

import './Item.css';    

const Item = (props) => {
    const {item, isShowName, isShowPopularInfo, isShowCreatedDate} = props;
    const {id, name, description, mainImage, category,
        popularTitle, popularDescription, createdDate
    } = item;

    return(<div className='item'>
        <figure className='item-image-section'>
            <Link to={`/product/${id}`}><img className='item-image' onClick={window.scrollTo(0,0)} src={mainImage}></img></Link>
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
                <h4 className='item-created-info'>{`IN ${category} / ON ${createdDate}`}</h4>
            </>
        }
        </div>
    </div>)
}

export default Item;