import React, { useState } from 'react';
import './Testimonials.css';
import testimonials from '../../assets/data/testimonials.js';

const Testimonials = () => {
    const [testimonialsPage, setTestimonialsPage] = useState(1);
    const [testimonialsPerPage, setTestimonialsPerPage] = useState([]);

    const filterDataByPage = async () => {
        testimonials.map((item, index) => {
            if((index >= (testimonialsPage * 3 - 3)) && index < (testimonialsPage * 3))
                return item;
        })
    };

    return(<div className='testimonials-section'>
        <div className='testimonials-section-inner'>
            <h3>Testimonials</h3>
            <h1>Don't Just Take Our Words For It</h1>

            <div className='testimonial-card-list'>
                {testimonials.map((item, index) => {
                    return (
                        <div className='testimonial-card'>
                            {item.name}
                        </div>
                    )
                })}
            </div>
        </div>
    </div>)
};

export default Testimonials;