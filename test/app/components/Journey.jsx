import React from 'react';
import Swiper from './Swiper';
import journey from '../styles/journey.module.scss'
import { Button } from './Button'


export const Journey = () => {

    return (
        <div className={`${journey.wrapper} journey-trigger`}>

            <svg xmls="http://www.w3.org/2000/svg" width="700" height="1500" viewBox="0 0 800 1500">
                <defs>
                    <mask id="theMask" maskUnits="userSpaceOnUse">

                        <path id="maskPath" d="m198.64,1.89c-46.52,242.19,555.31,289.03,508.79,531.22C660.91,775.3,59.09,728.47,12.57,970.66c-46.52,242.19,555.31,289.03,508.79,531.23" fill="none" stroke="#fff" strokeMiterlimit="2" strokeWidth="30" />
                    </mask>

                </defs>

                <g id="maskReveal" mask="url(#theMask)">
                    <path id="dashedPath" d="m198.64,1.89c-46.52,242.19,555.31,289.03,508.79,531.22C660.91,775.3,59.09,728.47,12.57,970.66c-46.52,242.19,555.31,289.03,508.79,531.23" stroke="#fff" fill="#0A1930" strokeMiterlimit="2" strokeWidth="25" strokeDasharray="75 75" />
                </g>


            </svg>




        </div>
    );
};


