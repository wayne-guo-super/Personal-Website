import { useState, useEffect } from "react";
import { Text3D, useMatcapTexture } from "@react-three/drei";

function TextWithMaterial() {
    const [matcap] = useMatcapTexture("787165_DAD9CD_9DC0CE_36302A", 128);
    const [localTime, setLocalTime] = useState(new Date().toLocaleTimeString());
    const [text, setText] = useState(localTime);

    useEffect(() => {
        const texts = [
            "who know...",
            "what's gonna happen",
            "next second",
            "in the universe",
        ];

        let index = 0;

        const interval = setInterval(() => {
            index = (index + 1) % (texts.length + 1);

            if (index === texts.length) {
                const now = new Date().toLocaleTimeString();
                setLocalTime(now);
                setText(now);
            } else {
                setText(texts[index]);
            }
        }, 2000);

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