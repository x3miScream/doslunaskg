import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ProductsGrid from '../../components/ProductsGrid/ProductsGrid.jsx'
import categoriesData from '../../assets/data/categoriesData.js';
import subCategoriesData from '../../assets/data/subCategoriesData.js';

import './ProductsGridPage.css';

const ProductionGridPage = () => {
    const {categoryCode, subCategoryCode, search} = useParams();
    const [categoryData, setCategoryData] = useState({
        code: categoryCode,
        subCategoryCode: subCategoryCode,
        name: ''
    });

    const getCategoriesData = async () => {
        if(categoryCode !== undefined && categoryCode !== '' && categoryCode !== '-')
        {
            const url = `${process.env.REACT_APP_SERVER_URL}/api/categories/getCategoryByCode/${categoryCode}`;
            const fetchObject = 
            {
                method: 'GET',
                credentials: 'include',
                mode: 'cors',
            };

            try{
                const res = await fetch(url, fetchObject);
                if(res.status == 200)
                {
                    const data = await res.json();
                    setCategoryData(data.data);
                }
            }
            catch(error){
                console.log(`Failed to fetch category data with error: ${error}`);
            }
        }
    };

    const initializePage = async () => {
        await getCategoriesData();
    };

    useEffect(() => {
        initializePage();
    }, [categoryCode, subCategoryCode]);

    return(<div className='products-grid-page'>
        <div className='products-grid-page-header'>
            <span>Breadcrumb</span>
            <h1>{categoryData.name}</h1>
        </div>

        <div className='products-grid-container app-default-padded'>
            <ProductsGrid categoryCode={categoryCode} subCategoryCode={subCategoryCode} search={search}></ProductsGrid>
        </div>
    </div>)
};

export default ProductionGridPage;