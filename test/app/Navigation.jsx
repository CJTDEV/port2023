'use client';
import navigation from './styles/navigation.module.scss'
import Link from 'next/link'

//icons
import ILogo from '/public/vercel.svg'
import IHTML from '/public/icons/html5.svg'
import { useEffect, useState } from 'react'
import { Button } from './components/Button'


export default function Navigation() {
    const [activeIndex, setActiveIndex] = useState(1)
    const [isHidden, setIsHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const hidden = currentScrollY > lastScrollY;

            setIsHidden(hidden);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);


    return (
        <nav className={`${navigation.nav}`} data-hidden={isHidden}>
            <div className={`${navigation.main}`}>
                <div className={`${navigation.inner}`}>
                    <div className={`${navigation.left}`}>
                        CJT.dev
                    </div>
                    <div className={`${navigation.center}`}>
                        <ul>
                            <li><Link onClick={() => setActiveIndex(1)} data-active={activeIndex == 1 ? true : false} href="#" className={`copy`}>Home</Link></li>
                            <li><Link onClick={() => setActiveIndex(2)} data-active={activeIndex == 2 ? true : false} href="#" className={`copy`}>About</Link></li>
                            <li><Link onClick={() => setActiveIndex(3)} data-active={activeIndex == 3 ? true : false} href="#" className={`copy`}>Projects</Link></li>
                            <li><Link onClick={() => setActiveIndex(4)} data-active={activeIndex == 4 ? true : false} href="#stack" className={`copy`}>Stack</Link></li>
                            <li><Link onClick={() => setActiveIndex(5)} data-active={activeIndex == 5 ? true : false} href="#" className={`copy`}>CV</Link></li>
                        </ul>
                        <div className={navigation.center__ctas}>
                            <Button
                                label={"Contacte Me"}
                                type={"gold"}
                                spacing={"default"}
                                isContact={true}
                                linkedin={"www.gooogle.com"}
                                mail={"mailto:cougarbelec@hotmail.com"}
                                href={"#"}
                                shadow={"true"}
                            ></Button>
                            <Button
                                label={"View on Github"}
                                type={"gold--inverted"}
                                spacing={"default"}
                                href={"#"}
                                shadow={"true"}
                            ></Button>
                        </div>
                    </div>
                    <div className={`${navigation.right}`}>
                        Profile
                    </div>
                </div>
            </div>
        </nav>
    )
}