import React from 'react';
import './HeaderCardListItem.css';

const HeaderCardListItem = (props) => {
    const {cardListItem} = props;
    const styleObject = {
        backgroundImage: `url(${cardListItem.image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
        
    return(<div className='header-card-list-item' style={styleObject}>
        {cardListItem.infoAlignment === 1 ? <div class='card-vertical-pillar-right'></div> : <div class='card-vertical-pillar-left'></div>}
        
        <div className='card-info-section-left'>
            {
                cardListItem.infoAlignment === 1 ? '' : 
                <>
                    <div className='card-info-header'>
                        <div class='card-horizontal-pillar-left'></div>
                        <h2>{cardListItem.name}</h2>
                    </div>
                    <div className='card-info-category'><h4>{cardListItem.category}</h4></div>
                    <div className='card-info-description'><p>{cardListItem.description}</p></div>
                    <div className='card-info-read-more'><button>READ MORE</button></div>
                </>
            }
        </div>
        <div className='card-info-section-right'>
        {
                cardListItem.infoAlignment === 0 ? '' : 
                <>
                    <div className='card-info-header'>
                    <div class='card-horizontal-pillar-right'></div>
                        <h2>{cardListItem.name}</h2>
                    </div>
                    <div className='card-info-category'><h4>{cardListItem.category}</h4></div>
                    <div className='card-info-description'><p>{cardListItem.description}</p></div>
                    <div className='card-info-read-more'><button>READ MORE</button></div>
                </>
            }
        </div>
    </div>);
};

export default HeaderCardListItem;