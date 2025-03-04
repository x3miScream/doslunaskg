import React, {useState, useEffect} from 'react';
import './TopCategories.css';
import CategoryItem from '../CategoryItem/CategoryItem.jsx';

const TopCategories = () => {
    const [categories, setCategories] = useState({
        data: []
    });

    const loadCategoriesAsync = async () => {
        const url = `${process.env.REACT_APP_SERVER_URL}/api/categories/getCategories`;
        const fetchObject = 
        {
            method: 'GET',
            credentials: 'include',
            mode: 'cors',
        };

        try{
            const res = await fetch(url, fetchObject);
            const data = await res.json();
            
            setCategories(data);
        }
        catch(error){
            console.log(`Failed to fetch categories with error: ${error}`);
        }
    };

    const initializePage = async () => {
        await loadCategoriesAsync();
    };

    useEffect(() => {
        initializePage();
    }, []);

    return(<div className='top-categories-section'>
        <div className='top-categories-list'>
            {
                (!categories.data || categories.data == undefined || categories.data.length < 1) ? '' : categories.data.slice(0, 3).map((item, index) => {
                    return <CategoryItem key={index} categoryItem={item}></CategoryItem>
                })
            }
        </div>
    </div>);
};

export default TopCategories;