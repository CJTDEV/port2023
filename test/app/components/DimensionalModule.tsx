"use client";
import dimensional from '../styles/dimensional.module.scss'
import { Suspense, useRef, useEffect, useState } from "react";
import { gsap } from 'gsap'
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Html, useGLTF, MeshWobbleMaterial } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Group, Mesh, PerspectiveCamera, Vector3 } from "three";
import { useWindowDimensions } from "../../hooks/useWindowsDimensions";

function MeshComponent(data) {
    const filePath = data.data.filePath
    const group = useRef<Group>(null!);
    const mesh = useRef(null!);
    const groupRef = useRef(null);
    const gltf = useLoader(GLTFLoader, filePath);
    const rotationData = data.data.rotation
    const positionData = data.data.position
    const scaleData = data.data.scale
    const isAnimated = data.data.animations

    if (isAnimated.floating) {
        useFrame(({ clock }) => {
            const time = clock.getElapsedTime();
            mesh.current.position.y = Math.sin(time) * 0.1; // Adjust the floating range
            // Rotating Animation
            mesh.current.rotation.x = Math.sin(time * 0.5) * 0.2; // Adjust rotation range and speed
            mesh.current.rotation.y = Math.cos(time * 0.5) * 0.2; // Adjust rotation range and speed
        });
    }




    if (isAnimated.rotation) {
        const rotation = isAnimated.rotation
        useFrame(() => {
            switch (rotation.axis) {
                case 'x':
                    if (rotation.direction === 'pos') {
                        mesh.current.rotation.x += rotation.speed
                    } else {
                        mesh.current.rotation.x -= rotation.speed
                    }
                    break;
                case 'y':
                    if (rotation.direction === 'pos') {
                        mesh.current.rotation.y += rotation.speed
                    } else {
                        mesh.current.rotation.y -= rotation.speed
                    }
                    break;
                case 'z':
                    if (rotation.direction === 'pos') {
                        mesh.current.rotation.z += rotation.speed
                    } else {
                        mesh.current.rotation.z -= rotation.speed
                    }
                    break;
            }

        });
    }



    return (

        <group rotation={rotationData} position={positionData} scale={scaleData} ref={group}>
            <primitive ref={mesh} object={gltf.scene} />
        </group>

    );

}




export function DimensionalModule(props) {
    const dimensions = useWindowDimensions();
    const canvasStyles = props.canvasStyles
    console.log(props)

    return (
        <div className={dimensional.object}>
            <Canvas style={canvasStyles}>
                <Suspense fallback={null}>
                    <perspectiveCamera fov={75} aspect={dimensions.width / dimensions.height} near={0.1} far={1000} position={[0, 0, 5]} />
                    {
                        props.hasOrbitControls ? <OrbitControls enableZoom={false}></OrbitControls> : ''
                    }
                    <ambientLight intensity={0.5} />
                    <directionalLight color="white" intensity={2} position={[5, 5, 1]} />
                    <MeshComponent data={props} />
                </Suspense>
            </Canvas>
        </div>
    );
}