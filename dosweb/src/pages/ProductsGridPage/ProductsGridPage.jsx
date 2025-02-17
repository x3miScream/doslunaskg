import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ProductsGrid from '../../components/ProductsGrid/ProductsGrid.jsx'

import categoriesData from '../../assets/data/categoriesData.js';
import subCategoriesData from '../../assets/data/subCategoriesData.js';

import './ProductsGridPage.css';

const ProductionGridPage = () => {
    const {categoryId, subCategoryId} = useParams();
    const [categoryData, setCategoryData] = useState({
        categoryId: categoryId,
        subCategoryId: subCategoryId,
        categoryName: 'asdf'
    });

    const initializePage = async () => {
        const category = categoriesData.filter((item) => {return item.id == categoryId});
        setCategoryData((prev) => ({...prev, categoryName: category[0].name}));
    };

    useEffect(() => {
        initializePage();
    }, [categoryId, subCategoryId]);

    return(<div className='products-grid-page'>
        <div className='products-grid-page-header'>
            <span>Breadcrumb</span>
            <h1>{categoryData.categoryName}</h1>
        </div>

        <div className='products-grid-container app-default-padded'>
            <ProductsGrid categoryId={categoryId} subCategoryId={subCategoryId}></ProductsGrid>
        </div>
    </div>)
};

export default ProductionGridPage;