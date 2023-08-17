import section from '../styles/sections.module.scss'
import landing from '../styles/landing.module.scss'
import { DimensionalModule } from '../components/DimensionalModule'
import { Button } from '../components/Button'

export default function SectionLanding() {
    const rocketFilePath = '/rocket_purple/untitled.gltf'
    const astroFilePath = '/astro/scene.gltf'

    return (
        <div className={`${section.container} ${section.container_fill_viewport}`}>
            <div className={`${landing.inner}`}>
                <div className={`${landing.headline}`}>
                    <h1 className={`hero-headline headline`}>Just a Webdev<br />Looking for his<br />next adventure</h1>
                    <Button
                        lable={"Contact Me"}
                        spacing={"large"}
                        type={"main"}
                    ></Button>
                </div>
                <div className={`${landing.astro}`}>
                    <DimensionalModule
                        filePath={astroFilePath}
                        canvasStyles={{
                            position: 'absolute',
                            top: '40%',
                            left: '0',
                            width: '500px',
                            height: '500px',
                        }}
                        rotation={[0.9, 0.3, 0]}
                        position={[0, -0.2, 0]}
                        scale={[1, 1, 1]}
                        animations={
                            {
                                floating: true
                            }
                        }
                        hasOrbitControls={true}
                    >
                    </DimensionalModule>
                </div>
                <div className={`${landing.rocket}`}>
                    <DimensionalModule
                        filePath={rocketFilePath}
                        canvasStyles={{
                            position: 'absolute',
                            top: '20%',
                            left: '40%',
                            width: '1000px',
                            height: '800px',
                            backgroundRepeat: 'no-repeat',
                            backgroundImage: 'url("../images/final.png")',
                            backgroundSize: 'contain',
                            backgroundPosition: 'center center'
                        }}
                        rotation={[1, 4, 1]}
                        position={[0.7, 1.7, 0]}
                        scale={[2.5, 2.5, 2.5]}
                        animations={
                            {
                                rotation: { direction: 'pos', axis: 'y', speed: 0.001 }
                            }
                        }
                        hasOrbitControls={false}
                    >
                    </DimensionalModule>
                </div>
            </div>
        </div>
    )
}


