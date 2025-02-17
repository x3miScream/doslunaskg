import React, {useEffect, useState} from 'react';
import './ProductsGrid.css';
import Item from '../Item/Item.jsx';

import items_data from '../../assets/data/items_data.js';

const ProductsGrid = (props) => {
    const {categoryId, subCategoryId} = props;
    const [filteredItems, setFilteredItems] = useState([]); 

    const filterProducts = async() => {
        console.log(categoryId)
        let items = items_data.filter((item) => {return item.categoryId == categoryId});

        if(subCategoryId !== undefined && subCategoryId != '')
            items = items.filter((item) => {return item.subCategoryId == subCategoryId});

        setFilteredItems(items);
    };

    const initializePage = async () => {
        await filterProducts();
    };

    useEffect(() => {
        initializePage();
    }, [categoryId, subCategoryId]);

    return(<div className='products-grid-section'>
        <div className='products-grid'>
            {filteredItems.map((item, index) => {
                return <Item key={index} isShowName={true} item={item}></Item>
            })}
        </div>
    </div>)
};

export default ProductsGrid;