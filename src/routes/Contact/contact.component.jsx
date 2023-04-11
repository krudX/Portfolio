import { Link } from "react-router-dom";
import { socials } from "../../data";
import ContactForm from "../../components/ContactForm/contactForm.component";

import '../Contact/contact.styles.scss';

const Contact = () => {
    return (
        <main>

            <div className="container contact-container">

                <div className="contact-column left">

                    <div className="element-title">Get in Touch</div>

                    <ContactForm />

                </div>

                <div className="contact-column right">

                    <div className="contact-details">

                        <div className="element-title">Contact</div>

                        <a href="mailto:pratham.dbankar@gmail.com" className="button button-alt button-outline">pratham.dbankar@gmail.com</a>

                    </div>
                    
                    <div className="contact-details">

                        <div className="element-title">Socials</div>

                        {
                            socials.map(social => {
                                return (
                                    <Link key={social.username} to={social.profileUrl} target="_blank" className="button button-alt button-outline">{social.smName}</Link>
                                )
                            })
                        }

                    </div>
                </div>

            </div>

        </main>
    )
}

export default Contact;