'use client';
import landing from '../styles/landing.module.scss'
import { DimensionalModule } from '../components/DimensionalModule'
import landingDataLib from '/lib/data/landing'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { useEffect, useState, useRef, useContext } from 'react'
import { useWindowDimensions } from "../../hooks/useWindowsDimensions";
import { GlobalContext } from '../GlobalContext'
import Image from 'next/image'
import SvgRenderer from "../components/SvgRenderer"

export default function SectionLanding() {
    const landingData = JSON.parse(JSON.stringify(landingDataLib))
    const { globalState, setGlobalState } = useContext(GlobalContext);
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);
    const rocketFilePath = '/only_rocket/Spacers.gltf'
    const [isRocketVisible, setIsRocketVisible] = useState(true)
    const moduleRef = useRef(null)
    const containerRef = useRef(null)

    //load
    const [loadedChildren, setLoadedChildren] = useState(false);

    const handleChildLoaded = () => {
        setLoadedChildren(true);
    };

    useEffect(() => {
        if (loadedChildren) {
            console.log("all loaded")
            setGlobalState(prevState => ({
                ...prevState,
                dimensionalModulesLoaded: true
            }))
        }
    }, [loadedChildren])


    return (

        <div ref={containerRef} className={`${landing.inner} trigger-element all-wrapper landing-trigger`}>

            <div className={`${landing.gradient} gradient-in`}></div>

            <div className={`${landing.scroll} scroll`}>
                <SvgRenderer src="/icons/scroll.svg" size={24}></SvgRenderer>
            </div>

            <div className={`${landing.illustration} smoke-out`}>
                <Image
                    src={"images/smoke.png"}
                    width={750}
                    height={750}
                    alt={"Smoke Image"}
                    unoptimized={true}
                    priority={true}
                ></Image>
            </div>

            <div className={`${landing.rocket} rocket-out`}>
                <DimensionalModule
                    ref={moduleRef}
                    isVisible={isRocketVisible}
                    isPaused={false}
                    filePath={rocketFilePath}
                    intensity={2}
                    lightX={10}
                    lightY={10}
                    lightZ={10}
                    rotation={[0, 0, 0]}
                    position={[0, 0, 0]}
                    scale={[1.4, 1.4, 1.4]}
                    animations={
                        {
                            tilt: true
                        }
                    }
                    hasOrbitControls={false}
                    onChildLoaded={handleChildLoaded}
                >
                </DimensionalModule>
            </div>

            <div className={`${landing.headline} text-out-1`}>
                <h1 className={`headline`}>{landingData.title}</h1>
            </div>
            <div className={`${landing.headline} text-out-2`}>
                <h2 className={`headline font--uppercase`}>{landingData.subtitle}</h2>
            </div>

        </div>


    )
}


