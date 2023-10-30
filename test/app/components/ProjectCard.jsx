import section from '../styles/sections.module.scss'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CtaCards } from '../components/CtaCards'
import { useEffect } from 'react';
import { Button } from '../components/Button'
import projects from '../styles/projects.module.scss'
import Image from 'next/image'
import test from "../../public/images/project-shop-plan.png"
import { DimensionalModule } from '../components/DimensionalModule'
import SvgRenderer from "../components/SvgRenderer"

export function ProjectCard(props) {
    return (

        <div className={`${projects.item}`}>
            <div className={projects.item__content}>
                <div className={projects.item__content__title}>
                    <h4 className={`headline`}>{props.title}</h4>
                </div>
                <div className={projects.item__content__client}>
                    <span>SES - SPAR European Shopping Centers</span>
                </div>
                <div className={projects.item__content__tech}>
                    <span>SVG</span>
                    <span>JavaScript</span>
                    <span>SASS</span>
                    <span>PHP</span>
                </div>
                <div className={projects.item__content__copy}>
                    <p className={`copy`}>{props.copy}</p>
                </div>
                <div className={projects.item__content__buttons}>
                    <Button lable={props.buttonLable} spacing={"default"} type={"gold"} />
                    {props.buttonLable2 &&
                        <Button lable={props.buttonLable2} spacing={"default"} type={"gold"} />
                    }
                </div>

            </div>
            {props.imgSrc &&
                <div className={projects.item__background}>
                    <Image
                        src={props.imgSrc}
                        width={props.imgWidth}
                        height={props.imgHeight}
                        unoptimized={true}
                        alt={props.imgAlt}
                    />
                </div>

            }
        </div>
    )
}

