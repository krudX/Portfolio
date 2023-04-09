import '../ContactUs/contactUs.styles.scss';

const ContactUs = () => {
    return (
        <section className="contact-us">
            <div className="section-name">
                <div className="index">3</div>
                <div className="subtext">Get in touch</div>
            </div>

            <div className="section-head">

                <div className="section-title">
                    Have a project in mind?
                </div>

            </div>

            <div className="section-content">

                <div className="section-description">
                    Whether you need a new website designed and built from scratch, a fresh brand identity, or a revamp of your existing online presence, I can help. Contact me via email or fill out a form and let's start discussing your project requirements. I'm excited to help bring your vision to life!
                </div>

                <a href="/contact" className="button button-fill">Get in Touch</a>

            </div>
        </section>
    )
}

export default ContactUs