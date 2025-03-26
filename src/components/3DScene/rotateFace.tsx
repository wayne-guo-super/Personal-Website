import * as THREE from "three";
//import { animated, useSpring } from "@react-spring/three";

const rotateFace = (layer: any, axis: "x"|"y"|"z", direction: number) => {
    const angle = Math.PI / 2 * direction;
    const newColor = new THREE.Color(0xff0000); // Example color: red
    layer.forEach(cube => {
        if (axis === "x") {
            cube.rotation.x += angle;
        }
        else if (axis === "y") {
            cube.rotation.y += angle;
        }
        else if (axis === "z") {
            cube.rotation.z += angle
        }
        // Change the color of the cube
        cube.material.forEach((material: THREE.Material) => {
            (material as THREE.MeshPhysicalMaterial).color = newColor;
        });
    });

};

export {rotateFace};