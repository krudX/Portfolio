import React from "react";
import { Link } from "react-router-dom";
import '../MobileHeader/mobileHeader.styles.scss';

const MobileHeader = () => {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <header className="mobile-header">
            <div className="container mobile-nav">

                <div className="logo-container">
                    <div className="logo">
                        {/* <Link to='/'>pratham.<span className="highlight">design</span></Link> */}
                        <Link to='/'><img src="https://res.cloudinary.com/krude/image/upload/v1681239249/Portfolio/pratham_logo_dark_nvp0pk.svg" alt="Prathamesh Bankar Portfolio" /></Link>
                    </div>
                </div>

                <div className="menu-open" onClick={() => {setIsMenuOpen(!isMenuOpen)}}>
                    <img src="https://res.cloudinary.com/krude/image/upload/v1680875013/Portfolio/icon-hamburger_aunyio.png" alt="menu-open" />
                </div>

                <div className={(isMenuOpen ? 'mobile-menu isOpen' : 'mobile-menu isClosed')} >
                    <div className="menu-close" onClick={() => {setIsMenuOpen(!isMenuOpen)}}>
                        <img src="https://res.cloudinary.com/krude/image/upload/v1680875270/Portfolio/icon-close_uyamqo.svg" alt="menu-close" />
                    </div>

                    <ul className="main-menu">
                        <li className="menu-item"><a href="/#projects" className="">Projects</a></li>
                        <li className="menu-item"><a href="/#about" className="">About</a></li>
                        <li className="menu-item"><a href="/#services" className="">Services</a></li>
                        <li className="menu-item"><a href="/#contact" className="">Contact</a></li>
                    </ul>
                </div>

            </div>
        </header>
    )
}

export default MobileHeader;