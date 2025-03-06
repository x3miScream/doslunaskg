import React, {useState} from 'react';
import Item from '../components/Item/Item';

const useGetProducts = () => {
    const [loadingState, setLoadingState] = useState(false);

    const filterData = async (data, filterCriteria) => {
        if(filterCriteria != undefined)
        {
        if(filterCriteria.categoryCode != undefined && filterCriteria.categoryCode != null && filterCriteria.categoryCode != '')
            {
                data.data = data.data.filter((item, index) => {
                    return (item.category.code == filterCriteria.categoryCode)
                });
            }
            
            if(filterCriteria.subCategoryCode != undefined && filterCriteria.subCategoryCode != null && filterCriteria.subCategoryCode != '')
            {
                data.data = data.data.filter((item, index) => {
                    return (item.subCategory.code == filterCriteria.subCategoryCode)
                });
            }

            if(filterCriteria.getFirstN != undefined && filterCriteria.getFirstN != null && filterCriteria.getFirstN != '')
            {
                data.data = data.data.slice(0, filterCriteria.getFirstN);
            }
        }
    };

    const getProducts = async (setDataCallBack, filterCriteria) => {
        setLoadingState(true);

        const url = `${process.env.REACT_APP_SERVER_URL}/api/products/getProducts`;
        const fetchObject = 
        {
            method: 'GET',
            credentials: 'include',
            mode: 'cors',
        };

        try{
            const res = await fetch(url, fetchObject);
            const data = await res.json();

            await filterData(data, filterCriteria);

            setDataCallBack(data);
            setLoadingState(false);
            return data;
        }
        catch(error){
            console.log(`Failed to fetch products with error: ${error}`);
            setLoadingState(false);
        }
    };

    return {loadingState, getProducts};
};

export default useGetProducts;