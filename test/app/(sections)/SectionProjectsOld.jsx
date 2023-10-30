import section from '../styles/sections.module.scss'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CtaCards } from '../components/CtaCards'
import { useEffect } from 'react';
import { Button } from '../components/Button'
import { ProjectCard } from '../components/ProjectCard'
import projects from '../styles/projects.module.scss'
import Image from 'next/image'
import test from "../../public/images/project-shop-plan.png"
import { DimensionalModule } from '../components/DimensionalModule'

export default function SectionProjects() {
    const handleChildLoaded = () => {
        console.log("x")
    };




    return (
        <div className={`${section.container} ${section.container__space_bottom_large}`}>
            <div className={`${projects.wrapper}`}>
                <div className={projects.header}>
                    <h5>Projects</h5>
                    <Button lable={"See All"} spacing={"default"} type={"gold"} />
                </div>
                <div className={`${projects.row}`}>
                    <ProjectCard

                        subtitle={'SES - SPAR European Shopping Centers'}
                        title={'Interactive Shopplan'}
                        copy={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'}
                        buttonLable={'Learn More'}
                        buttonLable2={'Visit Site'}
                        imgSrc={'/images/sp-7.png'}
                        imgWidth={600}
                        imgHeight={800}
                        imgAlt={"picture of shopplan project"}
                    />
                    <ProjectCard
                        imgAlt={"picture of salewa project"}
                        subtitle={'Salewa'}
                        title={'Ortles Landingpage'}
                        copy={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'}
                        buttonLable={'Learn More'}
                    // imgSrc={'/images/spshot.png'}
                    // imgWidth={300}
                    // imgHeight={600}
                    // imgAlt={"picture of shopplan project"}
                    />
                    <ProjectCard

                        subtitle={'SES - SPAR European Shopping Centers'}
                        title={'Packaging Guide'}
                        copy={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'}
                        buttonLable={'Learn More'}
                    // imgSrc={'/images/spshot.png'}
                    // imgWidth={300}
                    // imgHeight={600}
                    // imgAlt={"picture of shopplan project"}
                    />
                    <ProjectCard
                        imgSrc={'/images/salewa-preview.png'}
                        imgWidth={445}
                        imgHeight={575}
                        subtitle={'SES - SPAR European Shopping Centers'}
                        title={'Algolia Search'}
                        copy={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'}
                        buttonLable={'Learn More'}
                    // imgSrc={'/images/spshot.png'}
                    // imgWidth={300}
                    // imgHeight={600}
                    // imgAlt={"picture of shopplan project"}
                    />
                </div>
                <div className={`${projects.disclaimer}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis hic esse quaerat nisi reprehenderit, officia earum perferendis aut voluptate eius unde minus vitae labore tenetur, eveniet tempore iste qui rerum?</div>
            </div>
        </div>
    )
}