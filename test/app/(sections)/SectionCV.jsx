'use client';
import section from '../sections.module.scss'
import cv from '../cv.module.scss'
import React, { useEffect, useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IHTML from '/public/icons/html5.svg'
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


export default function SectionCV () {
gsap.registerPlugin(ScrollTrigger);
const app = useRef(null)
const entry_1 = useRef(null)
const entry_2 = useRef(null)
const entry_3 = useRef(null)
const entry_4 = useRef(null)
const stackTable = useRef(null)
const pillHTML = useRef(null)
const pillCSS = useRef(null)
const pillJS = useRef(null)
const pillReact = useRef(null)
const pillNode = useRef(null)
const pillWebpack = useRef(null)
const pillExp = useRef(null)
const pillMongo = useRef(null)
const pillWP = useRef(null)
const pillPHP = useRef(null)





useEffect(() => {
	const el = entry_1.current
	gsap.timeline({
			scrollTrigger: {
				trigger: app.current,
				start: 'top-=2000 top',
				end: 'center center',
				scrub: true,
				markers: true
			}
	}).fromTo(
		el,
		{
			yPercent: 50,
			opacity: 0.5
		},
		{
			yPercent: 0,
			opacity: 1,
		
		},
	).to(".is-basic", {"--dynamic-pill-width": "100%", "color": "#0C0C0D", duration: 0.5});

}, [])

useEffect(() => {
	const el = entry_2.current
	gsap.fromTo(
		el,
		{
			yPercent: 50,
			opacity: 0.5
		},
		{
			yPercent: 0,
			opacity: 1,
			scrollTrigger: {
				trigger: app.current,
				start: 'top-=1500 top',
				end: 'bottom bottom',
				scrub: true,
				markers: true
			}
		},
	)
}, [])
useEffect(() => {
	const el = entry_3.current
	gsap.fromTo(
		el,
		{
			yPercent: 50,
			opacity: 0.5
		},
		{
			yPercent: 0,
			opacity: 1,
			scrollTrigger: {
				trigger: app.current,
				start: 'top-=1000 top',
				end: 'bottom bottom',
				scrub: true,
				markers: true
			}
		},
	)
}, [])
useEffect(() => {
	const el = entry_4.current
	gsap.fromTo(
		el,
		{
			yPercent: 50,
			opacity: 0.5
		},
		{
			yPercent: 0,
			opacity: 1,
			scrollTrigger: {
				trigger: app.current,
				start: 'top-=500 top',
				end: 'bottom bottom',
				scrub: true,
				markers: true
			}
		},
	)
}, [])
 
	return (
		<div className={`${section.container} ${section.container_fill_viewport}`} ref={app}>
			<div className={section.inner}>
					<div className={section.header}>
						<div className={section.title}>
							<h5 className="box">Interactive CV</h5>
						</div>
					</div>
				<div className={`${section.content} ${section.content_has_side}`}>
					<div className={cv.scroll__table} >
						<div className={`${cv.entry}`} ref={entry_1}>
							<div className={cv.entry_header}>
								<div className={`${cv.entry_date} copy-large`}>2019</div>
								<div className={`${cv.entry_title} h6`}>Revisiting An Old Passion</div>
							</div>
							<div className={cv.entry_content}>
								<p className="copy">A general afinity for <span>Technologie and Computers</span> met with my passion for creating things. Aided by my <span>creative problem solving skills</span> I started my Journey as a Frontend Developer by undertaking Youtube and Udemy Courses. After one year of intensiv studying I ended up with the following stack:</p>
								<ul>
									<li className={`${cv.pill} ${cv.pill_grey} copy`}><img src="/icons/html5.svg" alt="stack icon" />HTML</li>
									<li className={`${cv.pill} ${cv.pill_grey} copy`}><img src="/icons/css3-alt.svg" alt="stack icon" /><img src="/icons/sass.svg" alt="stack icon" />CSS & SCSS</li>
									<li className={`${cv.pill} ${cv.pill_grey} copy`}><img src="/icons/square-js.svg" alt="stack icon" />JavaScript</li>
									<li className={`${cv.pill} ${cv.pill_grey} copy`}><img src="/icons/react.svg" alt="stack icon" />React</li>
									<li className={`${cv.pill} ${cv.pill_grey} copy`}><img src="/icons/node-js.svg" alt="stack icon" />Node.js</li>
									<li className={`${cv.pill} ${cv.pill_grey} copy`}><img src="/icons/cube-solid.svg" alt="stack icon" />Wepback</li>
									<li className={`${cv.pill} ${cv.pill_grey} copy`}><img src="/icons/truck-fast-solid.svg" alt="stack icon" />Express.js</li>
									<li className={`${cv.pill} ${cv.pill_grey} copy`}><img src="/icons/leaf-solid.svg" alt="stack icon" />MongoDB</li>
									<li className={`${cv.pill} ${cv.pill_grey} copy`}><img src="/icons/wordpress.svg" alt="stack icon" />WordPress</li>
									<li className={`${cv.pill} ${cv.pill_grey} copy`}><img src="/icons/php.svg" alt="stack icon" />PHP</li>
									<li className={`${cv.pill} ${cv.pill_download} copy`}><img src="/icons/download.svg" alt="stack icon" />Download Certificates</li>
								</ul>
							</div>
						</div>
						<div className={`${cv.entry}`} ref={entry_2}>
							<div className={cv.entry_header}>
								<div className={`${cv.entry_date} copy-large`}>2019</div>
								<div className={`${cv.entry_title} h6`}>Revisiting An Old Passion</div>
							</div>
							<div className={cv.entry_content}>
								<p className="copy">A general afinity for <span>Technologie and Computers</span> met with my passion for creating things. Aided by my <span>creative problem solving skills</span> I started my Journey as a Frontend Developer by undertaking Youtube and Udemy Courses. After one year of intensiv studying I ended up with the following stack:</p>
								<ul>
									<li className={`${cv.pill} ${cv.pill_transparent} copy`}><img src="/icons/html5.svg" alt="stack icon" />HTML</li>
									<li className={`${cv.pill} ${cv.pill_transparent} copy`}><img src="/icons/css3-alt.svg" alt="stack icon" /><img src="/icons/sass.svg" alt="stack icon" />CSS & SCSS</li>
									<li className={`${cv.pill} ${cv.pill_transparent} copy`}><img src="/icons/square-js.svg" alt="stack icon" />JavaScript</li>
									<li className={`${cv.pill} ${cv.pill_transparent} copy`}><img src="/icons/react.svg" alt="stack icon" />React</li>
									<li className={`${cv.pill} ${cv.pill_transparent} copy`}><img src="/icons/node-js.svg" alt="stack icon" />Node.js</li>
									<li className={`${cv.pill} ${cv.pill_transparent} copy`}><img src="/icons/cube-solid.svg" alt="stack icon" />Wepback</li>
									<li className={`${cv.pill} ${cv.pill_transparent} copy`}><img src="/icons/truck-fast-solid.svg" alt="stack icon" />Express.js</li>
									<li className={`${cv.pill} ${cv.pill_transparent} copy`}><img src="/icons/leaf-solid.svg" alt="stack icon" />MongoDB</li>
									<li className={`${cv.pill} ${cv.pill_transparent} copy`}><img src="/icons/wordpress.svg" alt="stack icon" />WordPress</li>
									<li className={`${cv.pill} ${cv.pill_transparent} copy`}><img src="/icons/php.svg" alt="stack icon" />PHP</li>
									<li className={`${cv.pill} ${cv.pill_download} copy`}><img src="/icons/download.svg" alt="stack icon" />Download Certificates</li>
								</ul>
							</div>
						</div>
						<div className={`${cv.entry}`} ref={entry_3}>
							<div className={cv.entry_header}>
								<div className={`${cv.entry_date} copy-large`}>2019</div>
								<div className={`${cv.entry_title} h6`}>Revisiting An Old Passion</div>
							</div>
							<div className={cv.entry_content}>
								<p className="copy">A general afinity for <span>Technologie and Computers</span> met with my passion for creating things. Aided by my <span>creative problem solving skills</span> I started my Journey as a Frontend Developer by undertaking Youtube and Udemy Courses. After one year of intensiv studying I ended up with the following stack:</p>
								<ul>
									<li className={`${cv.pill} ${cv.pill_transparent} copy`}><img src="/icons/html5.svg" alt="stack icon" />HTML</li>
									<li className={`${cv.pill} ${cv.pill_transparent} copy`}><img src="/icons/css3-alt.svg" alt="stack icon" /><img src="/icons/sass.svg" alt="stack icon" />CSS & SCSS</li>
									<li className={`${cv.pill} ${cv.pill_transparent} copy`}><img src="/icons/square-js.svg" alt="stack icon" />JavaScript</li>
									<li className={`${cv.pill} ${cv.pill_transparent} copy`}><img src="/icons/react.svg" alt="stack icon" />React</li>
									<li className={`${cv.pill} ${cv.pill_transparent} copy`}><img src="/icons/node-js.svg" alt="stack icon" />Node.js</li>
									<li className={`${cv.pill} ${cv.pill_transparent} copy`}><img src="/icons/cube-solid.svg" alt="stack icon" />Wepback</li>
									<li className={`${cv.pill} ${cv.pill_transparent} copy`}><img src="/icons/truck-fast-solid.svg" alt="stack icon" />Express.js</li>
									<li className={`${cv.pill} ${cv.pill_transparent} copy`}><img src="/icons/leaf-solid.svg" alt="stack icon" />MongoDB</li>
									<li className={`${cv.pill} ${cv.pill_transparent} copy`}><img src="/icons/wordpress.svg" alt="stack icon" />WordPress</li>
									<li className={`${cv.pill} ${cv.pill_transparent} copy`}><img src="/icons/php.svg" alt="stack icon" />PHP</li>
									<li className={`${cv.pill} ${cv.pill_download} copy`}><img src="/icons/download.svg" alt="stack icon" />Download Certificates</li>
								</ul>
							</div>
						</div>
						<div className={`${cv.entry}`} ref={entry_4}>
							<div className={cv.entry_header}>
								<div className={`${cv.entry_date} copy-large`}>2019</div>
								<div className={`${cv.entry_title} h6`}>Revisiting An Old Passion</div>
							</div>
							<div className={cv.entry_content}>
								<p className="copy">A general afinity for <span>Technologie and Computers</span> met with my passion for creating things. Aided by my <span>creative problem solving skills</span> I started my Journey as a Frontend Developer by undertaking Youtube and Udemy Courses. After one year of intensiv studying I ended up with the following stack:</p>
								<ul>
									<li className={`${cv.pill} ${cv.pill_transparent} copy`}><IHTML />HTML</li>
									<li className={`${cv.pill} ${cv.pill_transparent} copy`}><img src="/icons/css3-alt.svg" alt="stack icon" /><img src="/icons/sass.svg" alt="stack icon" />CSS & SCSS</li>
									<li className={`${cv.pill} ${cv.pill_transparent} copy`}><img src="/icons/square-js.svg" alt="stack icon" />JavaScript</li>
									<li className={`${cv.pill} ${cv.pill_transparent} copy`}><img src="/icons/react.svg" alt="stack icon" />React</li>
									<li className={`${cv.pill} ${cv.pill_transparent} copy`}><img src="/icons/node-js.svg" alt="stack icon" />Node.js</li>
									<li className={`${cv.pill} ${cv.pill_transparent} copy`}><img src="/icons/cube-solid.svg" alt="stack icon" />Wepback</li>
									<li className={`${cv.pill} ${cv.pill_transparent} copy`}><img src="/icons/truck-fast-solid.svg" alt="stack icon" />Express.js</li>
									<li className={`${cv.pill} ${cv.pill_transparent} copy`}><img src="/icons/leaf-solid.svg" alt="stack icon" />MongoDB</li>
									<li className={`${cv.pill} ${cv.pill_transparent} copy`}><img src="/icons/wordpress.svg" alt="stack icon" />WordPress</li>
									<li className={`${cv.pill} ${cv.pill_transparent} copy`}><img src="/icons/php.svg" alt="stack icon" />PHP</li>
									<li className={`${cv.pill} ${cv.pill_download} copy`}><img src="/icons/download.svg" alt="stack icon" />Download Certificates</li>
								</ul>
							</div>
						</div>
					</div>
					<div className={cv.stack__table} ref={stackTable}>
						<div className={cv.stack__table__head}>
							<div className={`${cv.legend__pill} copy`}>
							Interested
							</div>
							<div className={`${cv.legend__pill} copy`}>
							Basic
							</div>
							<div className={`${cv.legend__pill} copy`}>
							Advanced
							</div>
							<div className={`${cv.legend__pill} copy`}>
							Expierenced
							</div>
							<div className={`${cv.legend__info} link-small`}>
							What does this mean?
							</div>
						</div>
						<div className={cv.stack__table__body}>
							<div className={cv.stack__table__entry}>
								<div className={`${cv.stack__table__title} h6`}>Technology Stack</div>
								<div className={cv.stack__table__content}>
										<li className={`${cv.pill} ${cv.pill_transparent} copy is-basic`}><IHTML/>HTML</li>
									<li className={`${cv.pill} ${cv.pill_transparent} copy is-basic`}><ICSS/><ISCSS/>CSS & SCSS</li>
									<li className={`${cv.pill} ${cv.pill_transparent} copy is-basic`}><IJS/>JavaScript</li>
									<li className={`${cv.pill} ${cv.pill_transparent} copy is-basic`}><IReact/>React</li>
									<li className={`${cv.pill} ${cv.pill_transparent} copy is-basic`}><INode/>Node.js</li>
									<li className={`${cv.pill} ${cv.pill_transparent} copy is-basic`}><IWebpack/>Wepback</li>
									<li className={`${cv.pill} ${cv.pill_transparent} copy is-basic`}><IExp/>Express.js</li>
									<li className={`${cv.pill} ${cv.pill_transparent} copy is-basic`}><IMongo/>MongoDB</li>
									<li className={`${cv.pill} ${cv.pill_transparent} copy is-basic`}><IWP/>WordPress</li>
									<li className={`${cv.pill} ${cv.pill_transparent} copy is-basic`}><IPHP/>PHP</li>
								</div>
							</div>
							<div className={cv.stack__table__entry}>
								<div className={`${cv.stack__table__title} h6`}>Personality Stack</div>
								<div className={cv.stack__table__content}>
										<li className={`${cv.pill} ${cv.pill_transparent} copy`}><IHTML />HTML</li>
									<li className={`${cv.pill} ${cv.pill_transparent} copy`}><img src="/icons/css3-alt.svg" alt="stack icon" /><img src="/icons/sass.svg" alt="stack icon" />CSS & SCSS</li>
									<li className={`${cv.pill} ${cv.pill_transparent} copy`}><img src="/icons/square-js.svg" alt="stack icon" />JavaScript</li>
									<li className={`${cv.pill} ${cv.pill_transparent} copy`}><img src="/icons/node-js.svg" alt="stack icon" />Node.js</li>
									<li className={`${cv.pill} ${cv.pill_transparent} copy`}><img src="/icons/cube-solid.svg" alt="stack icon" />Wepback</li>
									<li className={`${cv.pill} ${cv.pill_transparent} copy`}><img src="/icons/truck-fast-solid.svg" alt="stack icon" />Express.js</li>
									<li className={`${cv.pill} ${cv.pill_transparent} copy`}><img src="/icons/leaf-solid.svg" alt="stack icon" />MongoDB</li>
									<li className={`${cv.pill} ${cv.pill_transparent} copy`}><img src="/icons/wordpress.svg" alt="stack icon" />WordPress</li>
									<li className={`${cv.pill} ${cv.pill_transparent} copy`}><img src="/icons/php.svg" alt="stack icon" />PHP</li>
								</div>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	)
}