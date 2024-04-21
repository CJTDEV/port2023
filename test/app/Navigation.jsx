'use client';
import navigation from './styles/navigation.module.scss'
import Link from 'next/link'
import Image from 'next/image';
import { gsap } from 'gsap'
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
//icons

import { useEffect, useState } from 'react'
import { Button } from './components/Button'
import SvgRenderer from './components/SvgRenderer';


export default function Navigation() {
    gsap.registerPlugin(ScrollToPlugin)
    const [activeIndex, setActiveIndex] = useState(1)
    const [isHidden, setIsHidden] = useState(false);
    const [isTop, setIsTop] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        if (activeIndex == 1) {
            gsap.to(window, { duration: 2, scrollTo: 0, ease: "power3", });
        }
        if (activeIndex == 2) {
            gsap.to(window, { duration: 2, scrollTo: 1900, ease: "power3", });
        }
        if (activeIndex == 3) {
            gsap.to(window, { duration: 2, scrollTo: 2300, ease: "power3", });
        }
        if (activeIndex == 4) {
            gsap.to(window, { duration: 2, scrollTo: 3200, ease: "power3", });
        }
    }, [activeIndex])


    return (
        <nav className={`${navigation.nav}`} data-top={isTop} data-hidden={isHidden}>



            <div className={`${navigation.center}`}>
                <div className={`${navigation.left}`}>
                    <Image alt={"logo"} style={{ objectFit: "contain" }} width={120} height={30} src={"/images/logomod.png"}></Image>
                </div>
                <ul>
                    <li><span onClick={() => setActiveIndex(1)} data-active={activeIndex == 1 ? true : false} className={`copy nav-home`}>Home</span></li>
                    <li><span onClick={() => setActiveIndex(2)} data-active={activeIndex == 2 ? true : false} className={`copy nav-about`}>About</span></li>
                    <li><span onClick={() => setActiveIndex(3)} data-active={activeIndex == 3 ? true : false} className={`copy nav-projects`}>Projects</span></li>
                    <li><span onClick={() => setActiveIndex(4)} data-active={activeIndex == 4 ? true : false} className={`copy nav-services`}>Services</span></li>
                </ul>
                <div className={navigation.center__ctas}>
                    <Button
                        label={"Contact Me"}
                        type={"default"}
                        spacing={"default"}
                        isContact={true}
                        linkedin={"www.gooogle.com"}
                        mail={"mailto:cougarbelec@hotmail.com"}
                        href={"#"}

                    ></Button>
                    {/* <Button
                                label={"View on Github"}
                                type={"default--alt"}
                                spacing={"default"}
                                href={"#"}

                            ></Button> */}
                </div>

            </div>
        </nav>
    )
}