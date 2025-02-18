import React from 'react';
import {useParams} from 'react-router-dom';

const ItemDetails = () => {
    const {productId} = useParams();

    return(<div>
        <h1>Item Details</h1>
    </div>);
};

export default ItemDetails;