'use client';
import footer from './styles/footer.module.scss'
import Link from 'next/link'
import Image from 'next/image';

//icons
import { useEffect, useState } from 'react'
import { Button } from './components/Button'
import SvgRenderer from './components/SvgRenderer';


export default function Navigation() {
    const [activeIndex, setActiveIndex] = useState(1)
    const [isHidden, setIsHidden] = useState(false);
    const [isTop, setIsTop] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const hidden = currentScrollY > lastScrollY;
            setIsHidden(hidden);
            setLastScrollY(currentScrollY);
            if (currentScrollY !== 0 && !isHidden) {
                setIsTop(false)
            } else {
                setIsTop(true)
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);


    return (
        <div className={`${footer.main}`}>

            <div className={`${footer.mobile}`}>
                <div className={`${footer.mobile__logo}`}>
                    <Image alt={"logo"} style={{ objectFit: "contain" }} width={60} height={20} src={"/images/logomod.png"}></Image>
                </div>


                <div className={`${footer.mobile__socials}`}>
                    <a href="#">
                        <SvgRenderer src={"icons/mail.svg"}></SvgRenderer>
                    </a>
                    <a href="#">
                        <SvgRenderer src={"icons/linkedin.svg"}></SvgRenderer>
                    </a>
                    <a href="#">
                        <SvgRenderer src={"icons/github.svg"}></SvgRenderer>
                    </a>
                </div>
            </div>




            {/* <Button
                label={"Contact Me"}
                type={"default"}
                spacing={"default"}
                shadow={"true"}
                isContact={true}
                linkedin={"www.gooogle.com"}
                mail={"mailto:cougarbelec@hotmail.com"}
                href={"#"}

            ></Button> */}

            {/* <div className={`${footer.top}`}>
                <div className={`${footer.logo}`}>
                    <Image alt={"logo"} style={{ objectFit: "contain" }} width={150} height={150} src={"/images/logowhite.png"}></Image>
                </div>
            </div>

            <div className={`${footer.bottom}`}>
                <div className={`${footer.bottom__left}`}>

                    <a className="copy-small" href="#">Contact</a>
                    <span>|</span>
                    <a className="copy-small" href="#">Imprint</a>
                </div>

                <div className={`${footer.bottom__center}`}>
                    <span className={`copy-small`}>Made with</span>
                    <span><SvgRenderer src={"icons/heart.svg"}></SvgRenderer></span>
                    <span>in</span>
                    <span><SvgRenderer src={"icons/nextjs.svg"}></SvgRenderer></span>
                </div>

                <div className={`${footer.bottom__right}`}>
                    <div className={`${footer.info__left}`}>
                        <a href="#"><SvgRenderer src={"icons/linkedin.svg"}></SvgRenderer></a>
                        <a href="#"><SvgRenderer src={"icons/github.svg"}></SvgRenderer></a>
                    </div>
                </div>
            </div> */}

        </div>
    )
}