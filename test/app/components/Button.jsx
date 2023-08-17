import React, { useState, useEffect, useRef } from 'react';
import button from '../styles/button.module.scss'


//icons
import IHTML from '/public/icons/html5.svg'
import IQuestion from '/public/icons/question-solid.svg'
import IExpand from '/public/icons/expand.svg'
import IClose from '/public/icons/xmark-solid.svg'
import ICSS from '/public/icons/css3-alt.svg'
import ISCSS from '/public/icons/sass.svg'
import IJS from '/public/icons/square-js.svg'
import IReact from '/public/icons/react.svg'
import INode from '/public/icons/node-js.svg'
import IWebpack from '/public/icons/cube-solid.svg'
import IMongo from '/public/icons/leaf-solid.svg'
import IWP from '/public/icons/wordpress.svg'
import IExp from '/public/icons/truck-fast-solid.svg'
import IPHP from '/public/icons/php.svg'
import IVue from '/public/icons/vuejs.svg'
import IPlus from '/public/icons/plus-solid.svg'
import IMinus from '/public/icons/minus-solid.svg'
import IDownload from '/public/icons/download.svg'


export function Button(props) {
    const isLink = props.isLink

    return (
        <div className={button.wrapper}>
            {
                isLink ?
                    <a className={`${button.link} ${props.class}`} target={props.target} href={props.href}>{props.lable}</a>
                    :
                    <button type={props.type} spacing={props.spacing} className={button.button}>
                        {props.href ? <a href={props.href} target={props.target}><span>{props.lable}</span></a>
                            : <span>{props.lable}</span>
                        }
                    </button>
            }
        </div>
    );
};

