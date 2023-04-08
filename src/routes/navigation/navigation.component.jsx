import { Fragment, useEffect,useState } from "react";
import { Outlet } from "react-router-dom";
import MobileHeader from "../../components/MobileHeader/mobileHeader.component";
import DesktopHeader from "../../components/DesktopHeader/desktopHeader.component";

const Navigation = () => {

    const [isDesktop, setDesktop] = useState(window.innerWidth > 480);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 480);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });


    return (
        <Fragment>
            {
                isDesktop ? (
                    <div><DesktopHeader /></div>
                ) : (
                    <div><MobileHeader /></div>
                )
            }    
            <Outlet />
        </Fragment>
    )
}

export default Navigation;