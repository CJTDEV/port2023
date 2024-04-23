import section from '../styles/sections.module.scss'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CtaCards } from '../components/CtaCards'
import { use, useEffect, useState } from 'react';
import { Button } from '../components/Button'
import projects from '../styles/projects.module.scss'
import slider from '../styles/slider.module.scss'
import Image from 'next/image'
import test from "../../public/images/project-shop-plan.png"
import { DimensionalModule } from '../components/DimensionalModule'
import SvgRenderer from "../components/SvgRenderer"
import { Swiper, SwiperSlide } from 'swiper/react';

const ProjectsCards = ({ cards }) => {
    useEffect(() => {
        console.log(cards)
    })

    const swiperSettings = {
        slidesPerView: 'auto',
        // centeredSlides: true,
        spaceBetween: 40,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    }

    let swiper;

    // Function to go to the next slide
    const goNext = () => {
        if (swiper) {
            console.log("nerxt")
            swiper.slideNext();
        }
    };

    // Function to go to the previous slide
    const goPrev = () => {
        if (swiper) {
            console.log("prev")
            swiper.slidePrev();
        }
    }

    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const handleSlideChange = (swiperInstance) => {

        setIsBeginning(swiperInstance.isBeginning)
        setIsEnd(swiperInstance.isEnd)

    }


    return (

        <>
            <Swiper className={`${projects.slider}`} {...swiperSettings} onSwiper={(swiperInstance) => (swiper = swiperInstance)} onSlideChange={(swiperInstance) => handleSlideChange(swiperInstance)}>
                {cards.map((item, index) => (

                    <SwiperSlide className={`${projects.card}`} key={index}>
                        <div className={`${projects.card__header}`}>
                            <Image
                                src={"/images/vpg.png"}
                                width={375}
                                height={250}
                                alt={"project imag"}
                            ></Image>
                            <div className={`${projects.card__info}`}>
                                <h6 className={`very-light`}>{item.subtitle}</h6>
                                <h4 className={`light`}>{item.title}</h4>
                            </div>
                            <div className={`${projects.card__tech}`}>
                                {item.tech.map((tech, index) => (
                                    <span className={`pill copy-small`} key={index}>{tech.name}</span>
                                ))}
                            </div>
                        </div>
                        <div className={`${projects.card__body}`}>

                            <p className={`copy`}>{item.description}</p>
                        </div>
                        <div className={`${projects.card__footer}`}>
                            <Button
                                type={"default"}
                                spacing={"small"}
                                label={"View Project"}
                                href={item.link}
                                customStyle={{ width: "100%" }}
                            ></Button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={`${slider.navigation}`}>

                <div className={`${slider.navigation__button} ${projects.slider__button} ${slider.navigation__button__prev}  swiper-button-prev`} onClick={goPrev} style={{ visibility: isBeginning ? 'hidden' : 'visible' }}>
                    <SvgRenderer src={"icons/arrow-left.svg"} size={24} />
                </div>

                <div className={`${slider.navigation__button} ${projects.slider__button} ${slider.navigation__button__next}  swiper-button-next`} onClick={goNext} style={{ visibility: isEnd ? 'hidden' : 'visible' }}>
                    <SvgRenderer src={"icons/arrow.svg"} size={24} />
                </div>
            </div>
        </>
    )
}


export default ProjectsCards;
