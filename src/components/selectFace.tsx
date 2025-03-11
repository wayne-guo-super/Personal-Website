import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useState } from "react";

import rotateFace from "@/components/rotateFace";
import {bool} from "sharp";
//import useOrbitControls from "@/hooks/useOrbitControl";

const onPointerDown = (position: THREE.Vector3, axis: "x"|"y"|"z" , direction: number, scene: THREE.Scene) => {
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
        const layer = group.children.filter(child => child.position.x === position.x);;
        rotateFace(layer, axis, direction);
    }
    else if (axis === "z") {
        const group = scene.children.find(child => child.type === "Group");
        if (!group) return;
        const layer = group.children.filter(child => child.position.x === position.x);;
        rotateFace(layer, axis, direction);
    }
};

const onPointerDown = (startEvent: any, camera: THREE.Camera, scene: THREE.Scene, setOrbitEnabled: (enabled: boolean) => void) => {
    startEvent.stopPropagation();

    console.log("start", startEvent.clientX, startEvent.clientY);

    console.log("start2", startEvent.clientX, startEvent.clientY);
    // Face selection
    // create Raycaster
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    // normolize the mouse position
    pointer.x = (startEvent.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(startEvent.clientY / window.innerHeight) * 2 + 1;

    // update the picking ray with the camera and pointer position
    raycaster.setFromCamera(pointer, camera);

    // calculate objects intersecting the picking ray
    const intersects = raycaster.intersectObjects(scene.children);

    if (intersects.length > 0) {
        setOrbitEnabled(false); // ✅ 用外部传进来的函数控制 OrbitControls
    }

    // get the object position
    const position  = intersects[0]?.object.position ?? -1;
    console.log("obj_pos", position);

    // Drag direction
    const onPointerUp = (endEvent: PointerEvent) => {
        endEvent.stopPropagation();
        console.log("end", endEvent.clientX, endEvent.clientY);

        // calculate the mouse movement on 2D
        const dx = endEvent.clientX - startEvent.clientX;
        const dy = endEvent.clientY - startEvent.clientY;

        //convert mouse movement into Vector3 (3D) and convert it to local space
        const moveVector = new THREE.Vector3(dx, dy, 0);
        moveVector.unproject(camera);           // transforms from screen to 3D space
        moveVector.sub(camera.position).normalize(); // direction relative to camera

        // Decide axis to rotate based on largest component
        const dx_Abs = Math.abs(moveVector.x);
        const dy_Abs = Math.abs(moveVector.y);
        const dz_Abs = Math.abs(moveVector.z);

        //decide the axis to rotate based on the largest component
        if (dx_Abs > dy_Abs && dx_Abs > dz_Abs) {
            // rotate around X
            onPointerDown(position, "x")
            console.log("rotate around X");
        } else if (dy_Abs > dx_Abs && dy_Abs > dz_Abs) {
            // rotate around Y
            onPointerDown()
            console.log("rotate around Y");
        } else {
            // rotate around Z
            onPointerDown()
            console.log("rotate around Z");
        }


        const absLocal = new THREE.Vector3(Math.abs(moveVector.x), Math.abs(moveVector.x), Math.abs(moveVector.z));
        console.log("objVec", absLocal);

        // 移除监听，避免多次触发
        window.removeEventListener("pointerup", onPointerUp);
        setOrbitEnabled(true); // ✅ 重新启用 OrbitControls

    };

    // 监听 pointerup 事件
    window.addEventListener("pointerup", onPointerUp, {once:true});
};



export { onPointerDown, onPointerDown };