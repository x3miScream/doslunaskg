import React from 'react';
import './FollowUs.css';

import followUsData from '../../assets/data/followUsData.js';

const FollowUs = () => {
    return(<div className='follow-us-section'>
        <div className='follow-us-header'>
            <h1><i className="fa-brands fa-instagram"></i></h1>
            <h4>Подпишитесь на нас в Instagram</h4>
        </div>
        <div className='follow-us-cardlist'>
            {followUsData.map((item, index) => {return(<div key={index} className='follow-us-card'>
                <figure className='follow-us-card-image-section'><img className='follow-us-card-image' src={item.mainImage} alt='Loading...'></img></figure>
            </div>)})}
        </div>
    </div>);
};

export default FollowUs