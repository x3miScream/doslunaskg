import React, {useState} from 'react';

const useGetImage = () => {
    const [loadingState, setLoadingState] = useState(false);

    const getImageById = async (fileId, setUrlCallBack) => {
        setLoadingState(true);

        const url = `${process.env.REACT_APP_SERVER_URL}/api/files/getFile/${fileId}`;
        const fetchObject = 
        {
            method: 'GET',
            credentials: 'include',
            mode: 'cors',
        };

        try{
            const res = await fetch(url, fetchObject);
            const data = await res.json();
            
            setUrlCallBack(`${process.env.REACT_APP_SERVER_URL}/${data.data.url}`);
            setLoadingState(false);
            return data;
        }
        catch(error){
            console.log(`Failed to fetch categories with error: ${error}`);
            setLoadingState(false);
        }
    };

    return {loadingState, getImageById};
};

export default useGetImage;