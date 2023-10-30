'use client';
import section from '../styles/sections.module.scss'
import journey from '../styles/journey.module.scss'
import { gsap } from 'gsap'
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin.js";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GlobalContext } from '../GlobalContext'
import { CtaCards } from '../components/CtaCards'
import { useEffect, useState, useRef, useContext } from 'react';
import Image from 'next/image'
import { Button } from '../components/Button'
import SvgRenderer from "../components/SvgRenderer"


export default function SectionJourney() {
    const { globalState, setGlobalState } = useContext(GlobalContext);
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin, MorphSVGPlugin);
    const [svgLoaded, setSvgLoaded] = useState(false)
    const [svgPos, setSvgPos] = useState(null)
    const [showEntry1, setShowEntry1] = useState(false)
    const [showEntry2, setShowEntry2] = useState(false)
    const [showEntry3, setShowEntry3] = useState(false)
    const [showEntry4, setShowEntry4] = useState(false)
    const [circleOnePos, setCircleOnePos] = useState(false)
    const [circleTwoPos, setCircleTwoPos] = useState(false)
    const [circleThreePos, setCircleThreePos] = useState(false)
    const [circleFourPos, setCircleFourPos] = useState(false)
    const svgRef = useRef(null)
    const lineRef = useRef(null)
    const wrapperRef = useRef(null)
    const circleOneRef = useRef(null)
    const circleTwoRef = useRef(null)
    const circleThreeRef = useRef(null)
    const circleFourRef = useRef(null)

    useEffect(() => {
        if (showEntry1) {
            const circleBound = circleOneRef.current.getBoundingClientRect();
            setCircleOnePos(circleBound);
        }
        if (showEntry2) {
            const circleBound = circleTwoRef.current.getBoundingClientRect();
            setCircleTwoPos(circleBound);
        }
        if (showEntry3) {
            const circleBound = circleThreeRef.current.getBoundingClientRect();
            setCircleThreePos(circleBound);
        }
        if (showEntry4) {
            const circleBound = circleFourRef.current.getBoundingClientRect();
            setCircleFourPos(circleBound);
        }
    }, [showEntry1, showEntry2, showEntry3, showEntry4]);

    useEffect(() => {

        if (globalState.scrolledPastLanding) {

            MorphSVGPlugin.convertToPath("#drawSVG")

            const journeyTrigger = gsap.timeline({
                scrollTrigger: {
                    trigger: '.journey-trigger',
                    start: 'top-=750 top',
                    end: 'bottom+=750 bottom',
                    markers: true,
                    scrub: 1,
                    once: true,
                    onEnter: () => {
                        gsap.to('.journey-trigger', { opacity: 1 })
                        const svgBound = svgRef.current.getBoundingClientRect()
                        setSvgPos(svgBound)
                        setSvgLoaded(true)
                    },
                    onEnd: () => {
                        setGlobalState(prevState => ({
                            ...prevState,
                            scrolledPastJourney: true
                        }))
                    }

                }
            })

            journeyTrigger.to('.circle-in', {
                opacity: 1,
            })

            const pulses = gsap.timeline({
                defaults: {
                    scale: 2,
                    autoAlpha: 1,
                    transformOrigin: 'center',
                    ease: "elastic(2.5, 1)"
                }
            }).to(".circle-trigger-1", {
                opacity: 1, onStart: () => { setShowEntry1(true) }, onReverseComplete: () => {
                    setShowEntry1(false)
                }
            }, 0.4).to(".circle-trigger-2", {
                opacity: 1, onStart: () => { setShowEntry2(true) }, onReverseComplete: () => {
                    setShowEntry2(false)
                }
            }, 1.2).to(".circle-trigger-3", {
                opacity: 1, onStart: () => { setShowEntry3(true) }, onReverseComplete: () => {
                    setShowEntry3(false)
                }
            }, 2).to(".circle-trigger-4", {
                opacity: 1, onStart: () => { setShowEntry4(true) }, onReverseComplete: () => {
                    setShowEntry4(false)
                }
            }, 3.4)


            journeyTrigger.from("#drawSVG", {
                drawSVG: 0,
                duration: 4,
                opacity: 1,
            }, 0)

            journeyTrigger.to(".circle-in", {
                motionPath: {
                    path: "#drawSVG",
                    align: "#drawSVG",
                    alignOrigin: [0.5, 0.5],
                }, duration: 4
            }, 0).add(pulses, 0)



        }


    }, [globalState.scrolledPastLanding])


    return (
        <div className={`${section.container} ${section.container__special} ${section.container__fill}`} style={{
        }}>
            <div ref={wrapperRef} className={`${journey.wrapper} journey-trigger`}>


                <svg ref={svgRef} className={`${journey.svgEl}`} xmlns="http://www.w3.org/2000/svg" width="500" height="1415" viewBox="0 0 500 1415">

                    <line ref={lineRef} strokeMiterlimit="10" fill="none" stroke="#9F9F9F" strokeLinecap="round" strokeWidth="35" id="drawSVG" x1="250"
                        y1="25"
                        x2="250"
                        y2="1415"></line>
                    <circle fill="#fff" className={`${journey.ball} circle-in`} r="20" cx="10" cy="10"></circle>
                    <circle ref={circleOneRef} className={`${journey.stop__circle} circle-trigger-1`} fill="#D9D9D9" r="15" cx="250" cy="304"></circle>
                    <circle ref={circleTwoRef} className={`${journey.stop__circle} circle-trigger-2`} fill="#D9D9D9" r="15" cx="250" cy="608"></circle>
                    <circle ref={circleThreeRef} className={`${journey.stop__circle} circle-trigger-3`} fill="#D9D9D9" r="15" cx="250" cy="1012"></circle>
                    <circle ref={circleFourRef} className={`${journey.stop__circle} circle-trigger-4`} fill="#D9D9D9" r="15" cx="250" cy="1415"></circle>


                </svg>

                {
                    svgLoaded &&
                    <div style={{
                        width: `${svgPos.width}px`,
                        height: `${svgPos.height}px`,
                        right: `${svgPos.right}px`
                    }} className={journey.svg__overlay}>

                        {/* First Entry */}

                        <div style={{
                            top: "304px",
                            width: `${circleOnePos.width}px`,
                            height: `${circleOnePos.height}px`
                        }} className={`${journey.stop__text} stop-text-1`}>
                            <SvgRenderer src={"icons/rocket-alt.svg"} size={24} />
                        </div>

                        <div data-entry="1" style={{ top: "304px", opacity: `${showEntry1 ? 1 : 0}` }} className={`${journey.entry}`}>
                            <div className={`${journey.entry__text} copy-large`}>
                                <div className={`${journey.entry__company}`}>
                                    Looking for a Web Developer?
                                </div>

                            </div>

                            <ul className={`${journey.entry__list}`}>
                                <li className={`copy`}>Let's get in touch!
                                </li>
                            </ul>

                            <Button
                                label={"Contacte Me"}
                                type={"gold"}
                                spacing={"small"}
                                isContact={true}
                                linkedin={"www.gooogle.com"}
                                mail={"mailto:cougarbelec@hotmail.com"}
                                href={"#"}
                            ></Button>
                        </div>

                        {/* Seccond Entry */}

                        <div style={{
                            top: "608px",
                            width: `${circleTwoPos.width}px`,
                            height: `${circleTwoPos.height}px`
                        }} className={`${journey.stop__text} stop-text-1`}>
                            <span className={`copy-tiny`}>current</span>
                            <span className={`copy-tiny`}>2021</span>
                        </div>

                        <div data-entry="2" style={{ top: "608px", opacity: `${showEntry2 ? 1 : 0}` }} className={`${journey.entry} `}>

                            <div className={`${journey.entry__text} copy-large`}
                            >
                                <a target="_blank" className={`${journey.entry__company} link`} href="https://www.agentur-loop.com/">

                                    Agentur LOOP</a>
                                <span className={`${journey.entry__company__position}`}><span>|</span>Frontend Developer</span>
                                <span>|</span>
                                <span>2021 - Current</span>
                            </div>

                            <ul className={`${journey.entry__list}`}>
                                <li className={`copy`}> Frontend integration & maintenance of UX products.
                                </li>
                                <li className={`copy`}>Exposure to backend development through PHP, WordPress & Craft
                                </li>
                                <li className={`copy`}>
                                    Providing expertise & solutions
                                </li>
                                <li className={`copy`}>
                                    Fast-paced & agile work environment
                                </li>
                            </ul>

                            <Button
                                label={"Learn More"}
                                type={"gold"}
                                spacing={"small"}
                                href={"#"}
                            ></Button>


                        </div>

                        {/* Third Entry */}

                        <div style={{
                            top: "1012px",
                            width: `${circleThreePos.width}px`,
                            height: `${circleThreePos.height}px`
                        }} className={`${journey.stop__text} stop-text-1`}>
                            <span className={`copy-tiny`}>2021</span>
                            <span className={`copy-tiny`}>2021</span>
                        </div>

                        <div data-entry="3" style={{ top: "1012px", opacity: `${showEntry3 ? 1 : 0}` }} className={`${journey.entry}`}>
                            <div className={`${journey.entry__text} copy-large`}><a target="_blank" className={`${journey.entry__company} link`} href="https://www.agentur-loop.com/">

                                Agentur LOOP</a>
                                <span>|</span>
                                <span>Internship</span>
                                <span>|</span>
                                <span>Aug - Nov 2021</span>
                            </div>

                            <ul className={`${journey.entry__list}`}>
                                <li className={`copy`}>Translating wire-frames into dynamic frontend templates.
                                </li>
                                <li className={`copy`}>Focus on cross-browser & device functionality
                                </li>
                                <li className={`copy`}>
                                    Getting familiar with version control and the agile circle via
                                    Jira boards & ticketing.
                                </li>
                                <li className={`copy`}>
                                    Aligning with clean code and best practice standards.
                                </li>
                            </ul>

                            <Button
                                label={"Learn More"}
                                type={"gold"}
                                spacing={"small"}
                                href={"#"}
                            ></Button>
                        </div>

                        {/* Fourth Entry */}

                        <div style={{
                            top: "1415px",
                            width: `${circleFourPos.width}px`,
                            height: `${circleFourPos.height}px`
                        }} className={`${journey.stop__text} stop-text-4`}>
                            <span className={`copy-tiny`}>2021</span>
                            <span className={`copy-tiny`}>2016</span>
                        </div>

                        <div data-entry="4" style={{ top: "1415px", opacity: `${showEntry4 ? 1 : 0}` }} className={`${journey.entry} `} >
                            <div className={`${journey.entry__text} copy-large`}><a className={`${journey.entry__company} link`} target="_blank" href="https://www.hlw-salzburg.at/">

                                HLWM Annahof
                            </a>
                                <span>|</span>
                                <span>High School</span>
                                <span>|</span>
                                <span>2016 - 2021</span>
                            </div>

                            <ul className={`${journey.entry__list}`}>
                                <li className={`copy`}>
                                    Matura / Austrian Certificate for
                                    Higher Education
                                </li>
                                <li className={`copy`}>
                                    Higher vocational School for
                                    Tourism, Economics, and
                                    Media Design
                                </li>
                            </ul>

                            <Button
                                label={"Learn More"}
                                type={"gold"}
                                spacing={"small"}
                                href={"#"}
                            ></Button>
                        </div>

                    </div>
                }

            </div>
        </div>
    )
}


{/* <div style={{}} className={`${journey.entry} entry-1`}>
    <div className={`${journey.entry__text} copy-large`}><a className={`${journey.entry__company}`} href="#">
        <SvgRenderer src={"icons/link-alt.svg"} size={24} />
        Agentur LOOP</a>
        <span>Frontend Developer</span>
    </div>

    <Button
        label={"Learn More"}
        type={"default"}
        href={"#"}
        isLink={true}
        icon={{ src: "/icons/chevron-right.svg", size: 16 }}
    ></Button>
</div> */}

{/* <div style={{ transform: `translate(${((stop1Pos.left + 3) - svgPos.width)}px, ${stop1TopPos + 6}px)`, width: `${stop1Pos.width}px`, height: `${stop1Pos.height}px` }} className={`${journey.stop__text} stop-text-1`}>
    <span className={`copy`}>current</span>
    <span className={`copy`}>2021</span>
</div> */}