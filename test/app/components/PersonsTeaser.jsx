import section from '../styles/sections.module.scss'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CtaCards } from '../components/CtaCards'
import { useEffect, useState, useRef } from 'react';
import teaser from '../styles/teaser.module.scss'
import persons from '../styles/persons.module.scss'
import Image from 'next/image'
import { DimensionalModule } from '../components/DimensionalModule'
import { ButtonExpand } from '../components/ButtonExpand'


export function PersonsTeaser(props) {
    const moduleRef = useRef(null)
    const [loadedChildren, setLoadedChildren] = useState(0);

    const handleChildLoaded = () => {
        setLoadedChildren(prevLoaded => prevLoaded + 1);
    };
    useEffect(() => {
        if (loadedChildren === 1) {
            console.log("all loaded")
        }
    }, [loadedChildren])
    return (

        <div className={`${teaser.main} ${persons.main}`}>
            <div className={`${teaser.inner} ${persons.inner}`}>
                <div className={`${persons.content}`}>
                    <div className={`${persons.title}`}>
                        <h2 className={`headline font--uppercase`}>{props.content.title}</h2>
                    </div>
                    <div className={`${persons.row}`}>
                        {props.content.items.map((item, index) => (
                            <div className={`${persons.item}`} key={index}>
                                <div className={`${persons.gradient}`}></div>
                                <div className={`${persons.item__image}`}>
                                    <Image
                                        src={item.src}
                                        width={350}
                                        height={350}
                                        alt={"Spacer"}
                                    ></Image>
                                </div>
                                <div className={`${persons.item__name}`}>
                                    <ButtonExpand
                                        label={item.name}
                                        type={"white"}
                                        shadow={"true"}
                                        spacing={"small-bold"}
                                        text={"I love creating. Creating is cool and is my passion. Did you know I like creating? Well now you know why. I use it in all of my projects."}
                                        icon={{
                                            src: 'icons/plus.svg'
                                        }}
                                    ></ButtonExpand>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>

    )
}

