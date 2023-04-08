import { Fragment } from "react";
import { Link } from "react-router-dom";
import '../DesktopHeader/desktopHeader.styles.scss';

const DesktopHeader = () => {
    return (
        <Fragment>
            
            <header>
                <div className="container desktop-nav">

                    <div className="logo-container">
                        <div className="logo">
                            <Link to='/'>pratham.<span className="highlight">design</span></Link>
                        </div>
                    </div>

                    <div className="menu-container">

                        <ul className="main-menu">
                            <li className="menu-item"><a href="#projects" className="">Projects</a></li>
                            <li className="menu-item"><a href="#about" className="">About</a></li>
                            <li className="menu-item"><a href="#services" className="">Services</a></li>
                            <li className="menu-item"><a href="#contact" className="cta">Let's Talk </a></li>
                        </ul>

                    </div>


                </div>
            </header>

        </Fragment>
    )
}

export default DesktopHeader;