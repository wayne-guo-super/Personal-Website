import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useState } from "react";

import {rotateFace} from "@/components/rotateFace";
import {bool} from "sharp";
//import useOrbitControls from "@/hooks/useOrbitControl";

const selectFace = (position: THREE.Vector3, axis: "x"|"y"|"z" , direction: number, scene: THREE.Scene) => {
    // 这里可以加入逻辑，比如修改魔方的旋转状态
    if (axis === "x") {
        const group = scene.children.find(child => child.type === "Group");
        if (!group) return;
        const layer = group.children.filter(child => child.position.x === position.x);
        console.log("rotate layer x", layer[0].position);
        rotateFace(layer, axis, direction);
    }
    else if (axis === "y") {
        const group = scene.children.find(child => child.type === "Group");
        if (!group) return;
        const layer = group.children.filter(child => child.position.y === position.y);;
        rotateFace(layer, axis, direction);
    }
    else if (axis === "z") {
        const group = scene.children.find(child => child.type === "Group");
        if (!group) return;
        const layer = group.children.filter(child => child.position.z === position.z);;
        rotateFace(layer, axis, direction);
    }
};

export {selectFace};