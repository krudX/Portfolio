import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import '../footer/footer.styles.scss';

const Footer = () => {
    return (
        <Fragment>
            <Outlet />
            <footer id="contact">
                <div className="container">

                    <div className="footer-column footer-title">

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
                                Look no further! Whether you need a new website designed and built from scratch, a fresh brand identity, or a revamp of your existing online presence, I can help. Contact me today via email or phone and let's start discussing your project requirements. I'm excited to help bring your vision to life!
                            </div>

                            <a href="#" className="button button-fill">Get in Touch</a>

                        </div>

                    </div>

                    <div className="footer-column contact-details">

                        <div className="column-title">Contact</div>

                        <div className="column-body">

                            {/* <div className="icon">
                                <img src="https://res.cloudinary.com/krude/image/upload/v1680718979/Portfolio/icon-email_h12k85.svg" alt="email" />
                            </div> */}

                            <a href="mailto:pratham.dbankar@gmail.com" className="button button-alt button-outline">pratham.dbankar@gmail.com</a>

                        </div>


                    </div>

                    <div className="footer-column socials">

                        <div className="column-title">Socials</div>

                        <div className="column-body">

                            <Link to="https://dribbble.com/pratham_bankar" target="_blank" className="button button-alt button-outline">Dribbble</Link>
                            <Link to="#" target="_blank" className="button button-alt button-outline">Github</Link>
                            <Link to="#" target="_blank" className="button button-alt button-outline">Instagram</Link>

                        </div>

                    </div>
                    
                </div>
            </footer>
        </Fragment>
    )
}

export default Footer;