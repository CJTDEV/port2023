import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import slider from '../styles/slider.module.scss'
import { useSwiper } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
SwiperCore.use([Navigation]);
import SvgRenderer from "../components/SvgRenderer"

const SwiperComponent = ({ slides, swiperSettings }) => {
    const defaultSettings = {
        navigation: false,
        pagination: false,
        spaceBetween: 20,
        slidesPerView: 1,

        // Add more default settings as needed
    };

    const mergedSettings = { ...defaultSettings, ...swiperSettings };

    let swiper;


    // Function to go to the next slide
    const goNext = () => {
        if (swiper) {
            swiper.slideNext();
        }
    };

    // Function to go to the previous slide
    const goPrev = () => {
        if (swiper) {
            swiper.slidePrev();
        }
    }

    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const handleSlideChange = (swiperInstance) => {
        if (mergedSettings.navigation) {
            setIsBeginning(swiperInstance.isBeginning)
            setIsEnd(swiperInstance.isEnd)
        }
    }

    return (
        <div className={`${slider.main}`}>
            <Swiper {...mergedSettings} onSwiper={(swiperInstance) => (swiper = swiperInstance)} onSlideChange={(swiperInstance) => handleSlideChange(swiperInstance)}>
                {slides.map((slideContent, index) => (
                    <SwiperSlide key={index}>
                        {slideContent}
                    </SwiperSlide>
                ))}
            </Swiper>
            {
                mergedSettings.navigation &&
                <div className={`${slider.navigation}`}>

                    <div className={`${slider.navigation__button} ${slider.navigation__button__prev}  swiper-button-prev`} onClick={goPrev} style={{ visibility: isBeginning ? 'hidden' : 'visible' }}>
                        <SvgRenderer src={"icons/arrow-left.svg"} size={24} />
                    </div>

                    <div className={`${slider.navigation__button} ${slider.navigation__button__next}  swiper-button-next`} onClick={goNext} style={{ visibility: isEnd ? 'hidden' : 'visible' }}>
                        <SvgRenderer src={"icons/arrow.svg"} size={24} />
                    </div>
                </div>

            }

        </div>
    );
};

export default SwiperComponent;
