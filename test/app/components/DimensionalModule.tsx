"use client";
import dimensional from '../styles/dimensional.module.scss'
import { Suspense, useRef, useEffect, useState, forwardRef } from "react";
import { gsap } from 'gsap'
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Html, useGLTF, MeshWobbleMaterial, shaderMaterial, Plane, useProgress } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Group, Mesh, PerspectiveCamera, Vector3 } from "three";
import { useWindowDimensions } from "../../hooks/useWindowsDimensions";
import * as THREE from 'three';



function MeshComponent({ data, onChildLoaded }) {
    const filePath = data.filePath
    const group = useRef<Group>(null!);
    const mesh = useRef(null!);
    const groupRef = useRef(null);
    const gltf = useLoader(GLTFLoader, filePath);
    const rotationData = data.rotation
    const positionData = data.position
    const scaleData = data.scale
    const isAnimated = data.animations
    const isPaused = data.isPaused
    const isVisible = data.isVisible
    const applySceneTwo = data.applySceneTwo
    const applySceneOne = data.applySceneOne




    useFrame(() => {
        if (applySceneTwo) {
            mesh.current.position.x = 2.6
            mesh.current.position.y = 1.8
            mesh.current.position.z = 1
            mesh.current.scale.x = 1
            mesh.current.scale.y = 1
            mesh.current.scale.z = 1
            mesh.current.rotation.x = 0.1
            mesh.current.rotation.y = 1
            mesh.current.rotation.z = 0
        }
    })

    useFrame(() => {
        if (applySceneOne) {
            mesh.current.position.x = 0
            mesh.current.position.y = 0
            mesh.current.position.z = 0
            mesh.current.scale.x = 1
            mesh.current.scale.y = 1
            mesh.current.scale.z = 1

        }
    })


    if (isAnimated.floating) {
        useFrame(({ clock }) => {
            if (!isPaused) {
                const time = clock.getElapsedTime();
                mesh.current.position.y = Math.sin(time) * 0.1; // Adjust the floating range
                // Rotating Animation
                mesh.current.rotation.x = Math.sin(time * 0.5) * 0.2; // Adjust rotation range and speed
                mesh.current.rotation.y = Math.cos(time * 0.5) * 0.2; // Adjust rotation range and speed
            }
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
            <primitive ref={mesh} object={gltf.scene}>

            </primitive>

        </group>

    );


}


export const DimensionalModule = forwardRef(({ onChildLoaded, childIndex, ...props }, ref) => {
    const dimensions = useWindowDimensions();
    const canvasStyles = props.canvasStyles

    const { progress } = useProgress()

    useEffect(() => {
        if (progress == 100) {
            onChildLoaded();
        }
    }, [progress])


    return (
        <div className={dimensional.object}>
            <Canvas style={canvasStyles} ref={ref}>
                <Suspense fallback={null}>

                    {
                        props.hasOrbitControls ? <OrbitControls enableZoom={false}></OrbitControls> : ''
                    }
                    <ambientLight intensity={0.5} />
                    <directionalLight color="white" intensity={props.intensity} position={[props.lightX, props.lightY, props.lightZ]} />
                    {props.isVisible &&
                        <>
                            <MeshComponent data={props} applySceneOne={props.applySceneOne} applySceneTwo={props.applySceneTwo} onChildLoaded={onChildLoaded} />

                        </>
                    }

                </Suspense>
            </Canvas>
        </div>
    );
})