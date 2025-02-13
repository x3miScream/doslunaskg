import React from 'react';
import {Link} from 'react-router-dom';
import './ExtraInfo.css';

const ExtraInfo = () => {
    return(<div className='extra-info-secion'>
        <div className='extra-info-secion-about-us'>
            <h2>About Us</h2>
            <p>Blending naturally inspired and derived ingredients into breakthrough formulas, the goal with every product is healthy-looking beauty that connects us to nature and community.</p>
        </div>
        <div className='extra-info-secion-links'>
            <h2>Links</h2>
            <Link>Terms & Conditions</Link>
            <Link>Return Policy</Link>
            <Link>Pick Location</Link>
        </div>
        <div className='extra-info-secion-socials'>
            <h2></h2>
            <div className='extra-info-secion-socials-links'>
                <Link><i className="fa-brands fa-square-instagram"></i><span className='extra-info-secion-socials-links-text'>INSTAGRAM</span></Link>
                <Link><i className="fa-brands fa-facebook"></i><span className='extra-info-secion-socials-links-text'>FACEBOOK</span></Link>
                <Link><i className="fa-brands fa-tiktok"></i><span className='extra-info-secion-socials-links-text'>TIKTOK</span></Link>
                <Link><i className="fa-brands fa-youtube"></i><span className='extra-info-secion-socials-links-text'>YOUTUBE</span></Link>
                <Link><i className="fa-solid fa-envelope"></i><span className='extra-info-secion-socials-links-text'>EMAIL</span></Link>
            </div>
        </div>
        <div className='extra-info-secion-contacts'>
            <h2>Contact Us</h2>
            <Link><span className='extra-info-secion-contacts-email'>official@doslunas.kg</span></Link>
            <div>
                <button className='extra-info-secion-contacts-button custom-button'>Send a Message</button>
            </div>
        </div>
    </div>)
};

export default ExtraInfo;