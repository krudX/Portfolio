import { Fragment } from "react";
import '../Contact/contact.styles.scss';

const Contact = () => {
    return (
        <Fragment>
            <section className="contact">
                <div className="section-name">
                    <div className="index">3</div>
                    <div className="subtext">Get in touch</div>
                </div>

                <div className="section-head">

                    <div className="section-title">
                        Looking for creative and professional design services?
                    </div>

                </div>

                <div className="section-content">
                    <div className="section-description">
                        Look no further! Whether you need a new website built from scratch, a fresh brand identity, or a revamp of your existing online presence, I can help. Contact me today via email or phone and let's start discussing your project requirements. I'm excited to help bring your vision to life!
                    </div>

                    <div className="contact-details">
                        
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Contact