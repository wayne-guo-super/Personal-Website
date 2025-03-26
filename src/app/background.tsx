"use client"

import * as THREE from "three";
import {BackSide} from "three";
import fragmentShader from "@/shaders/fragmentShader.glsl";
import vertexShader from "@/shaders/vertexShader.glsl";

const Background = () => {
    console.log("Background");
    const shaderMaterial = new THREE.ShaderMaterial({
        fragmentShader: fragmentShader,
        vertexShader: vertexShader,
        side: THREE.BackSide,
    });
    return (
    <mesh scale={30} material={shaderMaterial} frustumCulled={false}>
        <sphereGeometry args={[1, 1000, 1000]} />
    </mesh>
    );
}

export default Background