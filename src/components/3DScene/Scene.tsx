"use client";

import { Canvas } from "@react-three/fiber";
import {useState, useRef} from "react";
import {OrbitControls} from "@react-three/drei";
import * as THREE from "three";

import {createCubies, Cubie} from "@/components/3DScene/createCube";
import {onPointerDown} from "@/components/3DScene/onPointerDown";
import Background from "@/app/background";
import TextWithMaterial from "@/components/3DScene/textWithMaterial";

const Scene = () => {
    const [cubies] = useState(createCubies); // state to store the Rubik's Cube
    const groupRef = useRef<THREE.Group>(null); // ref to the group of the Rubik's Cube
    const [orbitEnabled, setOrbitEnabled] = useState(true); // control the orbit control status

    return (
        <Canvas camera={{ position: [4, 4, 4] }}>
            {/* ambient and directional light */}
            <ambientLight intensity={1} />
            <hemisphereLight skyColor={'#ffffff'} groundColor={'#444444'} intensity={0.3} />
            <directionalLight position={[2, 2, 2]} intensity={2.0}/>
            {/* Rubik's Cube 3D group */}
            <group ref={groupRef}>

                {cubies.map((cubie, index) => (
                    <Cubie
                        key={index}
                        position={cubie.position as [number, number, number]}
                        onPointerDown={onPointerDown} // 这里不动
                        setOrbitEnabled={setOrbitEnabled} // 把状态函数传进去
                    />
                ))}
            </group>

            {/* allow orbit control */}
            <OrbitControls enabled={orbitEnabled} enableZoom={false} />
            <TextWithMaterial />
            <Background />
        </Canvas>
    );
};

export default Scene;
