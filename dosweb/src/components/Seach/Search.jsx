import React, {useRef} from 'react';
import './Search.css';

const Search = () => {
    const searchModalRef = useRef();

    const showSearchModal = async (e) => {
        searchModalRef.current.classList.add('shown');
    };

    const hideSearchModal = async (e) => {
        searchModalRef.current.classList.remove('shown');
    };

    const performSearch = async (e) => {

    };

    return(<div className='search-component'>
        <i onClick={showSearchModal} className="search-icon fa-solid fa-magnifying-glass"></i>
        <div ref={searchModalRef} className='search-panel-modal'>
            <i onClick={hideSearchModal} className="search-icon-close fa-solid fa-xmark"></i>

            <input className='search-input' placeholder='Search'></input>
            <div onClick={performSearch} className='perform-search-icon-container'>
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    </div>);
};

export default Search;