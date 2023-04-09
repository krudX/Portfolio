import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import '../footer/footer.styles.scss';

const Footer = () => {

    return (
        <Fragment>
            <Outlet />
            <footer id="contact">
                <div className="container">

                    <div className="copyright">
                        Copyright © {new Date().getFullYear()}. Designed & developed by Prathamesh Bankar.
                    </div>

                    <a href="/#" className="link">Terms of Service</a>
                    
                </div>
            </footer>
        </Fragment>
    )
}

export default Footer;