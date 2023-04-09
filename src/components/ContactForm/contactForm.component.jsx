import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import '../ContactForm/contactForm.styles.scss';

const ContactForm = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_nl90cmj', 'template_0y7gj5f', form.current, '1LI4mKxqeO8xjWeym')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <form ref={form} onSubmit={sendEmail} className='contact-form'>

            <div className="form-input">
                <label>Name</label>
                <input type="text" name="user_name" />
            </div>

            <div className="form-input">
                <label>Email</label>
                <input type="email" name="user_email" />
            </div>
            
            <div className="form-input">
                <label>Service</label>
                <select name="service" id="service-select">
                    <option value="Landing Page Design">Landing Page Design</option>
                    <option value="Web & App Design">Web & App Design</option>
                    <option value="Logo & Branding">Logo & Branding</option>
                    <option value="Web Development">Web Development</option>
                    <option value="UX Consulting">UX Consulting</option>
                </select>
            </div>

            <div className="form-input">
                <label>Message</label>
                <textarea name="message" rows={6} />
            </div>

            <input type="submit" value="Send" className='button button-fill'/>

        </form>
    )
}

export default ContactForm;