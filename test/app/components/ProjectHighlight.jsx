import section from '../styles/sections.module.scss'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CtaCards } from '../components/CtaCards'
import { useEffect, useState, useContext, forwardRef, useRef, useImperativeHandle } from 'react';
import { Button } from '../components/Button'
import projects from '../styles/projects.module.scss'
import Image from 'next/image'
import test from "../../public/images/project-shop-plan.png"
import { DimensionalModule } from '../components/DimensionalModule'
import SvgRenderer from "../components/SvgRenderer"
import { GlobalContext } from '../GlobalContext'

const ProjectHighlight = forwardRef((props, ref) => {
    const videoRef = useRef(null);
    const [isHighlightVideoLoaded, setIsHighlightVideoLoaded] = useState(false)

    useEffect(() => {
        if (props.highlightKey == 1) {
            props.updateHasHighlightVideoLoaded(true);
        }
    }, [isHighlightVideoLoaded])

    useImperativeHandle(ref, () => ({
        getEl: () => {
            return videoRef.current
        }
    }));

    return (
        <>
            <div className={`${projects.highlight__content} highlight-content-in-${props.highlightKey}`}>
                <h4 className={`${projects.highlight__title} headline`} dangerouslySetInnerHTML={{ __html: props.title }}></h4>
                <div className={projects.item__content__client}>
                    <span>{props.client}</span>
                </div>
                <div className={projects.item__content__tech}>
                    {
                        props.tech.map((item, index) => (
                            <span key={index}>{item}</span>
                        ))
                    }
                </div>
                <p className={`${projects.highlight__copy} copy`}>{props.copy}</p>
                <Button label={"Learn More"} spacing={"default"} type={"gold"} />
            </div>
            <div className={`${projects.highlight__video} highlight-video-in-${props.highlightKey}`}>
                <div>
                    <div className={`${projects.highlight__video__button} highlight-link-in-${props.highlightKey}`}>
                        <SvgRenderer src="/icons/link-alt.svg" size={24} />
                    </div>
                    <video onLoadedMetadata={() => { setIsHighlightVideoLoaded(true) }} className={`video-in-${props.highlightKey}`} loop={props.loop} muted ref={videoRef}>
                        <source src={props.videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

        </>

    )
});

export default ProjectHighlight;



{/* <div className={`${projects.item}`}>
    <div className={projects.item__content}>
        <div className={projects.item__content__title}>
            <h4 className={`headline`}>{props.title}</h4>
        </div>
        <div className={projects.item__content__client}>
            <span>SES - SPAR European Shopping Centers</span>
        </div>
        <div className={projects.item__content__tech}>
            <span>SVG</span>
            <span>JavaScript</span>
            <span>SASS</span>
            <span>PHP</span>
        </div>
        <div className={projects.item__content__copy}>
            <p className={`copy`}>{props.copy}</p>
        </div>
        <div className={projects.item__content__buttons}>
            <Button label={props.buttonLable} spacing={"default"} type={"gold"} />
            {props.buttonLable2 &&
                <Button label={props.buttonLable2} spacing={"default"} type={"gold"} />
            }
        </div>

    </div>
    {props.imgSrc &&
        <div className={projects.item__background}>
            <Image
                src={props.imgSrc}
                width={props.imgWidth}
                height={props.imgHeight}
                unoptimized={true}
                alt={props.imgAlt}
            />
        </div>

    }
</div> */}