import { useState, useEffect } from "react";
import { Text3D, useMatcapTexture } from "@react-three/drei";

function TextWithMaterial() {
    const [matcap] = useMatcapTexture("787165_DAD9CD_9DC0CE_36302A", 128);
    const [text, setText] = useState("Hello there");

    useEffect(() => {
        const texts = ["welcome to...", "Wayne's portfolio", "Hello there"];
        let index = 0;
        const interval = setInterval(() => {
            index = (index + 1) % texts.length;
            setText(texts[index]);
        }, 2000); // Change text every 2 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <Text3D font="./font/JetBrains Mono_Bold.json" position={[-3.5, -3, 0]} size={0.7} bevelEnabled>
            {text}
            <meshMatcapMaterial matcap={matcap} />
        </Text3D>
    );
}

export default TextWithMaterial;