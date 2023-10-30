'use client';
import section from '../styles/sections.module.scss'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CtaCards } from '../components/CtaCards'
import { useEffect, useState, useRef, useContext } from 'react';
import { Button } from '../components/Button'
import { ProjectCard } from '../components/ProjectCard'
import ProjectHighlight from '../components/ProjectHighlight'
import projects from '../styles/projects.module.scss'
import Image from 'next/image'
import test from "../../public/images/project-shop-plan.png"
import { DimensionalModule } from '../components/DimensionalModule'
import VideoPlayer from '../components/VideoPlayer';
import { GlobalContext } from '../GlobalContext'
import SvgRenderer from "../components/SvgRenderer"



export default function SectionProjects() {
    const { globalState } = useContext(GlobalContext);
    gsap.registerPlugin(ScrollTrigger);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasHighlightVideoLoaded, setHasHighlightVideoLoaded] = useState(false);
    const videoContainer = useRef(null)
    const [scrollCounter, setScrollCounter] = useState(0)
    const [isFirstSceneOver, setIsFirstSceneOver] = useState(false)
    const childRef = useRef(null);

    function updateHasHighlightVideoLoaded(newValue) {
        setHasHighlightVideoLoaded(newValue);
    }


    useEffect(() => {
        if (globalState.scrolledPastLanding && hasHighlightVideoLoaded) {
            const container = videoContainer.current;
            const containerTop = container.getBoundingClientRect().top
            const containerHeight = container.getBoundingClientRect().height;
            const threshold = containerHeight * 0.25; // Adjust the threshold as needed
            let hasPlayed = false
            const videoEl = childRef.current.getEl()

            console.log("111")

            const highlightTrigger = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    start: `top top`,
                    markers: true,
                    end: `bottom+=2000 bottom`,
                    scrub: true,
                    pin: true,
                    toggleActions: 'play pause',
                    pinSpacer: false,
                    onEnter: () => {
                        if (!hasPlayed) {
                            videoEl.play()
                            document.body.style.overflow = "hidden";
                            gsap.to('.highlight-video-in-1', { opacity: 1 })
                            gsap.to('.highlight-content-in-1', { delay: 3, opacity: 1 })
                            gsap.to('.highlight-disclaimer-in', { delay: 3, opacity: 0.5 })
                            gsap.to('.highlight-link-in-1', { delay: 4, opacity: 1 })
                            hasPlayed = true;
                            setTimeout(() => {
                                document.body.style.overflow = "auto";
                                resumeAnimation()
                            }, 4000)
                        }
                    },
                },
            })

            // highlightTrigger.to('.video-in-1', {
            //     currentTime: videoEl.duration
            // })

            // highlightTrigger.to('', {

            // })



            function resumeAnimation() {
                highlightTrigger.to('.highlight-video-in-1', { opacity: 0 })
                highlightTrigger.to('.highlight-content-in-1', { opacity: 0, y: -100 }, '<')
                highlightTrigger.to('.highlight-video-in-2', { opacity: 1 })
                highlightTrigger.to('.highlight-content-in-2', { opacity: 1, y: 0 }, '<')
                highlightTrigger.to('.highlight-link-in-2', { opacity: 1 }, '<')

                highlightTrigger.to('.highlight-video-in-2', { opacity: 0 })
                highlightTrigger.to('.highlight-content-in-2', { opacity: 0, y: -100 }, '<')
                highlightTrigger.to('.highlight-link-in-2', { opacity: 0 }, '<')

                highlightTrigger.to('.highlight-video-in-3', { opacity: 1 })
                highlightTrigger.to('.highlight-content-in-3', { opacity: 1, y: 0 }, '<')
                highlightTrigger.to('.highlight-link-in-3', { opacity: 1 }, '<')

            }

        }


    }, [globalState.scrolledPastLanding, hasHighlightVideoLoaded]);



    return (
        <div ref={videoContainer} className={`${section.container} ${section.container__fill} ${section.container__space__bottom__large} ${section.container__space__top__large} highlight-video-trigger`}>
            <div className={`${projects.highlight} highlight-container-in`}>

                <div frame="1" className={`${projects.highlight__frame} highlight-frame-1`}>
                    <ProjectHighlight
                        videoSrc={"/images/out5.mp4"}
                        imgSrc={""}
                        highlightKey={1}
                        playVideo={isPlaying}
                        title={"Interactive<br>Shopplan"}
                        client={"SES - SPAR European Shopping Centers"}
                        tech={["SVG", "JavaScript", "SASS", "PHP"]}
                        copy={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, quae! Natus perspiciatis nisi, alias reiciendis voluptates neque quo inventore voluptas omnis officiis. Explicabo tenetur suscipit consectetur ipsum soluta non inventore?"}
                        link={"www.google.com"}
                        buttonLink={"www.google.com"}
                        updateHasHighlightVideoLoaded={updateHasHighlightVideoLoaded}
                        ref={childRef}
                    />
                </div>
                <div frame="2" className={`${projects.highlight__frame} highlight-frame-2`}>
                    <ProjectHighlight
                        videoSrc={"/images/salewa-2.mp4"}
                        imgSrc={""}
                        playVideo={isFirstSceneOver}
                        highlightKey={2}
                        loop={true}
                        title={"Orltes<br>Landingpage"}
                        client={"Salewa - Oberalp"}
                        tech={["GSAP", "JavaScript", "SASS", "PHP"]}
                        copy={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, quae! Natus perspiciatis nisi, alias reiciendis voluptates neque quo inventore voluptas omnis officiis. Explicabo tenetur suscipit consectetur ipsum soluta non inventore?"}
                        link={"www.google.com"}
                        buttonLink={"www.google.com"}
                    />
                </div>
                <div frame="3" className={`${projects.highlight__frame} highlight-frame-3`}>
                    <ProjectHighlight
                        videoSrc={"/images/salewa-2.mp4"}
                        imgSrc={""}
                        playVideo={isFirstSceneOver}
                        highlightKey={3}
                        loop={true}
                        title={"Something<br>Big"}
                        client={"Salewa - Oberalp"}
                        tech={["GSAP", "JavaScript", "SASS", "PHP"]}
                        copy={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, quae! Natus perspiciatis nisi, alias reiciendis voluptates neque quo inventore voluptas omnis officiis. Explicabo tenetur suscipit consectetur ipsum soluta non inventore?"}
                        link={"www.google.com"}
                        buttonLink={"www.google.com"}
                    />
                </div>
                <div className={`${projects.highlight__disclaimer} highlight-disclaimer-in`}>
                    <SvgRenderer src="/icons/info.svg" size={24} />
                    <p className={`copy-tiny`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae voluptatibus laudantium mollitia quos dignissimos nisi porro! Eveniet officiis natus deserunt, sit inventore accusantium consequatur fugiat minus error ex, perspiciatis aliquid!</p>
                </div>
            </div>
        </div>
    )
}