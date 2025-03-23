import React, {useRef} from 'react';
import ContactUsImage from '../../assets/images/contactUs/contactPersonImage.webp';
import NewArrivals from '../../components/NewArrivals/NewArrivals.jsx';

import './ContactUs.css';

const ContactUs = () => {
    const SubmitButton = useRef();

    const onConcentCheckboxChange = async (e) => {
        if(e.target.checked)
        {
            SubmitButton.current.removeAttribute('disabled');
            SubmitButton.current.classList.remove('disabled');
        }
        else{
            SubmitButton.current.setAttribute('disabled', 'disabled');
            SubmitButton.current.classList.add('disabled');
        }
    };


    return(<div className='contact-us-page'>
        <div className='contact-us-page-header'>
            <h1>Contact Us</h1>
        </div>

        <div className='contact-us-form-section app-default-padded m-t-s'>
            <div className='contact-us-form-section-left'>
                <figure>
                    <img src={ContactUsImage} alt="Loading..." />
                </figure>
            </div>
            <div className='contact-us-form-section-right'>
                <h1>Contact us</h1>

                <span>If you have any questions please contact us at: <span className='color-orange'>official@doslunas.uk</span></span>

                <h3>Or through the following form:</h3>

                <form className='contact-us-form'>
                    <label>Name*</label>
                    <input placeholder='Enter your name'></input>

                    <label className='m-t-xs'>Email*</label>
                    <input placeholder='Enter your email address'></input>
                    
                    <label className='m-t-xs'>Phone (Optinal)</label>
                    <input placeholder='Enter your email address'></input>
                    
                    <label className='m-t-xs'>Message*</label>
                    <textarea rows={5}></textarea>

                    <span className=' m-t-xs'>
                        <input type="checkbox" onChange={onConcentCheckboxChange}/>
                        <label className='m-t-xs'>I consent to having this website store my information so they can reply my message.</label>
                    </span>

                    <button ref={SubmitButton} className='custom-button disabled m-t-xs'>Send Message</button>
                </form>
            </div>
        </div>

        <div className='contact-us-footer app-default-padded'><NewArrivals></NewArrivals></div>
    </div>)
};

export default ContactUs;