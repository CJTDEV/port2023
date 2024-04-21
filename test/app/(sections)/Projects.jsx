'use client';
import section from '../styles/sections.module.scss'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState, useRef, createRef, useContext } from 'react';
import ProjectHighlight from '../components/ProjectHighlight'
import projects from '../styles/projects.module.scss'
import Image from 'next/image'
import { DimensionalModule } from '../components/DimensionalModule'
import { GlobalContext } from '../GlobalContext'
import SvgRenderer from "../components/SvgRenderer"
import projectData from '/lib/data/projects'
import { Swiper, SwiperSlide } from 'swiper/react';
import slider from '../styles/slider.module.scss'
import { Navigation } from 'swiper';





export default function Projects() {
    const projectList = JSON.parse(JSON.stringify(projectData))
    const { globalState } = useContext(GlobalContext);
    gsap.registerPlugin(ScrollTrigger);
    const [activeIndex, setActiveIndex] = useState(2)
    const [pagIndex, setPagIndex] = useState(1)
    const swiperRef = createRef()
    let swiper



    useEffect(() => {
        if (activeIndex == 0) {
            setPagIndex(9)
        } else if (activeIndex) {
            setPagIndex(activeIndex)
        }
    }, [activeIndex])

    const swiperSettings = {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 0,
        initialSlide: 2,
        speed: 1000,
        effect: 'fade',
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    }

    const goNext = () => {
        if (swiperRef.current) { // Access Swiper instance using ref
            swiperRef.current.slideNext();
        }
    };

    const goPrev = () => {
        console.log("1")
        if (swiperRef.current) {
            console.log("2")
            swiperRef.current.slidePrev();
        }
    };



    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const handleSlideChange = (swiperInstance) => {
        let currentIndex = swiperInstance.realIndex; // Use realIndex to get the index considering loop
        setActiveIndex(currentIndex);
        setIsBeginning(swiperInstance.isBeginning)
        setIsEnd(swiperInstance.isEnd)

    }





    return (
        <div className={`${projects.wrapper} projects-trigger`}>
            <div className={`${projects.inner}`}>
                <Swiper modules={[Navigation]} className={`${projects.slider}`} {...swiperSettings} onSwiper={(swiperInstance) => (swiper = swiperInstance)} onSlideChange={(swiperInstance) => handleSlideChange(swiperInstance)} onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}>
                    {
                        projectList.entries.map((card, index) => (
                            <SwiperSlide data-active={index == activeIndex} style={{ opacity: index !== activeIndex ? 0.5 : 1 }} className={`${projects.highlight}`} key={index}>
                                <div frame="1" className={`${projects.highlight__frame} highlight-frame-1`}>
                                    <ProjectHighlight
                                        // videoSrc={"/images/sp-vid-1.mp4"}
                                        imgSrc={card.img}
                                        highlightKey={card.id}
                                        subtitle={card.subtitle}
                                        title={card.title}
                                        tech={card.tech}
                                        copy={card.description}
                                        link={card.href}
                                        buttonLink={card.href}
                                    />
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div className={`${projects.disclaimer} copy-tiny text-grey-dark`}>
                    The projects highlighted here were primarily driven by my expertise and efforts, yet they may also reflect the collaborative spirit of an agency environment where various talents converge.
                </div>
                <div className={`${slider.pagination}`}>{pagIndex} / {projectList.entries.length}</div>
                <div className={`${slider.navigation} ${projects.navigation}`}>

                    <div className={`${slider.navigation__button} ${projects.slider__button} ${slider.navigation__button__prev}  swiper-button-prev`} onClick={goPrev} style={{ visibility: isBeginning ? 'hidden' : 'visible' }}>
                        <SvgRenderer src={"icons/arrow-left.svg"} size={24} />
                    </div>

                    <div className={`${slider.navigation__button} ${projects.slider__button} ${slider.navigation__button__next}  swiper-button-next`} onClick={goNext} style={{ visibility: isEnd ? 'hidden' : 'visible' }}>
                        <SvgRenderer src={"icons/arrow.svg"} size={24} />
                    </div>
                </div>

            </div>
        </div>
    )
}