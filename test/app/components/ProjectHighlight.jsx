import section from '../styles/sections.module.scss'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState, useContext, forwardRef, useRef, useImperativeHandle } from 'react';
import { Button } from './Button'
import projects from '../styles/projects.module.scss'
import Image from 'next/image'
import SvgRenderer from './SvgRenderer';


const ProjectHighlight = forwardRef((props, ref) => {
    const [isExpand, setIsExpand] = useState(false)

    return (
        <>

            <div className={`${projects.highlight__content} highlight-content-in-${props.highlightKey}`}>

                <div className={`${projects.highlight__title}`}>
                    <h6 className="light very-dark">{props.subtitle}</h6>
                    <h3 className="light">{props.title}</h3>
                </div>
                <div className={projects.highlight__tech}>
                    {
                        props.tech.map((item, index) => (
                            <span className={`copy-small pill bold-light`} key={index}>{item}</span>
                        ))
                    }
                </div>
                <p className={`${projects.highlight__copy} copy-big very-light`}>{props.copy}</p>
                <Button href={props.link} label={"Learn More"} spacing={"default"} type={"default"} />

            </div>


            <div className={`${projects.highlight__image} highlight-img-in-${props.highlightKey}`}>

                {/* <div className={`${projects.highlight__video__button} highlight-link-in-${props.highlightKey}`}>
                    <SvgRenderer src="/icons/link-alt.svg" size={24} />
                </div> */}

                <div className={`${projects.highlight__content__mobile}`}>

                    <p className={`subtitle text-center text-black copy`}>SES</p>
                    <p className={`${projects.highlight__content__mobile__title} copy-large light text-center text-black`}>Interactive Shopplan</p>
                    <div className={`${projects.highlight__content__mobile__hidden}`} data-expand={isExpand}>
                        <div>
                            <div className={projects.highlight__tech}>
                                {
                                    props.tech.map((item, index) => (
                                        <span className={`copy-small pill bold-light`} key={index}>{item}</span>
                                    ))
                                }
                            </div>
                            <p className={`${projects.highlight__copy} copy-big light`}>{props.copy}</p>
                        </div>
                    </div>


                    <div className={`${projects.highlight__content__mobile__buttons}`}>
                        {/* <Button onClick={() => { setIsExpand(!isExpand) }} shadow={"true"} label={"Details"} spacing={"small"} type={"default"} /> */}
                        <Button href={props.link} shadow={"true"} label={"View Site"} spacing={"default"} type={"default"} />
                        <div onClick={() => { setIsExpand(!isExpand) }} className={`${projects.highlight__content__mobile__icon}`}>
                            <SvgRenderer src={"icons/info.svg"} size={24} />
                        </div>
                    </div>

                </div>

                <Image
                    src={props.imgSrc}
                    alt={"Product Image"}
                    unoptimized={true}
                    width={"350"}
                    height={"750"}
                >
                </Image>

            </div>

        </>

    )
});

export default ProjectHighlight;

