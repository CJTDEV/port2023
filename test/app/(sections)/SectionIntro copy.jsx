import section from '../styles/sections.module.scss'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CtaCards } from '../components/CtaCards'
import { useEffect } from 'react';


export default function SectionCV() {

	useEffect(() => {
		const triggerId = 'cardsTrigger'; // Unique ID
		const cardsTrigger = gsap.timeline({
			scrollTrigger: {
				id: triggerId, // Assign the unique ID
				trigger: '.cards-trigger-element',
				start: 'top top',
				end: `bottom top`,
				scrub: true,
				markers: true,
				pin: true,
			},
		});

		cardsTrigger.to('.card-in-1', { delay: 10, y: 0, opacity: 1, duration: 5, })
		cardsTrigger.to('.card-in-2', { delay: 10, y: 0, opacity: 1, duration: 5, })
		cardsTrigger.to('.card-in-3', { delay: 10, y: 0, opacity: 1, duration: 5, })
	})





	return (
		<div className={`${section.container} ${section.container_fill_viewport} cards-trigger-element`}>
			<CtaCards></CtaCards>
		</div>
	)
}