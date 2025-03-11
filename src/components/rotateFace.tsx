import * as THREE from "three";


const rotateFace = (layer: any, axis: "x"|"y"|"z", direction: number) => {
    const angle = Math.PI / 2 * direction;

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
    });

};

export default rotateFace;