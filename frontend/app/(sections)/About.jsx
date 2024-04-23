import about from '../styles/about.module.scss'
import { Button } from '../components/Button'
import Image from 'next/image'
import aboutDataLib from '/lib/data/about'
import journeyData from '/lib/data/journey'
import SvgRenderer from "../components/SvgRenderer"

export default function About() {
    const aboutData = JSON.parse(JSON.stringify(aboutDataLib))
    const cv = JSON.parse(JSON.stringify(journeyData))

    return (
        <div className={`${about.main} about-trigger`} id="scroll-about">

            <div className={`${about.col}`}>

                {aboutData.left_col.map((item, index) => (
                    <div key={index} is-right={'true'} style={{}} className={`${about.info} ${about.info__right} info-in`}>
                        <p className={`${about.info__text} info-text-in copy-big light`}><span>{item.icon}</span>{item.text}</p>
                    </div>
                ))}

            </div>

            <div className={`${about.col} image-in`}>
                <Image
                    src={aboutData.image.src}
                    width={500}
                    height={500}
                    alt={"Astro Surfing"}
                    unoptimized={true}
                    style={{
                        zIndex: 1,
                        opacity: 1,
                    }}
                ></Image>
            </div>

            <div className={`${about.col__mobile}`}>
                {aboutData.left_col.map((item, index) => (
                    <div key={index} className={`${about.col__pill} copy light`}>
                        <span>{item.icon}</span>{item.text}
                    </div>
                ))}

            </div>

            <div className={`${about.col__cv}`}>
                {
                    cv.entries.map((entry, index) => (
                        <a href={entry.href} target="_blank" key={index} className={`${about.col__cv__entry} entry-${index + 1} cv-entry-in`}>
                            <div className={`${about.col__cv__entry__title}`}>
                                <div className={`${about.col__cv__entry__subtitle} copy-small very-light text-grey-light`} data-active={index == 0}>{entry.subtitle}</div>
                                <p className={`copy light`}>{entry.title}</p>
                            </div>
                            <div className={`${about.col__cv__entry__link}`} href="#"> <SvgRenderer src={"/icons/link-alt.svg"} size={32} /></div>

                        </a>
                    ))
                }
            </div>

            <div className={`${about.col}`}>

                {aboutData.right_col.map((item, index) => (
                    <div key={index} style={{}} className={`${about.info} info-in`}>
                        {item.button ? (
                            <Button
                                label={item.text}
                                isContact={true}
                                linkedin={"www.gooogle.com"}
                                mail={"mailto:cougarbelec@hotmail.com"}
                                customClass={about.info__cta}
                            ></Button>
                        ) : (
                            <p className={`${about.info__text} info-text-in copy-big light`}>{item.text}<span>{item.icon}</span></p>
                        )}

                    </div>
                ))}

            </div>

        </div>

    )
}