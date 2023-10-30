import React, { useRef, useState } from 'react';
import Swiper from './Swiper';
import skills from '../styles/skills.module.scss'
import { Button } from './Button'
import { DimensionalModule } from './DimensionalModule'
import Image from 'next/image'


export const Skills = (props) => {
    const moduleRef = useRef(null)
    const astroFilePath = '/astro_2/scene.gltf'
    const astroFilePath2 = '/astro_3/scene.gltf'
    const astroFilePath3 = '/astro_4/scene.gltf'

    const [loadedChildren, setLoadedChildren] = useState(0);

    const handleChildLoaded = () => {
        setLoadedChildren(prevLoaded => prevLoaded + 1);
    };

    const allChildrenLoaded = () => {
        // Execute your function when all children are loaded
        if (loadedChildren === 2) {
            performActionAfterChildrenLoaded();
        }
    };

    const performActionAfterChildrenLoaded = () => {
        // console.log("all loaded")
    };

    return (
        <>


            <h4 className={`${skills.title} headline font--inverted font--italic`}>
                What I excell at
            </h4>
            <div className={`${skills.main}`}>

                <div className={`${skills.card}`}>
                    <DimensionalModule
                        ref={moduleRef}
                        filePath={astroFilePath}
                        isVisible={true}
                        isPaused={false}
                        intensity={2}
                        lightX={10}
                        lightY={10}
                        lightZ={10}
                        rotation={[0.5, 0.3, 0]}
                        position={[0, -2, 0]}
                        scale={[1.6, 1.6, 1.6]}
                        animations={false}
                        hasOrbitControls={false}
                        onChildLoaded={handleChildLoaded}
                    >
                    </DimensionalModule>

                </div>

                <div className={`${skills.card}`}>

                    <DimensionalModule
                        ref={moduleRef}
                        filePath={astroFilePath2}
                        isVisible={true}
                        isPaused={false}
                        intensity={2}
                        lightX={10}
                        lightY={10}
                        lightZ={10}
                        rotation={[0.5, -0.6, 0.3]}
                        position={[1.2, -1.8, 0]}
                        scale={[1.6, 1.6, 1.6]}
                        animations={false}
                        hasOrbitControls={false}
                        onChildLoaded={handleChildLoaded}
                    >
                    </DimensionalModule>
                </div>

                <div className={`${skills.card}`}>

                    <DimensionalModule
                        ref={moduleRef}
                        filePath={astroFilePath3}
                        isVisible={true}
                        isPaused={false}
                        intensity={2}
                        lightX={10}
                        lightY={10}
                        lightZ={10}
                        rotation={[0.5, 0.3, 0]}
                        position={[0, -1.4, 0]}
                        scale={[1.4, 1.4, 1.4]}
                        animations={false}
                        hasOrbitControls={false}
                        onChildLoaded={handleChildLoaded}
                    >
                    </DimensionalModule>
                </div>

            </div>

        </>
    );
};


