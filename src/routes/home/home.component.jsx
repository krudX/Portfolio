import { Fragment, useEffect } from "react";
import '../home/home.styles.scss';
import Hero from "../../components/Hero/hero.component";
import Services from "../../components/Services/services.component";
import FeaturedProjects from '../../components/FeaturedProjects/featuredProjects.component';
import Contact from "../../components/Contact/contact.component";

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

                    <Services />

                    {/* <Contact /> */}

                </div>
            </main>
        </Fragment>
    )
}

export default Home;