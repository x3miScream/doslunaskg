import React, {useState} from 'react';

const useGetProducts = () => {
    const [loadingState, setLoadingState] = useState(false);
    const getProducts = async (setDataCallBack) => {
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
            
            setDataCallBack(data);
            setLoadingState(false);
            return data;
        }
        catch(error){
            console.log(`Failed to fetch categories with error: ${error}`);
            setLoadingState(false);
        }
    };

    return {loadingState, getProducts};
};

export default useGetProducts;