'use client';
import section from '../styles/sections.module.scss'
import journey from '../styles/journey.module.scss'
import { gsap } from 'gsap'
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin.js";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GlobalContext } from '../GlobalContext'
import SvgRenderer from "../components/SvgRenderer"
import journeyData from '/lib/data/journey'


export default function Journey() {
    const { globalState, setGlobalState } = useContext(GlobalContext);
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin, MorphSVGPlugin);
    const cv = JSON.parse(JSON.stringify(journeyData))

    return (

        <div className={`${journey.wrapper} journey-trigger`}>

            <div className={`${journey.content}`}>

                <div className={`${journey.cv}`}>
                    {
                        cv.entries.map((entry, index) => (
                            <a href={entry.href} target="_blank" key={index} className={`${journey.cv__entry} entry-${index + 1} cv-entry-in`}>
                                <div className={`${journey.cv__title}`}>
                                    <div className={`${journey.cv__subtitle} copy-small bold-light`} data-active={index == 0}>{entry.subtitle}</div>
                                    <h6 className={`light`}>{entry.title}</h6>
                                </div>
                                <div className={`${journey.cv__link}`} href="#"> <SvgRenderer src={"/icons/link-alt.svg"} size={32} /></div>
                                <ul className={`${journey.cv__list}`}>
                                    {entry.list.map((item, index) => (
                                        <li key={index} className={`copy text-grey-light`}>{item.text}</li>
                                    ))}
                                </ul>
                            </a>
                        ))
                    }
                </div>
            </div>

        </div>


    )
}

