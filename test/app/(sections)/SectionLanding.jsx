'use client';
import section from '../styles/sections.module.scss'
import landing from '../styles/landing.module.scss'
import { DimensionalModule } from '../components/DimensionalModule'
import { CtaCardsNew } from '../components/CtaCardsNew'
import { Journey } from '../components/Journey'
import { Button } from '../components/Button'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { useEffect, useState, useRef, useContext } from 'react'
import { useWindowDimensions } from "../../hooks/useWindowsDimensions";
import { GlobalContext } from '../GlobalContext'
import Image from 'next/image'
import SvgRenderer from "../components/SvgRenderer"

export default function SectionLanding() {
    const { globalState, setGlobalState } = useContext(GlobalContext);
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);
    const rocketFilePath = '/rocket_purple/untitled.gltf'
    const astroFilePath = '/astro/scene.gltf'
    const builderFilePath = '/astro_vars/builder.gltf'
    let [scrollCounter, setScrollCounter] = useState(1)
    const [isRocketVisible, setIsRocketVisible] = useState(true)
    const [isRocketBGVisible, setIsRocketBGVisible] = useState(true)
    const dimensions = useWindowDimensions()
    const moduleRef = useRef(null)
    const containerRef = useRef(null)


    const [endTrigger, setEndTrigger] = useState(2000);

    const [isFirstSceneOver, setIsFirstSceneOver] = useState(false);
    const [isSeccondSceneOver, setIsSeccondSceneOver] = useState(false);
    const [isFirstSceneVisibleAgain, setIsFirstSceneVisibleAgain] = useState(false)
    const [allScenesOver, setAllScenesOver,] = useState(false)
    const [aboutInfoPositions, setAboutInfoPositions] = useState(
        {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    )
    const [astroPosition, setAstroPosition] = useState([-0.8, -1.5, -0.8])
    const [astroScale, setAstroScale] = useState([0.7, 0.7, 0.7])
    const [astroCanvasStyle, setAstroCanvasStyle] = useState(
        {
            width: '500px',
            height: '1000px',
            position: 'absolute',
            left: 0,
            top: 0
        }
    )
    const [sceneTwoStyles, setSceneTwoStyles] = useState(null)

    //load
    const [loadedChildren, setLoadedChildren] = useState(0);

    const handleChildLoaded = () => {
        setLoadedChildren(prevLoaded => prevLoaded + 1);
    };

    useEffect(() => {
        if (loadedChildren === 2) {
            console.log("all loaded")
            setGlobalState(prevState => ({
                ...prevState,
                dimensionalModulesLoaded: true
            }))
        }
    }, [loadedChildren])

    //scrollTrigger

    useEffect(() => {
        if (isFirstSceneOver) {
            const canvas = moduleRef.current.getBoundingClientRect()
            const canvasWidth = canvas.width
            const canvasHeight = canvas.height
            const container = containerRef.current.getBoundingClientRect()
            const containerWidth = container.width
            const aboutInfoPositions = {
                left: (containerWidth / 2),
                top: (canvasHeight / 3) - 50
            };
            setAboutInfoPositions(aboutInfoPositions)
        }
    }, [isFirstSceneOver])



    useEffect(() => {

        if (loadedChildren == 2) {
            document.body.style.overflowY = "auto"
            const canvas = moduleRef.current.getBoundingClientRect()
            const container = containerRef.current.getBoundingClientRect()
            const containerWidth = container.width
            const containerHeight = container.height
            const canvasWidth = canvas.width
            const canvasHeight = canvas.height
            const windowXCenter = ((containerWidth / 2) - (canvasWidth / 2))
            const windowYCenter = -((dimensions.height / 2) - canvasHeight)

            const triggerId = 'firstSceneTrigger'; // Unique ID
            const firstSceneTrigger = gsap.timeline({
                scrollTrigger: {
                    id: triggerId, // Assign the unique ID
                    trigger: '.trigger-element',
                    start: 'top top',
                    end: `bottom+=5000 top`,
                    scrub: 2,
                    markers: true,
                    pinSpacer: true,
                    pin: true,
                },
            });


            const infoInElements = gsap.utils.toArray('.info-in');

            firstSceneTrigger.to('.rocket-out', { duration: 5, transform: "translate(100%, -100%)" })

            firstSceneTrigger.to('.text-out', { duration: 5, opacity: 0, left: "40%", delay: 1 })

            firstSceneTrigger.to('.element-out', { duration: 5, opacity: 0 })

            firstSceneTrigger.to('.element-out', { pointerEvents: 'none', visibility: 'hidden', onComplete: () => { setIsRocketVisible(false) } })

            firstSceneTrigger.to('.canvas-out', { duration: 5, opacity: 0 }, '<')

            firstSceneTrigger.to('.astro-in', { duration: 10, transform: `translateX(-${windowXCenter}px)`, onReverseComplete: () => { setIsFirstSceneVisibleAgain(true), setIsRocketVisible(true), setIsFirstSceneOver(false) }, onComplete: () => { setIsFirstSceneOver(true), setIsFirstSceneVisibleAgain(false) } })

            firstSceneTrigger.to('.subtitle-in', { duration: 5, opacity: 1, delay: 50 })
            firstSceneTrigger.to('.title-in', { duration: 5, opacity: 1, delay: 50 })


            // Set the initial delay value
            let delayValue = 40;

            // Loop through each .info-in element
            infoInElements.forEach((infoInElement, index) => {

                if (index == 5) {
                    firstSceneTrigger.to(infoInElement, { delay: delayValue, duration: 5, opacity: 1, '--dot-height': '16px', '--dot-width': '16px', width: '500px', borderBottom: '2px solid #ffffff79' })
                    const infoTextIn = infoInElement.querySelector('.info-text-in');
                    firstSceneTrigger.to(infoTextIn, {
                        duration: 5, opacity: 1, onComplete: () => {
                            setGlobalState(prevState => ({
                                ...prevState,
                                scrolledPastLanding: true
                            }))
                        }
                    });
                    delayValue += 4;

                }

                firstSceneTrigger.to(infoInElement, { delay: delayValue, duration: 5, opacity: 1, '--dot-height': '16px', '--dot-width': '16px', width: '500px', borderBottom: '2px solid #ffffff79' })
                // Apply animations to the .info-text-in child element
                const infoTextIn = infoInElement.querySelector('.info-text-in');
                firstSceneTrigger.to(infoTextIn, { duration: 5, opacity: 1 });
                delayValue += 4;


            })

            // firstSceneTrigger.to('.journey-in', {
            //     opacity: 1
            // })

            // firstSceneTrigger.from("#maskPath", {
            //     duration: 4,
            //     drawSVG: 0,
            // });

            // firstSceneTrigger.to('.cards-in', { opacity: 1, visibility: 'visible' })
            // firstSceneTrigger.to('.card-in-1', { opacity: 1, y: 100 + '%', visibility: 'visible' })
            // firstSceneTrigger.to('.card-in-2', { opacity: 1, y: 100 + '%', visibility: 'visible' })
            // firstSceneTrigger.to('.card-in-3', { opacity: 1, y: 100 + '%', visibility: 'visible', onComplete: () => { setGlobalState({ scrolledPastLanding: true }) } })

        }
    }, [loadedChildren])







    return (
        <div ref={containerRef} className={`${section.container} ${section.container_is_landing} trigger-element`}>
            <div className={`${landing.inner} all-wrapper`}>
                {/* First Scene*/}
                <div className={`${landing.headline} text-out`}>
                    <h1>
                        <span className={`headline font--inverted font--uppercase font--italic`}>Just a Webdev</span>
                        <span className={`headline font--uppercase font--italic`}>Looking for his</span>
                        <span className={`headline font--uppercase font--italic`}>next adventure</span>
                    </h1>
                </div>
                <div className={`${landing.scroll} element-out`}>
                    <SvgRenderer src={"icons/scroll.svg"} size={40} />
                    <p className={`copy-tiny`}>Start scrolling to discover.</p>
                </div>
                {/* Seccond Scene*/}
                <div is-visible={`${isFirstSceneOver}`} className={`${landing.about} about-trigger`}>
                    <div className={`${landing.about__title}`}><span className={`subtitle subtitle--inverted font--italic font--frank subtitle-in`}>This is me</span><h4 className={`headline title-in`}>Cougar J. T. Bélec</h4></div>

                    <div is-right={'true'} style={{ right: (aboutInfoPositions.left + 45) + 'px', marginTop: '-100px' }} className={`${landing.about__info} ${landing.about__info__right} info-in`}>
                        <p className={`${landing.about__info__text} info-text-in`}>3+ Years of Expierence in Web Development</p>
                    </div>
                    <div is-right={'true'} style={{ right: (aboutInfoPositions.left + 45) + 'px' }} className={`${landing.about__info} ${landing.about__info__right} info-in`}>
                        <p className={`${landing.about__info__text} info-text-in`}>Native in English, German and JavaScript</p>
                    </div>
                    <div is-right={'true'} style={{ right: (aboutInfoPositions.left + 45) + 'px', marginTop: '100px' }} className={`${landing.about__info} ${landing.about__info__right} info-in`}>
                        <p className={`${landing.about__info__text} info-text-in`}>Based in Vienna, Austria</p>
                    </div>

                    <div style={{ left: (aboutInfoPositions.left + 45) + 'px', marginTop: '-150px' }} className={`${landing.about__info} info-in`}>
                        <p className={`${landing.about__info__text} info-text-in`}>3+ Years of Expierence in Web Development</p>
                    </div>
                    <div style={{ left: (aboutInfoPositions.left + 45) + 'px', marginTop: "-50px" }} className={`${landing.about__info} info-in`}>
                        <p className={`${landing.about__info__text} info-text-in`}>Native in English, German and JavaScript</p>
                    </div>
                    <div style={{ left: (aboutInfoPositions.left + 45) + 'px', marginTop: '50px' }} className={`${landing.about__info} info-in`}>
                        <p className={`${landing.about__info__text} info-text-in`}>Based in Vienna, Austria</p>
                    </div>
                </div>

                {/* 3d Modules*/}
                <div className={`${landing.rocket} rocket-out`}>
                    <DimensionalModule
                        isVisible={isRocketVisible}
                        isPaused={false}
                        filePath={rocketFilePath}
                        intensity={2}
                        lightX={10}
                        lightY={10}
                        lightZ={10}
                        canvasStyles={{
                            width: '500px',
                            height: '1000px',
                            position: 'absolute',
                            left: 0,
                            top: 0
                        }}
                        rotation={[0.5, 4, 0.5]}
                        position={[0, 0, 0]}
                        scale={[2.2, 2.2, 2.2]}
                        animations={
                            {
                                rotation: { direction: 'pos', axis: 'y', speed: 0.001 }
                            }
                        }
                        hasOrbitControls={true}
                        onChildLoaded={handleChildLoaded}
                    >
                    </DimensionalModule>
                </div>

                <div className={`${landing.astro} astro-in`} style={sceneTwoStyles}>
                    <DimensionalModule
                        ref={moduleRef}
                        filePath={astroFilePath}
                        isVisible={true}
                        isPaused={isFirstSceneOver}
                        applySceneTwo={isFirstSceneOver}
                        applySceneOne={isFirstSceneVisibleAgain}
                        canvasStyles={astroCanvasStyle}
                        intensity={2}
                        lightX={10}
                        lightY={10}
                        lightZ={10}
                        rotation={[0.3, -0.8, -0.1]}
                        position={astroPosition}
                        scale={astroScale}
                        animations={
                            {
                                floating: true
                            }
                        }
                        hasOrbitControls={false}
                        onChildLoaded={handleChildLoaded}
                    >
                    </DimensionalModule>
                </div>



            </div>
            {/* {allChildrenLoaded()} */}
        </div >

    )
}


