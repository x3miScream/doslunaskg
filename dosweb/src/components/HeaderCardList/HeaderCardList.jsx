import React, {useState} from 'react';
import HeaderCardListItem from '../HeaderCardListItem/HeaderCardListItem.jsx';
import all_card_list_items from '../../assets/data/card_list_items.js';

import './HeaderCardList.css';

const HeaderCardList = () => {
    const [currentActiveItem, setCurrentActiveItem] = useState(0);

    const scrollList = async (action) => {
        switch(action)
        {
            case 'left':
                if(currentActiveItem - 1 < 0)
                    setCurrentActiveItem(all_card_list_items.length - 1);
                else
                    setCurrentActiveItem(currentActiveItem - 1);
            case 'right':
                if(currentActiveItem + 1 >= all_card_list_items.length)
                    setCurrentActiveItem(0);
                else
                    setCurrentActiveItem(currentActiveItem + 1);
                break;
        }
    };

    return(<div className='header-card-list-container'>
        
        <span onClick={() => {scrollList('left')}} className='slider-nav-button left'><i className="fa-solid fa-chevron-left"></i></span>
        {all_card_list_items.map((item, index) => {return (item.id == currentActiveItem ? <HeaderCardListItem key={item.id} cardListItem={item}></HeaderCardListItem> : '')})}
        <span onClick={() => {scrollList('right')}} className='slider-nav-button right'><i className="fa-solid fa-chevron-right"></i></span>
    </div>)
};

export default HeaderCardList;