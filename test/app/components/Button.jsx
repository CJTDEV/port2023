import React, { useState, useEffect, useRef } from 'react';
import button from '../styles/button.module.scss'
import SvgRenderer from "../components/SvgRenderer"

//icons




export function Button(props) {
    const isLink = props.isLink
    const isContact = props.isContact
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    return (
        <div className={button.wrapper}>
            {
                isLink ?
                    <a className={`${button.link} ${props.class}`} target={props.target} href={props.href} type={props.type}>
                        <span>{props.label}</span>
                        {props.icon &&
                            <SvgRenderer src={props.icon.src} size={props.icon.size} />
                        }
                    </a>
                    : isContact ?
                        <button onClick={(e) => setIsButtonClicked(!isButtonClicked)} is-clicked={`${isButtonClicked}`} type={props.type} spacing={props.spacing} shadow={props.shadow} className={`${button.button} ${button.button__contact}`}>
                            <span>{props.label}</span>
                            <a href={props.mail}><SvgRenderer src="/icons/mail.svg" size={24} /></a>
                            <a href={props.linkedin}><SvgRenderer src="/icons/linkedin.svg" size={24} /></a>
                        </button>
                        :
                        <button type={props.type} shadow={props.shadow} spacing={props.spacing} className={button.button}>
                            {props.href ?
                                <a href={props.href} target={props.target}>
                                    <span>
                                        {props.label}
                                    </span>
                                    {props.icon &&
                                        <p>Test</p>
                                    }
                                </a>
                                :
                                <span>
                                    {props.label}
                                    {props.icon &&
                                        <SvgRenderer src={props.icon.src} size={props.icon.size} />
                                    }
                                </span>
                            }
                        </button>
            }
        </div>
    );
};

