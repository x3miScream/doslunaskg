import React, {useRef, useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import PhotosUploader from '../../components/PhotoUploader/PhotosUploader';
import Dropdown from 'react-dropdown';
import {useNavigate} from 'react-router-dom';

import './ProductCreateUpdate.css';
import 'react-dropdown/style.css';

const ProductCreateUpdate = () => {
    const {productId} = useParams();
    const nameRef = useRef();
    const codeRef = useRef();
    const descriptionRef = useRef();
    const howToRef = useRef();
    const categoryDDLRef = useRef();
    const subCategoryDDLRef = useRef();

    const navigate = useNavigate();
    
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [productItem, setProductItem] = useState({
        _id: productId,
        name: '',
        description: '',
        otherImagesData: [],
        otherImages: [],
    });

    const [categoryOptions, setCategoryOptions] = useState([
        // {
        //     value: 0,
        //     label: ''
        // }
    ]);   


    const [subCategoryOptions, setSubCategoryOptions] = useState([
        // {
        //     value: 0,
        //     label: ''
        // }
    ]);


    const onCategoryDropdownChange = async (e) => {
        setProductItem(prev => {return {...prev, categoryId: e.value}});

        getSubCategories(e.value);
        
        subCategoryDDLRef.current.state.selected = {
            value: '',
            label: 'Select...'
        }
    }


    const onSubCategoryDropdownChange = async (e) => {
        setProductItem(prev => {return {...prev, subCategoryId: e.value}});
    }


    const initializePage = async() => {
        await getDropDownLists()
        await getProductDetails();
    }


    const getDropDownLists = async () => {
        await getCategories();
    };


    const getCategories = async () => {
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
            
            if(data.data != undefined && data.data != null)
            {
                setCategoryOptions(data.data.map((item, index) => {return {value: item._id, label: item.name}}));
            }
        }
        catch(error){
            console.log(`Failed fetching product details: ${error}`);
        }
    };


    const getSubCategories = async (categoryId) => {
        const url = `${process.env.REACT_APP_SERVER_URL}/api/category/${categoryId}/getSubCategories`;
        const fetchObject = 
        {
            method: 'GET',
            credentials: 'include',
            mode: 'cors',
        };

        try{
            const res = await fetch(url, fetchObject);
            const data = await res.json();
            
            if(data.data != undefined && data.data != null)
            {
                setSubCategoryOptions(data.data.map((item, index) => {return {value: item._id, label: item.name}}));
            }
        }
        catch(error){
            console.log(`Failed fetching product details: ${error}`);
        }
    };


    const getProductDetails = async () => {

        const url = `${process.env.REACT_APP_SERVER_URL}/api/products/getProduct/${productId}`;
        const fetchObject = 
        {
            method: 'GET',
            credentials: 'include',
            mode: 'cors',
        };

        try{
            const res = await fetch(url, fetchObject);
            const data = await res.json();
            
            if(data.data != undefined && data.data != null)
            {
                setProductItem(data.data);
                setAddedPhotos(data.data.otherImagesData);
                getSubCategories(data.data.categoryId);

                if(data.data.categoryId != undefined && data.data.categoryId != '' && data.data.categoryId != null){
                    categoryDDLRef.current.state.selected = {
                        value: data.data.category._id,
                        label: data.data.category.name
                    }
                }

                if(data.data.subCategoryId != undefined && data.data.subCategoryId != '' && data.data.subCategoryId != null){
                    subCategoryDDLRef.current.state.selected = {
                        value: data.data.subCategory._id,
                        label: data.data.subCategory.name
                    }
                }
            }
        }
        catch(error){
            console.log(`Failed fetching product details: ${error}`);
        }
    };


    const displayErrorMessages = (messages) => {
        // const error =  `<ul>${messages.map((item, index) => { return `<li>${item}</li>`})}</ul>`
        const error =  messages.join('\n');
        alert(error);
    }

    const deleteProductItem = async (e) => {
        const confirmed = window.confirm('Are you sure you want to delete this item?');

        if(confirmed)
        {
            const url = `${process.env.REACT_APP_SERVER_URL}/api/products/deleteProduct/${productId}`;
            const fetchObject = 
            {
                method: 'DELETE',
                headers: {'Content-Type': "application/json"},
                credentials: 'include',
                mode: 'cors'
            };

            try{
                const res = await fetch(url, fetchObject);
                const data = await res.json();

                switch(res.status){
                    case 200:
                        navigate(`/product-create-update/0`);
                        window.location.reload();
                        return;
                        break;
                    case 400:
                        displayErrorMessages(data.messages);
                        break;
                    default:
                        break;
                }
            }
            catch(error){
                console.log(`Failed deleting product details: ${error}`);
            }
        }
    };
    
    const saveProductItem = async (e) => {
        const newPhotos = addedPhotos.filter((item) => { return productItem.otherImages.indexOf(item._id) < 0});
        const photoIdsCombined = addedPhotos.map((item, index) => {return item._id});
        const isNew = productId == 0;

        setProductItem({...productItem, otherImages: photoIdsCombined});

        const actionCreate = 'createProduct';
        const actionUpdate = 'updateProduct';

        const url = `${process.env.REACT_APP_SERVER_URL}/api/products/${isNew ? actionCreate : actionUpdate}`;
        const fetchObject = 
        {
            method: 'POST',
            headers: {'Content-Type': "application/json"},
            credentials: 'include',
            mode: 'cors',
            body: JSON.stringify({...productItem, otherImages: photoIdsCombined})
        };

        try{
            const res = await fetch(url, fetchObject);
            const data = await res.json();

            switch(res.status){
                case 200:
                    if(isNew)
                    {
                        alert('Create Success');
                        navigate(`/product/${data._id}`);
                    }
                    else
                        alert('Update Success');
                    break;
                case 400:
                    displayErrorMessages(data.messages);
                    break;
                default:
                    break;
            }
        }
        catch(error){
            console.log(`Failed fetching product details: ${error}`);
        }
    };



    useEffect(() => {
        initializePage();
    }, [productId]);

    return(<div className='product-create-update-page app-default-padded m-b-s'>
        <label className='m-t-s'>Product Code</label>
        <input disabled={productId != 0} ref={codeRef} placeholder='Product Code' value={productItem.code} onChange={(e) => setProductItem({...productItem, code: e.target.value})}></input>

        <label className='m-t-s'>Product Name</label>
        <input ref={nameRef} placeholder='Product Name' value={productItem.name} onChange={(e) => setProductItem({...productItem, name: e.target.value})}></input>

        <label className='m-t-s'>Product Description</label>
        <textarea ref={descriptionRef} placeholder='Product Description' value={productItem.description} onChange={(e) => setProductItem({...productItem, description: e.target.value})}></textarea>

        <label className='m-t-s'>Category</label>
        <Dropdown ref={categoryDDLRef} options={categoryOptions} onChange={onCategoryDropdownChange} />

        <label className='m-t-s'>Sub Category</label>
        <Dropdown ref={subCategoryDDLRef} options={subCategoryOptions} onChange={onSubCategoryDropdownChange} />

        <label className='m-t-s'>How To Use</label>
        <textarea ref={howToRef} placeholder='How To Use'></textarea>

        <span className='m-t-s'>
            <input type='checkbox' checked={productItem.isNewProduct} onChange={(e) => {setProductItem(prev => {return {...prev, isNewProduct: e.target.checked}})}}></input>
            <label>New</label>
        </span>

        <span className='m-t-s'>
            <input type='checkbox' checked={productItem.isPopular} onChange={(e) => {setProductItem(prev => {return {...prev, isPopular: e.target.checked}})}}></input>
            <label>Popular</label>
        </span>

        <span className='m-t-s'>
            <input type='checkbox' checked={productItem.isOnSale} onChange={(e) => {setProductItem(prev => {return {...prev, isOnSale: e.target.checked}})}}></input>
            <label>On Sale</label>
        </span>

        <label className='m-t-s'>Photos ({addedPhotos.length})</label>
        <PhotosUploader addedPhotos={addedPhotos} onChangeAddedPhotos={setAddedPhotos}/>


        <div className='create-update-buttons m-t-m'>
            <button className='custom-button' onClick={saveProductItem}>Save</button>
            {
                productId == 0 ? '' : <button className='custom-button' onClick={deleteProductItem}>Delete</button>
            }
            {
                <button className='custom-button' onClick={(e) => {navigate(`/product/${productId}`)}}>View</button>
            }
        </div>
    </div>)
};

export default ProductCreateUpdate;