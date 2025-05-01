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
            <h1>Связаться с нами</h1>
        </div>

        <div className='contact-us-form-section app-default-padded m-t-s'>
            <div className='contact-us-form-section-left'>
                <figure>
                    <img src={ContactUsImage} alt="Loading..." />
                </figure>
            </div>
            <div className='contact-us-form-section-right'>
                <h1>Связаться с нами</h1>

                <span>Если у вас есть вопросы, свяжитесь с нами по адресу: <span className='color-orange'>official@doslunas.uk</span></span>

                <h3>Или через следующую форму:</h3>

                <form className='contact-us-form'>
                    <label>Имя*</label>
                    <input placeholder=''></input>

                    <label className='m-t-xs'>Email*</label>
                    <input placeholder=''></input>
                    
                    <label className='m-t-xs'>Телефон (необязательно)</label>
                    <input placeholder=''></input>
                    
                    <label className='m-t-xs'>Сообщение*</label>
                    <textarea rows={5}></textarea>

                    <span className=' m-t-xs'>
                        <input type="checkbox" onChange={onConcentCheckboxChange}/>
                        <label className='m-t-xs'>Я даю согласие на то, чтобы этот сайт хранил мою информацию, чтобы они могли ответить на мое сообщение.</label>
                    </span>

                    <button ref={SubmitButton} className='custom-button disabled m-t-xs'>Send Message</button>
                </form>
            </div>
        </div>

        <div className='contact-us-footer app-default-padded'><NewArrivals></NewArrivals></div>
    </div>)
};

export default ContactUs;