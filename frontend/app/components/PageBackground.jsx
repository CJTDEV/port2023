'use clinet';
import background from '../styles/background.module.scss'
import Image from 'next/image'
import { gsap } from 'gsap'
import { useEffect, useState, useRef, useContext } from 'react'

export default function PageBackground() {

    useEffect(() => {
        gsap.to(".rotate img", {
            duration: 30,  // Duration of the rotation animation in seconds
            rotation: -360,  // Rotate 360 degrees (one full circle)
            repeat: -1,  // Infinite repeat
            ease: "linear"  // Linear easing for a constant speed
        });
        gsap.to(".rotate-counter img", {
            duration: 30,  // Duration of the rotation animation in seconds
            rotation: 360,  // Rotate 360 degrees (one full circle)
            repeat: -1,  // Infinite repeat
            ease: "linear"  // Linear easing for a constant speed
        });
        gsap.to(".rotate-45 img", {
            duration: 5,  // Duration of the rotation animation in seconds
            rotation: 20,  // Rotate to +45 degrees
            yoyo: true,  // Yoyo reverses the animation, creating a ping-pong effect
            repeat: -1,  // Infinite repeat
            ease: "linear"  // Linear easing for a constant speed
        });
        gsap.to(".bounce img", {
            duration: 5,  // Duration of the rotation animation in seconds
            x: -100,
            y: -100,
            yoyo: true,  // Yoyo reverses the animation, creating a ping-pong effect
            repeat: -1,  // Infinite repeat
            ease: "linear"  // Linear easing for a constant speed
        });
        gsap.to(".scroll", {
            '--top': '200%',
            duration: 2,
            repeat: -1,
            ease: 'linear',
        })

    }, [])

    useEffect(() => {
        let initialX = window.innerWidth / 2;
        let initialY = window.innerHeight / 2;
        let moveX = 0;
        let moveY = 0;

        // Function to handle mouse move events
        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;

            if (clientX < initialX) {
                moveX -= 0.05;

            } else if (clientX > initialX) {
                moveX += 0.05;

            }

            if (clientY < initialY) {
                moveY -= 0.05;
            } else if (clientY > initialY) {
                moveY += 0.05;
            }

            // Update the background position using GSAP
            gsap.to(".background-move", {
                x: moveX,
                y: moveY,
            });

            // Update initial positions
            initialX = clientX;
            initialY = clientY;
        };

        // Add the event listener for mouse move
        window.addEventListener('mousemove', handleMouseMove);

        // Cleanup: remove the event listener on component unmount
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className={`${background.main}`}>


            <div className={`${background.gradient} gradient-change`}></div>

            {/* <div className={`${background.journey} journey-trigger-bg`}>

                <svg className={`${background.journey__svgEl}`} xmlns="http://www.w3.org/2000/svg" width="1950" height="1200" viewBox="0 0 1400 1200">


                    <path id="drawSVG" stroke="#fff" fill="none" strokeWidth="5" strokeMiterlimit={"5"} d="m1115.76.03c-157.14,21.97-313.24,51.24-467.64,87.8s-307.07,80.34-457.36,131.2c-62.35,21.1-131.95,44.26-169.17,102.77-16.22,25.5-25.3,56.5-20.15,86.71,4.87,28.57,22.74,52.46,45.14,70.04,24.2,19,52.81,31.33,81.68,41.38,34.71,12.07,70.51,20.85,106.78,26.73,73.24,11.88,147.92,12.06,221.71,5.75,154.75-13.23,304.7-55.17,457.05-82.91,79-14.38,159-25.02,239.43-25.32,40.31-.15,80.67,2.3,120.57,8.16,29.51,4.33,58.68,11.03,86.45,22.07,55.29,21.98,106.06,64.7,108.05,128.45,2.35,75.11-54.02,132.91-112.04,171.99-121.31,81.71-266.21,120.02-409.22,141.84-157.45,24.02-317.25,28.72-474.31,55.73-135.75,23.35-271.91,64.72-385.92,144.25-26.48,18.47-51.51,38.94-74.76,61.34-2.32,2.24,1.22,5.77,3.54,3.54,100.17-96.49,231.36-152.61,364.98-185.12,153.75-37.41,312.56-44.47,469.26-62.07,143.8-16.16,289.31-41.75,420.73-104.97,31.97-15.38,63.05-32.9,92.31-53s54.41-41.43,74.79-68.81c37.31-50.12,50.39-120.21,12.5-173.78-31.89-45.08-87.45-67.98-139.56-79.81-72.93-16.56-150.11-17.43-224.39-12.29-157.86,10.91-310.71,54.04-465.73,82.71-147.04,27.19-301.66,42.83-448.12,3.81-33.18-8.84-66.7-19.74-96.8-36.52-26.96-15.04-52.44-36.17-64.04-65.62-12.21-30.99-6.06-65.43,9.74-93.93,17.23-31.1,44.99-53.68,75.93-70.33,31.71-17.06,66.18-28.29,100.19-39.75,37.59-12.67,75.32-24.9,113.19-36.69,75.3-23.43,151.15-45.11,227.46-65.01,153.52-40.04,308.93-72.88,465.53-98.35,37.77-6.14,75.61-11.85,113.5-17.15,3.17-.44,1.82-5.26-1.33-4.82h0Z" />

                    <circle fill="#fff" className={`${background.journey__ball} circle-in`} r="20" cx="10" cy="10"></circle>

                </svg>

                <div className={`${background.journey__overlay}`}>
                    <div data-stop="1" className={`${background.journey__stop} stop-1`}>

                        <div className={`${background.journey__stop__img} stop-img-1`}>
                            <div className={`${background.journey__gradient}`}></div>
                            <Image
                                src={"/images/p1.png"}
                                width={135}
                                height={135}
                                alt={"Planet 1"}
                            />
                        </div>

                    </div>
                    <div data-stop="2" className={`${background.journey__stop} stop-2`}>
                        <div className={`${background.journey__stop__img} stop-img-2`}>
                            <div className={`${background.journey__gradient}`}></div>
                            <Image
                                src={"/images/p3.png"}
                                width={175}
                                height={175}
                                alt={"Planet 3"}
                            />
                        </div>

                    </div>
                    <div data-stop="3" className={`${background.journey__stop} stop-3`}>
                        <div className={`${background.journey__stop__img} stop-img-3`}>
                            <div className={`${background.journey__gradient}`}></div>
                            <Image
                                src={"/images/p2.png"}
                                width={175}
                                height={175}
                                alt={"Planet 2"}
                            />
                        </div>

                    </div>
                    <div data-stop="4" className={`${background.journey__stop} stop-4`}>
                        <div className={`${background.journey__stop__img} stop-img-4`}>
                            <div className={`${background.journey__gradient}`}></div>
                            <Image
                                src={"/images/p3.png"}
                                width={175}
                                height={175}
                                alt={"Planet 3"}
                            />
                        </div>

                    </div>
                </div>
            </div> */}

            <div className={`${background.illustration}`} style={{ top: 50 + '%', left: '10%' }}>
                <Image
                    src={"/images/stars.png"}
                    width={100}
                    height={100}
                    alt={"Smoke Image"}
                    style={{ mixBlendMode: 'screen' }}
                ></Image>
            </div>
            <div className={`${background.illustration}`} style={{ top: 10 + '%', left: 90 + '%' }}>
                <Image
                    src={"/images/stars.png"}
                    width={100}
                    height={100}
                    alt={"Smoke Image"}
                    style={{ mixBlendMode: 'screen' }}

                ></Image>
            </div>
            <div className={`${background.illustration}`} style={{ top: 40 + '%', left: 90 + '%' }}>
                <Image
                    src={"/images/star-small-glow.png"}
                    width={100}
                    height={100}
                    alt={"Smoke Image"}
                    style={{ mixBlendMode: 'screen' }}

                ></Image>
            </div>
            <div className={`${background.illustration}`} style={{ top: 80 + '%', left: 80 + '%' }}>
                <Image
                    src={"/images/star-small-glow.png"}
                    width={50}
                    height={50}
                    alt={"Smoke Image"}
                    style={{ mixBlendMode: 'screen' }}

                ></Image>
            </div>
            <div className={`${background.illustration}`} style={{ top: 90 + '%', left: 20 + '%' }}>
                <Image
                    src={"/images/falling_star.png"}
                    width={50}
                    height={50}
                    alt={"Smoke Image"}
                    style={{ mixBlendMode: 'screen' }}

                ></Image>
            </div>
            <div className={`${background.illustration}`} style={{ top: 30 + '%', left: 70 + '%' }}>
                <Image
                    src={"/images/star-small-glow.png"}
                    width={50}
                    height={50}
                    alt={"Smoke Image"}
                    style={{ mixBlendMode: 'screen' }}

                ></Image>
            </div>
            <div className={`${background.illustration} rotate-45 background-move illustration-out`} style={{ top: 15 + '%', left: 7 + '%' }}>
                <Image
                    src={"/images/Satellite.png"}
                    width={250}
                    height={250}
                    alt={"Smoke Image"}

                ></Image>
            </div>
            <div className={`${background.illustration} bounce background-move illustration-out`} style={{ top: 3 + '%', left: 88 + '%' }}>
                <Image
                    src={"/images/small_satellite.png"}
                    width={150}
                    height={150}
                    alt={"Smoke Image"}
                    style={{ transform: 'rotate(120deg)' }}

                ></Image>
            </div>
            <div className={`${background.illustration} rotate-counter background-move illustration-out`} style={{ top: 44 + '%', left: 12 + '%' }}>
                <Image
                    src={"/images/black_planet.png"}
                    width={175}
                    height={175}
                    alt={"Smoke Image"}
                    unoptimized={true}
                ></Image>
            </div>
            <div className={`${background.illustration} rotate background-move illustration-out  `} style={{ top: 42 + '%', left: 82 + '%' }}>
                <Image
                    src={"/images/planet_shine.png"}
                    width={200}
                    height={200}
                    alt={"Smoke Image"}

                ></Image>
            </div>
        </div>
    )
}