import { Fragment } from "react";
import '../Contact/contact.styles.scss';

const Contact = () => {
    return (
        <Fragment>
            <section className="contact" id="contact">
                <div className="section-name">
                    <div className="index">3</div>
                    <div className="subtext">Get in touch</div>
                </div>

                <div className="section-head">

                    <div className="section-title">
                        Have a project in?
                    </div>

                </div>

                <div className="section-content">

                    <div className="section-description">
                        Look no further! Whether you need a new website designed and built from scratch, a fresh brand identity, or a revamp of your existing online presence, I can help. Contact me today via email or phone and let's start discussing your project requirements. I'm excited to help bring your vision to life!
                    </div>

                    <a href="#" className="button button-fill">Get in Touch</a>

                    <div className="contact-details">

                        <div className="email contact-item">
                            <div className="icon">
                                <img src="https://res.cloudinary.com/krude/image/upload/v1680718979/Portfolio/icon-email_h12k85.svg" alt="email" />
                            </div>
                            <a href="mailto:pratham.dbankar@gmail.com" className="button button-alt button-outline">pratham.dbankar@gmail.com</a>
                        </div>

                        <div className="phone contact-item">
                            <div className="icon">
                                <img src="https://res.cloudinary.com/krude/image/upload/v1680718979/Portfolio/icon-phone_o5n8op.svg" alt="phone" />
                            </div>
                            <a href="tel:919284224570" className="button button-alt button-outline">+91 92842 24570</a>
                        </div>

                    </div>

                </div>
            </section>
        </Fragment>
    )
}

export default Contact