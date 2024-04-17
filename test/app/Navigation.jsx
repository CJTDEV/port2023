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
            gsap.to(window, { duration: 3, scrollTo: 0, ease: "power3", });
        }
        if (activeIndex == 2) {
            gsap.to(window, { duration: 3, scrollTo: 5000, ease: "power3", });
        }
        if (activeIndex == 3) {
            gsap.to(window, { duration: 3, scrollTo: 10500, ease: "power3", });
        }
    }, [activeIndex])


    return (
        <nav className={`${navigation.nav}`} data-top={isTop} data-hidden={isHidden}>



            <div className={`${navigation.center}`}>
                <div className={`${navigation.left}`}>
                    <Image alt={"logo"} style={{ objectFit: "contain" }} width={120} height={30} src={"/images/logomod.png"}></Image>
                </div>
                <ul>
                    <li><Link onClick={() => setActiveIndex(1)} data-active={activeIndex == 1 ? true : false} href="#" className={`copy`}>Home</Link></li>
                    <li><Link onClick={() => setActiveIndex(2)} data-active={activeIndex == 2 ? true : false} href="#" className={`copy`}>About</Link></li>
                    <li><Link onClick={() => setActiveIndex(3)} data-active={activeIndex == 3 ? true : false} href="#" className={`copy`}>Projects</Link></li>
                    <li><Link onClick={() => setActiveIndex(4)} data-active={activeIndex == 4 ? true : false} href="#stack" className={`copy`}>Services</Link></li>
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