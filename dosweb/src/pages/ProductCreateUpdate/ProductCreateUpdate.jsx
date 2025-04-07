import React, {useRef, useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './ProductCreateUpdate.css';
import PhotosUploader from '../../components/PhotoUploader/PhotosUploader';

const ProductCreateUpdate = () => {
    const {productId} = useParams();
    const nameRef = useRef();
    const descriptionRef = useRef();
    const howToRef = useRef();
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [productItem, setProductItem] = useState({
        _id: productId,
        name: '',
        description: '',
        otherImagesData: [],
        otherImages: [],
    });   


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
            console.log(res);
            const data = await res.json();
            
            if(data.data != undefined && data.data != null)
            {
                setProductItem(data.data);
                setAddedPhotos(data.data.otherImagesData);
            }

            
            console.log(data);
        }
        catch(error){
            console.log(`Failed fetching product details: ${error}`);
        }
    };


    
    const saveProductItem = async (e) => {
        const newPhotos = addedPhotos.filter((item) => { return productItem.otherImages.indexOf(item._id) < 0});
        const photoIdsCombined = addedPhotos.map((item, index) => {return item._id});

        setProductItem({...productItem, otherImages: photoIdsCombined});

        const actionCreate = 'createProduct';
        const actionUpdate = 'updateProduct';

        const url = `${process.env.REACT_APP_SERVER_URL}/api/products/${productId == 0 ? actionCreate : actionUpdate}`;
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
            
            console.log(res);
            console.log(data);
        }
        catch(error){
            console.log(`Failed fetching product details: ${error}`);
        }
    };



    useEffect(() => {
        getProductDetails()
    }, [productId]);

    return(<div className='product-create-update-page app-default-padded m-b-s'>
        <label>Product Name</label>
        <input ref={nameRef} placeholder='Product Name' value={productItem.name} onChange={(e) => setProductItem({...productItem, name: e.target.value})}></input>

        <label>Product Description</label>
        <textarea ref={descriptionRef} placeholder='Product Description' value={productItem.description} onChange={(e) => setProductItem({...productItem, description: e.target.value})}></textarea>

        <label>How To Use</label>
        <textarea ref={howToRef} placeholder='How To Use'></textarea>

        <label>Photos ({addedPhotos.length})</label>
        <PhotosUploader addedPhotos={addedPhotos} onChangeAddedPhotos={setAddedPhotos}/>


        <div className='create-update-buttons m-t-m'>
            <button className='custom-button' onClick={saveProductItem}>Save</button>
        </div>
    </div>);
};

export default ProductCreateUpdate;