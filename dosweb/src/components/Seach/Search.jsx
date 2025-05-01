import React, {useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.css';

const Search = () => {
    const searchModalRef = useRef();
    const searchInput = useRef();
    const navigate = useNavigate();

    const showSearchModal = async (e) => {
        searchModalRef.current.classList.add('shown');
    };

    const hideSearchModal = async (e) => {
        searchModalRef.current.classList.remove('shown');
    };

    const performSearch = async (e) => {
        hideSearchModal();
        navigate(`products/-/-/${searchInput.current.value}`);
    };

    function search(formData) {
        const query = formData.get("query");
        alert(`You searched for '${query}'`);
    }

    

    const onSearchFormSubmit = async (e) => {
        e.preventDefault();
        hideSearchModal();
        navigate(`products/-/-/${searchInput.current.value}`);
    }

    return(<div className='search-component'>
        <i onClick={showSearchModal} className="search-icon fa-solid fa-magnifying-glass"></i>
        <div ref={searchModalRef} className='search-panel-modal'>
            <i onClick={hideSearchModal} className="search-icon-close fa-solid fa-xmark"></i>

            <form action={'#'} onSubmit={onSearchFormSubmit}>
                <input ref={searchInput} className='search-input' placeholder='Поиск'></input>
                <div onClick={performSearch} className='perform-search-icon-container'>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </form>
        </div>
    </div>);
};

export default Search;