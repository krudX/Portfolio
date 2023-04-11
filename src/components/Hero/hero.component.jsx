import '../Hero/hero.styles.scss';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="subtitle">Hey, I’m Prathamesh ✌🏼</div>
                <div className="title">A designer focused on creating digital products, brands and experiences.</div>

                <div className="cta-container">
                    <a href="/#projects" className="button button-fill">Projects</a>
                    <a href="/#services" className="button button-outline">Services</a>
                </div>
            </div>

            <div className="hero-image">
                <img src="https://res.cloudinary.com/krude/image/upload/v1679815650/Portfolio/faizur-rehman-yapBRdPWxik-unsplash_mgjcje.jpg" alt="hero" />
            </div>

        </section>
    )
}

export default Hero;