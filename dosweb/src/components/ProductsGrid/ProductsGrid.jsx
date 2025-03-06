import React, {useEffect, useState} from 'react';
import './ProductsGrid.css';
import Item from '../Item/Item.jsx';
import useGetProducts from '../../hooks/useGetProducts.jsx';

const ProductsGrid = (props) => {
    const {categoryCode, subCategoryCode} = props;
    const numberItemsPerPage = 20;  
    const [gridPagingInfo, setGridPagingInfo] = useState({
        totalItems: 0,
        currentPageStartDisplayItems: 0,
        currentPageEndDisplayItems: 0
    });
    const [dataPage, setDataPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [dataPerPage, setDataPerPage] = useState([]);

    const {loadingState, getProducts} = useGetProducts();
    const [itemsData, setItemsData] = useState({
        data: []
    });

    const loadProductsData = async () => {
        await getProducts(setItemsData, {
            categoryCode: categoryCode,
            subCategoryCode: subCategoryCode,
        });
    };

    const getTotalPages = async () => {
        setTotalPages(Math.ceil(itemsData.data.length / numberItemsPerPage));
        setDataPage(1);
    };
    
    const filterDataByPage = async () => {
        const result = itemsData.data.filter((item, index) => {
            return ((index >= dataPage * numberItemsPerPage - numberItemsPerPage) && (index < dataPage * numberItemsPerPage))
        });

        setDataPerPage(result);
        
        setGridPagingInfo((prev) => ({...prev, 
            totalItems: itemsData.data.length,
            currentPageStartDisplayItems: (dataPage * numberItemsPerPage - numberItemsPerPage),
            currentPageEndDisplayItems: (dataPage * numberItemsPerPage) - (numberItemsPerPage - result.length)
            }));
    };

    const scrossDataGrid = (direction) => {
        switch(direction){
            case 'left':
                if(dataPage - 1 < 1)
                    setDataPage(totalPages);
                else
                    setDataPage((prev) => (prev - 1));
                break;
            case 'right': 
                if((dataPage + 1) > totalPages)
                    setDataPage(1);
                else    
                    setDataPage((prev) => (prev + 1));
                break;
        }
    };

    const initializePage = async () => {
        await loadProductsData();
    };





    useEffect(() => {
        initializePage();
    }, [categoryCode, subCategoryCode]);

    useEffect(() => {
        getTotalPages();
        filterDataByPage();
    }, [itemsData]);

    useEffect(() => {
        filterDataByPage();
    }, [dataPage]);


    return(<div className='products-grid-section'>
        <div className='grid-header'>
            <div className='grid-paging-info'>
                <p>{`SHOWING ${gridPagingInfo.currentPageStartDisplayItems} - ${gridPagingInfo.currentPageEndDisplayItems} OF ${gridPagingInfo.totalItems} RESULTS`}</p>
            </div>
        </div>
        <div className='products-grid'>
            {dataPerPage.map((item, index) => {
                // return <Item key={index} isShowName={true} item={item}></Item>
                return <Item key={Math.random()} isShowName={true} item={item}></Item>
            })}
        </div>
        <div className='products-grid-navigation-buttons'>
            <button className='button-arrow-left custom-button-tertiary' onClick={() => {scrossDataGrid('left')}}><i className="fa-solid fa-chevron-left"></i> PREV</button>
            {Array(totalPages).fill().map((item, index) => {
                return <button key={index} className={`button-page-number custom-button-no-border ${(index + 1) != dataPage ? '' : 'active'}`} onClick={() => {setDataPage((index+1))}}>{(index+1)}</button>
            })}
            <button className='button-arrow-right custom-button-tertiary' onClick={() => {scrossDataGrid('right')}}>NEXT <i className="fa-solid fa-chevron-right"></i></button>
        </div>
    </div>)
};

export default ProductsGrid;