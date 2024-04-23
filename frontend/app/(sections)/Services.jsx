'use client';
import services from '../styles/services.module.scss'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

import servicesData from '/lib/data/services'
import ServiceCard from '../components/ServiceCard'




export default function Services() {
    const servicesList = JSON.parse(JSON.stringify(servicesData))
    gsap.registerPlugin(ScrollTrigger);

    return (
        <div className={`${services.wrapper} services-trigger`}>
            <div className={`${services.inner}`}>
                {
                    servicesList.cards.map((card, index) => (
                        <ServiceCard card={card} key={index}></ServiceCard>
                    ))
                }

            </div>
        </div>
    )
}