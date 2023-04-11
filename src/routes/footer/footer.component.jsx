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
                        Copyright © {new Date().getFullYear()}. Prathamesh Bankar
                    </div>

                    <Link to="/" className="link">Terms of Service</Link>
                    
                </div>
            </footer>
        </Fragment>
    )
}

export default Footer;