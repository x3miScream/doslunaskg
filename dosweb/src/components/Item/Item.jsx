import React from 'react';
import {Link} from 'react-router-dom';

import './Item.css';    

const Item = (props) => {
    const {item} = props;
    const {id, name, description, mainImage} = item;

    return(<div className='item'>
        <Link to={`/product/${id}`}><img className='item-image' onClick={window.scrollTo(0,0)} src={mainImage}></img></Link>
        <p>{name}</p>
    </div>)
}

export default Item;