import services from '../styles/services.module.scss'
import pill from '../styles/pill.module.scss'
import Image from 'next/image'

import { DimensionalModule } from '../components/DimensionalModule'
import SvgRenderer from "../components/SvgRenderer"

export default function ServiceCard(props) {
    const card = props.card
    return (

        <div className={`${services.card} service-card-in`}>
            <div className={`${services.card__inner}`}>
                <div className={`${services.card__mask}`}></div>
                <div className={`${services.card__content}`}>

                    <div className={`${services.card__header}`}>
                        <h6 className={`very-light`}>{card.subtitle}</h6>
                        <h4 className={`light`}>{card.title}</h4>
                    </div>

                    <div className={`${services.card__body}`}>
                        <p className={`copy very-light`}>{card.text}</p>
                        <div className={`${services.card__stack}`}>
                            {
                                card.stack.map((tech, index) => (
                                    <div className={`${services.card__pill} ${pill.pill} ${pill.transparent} copy-tiny`} key={index}>
                                        <SvgRenderer src={`icons/${tech.icon}`} size={16} />
                                        <span className={`copy-tiny`}>{tech.label}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>

                {card.tags &&
                    <div className={`${services.card__tags}`}>
                        {card.tags.map((tag, index) => (
                            <div className={`${services.card__tag} ${pill.pill} ${tag.active ? pill.green : ''
                                }`} key={index}>
                                <SvgRenderer src={`icons/work.svg`} size={24} />
                                <span className={`copy-tiny`}>{tag.label}</span>
                            </div>
                        ))
                        }
                    </div>
                }

                <div className={`${services.card__img}`}>
                    <Image
                        src={`/images/${card.img}`}
                        alt={"Illustration"}
                        unoptimized={true}
                        width={"250"}
                        height={"250"}
                    >
                    </Image>
                </div>

            </div>
        </div>
    )
}

