import React, { useState, useEffect, useRef } from 'react';
import button from '../styles/button.module.scss'
import SvgRenderer from "./SvgRenderer"

//icons




export function ButtonExpand(props) {
    const triggerRef = useRef(null);
    const contentRef = useRef(null);
    const [isExpanded, setIsExpanded] = useState(false);


    return (
        <div className={`${button.wrapper}`} style={props.customStyle}>
            {

                <button type={props.type} shadow={props.shadow} spacing={props.spacing} className={`${props.customClass} ${button.button} ${button.expand}`} onClick={() => setIsExpanded((prevValue) => !prevValue)} >

                    <span ref={triggerRef}>
                        {props.label}
                        {props.icon &&
                            <SvgRenderer src={isExpanded ? '/icons/minus.svg' : '/icons/plus.svg'} size={props.icon.size} />
                        }
                    </span>

                    <div ref={contentRef} data-expanded={isExpanded} className={`${button.expand__content}`}>
                        <div>
                            <p className={`copy`}>{props.text}</p>
                        </div>
                    </div>



                </button>
            }
        </div>
    );
};

