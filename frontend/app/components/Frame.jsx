import frame from '../styles/frame.module.scss'
import { gsap } from 'gsap'
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin.js";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from 'react';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export default function Frame({ children }) {
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin, MorphSVGPlugin);
    gsap.registerPlugin(ScrollToPlugin)

    useEffect(() => {

        const sceneTriggers = gsap.timeline({
            scrollTrigger: {
                id: 'first-scene-trigger', // Assign the unique ID
                trigger: 'body',
                start: 'top+=100 top',
                end: `bottom bottom`,
                scrub: 1,
                preventOverlaps: true,
                // anticipatePin: 1,
                fastScrollEnd: true,
                invalidateOnRefresh: true,
                onRefresh: () => { gsap.to(window, { duration: 1, scrollTo: 0, ease: "power3", }); }
            },
        });

        sceneTriggers.to('.scroll', { duration: 1, opacity: 0 })
        sceneTriggers.to('.smoke-out', { duration: 1, opacity: 0 }, '<')
        sceneTriggers.to('.text-out-2', { duration: 1, x: -100, opacity: 0 })
        sceneTriggers.to('.rocket-out', { duration: 1, y: 50 }, '<')
        sceneTriggers.to('.rocket-out', { duration: 1, y: -1000, opacity: 0 })
        sceneTriggers.to('.text-out-1', { duration: 1, top: '20%', }, '<')
        // sceneTriggers.to('.landing-trigger', { duration: 1, opacity: 1, }, '<')
        sceneTriggers.to('.landing-trigger', {
            duration: 1, opacity: 0, pointerEvents: "none", onReverseComplete: () => {
                gsap.to('.nav-about', { attr: { "data-active": "false" } })
                gsap.to('.nav-home', { attr: { "data-active": "true" } })
            }, onComplete: () => {
                gsap.to('.nav-home', { attr: { "data-active": "false" } })
                gsap.to('.nav-about', { attr: { "data-active": "true" } })
            }
        })

        sceneTriggers.to('.about-trigger', { opacity: 1, pointerEvents: "all" },)
        sceneTriggers.to('.about-trigger', {
            opacity: 0, pointerEvents: "none", onReverseComplete: () => {
                gsap.to('.nav-projects', { attr: { "data-active": "false" } })
                gsap.to('.nav-about', { attr: { "data-active": "true" } })
            }, onComplete: () => {
                gsap.to('.nav-about', { attr: { "data-active": "false" } })
                gsap.to('.nav-projects', { attr: { "data-active": "true" } })
            }
        },)

        sceneTriggers.to('.projects-trigger', { opacity: 1, pointerEvents: "all" },)
        sceneTriggers.to('.projects-trigger', {
            opacity: 0, pointerEvents: "none", onReverseComplete: () => {
                gsap.to('.nav-services', { attr: { "data-active": "false" } })
                gsap.to('.nav-projects', { attr: { "data-active": "true" } })
            }, onComplete: () => {
                gsap.to('.nav-projects', { attr: { "data-active": "false" } })
                gsap.to('.nav-services', { attr: { "data-active": "true" } })
            }
        },)

        sceneTriggers.to('.gradient-change', { duration: 1, opacity: 0 },)
        sceneTriggers.to('.services-trigger', { opacity: 1, pointerEvents: "all" },)

        // sceneTriggers.to('.landing-trigger', { opacity: 0, pointerEvents: 'none', onReverseComplete: () => { gsap.to('.about-in', { opacity: 0, pointerEvents: 'none' }) }, onComplete: () => { gsap.to('.about-in', { opacity: 1, pointerEvents: 'all' }) } })

    })

    return (
        <div className={`${frame.main} frame-trigger`}>
            {children}
        </div>
    )
}