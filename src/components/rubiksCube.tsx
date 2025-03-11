"use client";

import { Canvas, useThree } from "@react-three/fiber";
import {useState, useRef} from "react";
import {OrbitControls} from "@react-three/drei";


import * as THREE from "three";

import rotateFace from "@/components/rotateFace";
import {createCubies, Cubie} from "@/components/createCube";
import {onPointerDown} from "@/components/onPointerDown";


const scene = new THREE.Scene();

const RubiksCube = () => {
    const [cubies] = useState(createCubies); // 存储魔方的立方体
    const groupRef = useRef<THREE.Group>(null); // 引用整个魔方的 3D 组
    const [orbitEnabled, setOrbitEnabled] = useState(true); // 控制 OrbitControls 状态

    return (
        <Canvas camera={{ position: [4, 4, 4] }}>
            {/* ambient and directional light */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 2]} />
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
            <OrbitControls enabled={orbitEnabled} />
        </Canvas>
    );
};

export default RubiksCube;
