import { Fragment, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { services } from "../../data";
import ServiceCard from "../ServiceCard/serviceCard.components";

import '../Services/services.styles.scss';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";

const Services = () => {

    const swiperRef = useRef();

    return  (
        <Fragment>
            <section className="services">

                <div className="section-name">
                    <div className="index">2</div>
                    <div className="subtext">Services & Expertise</div>
                </div>

                <div className="section-head">
                    <div className="section-title">
                        What I Offer
                    </div>

                    <div className="slider-navigation">
                        <div onClick={() => swiperRef.current?.slidePrev()} className="nav-arrow left"><img src="https://res.cloudinary.com/krude/image/upload/v1679767594/Portfolio/icon-arrow_left_ciuleh.svg" alt="" /></div>
                        <div onClick={() => swiperRef.current?.slideNext()} className="nav-arrow right"><img src="https://res.cloudinary.com/krude/image/upload/v1679767594/Portfolio/icon-arrow_right_whhinc.svg" alt="" /></div>
                    </div>
                </div>

                <Swiper
                    // slidesPerView={3}
                    spaceBetween={16}
                    speed={1000}
                    freeMode={true}
                    // loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: true,
                    }}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    breakpoints={{
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 16,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 16,
                        },
                        // 1440: {
                        //     slidesPerView: 3,
                        //     spaceBetween: 16,
                        // },
                        1600: {
                            slidesPerView: 4,
                            spaceBetween: 16,
                        },
                        }}
                    // navigation={true}
                    
                    modules={[Autoplay, Navigation]}
                    className="services-carousel"
                >

                    {
                        services.map(service => {
                            return (
                                <SwiperSlide>
                                    <div className="slide-content">
                                        <ServiceCard key={service.title} icon={service.icon} title={service.title} description={service.description}/>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                
                </Swiper>
            </section>
        </Fragment>
    )
}

export default Services;