import React, { useState, useEffect } from 'react';
import './Testimonials.css';
import testimonials from '../../assets/data/testimonials.js';

const Testimonials = () => {
    const [testimonialsPage, setTestimonialsPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [testimonialsPerPage, setTestimonialsPerPage] = useState([]);

    const getTotalPages = async () => {
        setTotalPages(Math.ceil(testimonials.length / 3));
    };

    const filterDataByPage = async () => {
        setTestimonialsPerPage([]);
        const result = testimonials.filter((item, index) => {
            return ((index >= testimonialsPage * 3 - 3) && (index < testimonialsPage * 3))
        });
        setTestimonialsPerPage(result);
    };

    const scrollGalery = (direction) => {
        switch(direction){
            case 'left':
                if(testimonialsPage - 1 < 1)
                    setTestimonialsPage(totalPages);
                else
                    setTestimonialsPage((prev) => (prev - 1));
                break;
            case 'right': 
                if((testimonialsPage + 1) > totalPages)
                    setTestimonialsPage(1);
                else    
                    setTestimonialsPage((prev) => (prev + 1));
                break;
        }

        // filterDataByPage();
    };

    useEffect(() => {
        getTotalPages();
    }, []);

    useEffect(() => {
        filterDataByPage();
    }, [testimonialsPage]);

    return(<div className='testimonials-section'>
        <div className='testimonials-section-inner'>
            <div className='testimonials-section-inner-header'>
                <div className='testimonials-section-inner-header-left'>
                    <h3>Testimonials</h3>
                    <h1>Don't Just Take Our Words For It</h1>
                </div>
                <div className='testimonials-section-inner-header-right'>
                    <button onClick={() => {scrollGalery('left')}}><i className="fa-solid fa-arrow-left-long"></i></button>
                    <button onClick={() => {scrollGalery('right')}}><i className="fa-solid fa-arrow-right-long"></i></button>
                </div>
            </div>
            
            <div className='testimonial-card-list'>
                {testimonialsPerPage.map((item, index) => {
                    return (
                        <div key={item.id} className='testimonial-card'>
                            <div className='card-info-top'>
                                <figure className='card-info-top-image'><img src={item.mainImage} alt='Loading...'></img></figure>
                                <div className='card-info-top-name'>
                                    <h4>{item.name}</h4>
                                    <p>{`Customer since ${new Date(item.createdDate).getFullYear()}`}</p>
                                </div>
                            </div>
                            <div className='card-info-bottom'>
                                <p>{item.testimonial}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>)
};

export default Testimonials;