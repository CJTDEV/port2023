'use client';
import section from '../styles/sections.module.scss'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CtaCards } from '../components/CtaCards'
import { Suspense, useEffect } from 'react';
import stack from '../styles/stack.module.scss'
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import stackData from '/lib/data/stack';
import skillsData from '/lib/data/skills';
import coursesData from '/lib/data/courses';
import SvgRenderer from "../components/SvgRenderer"
import { StackLegend } from "../components/StackLegend"
import { Skills } from "../components/Skills"
import { Courses } from "../components/Courses"


export default function SectionStack() {
    const icons = JSON.parse(JSON.stringify(stackData.entries))
    const skills = JSON.parse(JSON.stringify(skillsData))
    const courses = JSON.parse(JSON.stringify(coursesData))

    // Step 2: Group objects by their "lvl" value
    const groupedObjects = icons.reduce((result, currentObject) => {
        const lvl = currentObject.lvl;
        if (!result[lvl]) {
            result[lvl] = [];
        }
        result[lvl].push(currentObject);
        return result;
    }, {});

    const filteredArray = [];

    for (let lvl = 3; lvl >= 0; lvl--) {
        if (groupedObjects[lvl]) {
            filteredArray.push(...groupedObjects[lvl]);
        }
    }






    return (
        <div className={`${section.container} ${section.container__fill} ${section.container__spacing__default}`}>

            <div className={`${stack.inner}`}>

                <div className={`${stack.main} `}>
                    <h4 className={`${stack.title} headline font--inverted font--italic`}>
                        What I work with
                    </h4>
                    <div className={`${stack.main__header}`}>
                        <div className={`${stack.main__header__filter}`}>

                        </div>
                        <div className={`${stack.main__header__legend}`}>
                            <StackLegend />
                        </div>
                    </div>

                    <ul className={`${stack.main__icons}`}>
                        {filteredArray.map((icon, key) => (
                            <li key={key} data-type={icon.type} data-lvl={icon.lvl} className={`${stack.main__icon}`}>
                                <SvgRenderer src={"icons/" + icon.icon} size={24} />
                                <p className={`copy-small`}>{icon.label}</p>
                            </li>
                        ))}
                    </ul>

                </div>
                {/* 
                <div className={`${stack.skills}`}>
                    <Skills
                        content={skills}
                    ></Skills>
                </div> */}

                <div className={`${stack.courses}`}>
                    <Courses
                        content={courses}
                    ></Courses>
                </div>



            </div>

        </div>
    )
}