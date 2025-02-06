import React from 'react';
import TopProducts from '../TopProducts/TopProducts';
import ExtraInfo from '../ExtraInfo/ExtraInfo';
import ClaimsCerts from '../ClaimsCerts/ClaimsCerts';
import Copyright from '../Copyright/Copyright';

const Footer = () => {
    return(<div>
        Footer
        <TopProducts></TopProducts>
        <ExtraInfo></ExtraInfo>
        <ClaimsCerts></ClaimsCerts>
        <Copyright></Copyright>
    </div>);
};

export default Footer;