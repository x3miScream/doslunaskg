import React from 'react';
import {Link} from 'react-router-dom';

import './HeaderSocials.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HeaderSocials = () => {
    return(<div className='header-socials-container app-default-padded'>
        <div className='follow-us-text'>
            Follow us on social media
        </div>
        <div className='social-icon-secion'>
            <Link className="social-icon-link" to='www.google.com' target='_blank' are-label='Instagram'>
                <i className="fa-brands fa-instagram"></i>
            </Link>

            <Link className="social-icon-link" to='www.google.com' target='_blank' are-label='Faceboook'>
                <i className="fa-brands fa-facebook"></i>
            </Link>
            
            <Link className="social-icon-link" to='www.google.com' target='_blank' are-label='Faceboook'>
                <i className="fa-brands fa-tiktok"></i>
            </Link>
            
            <Link className="social-icon-link" to='www.google.com' target='_blank' are-label='Faceboook'>
                <i className="fa-brands fa-square-youtube"></i>
            </Link>
        </div>
    </div>) 
};

export default HeaderSocials;