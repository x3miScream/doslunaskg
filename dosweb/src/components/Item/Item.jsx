import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import useGetImage from '../../hooks/useGetImage.jsx';
import './Item.css';    

const Item = (props) => {
    const {item, isShowName, isShowPopularInfo, isShowCreatedDate} = props;
    const {id, name, description, mainImage, category,
        popularTitle, popularDescription, createdDate
    } = item;
    const {loadingState, getImageById} = useGetImage();
    const [mainImageSrc, setMainImageSrc] = useState('');


    const loadImage = async () => {
        await getImageById(mainImage, setMainImageSrc);
    };

    const initializePage = async () => {
        await loadImage();
    };

    useEffect(() => {
        initializePage();
    }, []);

    return(<div className='item'>
        {item.isNew ? <span className='new-item-badge'>New</span> : ''}
        <figure className='item-image-section'>
            {mainImageSrc == '' ? '' : 
                <Link to={`/product/${id}`}><img className='item-image' onClick={window.scrollTo(0,0)} src={mainImageSrc}></img></Link>
            }
        </figure>

        {
            !isShowName ? '' : 
            <>
                <p>{name}</p>
            </>
        }

        <div className='item-popular-section'>
        {
            !isShowPopularInfo ? '' : 
            <>
                <h3 className='item-popular-section-popular-title'>{popularTitle}</h3>
                <p>{popularDescription}</p>
            </>
        }

        {
            !isShowCreatedDate ? '' : 
            <>
                <h4 className='item-created-info'>{`IN ${category} / ON ${createdDate}`}</h4>
            </>
        }
        </div>
    </div>)
}

export default Item;