import React from 'react';
import './AboutUs.css';

import aboutUsSecitonImage from '../../assets/images/items/1/1.jpg';
import logoImage from '../../assets/images/logo/Dos_Lunas_Logo_Centered-Square.svg'

const AboutUs = () => {
    return(<div className='about-us-page'>
        <div className='about-us-page-header'>
            <figure><img src={logoImage} alt='Loading...'></img></figure>
            <h1>Company Profile</h1>
        </div>

        <div className='about-us-about-us-info-container app-default-padded'>
            <div className='about-us-info-top m-t-m'>
                <div className='about-us-info-top-left'>
                    <h1>ABOUT US</h1>
                    <p className='know-more-hint'>KNOW MORE ABOUT DOSLUNAS COSMETICS</p>
                    <hr className='divider-solid-black'></hr>
                    <h1><span className='color-orange'>We</span> Are DOSLUNAS Cosmetics</h1>
                    <p>Our story began in London, England in 1990. We develop our own skin and hair care products that made with the most innovative and effective natural ingredients offered by scientifically designed cosmetics based on our expertise and developed in collaboration with leading physicists, physicians, plastic surgeons and dermatologists.</p>
                </div>
                <div className='about-us-info-top-right'>
                    <h1>a<span className='color-orange'> CREATIVE </span>teamwork</h1>
                </div>
            </div>
            <div className='about-us-info-bottom m-t-m'>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
            </div>
        </div>

        <div className='about-us-about-uniqueness-container app-default-padded'>
            <h1>uniqueness</h1>
        </div>

        <div className='about-us-our-services-container app-default-padded'>
            <h1>our services</h1>
        </div>

        <div className='about-us-our-values-container app-default-padded'>
            <h1>our valuese</h1>
        </div>

        <div className='about-us-our-customers-container app-default-padded'>
            <h1>our customers</h1>
        </div>
    </div>)
};

export default AboutUs;