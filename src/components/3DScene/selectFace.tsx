import * as THREE from "three";

import {rotateFace} from "@/components/3DScene/rotateFace";


const selectFace = (position: THREE.Vector3, axis: "x"|"y"|"z" , direction: number, scene: THREE.Scene) => {
    // 这里可以加入逻辑，比如修改魔方的旋转状态
    let layer: THREE.Mesh[] = [];
    if (axis === "x") {
        const group = scene.children.find(child => child.type === "Group");
        if (!group) return;
        layer = group.children.filter(child => child.position.x === position.x) as THREE.Mesh[];
        //console.log("rotate layer x", layer[0].position);
        rotateFace(layer, axis, direction);
    }
    else if (axis === "y") {
        const group = scene.children.find(child => child.type === "Group");
        if (!group) return;
        layer = group.children.filter(child => child.position.y === position.y) as THREE.Mesh[];
        rotateFace(layer, axis, direction);
    }
    else if (axis === "z") {
        const group = scene.children.find(child => child.type === "Group");
        if (!group) return;
         layer = group.children.filter(child => child.position.z === position.z) as THREE.Mesh[];
        rotateFace(layer, axis, direction);
    }
};

export {selectFace};