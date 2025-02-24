import React, {useEffect, useState} from 'react';
import './ProductsGrid.css';
import Item from '../Item/Item.jsx';

import items_data from '../../assets/data/items_data.js';

const ProductsGrid = (props) => {
    const {categoryId, subCategoryId} = props;
    const numberItemsPerPage = 20;
    const [filteredItems, setFilteredItems] = useState([]); 
    const [gridPagingInfo, setGridPagingInfo] = useState({
        totalItems: 0,
        currentPageStartDisplayItems: 0,
        currentPageEndDisplayItems: 0
    });
    const [dataPage, setDataPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [dataPerPage, setDataPerPage] = useState([]);

    const getTotalPages = async () => {
        setTotalPages(Math.ceil(filteredItems.length / numberItemsPerPage));
    };
    
    const filterDataByPage = async () => {
        const result = filteredItems.filter((item, index) => {
            return ((index >= dataPage * numberItemsPerPage - numberItemsPerPage) && (index < dataPage * numberItemsPerPage))
        });
        setDataPerPage(result);
        
        setGridPagingInfo((prev) => ({...prev, 
            totalItems: filteredItems.length,
            currentPageStartDisplayItems: (dataPage * numberItemsPerPage - numberItemsPerPage),
            currentPageEndDisplayItems: (dataPage * numberItemsPerPage) - (numberItemsPerPage - result.length)
            }));
    };

    const filterProducts = async() => {
        let items = items_data.filter((item) => {return item.categoryId == categoryId});

        if(subCategoryId !== undefined && subCategoryId != '')
            items = items.filter((item) => {return item.subCategoryId == subCategoryId});

        setFilteredItems(items);
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
        await filterProducts();
        await getTotalPages();
    };

    useEffect(() => {
        initializePage();
    }, [categoryId, subCategoryId]);

    useEffect(() => {
        filterDataByPage();
    }, [dataPage]);

    useEffect(() => {
        getTotalPages();
        filterDataByPage();
    }, [filteredItems]);

    return(<div className='products-grid-section'>
        <div className='grid-header'>
            <div className='grid-paging-info'>
                <p>{`SHOWING ${gridPagingInfo.currentPageStartDisplayItems} - ${gridPagingInfo.currentPageEndDisplayItems} OF ${gridPagingInfo.totalItems} RESULTS`}</p>
            </div>
        </div>
        <div className='products-grid'>
            {dataPerPage.map((item, index) => {
                return <Item key={index} isShowName={true} item={item}></Item>
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