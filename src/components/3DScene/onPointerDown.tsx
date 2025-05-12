import * as THREE from "three";

import {selectFace} from "@/components/3DScene/selectFace";

const onPointerDown = (startEvent: PointerEvent, camera: THREE.Camera, scene: THREE.Scene, setOrbitEnabled: (enabled: boolean) => void) => {
    startEvent.stopPropagation();

    //console.log("start", startEvent.clientX, startEvent.clientY);

    //console.log("start2", startEvent.clientX, startEvent.clientY);

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
        setOrbitEnabled(false); // deactivate OrbitControls
    }

    // get the object position
    const position  = intersects[0]?.object.position ?? -1;
    //console.log("obj_pos", position);

    // Drag direction
    const onPointerUp = (endEvent: PointerEvent) => {
        endEvent.stopPropagation();
        //console.log("end", endEvent.clientX, endEvent.clientY);

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

        // convert the vector to local space
        const absLocal = new THREE.Vector3(Math.abs(moveVector.x), Math.abs(moveVector.x), Math.abs(moveVector.z));
        //console.log("objVec", absLocal);

        //decide the axis to rotate based on the largest component
        if (dx_Abs > dy_Abs && dx_Abs > dz_Abs) {
            // rotate around X
            const direction = (absLocal as THREE.Vector3)["x"] > 0 ? 1 : -1;
            selectFace(position, "y", direction, scene);
            //console.log("rotate around X");
        } else if (dy_Abs > dx_Abs && dy_Abs > dz_Abs) {
            // rotate around Y
            const direction = (absLocal as THREE.Vector3)["y"] > 0 ? 1 : -1;
            selectFace(position, "x", direction, scene);
            //console.log("rotate around Y");
        } else {
            // rotate around Z
            const direction = (absLocal as THREE.Vector3)["z"] > 0 ? 1 : -1;
            selectFace(position, "z", direction, scene);
            //console.log("rotate around Z");
        }

        // remove the event listener
        window.removeEventListener("pointerup", onPointerUp);
        setOrbitEnabled(true); // ✅ 重新启用 OrbitControls

    };

    // 监听 pointerup 事件
    window.addEventListener("pointerup", onPointerUp, {once:true});
};



export { onPointerDown };