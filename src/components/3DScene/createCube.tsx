import {useThree } from "@react-three/fiber";

// define the colors of the Rubik's Cube
const COLORS = [
    "#A8A29E", // 高级灰
    "#D6B599", // 复古米黄
    "#8A7967", // 咖啡棕
    "#6C7A89", // 雾霾蓝
    "#AD6A6C", // 复古红
    "#758E4F", // 军绿
];

// generate the initial state of the Rubik's Cube
const createCubies = () => {
    const cubies = [];
    for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
            for (let z = -1; z <= 1; z++) {
                cubies.push({ position: [x, y, z]});
            }
        }
    }
    return cubies;
};

///single cube component (size, material)
const Cubie = ({ position, onPointerDown, setOrbitEnabled }: any) => {

    const {camera, scene} = useThree();

    return (
        <mesh
            position={position}
            onPointerDown={(event: any) => onPointerDown(event, camera, scene, setOrbitEnabled)}
            //onClick={() => { console.log("click_cubie")}}
        >
            {/* define the size*/}
            <boxGeometry args={[0.95, 0.95, 0.95]} />
            {/* define the material of each face*/}
            {COLORS.map((color, i) => (
                <meshPhysicalMaterial
                    key={i}
                    attach={`material-${i}`}
                    color={color}
                    transmission={0.9}  // 玻璃透光效果
                    metalness={1}
                    roughness={3}
                    clearcoat={1}       // 高光反射
                    emissive={color}    // 发光
                    emissiveIntensity={0.5}
                />
            ))}
        </mesh>
    );
};

export {createCubies, Cubie}