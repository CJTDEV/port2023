'use client';
import section from '../styles/sections.module.scss'
import cv from '../styles/cv.module.scss'
import button from '../styles/button.module.scss'
import entriesData from '/lib/data/cv';
import React, { useEffect, useRef, useLayoutEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Modal } from "../../utils/modal_utils";
import StackInfoPopup from "../popups/StackInfoPopup"
import { useWindowDimensions } from "../../hooks/useWindowsDimensions";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import MovingGrid from '../components/MovingGrid';

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



export default function SectionCV() {
	gsap.registerPlugin(ScrollTrigger);
	const app = useRef(null)
	const table = useRef(null)
	const stackBody = useRef(null)
	const skipBtn = useRef(null)
	const mobileStack = useRef(null)
	const entry = useRef(null)
	const entry_0 = useRef(null)
	const entry_1 = useRef(null)
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
	const [swiperRef, setSwiperRef] = useState(null);

	// Icon Text Dropdown
	const [expandedItems, setExpandedItems] = useState([])

	const handleIconClick = (index) => {
		setExpandedItems((prevExpandedItems) => {
			const isExpanded = prevExpandedItems.includes(index);
			const prevExpandedItem = prevExpandedItems[0];

			if (isExpanded) {
				// If the clicked item is already expanded, collapse it
				return prevExpandedItems.filter((item) => item !== index);
			} else {
				// If the clicked item is not expanded, collapse the currently expanded item (if any) and then toggle the clicked item
				let collapsedItems = [];
				if (prevExpandedItem !== undefined) {
					collapsedItems = prevExpandedItems.filter((item) => item !== prevExpandedItem);
				}

				// Calculate the original column of the clicked item
				const originalColumn = index % 4;

				// Find all items with the same original column and remove them from the collapsed items
				const itemsInSameColumn = collapsedItems.filter((item) => item % 4 === originalColumn);
				collapsedItems = collapsedItems.filter((item) => !itemsInSameColumn.includes(item));

				return [...collapsedItems, ...itemsInSameColumn, index];
			}
		});
	};



	// Mobile Stack

	const handleMobileStackExpand = () => {
		setIsMobileStackExpand(!isMobileStackExpand)
	}

	const openLegendMobileInfo = () => {
		setIsLegendMobileInfo(!isLegendMobileInfo)
	};

	const [stackPills, setStackPills] = useState([
		{
			label: "HTML",
			icon: "HTML",
			class: "is-basic is-advanced",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nulla magni, aperiam autem velit a omnis adipisci corporis blanditiis corrupti, dolorum facilis eum! Itaque asperiores voluptates commodi! Eveniet, ab quod."
		},
		{
			label: "CSS",
			icon: "CSS",
			class: "is-basic is-advanced",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nulla magni, aperiam autem velit a omnis adipisci corporis blanditiis corrupti, dolorum facilis eum! Itaque asperiores voluptates commodi! Eveniet, ab quod."
		},
		{
			label: "SCSS / SASS",
			icon: "SCSS / SASS",
			class: "is-basic is-advanced",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nulla magni, aperiam autem velit a omnis adipisci corporis blanditiis corrupti, dolorum facilis eum! Itaque asperiores voluptates commodi! Eveniet, ab quod."
		},
		{
			label: "JavaScript",
			icon: "JavaScript",
			class: "is-basic is-advanced",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nulla magni, aperiam autem velit a omnis adipisci corporis blanditiis corrupti, dolorum facilis eum! Itaque asperiores voluptates commodi! Eveniet, ab quod."
		},
		{
			label: "React",
			icon: "React",
			class: "is-basic is-advanced",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nulla magni, aperiam autem velit a omnis adipisci corporis blanditiis corrupti, dolorum facilis eum! Itaque asperiores voluptates commodi! Eveniet, ab quod."
		},
		{
			label: "Node.js",
			icon: "Node.js",
			class: "is-basic",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nulla magni, aperiam autem velit a omnis adipisci corporis blanditiis corrupti, dolorum facilis eum! Itaque asperiores voluptates commodi! Eveniet, ab quod."
		},
		{
			label: "Webpack",
			icon: "Webpack",
			class: "is-basic",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nulla magni, aperiam autem velit a omnis adipisci corporis blanditiis corrupti, dolorum facilis eum! Itaque asperiores voluptates commodi! Eveniet, ab quod."
		},
		{
			label: "Express.js",
			icon: "Express.js",
			class: "is-basic",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nulla magni, aperiam autem velit a omnis adipisci corporis blanditiis corrupti, dolorum facilis eum! Itaque asperiores voluptates commodi! Eveniet, ab quod."
		},
		{
			label: "WordPress",
			icon: "WordPress",
			class: "is-basic",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nulla magni, aperiam autem velit a omnis adipisci corporis blanditiis corrupti, dolorum facilis eum! Itaque asperiores voluptates commodi! Eveniet, ab quod."
		},
		{
			label: "PHP",
			icon: "PHP",
			class: "is-basic is-advanced",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nulla magni, aperiam autem velit a omnis adipisci corporis blanditiis corrupti, dolorum facilis eum! Itaque asperiores voluptates commodi! Eveniet, ab quod."
		},

	])

	useEffect(() => {
		if (isMobileStackExpand && swiperRef) {
			swiperRef.disable();
		} else if (swiperRef) {
			swiperRef.enable();
		}
	}, [isMobileStackExpand])

	//workarround because useEffect is being called twice
	let first = true;


	useEffect(() => {
		let elements = gsap.utils.toArray('.js_entry')
		let elmsHeight = 0;
		elements.forEach((e) => {
			elmsHeight += e.getBoundingClientRect().height
		})
		gsap.timeline({
			scrollTrigger: {
				trigger: app.current,
				start: 'top-=250 top',
				end: 'bottom bottom',
				markers: false,
				onEnter: () => { setIsMobileStackVisible(true) },
				onLeave: () => { setIsMobileStackExpand(false), setIsMobileStackVisible(false) },
				onLeaveBack: () => { setIsMobileStackExpand(false), setIsMobileStackVisible(false) },
				onEnterBack: () => { setIsMobileStackExpand(false), setIsMobileStackVisible(true) }
			}
		})
		elements.forEach((e, index) => {
			gsap.fromTo(e, { autoAlpha: 0.2, pointerEvents: 'none' }, {
				ease: "power3.inOut",
				autoAlpha: 1,
				pointerEvents: 'all',
				scrollTrigger: {
					trigger: e,
					scrub: 1.5,
					start: 'top-=100% top',
					end: "bottom bottom",
					markers: false,
				}
			})
			if (index == 0) {
				gsap.timeline({
					scrollTrigger: {
						trigger: e,
						start: 'top-=1200 top',
						end: 'bottom+=200 bottom',
						scrub: 1,
						markers: false,
					}
				}).to(".is-basic", { "--dynamic-pill-width": "100%", "color": "#0C0C0D", duration: 0.1 });
			}
			if (index == 1) {
				gsap.timeline({
					scrollTrigger: {
						trigger: e,
						start: 'top top',
						end: 'bottom+=200 bottom',
						scrub: 2,
						markers: false,
						onEnter: () => {
							if (first) {
								setStackPills(oldArray => [...oldArray, { label: "Vue.js", icon: "Vue", class: 'is-basic', width: 100, color: '#0C0C0D', bgcolor: '#66D998' }]);
								first = false
							}

						},
						onEnterBack: function () {
							const filteredArray = stackPills.filter((item) => item.label !== 'HTML')
							setStackPills(filteredArray)
							first = true
						},
					}
				}).to(".is-advanced", { "--dynamic-pill-color": "#F2C230", duration: 0.1 });
			}
			if (index == 3) {
				gsap.timeline({
					scrollTrigger: {
						trigger: e,
						start: 'top top',
						end: 'bottom+=200 bottom',
						scrub: 2,
						markers: false,
						onEnter: () => {
							if (first) {
								setStackPills(oldArray => [...oldArray, { label: "Vue.js", icon: "Vue", class: 'is-basic', width: 100, color: '#0C0C0D', bgcolor: '#66D998' }, { label: "Vue.js", icon: "Vue", class: 'is-basic', width: 100, color: '#0C0C0D', bgcolor: '#66D998' }, { label: "Vue.js", icon: "Vue", class: 'is-basic', width: 100, color: '#0C0C0D', bgcolor: '#66D998' }]);
								first = false
							}

						},
						onEnterBack: function () {
							const filteredArray = stackPills.filter((item) => item.label !== 'HTML')
							setStackPills(filteredArray)
							first = true
						},
					}
				}).to(".is-advanced", { "--dynamic-pill-color": "#F2C230", duration: 0.1 });
			}

		})


	}, [])


	const entries = JSON.parse(JSON.stringify(entriesData))


	return (
		<div className={`${section.container}`} ref={app}>
			{/* <div className={`${button.default} ${button.transparent} ${button.fixed_bottom}`} ref={skipBtn}>Skip this section</div> */}
			<div className={section.inner}>
				<div className={section.header}>
					<div className={section.title}>
						<h5 className="box">{entries.title}</h5>
					</div>
				</div>
				<div className={`${section.content} ${section.content_has_side}`}>
					<div className={cv.scroll__table} ref={table}>
						{entries.posts.map((post, key) => (
							<div className={`${cv.entry} js_entry`} key={key} ref={'entry_'.key}>
								<div className={cv.entry_header}>
									<div className={`${cv.entry_date} copy`}>{post.date}</div>
									<div className={`${cv.entry_title} h6`}>{post.title}</div>
								</div>
								<div className={cv.entry_content}>
									<p className="copy" dangerouslySetInnerHTML={{ __html: post.text }}></p>
									<MovingGrid
										data={post.icons}
									/>
									{/* <ul className='js-icon-list'>
										{post.icons.map((icon, key) => (
									
											
											<li
												data-expanded={expandedItems.includes(key)}
												onClick={() => handleIconClick(key)}
												key={key} className={`${cv.icon} copy-small js-icon-ref`}>
												<div className={`${cv.icon__head}`}>
													{
														{
															'HTML': <IHTML />,
															'CSS': <ICSS />,
															'SCSS / SASS': <ISCSS />,
															'JavaScript': <IJS />,
															'React': <IReact />,
															'Node.js': <INode />,
															'Webpack': <IWebpack />,
															'Express.js': <IExp />,
															'WordPress': <IWP />,
															'PHP': <IPHP />,
														}[icon.label]
													}
												</div>
												<div className={cv.icon__body}>
													<div>{icon.text}</div>
												</div>
											</li>
										))}
									</ul> */}
								</div>
							</div>
						))}

					</div>
					<div className={cv.stack__table} ref={stackTable}>
						<div className={cv.stack__table__sticky}>
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
								<div className={`${cv.legend__info}`} onClick={openModal}><IQuestion></IQuestion></div>
							</div>
							<div className={cv.stack__table__body}>

								<div className={cv.stack__table__entry}>
									<div className={`${cv.stack__table__title} h6`}>Technology Stack</div>
									<div className={cv.stack__table__content} ref={stackBody}>
										{stackPills.map((pill, key) => {
											return (
												<li key={key} style={{ '--dynamic-pill-width': pill.width + '%', '--dynamic-pill-color': pill.bgcolor, 'color': pill.color }} className={`${cv.pill} ${cv.pill_transparent} ${pill.class} ${cv.fade}`} >
													{
														{
															'HTML': <IHTML />,
															'CSS': <ICSS />,
															'SCSS / SASS': <ISCSS />,
															'JavaScript': <IJS />,
															'React': <IReact />,
															'Node.js': <INode />,
															'Webpack': <IWebpack />,
															'Express.js': <IExp />,
															'WordPress': <IWP />,
															'PHP': <IPHP />,
															'Vue.js': <IVue />,
														}[pill.label]
													}
													{pill.label}
												</li>
											)
										})}
									</div>
								</div>
							</div>
							<div className={`${cv.stack__table__body} ${cv.stack__table__body__mobile}`} data-active={isMobileStackVisible} data-expanded={isMobileStackExpand} ref={mobileStack}>
								{isMobileStackExpand &&
									<>
										<div className={`${cv.stack__table__title} h6`}>Technology Stack</div>
									</>
								}
								<div className='overflow-control' style={isMobileStackExpand ? { overflowY: 'auto', borderTopLeftRadius: 8 + 'px', borderTopRightRadius: 8 + 'px' } : null}>
									{isMobileStackExpand &&
										<>
											<div className={cv.stack__table__head} data-legend-expanded={isLegendMobileInfo}>
												<div className={`${cv.legend__pill} copy`}>
													Interested<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus perspiciatis delectus officia officiis molestias quam quo maiores!</span>
												</div>
												<div className={`${cv.legend__pill} copy`}>
													Basic<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus perspiciatis delectus officia officiis molestias quam quo maiores!</span>
												</div>
												<div className={`${cv.legend__pill} copy`}>
													Advanced<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus perspiciatis delectus officia officiis molestias quam quo maiores!</span>
												</div>
												<div className={`${cv.legend__pill} copy`}>
													Expierenced<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus perspiciatis delectus officia officiis molestias quam quo maiores!</span>
												</div>
												<div className={`${cv.legend__info}`} onClick={openLegendMobileInfo}>{!isLegendMobileInfo ? <IQuestion></IQuestion> : <IClose></IClose>}</div>
											</div>
										</>
									}
									<div className={cv.stack__table__content} ref={stackBody}>
										<Swiper
											spaceBetween={8}
											slidesPerView={'auto'}
											onSlideChange={() => console.log('slide change')}
											onSwiper={setSwiperRef}
											className={cv.stack_swiper}
											data-expanded={isMobileStackExpand}
										>
											{stackPills.map((pill, key) => {
												return (
													<SwiperSlide key={key} className={cv.stack_swiper_slide}>
														<li style={{ '--dynamic-pill-width': pill.width + '%', '--dynamic-pill-color': pill.bgcolor, 'color': pill.color }} className={`${cv.pill} ${cv.pill_transparent} ${pill.class} ${cv.fade}`} >
															{
																{
																	'HTML': <IHTML />,
																	'CSS': <ICSS />,
																	'SCSS / SASS': <ISCSS />,
																	'JavaScript': <IJS />,
																	'React': <IReact />,
																	'Node.js': <INode />,
																	'Webpack': <IWebpack />,
																	'Express.js': <IExp />,
																	'WordPress': <IWP />,
																	'PHP': <IPHP />,
																	'Vue.js': <IVue />,
																}[pill.label]
															}
															{pill.label}
														</li>
													</SwiperSlide>
												)
											})}
										</Swiper>
									</div>
									<div onClick={handleMobileStackExpand} className={cv.stack__table__cta} data-expanded={isMobileStackExpand}>{isMobileStackExpand ? <IMinus /> : <IPlus />}</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}
