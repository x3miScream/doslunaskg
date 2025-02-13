import React, {useEffect} from 'react';
import './AppFloatingButton.css';

const AppFloatingButton = () => {
    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth',});
    };

    const onWindowScrollEvent = (e) => {
        const header = document.querySelector('.floating-button-section');
        const scrollTop = window.scrollY;
        scrollTop >= 40 ? header.classList.add('button-shown') : header.classList.remove('button-shown');
    };

    useEffect(() => {
        window.addEventListener('scroll', onWindowScrollEvent);

        return () => {
            window.removeEventListener('scroll', onWindowScrollEvent);
        };
    }, []);

    return(<div className='floating-button-section'>
        <button onClick={scrollToTop} className='custom-button scroll-top-button'><i className="fa-solid fa-arrow-up"></i></button>
    </div>);
};

export default AppFloatingButton;