import section from '../styles/sections.module.scss'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CtaCards } from '../components/CtaCards'
import { useEffect } from 'react';
import { Button } from '../components/Button'
import teaser from '../styles/teaser.module.scss'
import Image from 'next/image'
import test from "../../public/images/project-shop-plan.png"
import { DimensionalModule } from '../components/DimensionalModule'
import SvgRenderer from "../components/SvgRenderer"

export function Teaser(props) {

    const { title, copy, background, imgSrc, imgMask, imgWidth, imgHeight, imgAlt, imgPos, button, buttonAlt } = props.data;

    return (


        <div className={`${teaser.main}`} data-background={background}>
            <div className={`${teaser.inner}`}>
                <div className={`${teaser.col}`}>
                    <div className={teaser.image} data-pos={imgPos}>
                        <Image
                            src={imgSrc}
                            width={imgWidth}
                            height={imgHeight}

                            alt={imgAlt}

                        />
                        {imgMask &&
                            <Image
                                src={imgMask}
                                width={imgWidth}
                                height={imgHeight}
                                className={`${teaser.image__mask}`}

                                alt={imgAlt}
                            />
                        }
                    </div>
                </div>
                <div className={`${teaser.col}`}>
                    <div className={`${teaser.content}`}>
                        <h2 className={`headline font--uppercase`}>{title}</h2>
                        <p className={`copy-big light`}>{copy}</p>
                    </div>
                    <div className={`${teaser.cta}`}>
                        <Button label={button.label} spacing={"default"} type={"default"} />
                        {buttonAlt &&
                            <Button label={buttonAlt.label} spacing={"default"} type={"white"} />
                        }
                    </div>
                </div>
            </div>

        </div>

    )
}

