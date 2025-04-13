import React from 'react';
import './HeaderCardListItem.css';

const HeaderCardListItem = (props) => {
    const {cardListItem} = props;
    const styleObject = {
        backgroundImage: `url(${cardListItem.image})`
    }
        
    return(<div className='header-card-list-item'>
        <div className='header-card-list-item-background-image' style={styleObject}>
            
        </div>
        <div className='header-card-list-item-data'>
            {cardListItem.infoAlignment === 1 ? <div className='card-vertical-pillar-right'></div> : <div className='card-vertical-pillar-left'></div>}
            <div className='card-info-section-left'>
                {
                    cardListItem.infoAlignment === 1 ? '' : 
                    <>
                        <div className='card-info-header'>
                            <div className='card-horizontal-pillar-left'></div>
                            <h2>{cardListItem.name}</h2>
                        </div>
                        <div className='card-info-category'><h4>{cardListItem.category}</h4></div>
                        <div className='card-info-description'><p>{cardListItem.description}</p></div>
                        <div className='card-info-read-more'><button>ЧИТАТЬ ДАЛЕЕ</button></div>
                    </>
                }
            </div>
            <div className='card-info-section-right'>
            {
                    cardListItem.infoAlignment === 0 ? '' : 
                    <>
                        <div className='card-info-header'>
                        <div className='card-horizontal-pillar-right'></div>
                            <h2>{cardListItem.name}</h2>
                        </div>
                        <div className='card-info-category'><h4>{cardListItem.category}</h4></div>
                        <div className='card-info-description'><p>{cardListItem.description}</p></div>
                        <div className='card-info-read-more'><button>ЧИТАТЬ ДАЛЕЕ</button></div>
                    </>
                }
            </div>
        </div>
    </div>);
};

export default HeaderCardListItem;