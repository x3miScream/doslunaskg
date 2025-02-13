import React from 'react';
import './ClaimsCerts.css';

import claimsCertsData from '../../assets/data/claims_certs.js'

const ClaimsCerts = () => {
    return(<div className='claims-cersts-secion'>
        <figure className='claims-cersts-secion-image-secion'><img className='claims-cersts-secion-image' src={claimsCertsData.mainImage} alt='Loading...'></img></figure>
    </div>);
};

export default ClaimsCerts;