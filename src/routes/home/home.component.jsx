import { Fragment, useEffect } from "react";
import '../home/home.styles.scss';
import Hero from "../../components/Hero/hero.component";
import Services from "../../components/Services/services.component";
import FeaturedProjects from '../../components/FeaturedProjects/featuredProjects.component';
import ContactUs from "../../components/ContactUs/contactUs.component";
import About from "../../components/About/about.component";

const Home = () => {

    useEffect(() => {
        document.title = "Portfolio | Prathamesh Bankar";  
    }, []);
   

    return (
        <Fragment>
            <main>
                <div className="container">

                    <Hero />

                    <FeaturedProjects />

                    <About />

                    <Services />

                    <ContactUs />

                </div>
            </main>
        </Fragment>
    )
}

export default Home;