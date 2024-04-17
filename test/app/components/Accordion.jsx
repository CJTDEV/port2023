import React, { useState, useEffect, useRef } from 'react';
import accordion from '../styles/accordion.module.scss'
import SvgRenderer from "../components/SvgRenderer"
import { Button } from '../components/Button'
import { gsap } from 'gsap'
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

//icons




export function Accordion(props) {
    console.log(props)
    gsap.registerPlugin(MorphSVGPlugin);
    const iconPlus = useRef()
    const iconMinus = useRef()


    const handleClick = () => {
        if (props.expanded == props.id) {
            props.setExpanded(0)
        } else {
            props.setExpanded(props.id)
        }
    }




    useEffect(() => {

        if (props.expanded == props.id) {
            gsap.to(iconPlus.current, { duration: 0.5, morphSVG: "M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" });
        } else {
            gsap.to(iconPlus.current, { duration: 0.5, morphSVG: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" });
        }

    }, [props.expanded])

    return (
        <div className={accordion.main} style={props.customStyle} onClick={handleClick}>
            <div className={accordion.header}>
                <h5 className={`light`}>{props.item.title}</h5>
                <div className={`${accordion.more} icon-plus`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="1em" viewBox="0 0 448 512"><path ref={iconPlus} fill="currentColor" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg>
                </div>
            </div>
            <div className={`${accordion.body}`} data-expanded={props.expanded == props.id}>
                <div className={`${accordion.body__content}`}>
                    <div className={`${accordion.body__content__text}`}>
                        <p className={`copy-big light`}>{props.item.description}</p>
                    </div>


                </div>
            </div>
        </div>
    );
};

