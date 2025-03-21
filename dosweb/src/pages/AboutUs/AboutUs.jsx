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

        <div className='about-us-about-uniqueness-container'>
            <div className='app-default-padded'>
                <div className='uniqueness-section-top'>
                <h1>Uniqueness</h1>
                </div>
                <div className='uniqueness-section-bottom'>
                    <div className='uniqueness-section-left'>
                        <span className='color-orange'> <h4>WITH DOSLUNAS</h4> </span>
                        <hr className='divider-solid-black'></hr>

                        <h1><span className='color-orange'> High </span>Quality</h1>
                        <p>We constantly strive to develop the best cosmetics that are free of harmful ingredients on the skin and hair, as the goal of each product is to radiate the beauty of a healthy appearance that connects us with nature and society.</p>

                        <h1><span className='color-orange'>  </span>Affordability</h1>
                        <p>Our prices accommodate all designs and products allowing for various price ranges available for our customers. How we distinguish ourselves from others? DOS LUNAS relies in its products on the selection of high-quality raw materials.</p>
                    </div>

                    <div className='uniqueness-section-right'>
                        <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                    </div>
                </div>
            </div>
        </div>

        <div className='about-us-our-services-container app-default-padded'>
            <div className='about-us-our-services-section-top'>
                <h1>OUR SERVICES</h1>
            </div>
            <div className='about-us-our-services-section-bottom'>
                <div className='about-us-our-services-section-left'>
                    <span className='color-orange'> <h4>PROFESSIONAL & TRUSTWORTHY</h4> </span>
                    <hr className='divider-solid-black'></hr>

                    <h1><span className='color-orange'> DOSLUNAS </span>Marketing Services</h1>
                    <p>DOS LUNAS offers b2b and b2c services to retail stores and through our online services at our brances in the Gulf, Middle East, and other countries around the world.</p>
                </div>

                <div className='about-us-our-services-section-right'>
                    <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                </div>
            </div>
        </div>

        <div className='about-us-our-values-container'>
            <div className="our-values-inner app-default-padded">
                <div className='our-values-section-top'>
                    <h1>OUR VALUES</h1>
                </div>
                <div className='our-values-section-bottom'>
                    <span className='color-orange'> <h4>HOW WE DISTINGUISH OURSELVES FROM OTHERS</h4></span>
                    <hr className='divider-solid-black'></hr>



                    <h1><span className='color-orange'> <i className="fa-solid fa-flag"></i> </span>Mission Statement</h1>
                    <p>All races, all sexes, conceived to embrace all consumers. to be the world's leading skincare. to meet customers' need for superior quality services and to provide a secure & challenging work environment for all employees. hygiene and personal care with brands that help people feel good, look good and get more out of life. As an organization, it commits itself to high standards and creative development with an enterprise concept that all pains have gained.</p>

                    <h1><span className='color-orange'> <i className="fa-solid fa-eye"></i> </span>Our Vision</h1>
                    <p>Is to be the number one choice for skincare, health and well-being to help people feel more confident about their appearance</p>

                    <h1><span className='color-orange'> <i className="fa-regular fa-gem"></i> </span>Our Values</h1>
                    <p>Our core values include commitment, innovation, integrity and service. we strive to create a unique culture for our customers and employees, while we look forward to growth and advancement. We also value integrity and loyalty in providing the best customer service for our customers.</p>

                    <h1><span className='color-orange'> <i className="fa-solid fa-people-group"></i> </span>Growing Family</h1>
                    <p>We always strive to be a global brand, striving for its presence in all parts of the world through the high quality of our products more than care</p>

                    <h1><span className='color-orange'> <i className="fa-solid fa-chart-line"></i> </span>Basis Of Success</h1>
                    <p>We believe that teamwork have a very big advantage in making progress and development exist in society" we find that when there is hard work and cooperation by many individuals, it becomes the easiest work. also we find that the spirit of cooperation makes there is an exchange of experience, which is an essential link in the success of any work</p>
                </div>
            </div>
        </div>

        <div className='about-us-our-customers-container app-default-padded'>
            <div className='our-customers-section-top'>
                <h1>OUR CUSTOMERS</h1>
                
            </div>
            <div className='our-customers-section-bottom'>
                <span className='color-orange'> <h4>GET TO KNOW DOSLUNAS CUSTOMERS</h4></span>
                <hr className='divider-solid-black'></hr>
                <h1><span className='color-orange'> We </span>Are Doslunas Customers</h1>
            </div>
            <div className='our-customers-section-customers-grid'>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
            </div>
        </div>
    </div>)
};

export default AboutUs;