import React from 'react';
import ExtraInfo from '../ExtraInfo/ExtraInfo';
import ClaimsCerts from '../ClaimsCerts/ClaimsCerts';
import Copyright from '../Copyright/Copyright';
import ProductsQuickAccess from '../ProductsQuickAccess/ProductsQuickAccess';

import './Footer.css';

const Footer = () => {
    return(<div>
        {/* <ProductsQuickAccess></ProductsQuickAccess> */}

        <div className='home-section section-feature app-default-padded'>
            <ExtraInfo></ExtraInfo>
            <hr className='divider-thin'></hr>
            <ClaimsCerts></ClaimsCerts>
            <hr className='divider-solid'></hr>
            <Copyright></Copyright>
        </div>
    </div>);
};

export default Footer;