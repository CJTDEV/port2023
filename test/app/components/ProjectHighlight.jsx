import section from '../styles/sections.module.scss'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState, useContext, forwardRef, useRef, useImperativeHandle } from 'react';
import { Button } from './Button'
import projects from '../styles/projects.module.scss'
import Image from 'next/image'


const ProjectHighlight = forwardRef((props, ref) => {

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

