"use client"

import * as THREE from "three";
import { useEffect, useRef } from "react";
import fragmentShader from "@/shaders/fragmentShader";
import vertexShader from "@/shaders/vertexShader";

const Background = () => {
    const shaderMaterial = useRef<THREE.ShaderMaterial | null>(null);

    useEffect(() => {
        const clock = new THREE.Clock();

        const animate = () => {
            if (shaderMaterial.current) {
                shaderMaterial.current.uniforms.uTime.value = clock.getElapsedTime();
            }
            requestAnimationFrame(animate);
        };

        animate();
    }, []);

    shaderMaterial.current = new THREE.ShaderMaterial({
        fragmentShader: fragmentShader,
        vertexShader: vertexShader,
        uniforms: {
            uTime: { value: 0.0 }, // Initialize utime
        },
        side: THREE.BackSide,
    });

    return (
        <mesh scale={30} material={shaderMaterial.current} frustumCulled={false}>
            <sphereGeometry args={[1, 1000, 1000]} />
        </mesh>
    );
};

export default Background;