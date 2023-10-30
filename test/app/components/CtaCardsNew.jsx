import React from 'react';
import Swiper from './Swiper';
import ctaCards from '../styles/ctaCards.module.scss'
import { Button } from './Button'
import { DimensionalModule } from './DimensionalModule'

export const CtaCardsNew = () => {
    const handleChildLoaded = () => {
        console.log("x")
    };


    const slide1Content = (

        <>
            <div card="1" className={`${ctaCards.card} card-in-1`}>
                <div className={ctaCards.head}>
                    <DimensionalModule
                        filePath={'/astro_vars/builder.gltf'}
                        isVisible={true}
                        // isPaused={true}
                        // canvasStyles={{
                        //     width: '100%',
                        //     height: '100%'
                        // }}
                        intensity={3}
                        lightX={10}
                        lightY={10}
                        lightZ={10}
                        rotation={[0, 0, 0]}
                        scale={[1.5, 1.5, 1.5]}
                        position={[0, -2.2, 1]}
                        animations={
                            {
                                floating: false
                            }
                        }
                        hasOrbitControls={true}
                        onChildLoaded={handleChildLoaded}
                    >
                    </DimensionalModule>
                </div>
                <div className={ctaCards.body}>
                    <h6>I love creating.<span><br></br>So do you?</span></h6>

                    <Button lable={"Check out my Creations"} spacing={"default"} type={"gold"} shadow="true" />
                </div>
            </div>
        </>
    );

    const slide2Content = (
        <>
            <div card="2" className={`${ctaCards.card} card-in-2`}>
                <div className={ctaCards.head}>
                    <DimensionalModule
                        filePath={'/astro_vars/techno.gltf'}
                        isVisible={true}
                        // isPaused={true}
                        // canvasStyles={{
                        //     width: '100%',
                        //     height: '100%'
                        // }}
                        intensity={3}
                        lightX={10}
                        lightY={10}
                        lightZ={10}
                        rotation={[0, 0, 0]}
                        scale={[1.5, 1.5, 1.5]}
                        position={[0.3, -2.2, 1]}
                        animations={
                            {
                                floating: false
                            }
                        }
                        hasOrbitControls={false}
                        onChildLoaded={handleChildLoaded}
                    >
                    </DimensionalModule>
                </div>
                <div className={ctaCards.body}>
                    <h6>I love technology.<br></br> <span>So do you?</span></h6>

                    <Button lable={"Check out my Stack"} spacing={"default"} shadow="true" type={"gold"} />
                </div>
            </div>
        </>
    );

    const slide3Content = (
        <>
            <div card="3" className={`${ctaCards.card} card-in-3`}>
                <div className={ctaCards.head}>
                    <DimensionalModule
                        filePath={'/astro_vars/curious.gltf'}
                        isVisible={true}
                        // isPaused={true}
                        // canvasStyles={{
                        //     width: '100%',
                        //     height: '100%'
                        // }}
                        intensity={3}
                        lightX={10}
                        lightY={10}
                        lightZ={10}
                        rotation={[-0.1, -1, -0.5]}
                        scale={[1.5, 1.5, 1.5]}
                        position={[0, -2, 0]}
                        animations={
                            {
                                floating: false
                            }
                        }
                        hasOrbitControls={true}
                        onChildLoaded={handleChildLoaded}
                    >
                    </DimensionalModule>
                </div>
                <div className={ctaCards.body}>
                    <h6>I am curious.<br></br><span>So are you?</span></h6>

                    <Button lable={"Check out my CV"} spacing={"default"} shadow="true" type={"gold"} />
                </div>
            </div>
        </>
    );

    // Add more slide content variables as needed

    const swiperSlides = [slide1Content, slide2Content, slide3Content];

    const swiperSettings = {
        // navigation: true,
        // pagination: true,
        spaceBetween: 20,
        slidesPerView: 3,
        // centerInsufficientSlides: true,
        // centeredSlides: true,
        // Add more settings as needed
    };

    return (
        <div className={ctaCards.wrapper}>
            <Swiper slides={swiperSlides} swiperSettings={swiperSettings} />
        </div>
    );
};


