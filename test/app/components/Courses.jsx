import React from 'react';
import Swiper from './Swiper';
import courses from '../styles/courses.module.scss'
import { Button } from './Button'
import { DimensionalModule } from './DimensionalModule'
import Image from 'next/image'
import SvgRenderer from "../components/SvgRenderer"

export const Courses = (props) => {


    const swiperSlides = []

    props.content.items.forEach((item, key) => {
        const listLength = item.list.length
        let listCheckedLength = 0
        item.list.forEach((item, key) => {

            if (item.checked) {
                listCheckedLength++
            }

        })

        const percentage = (listCheckedLength / listLength) * 100;



        swiperSlides.push(
            <>
                <div className={`${courses.card}`}>
                    <div className={`${courses.card__header}`}>
                        <SvgRenderer src={"icons/" + item.icon} size={24} />
                        <p className={`copy-big`}>{item.title}</p>
                        <span className={`${courses.card__header__pill} copy-tiny`}>
                            {
                                percentage == 0 ? "In the pipline" :
                                    percentage == 100 ? "Completed" :
                                        percentage > 50 ? "Nearing completion" : "In progress"
                            }
                        </span>
                        <span style={{ '--progress-width': percentage + '%' }} className={`${courses.card__header__progress}`}></span>
                    </div>
                    <div className={`${courses.card__body}`}>
                        <ul className={`${courses.card__body__list}`}>
                            {item.list.slice(0, 6).map((entry, key) => {
                                return (
                                    <li data-checked={entry.checked} className={`${courses.card__body__list__item} copy-small`} key={key}>{entry.content}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className={`${courses.card__footer}`}>
                        <Button
                            spacing={"small"}
                            href={item.link}
                            type={"gold--inverted"}
                            label={"View Course"}
                        >
                        </Button>
                    </div>
                </div>
            </>
        )
    })

    const swiperSettings = {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // pagination: true,
        spaceBetween: 24,
        slidesPerView: 4,
        // loop: true,
        // centerInsufficientSlides: true,
        // centeredSlides: true,
        // Add more settings as needed
    };

    return (
        <>


            <h4 className={`${courses.title} headline font--inverted font--italic`}>
                What I'm building on
            </h4>
            <div className={`${courses.main}`}>
                <Swiper slides={swiperSlides} swiperSettings={swiperSettings} />
            </div>

        </>
    );
};


