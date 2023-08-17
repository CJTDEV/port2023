"use client";
import loader from '../styles/loader.module.scss'
import { Suspense, useRef, useEffect, useState } from "react";
import { gsap } from 'gsap'
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Html, useGLTF } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";
import StarsBackground from '/public/images/stars.svg'

function MeshComponent() {
    const fileUrl = "/rocket/rocket.gltf";
    const mesh = useRef<Mesh>(null!);
    const groupRef = useRef(null);
    const gltf = useLoader(GLTFLoader, fileUrl);




    return (

        <mesh scale={[3, 3, 3]} position={[3, 0, 0]} rotation={[0, Math.PI, 0]} ref={mesh}>
            <primitive object={gltf.scene} />
        </mesh>

    );

}

export function LoadingPage() {
    const [isObjectVisible, setIsObjectVisible] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const circleRef = useRef(null)

    useEffect(() => {

        setIsObjectVisible(true)

        setTimeout(() => {
            setIsLoaded(true)
        }, 5000)
    })

    /*   useEffect(() => {
  
          const scaleX = window.innerWidth / 300;
          const scaleY = window.innerHeight / 300;
  
          const scale = Math.max(scaleX, scaleY);
          console.log(scale)
  
          gsap.to(circleRef.current, {
  
              duration: 0.5,
              width: '100vw',
              height: '100vw',
              delay: 1,
              ease: "power2.out"
  
          });
  
  
  
          // After the scaling animation is complete, animate the circle to cover the whole page
  
          gsap.to(circleRef.current, {
  
              duration: 0.5,
              delay: 1.2,
              borderRadius: 0,
              ease: "power2.out"
  
          }); // Delay the second animation slightly
  
      }) */



    return (
        <div className={loader.main}>
            <div ref={circleRef} data-is-loaded={isLoaded ? 'true' : 'false'} className={loader.circle}>
                <div>
                    <div>Just a Webdev</div>
                    <div>Looking for his</div>
                    <div>next Adventure</div>
                </div>

            </div>
            <Canvas data-is-visible={isObjectVisible ? 'true' : 'false'} className={`${loader.canvas}`}>
                <Suspense fallback={null}>
                    <ambientLight args={["#ffffff", 1.5]} />
                    <directionalLight position={[5, 10, 5]} intensity={1.2} />
                    <MeshComponent />
                </Suspense>
            </Canvas>
        </div>
    );
}