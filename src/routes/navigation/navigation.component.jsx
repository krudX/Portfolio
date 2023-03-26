import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import '../navigation/navigation.styles.scss';

const Navigation = () => {
    return (
        <Fragment>
            <header>
                <div className="container">
                    <div className="logo-container">
                        <div className="logo">
                            <Link to='/'>bankar.<span className="highlight">design</span></Link>
                        </div>
                    </div>
                    <div className="menu-container">
                        <ul className="main-menu">
                            <li className="menu-item"><a href="#" className="active">Projects</a></li>
                            <li className="menu-item"><a href="#" className="">About</a></li>
                            <li className="menu-item"><a href="#" className="">Services</a></li>
                            <li className="menu-item"><a href="#" className="cta">Let's Talk </a></li>
                        </ul>
                    </div>
                </div>
            </header>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;