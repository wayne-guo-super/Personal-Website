import React from "react";
import Image from "next/image";

export default function PhotoPage() {
    return (
        <div className="font-mono">
            <h1 className="text-2xl font-bold text-center mb-6 mt-40">📸</h1>
            <div className="flex flex-col items-center gap-6 p-7 md:gap-8 rounded-2xl">
                -/-
                <div className="flex flex-col">
                    <div>
                        <Image
                            src="https://assets.enter-nickname.com/booth/DSC08501.jpg"
                            width={800}
                            height={600}
                            alt="Montreal"
                            className="shadow-lg"
                        ></Image>
                    </div>

                    <div className="flex items-center md:items-start flex-col">
                        <span className="font-medium text-sky-900 block">ISO 1250 f/1.2 50.0mm 1/15s</span>
                        <span className="text-lg font-medium block">2024-11-12 20:06</span>
                        <span className="font-medium text-sky-900 block">45.5045° N, 73.5561° W</span>
                    </div>
                </div>

                -/-
                <div className="flex flex-col">
                    <div>
                        <Image
                            src="https://assets.enter-nickname.com/booth/DSC08832.jpg"
                            width={800}
                            height={600}
                            alt="Yangshuo"
                            className="shadow-lg"
                        ></Image>
                    </div>

                    <div className="flex items-center md:items-start flex-col">
                        <span className="font-medium text-sky-900 block">ISO 100 f/4.5 50.0mm 1/1600s</span>
                        <span className="text-lg font-medium block">2025-8-29 18:07</span>
                        <span className="font-medium text-sky-900 block">24.919081° N, 110.524742° W</span>
                    </div>
                </div>

                -A Thousand Li of Rivers and Mountains-
                <p>
                    Referring to a famous Chinese landscape{" "}
                    <a href="https://www.dpm.org.cn/dyx.html?path=/Uploads/tilegenerator/dest/files/image/8831/2009/2121/img0065.xml"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-blue-500 underline">
                        painting
                    </a>
                    {" "}at the Northern Song Dynasty (12AD).
                </p>
                <div className="flex flex-col">
                    <div>
                        <Image
                            src="https://assets.enter-nickname.com/booth/DSC08867.jpg"
                            width={800}
                            height={600}
                            alt="Yangshuo"
                            className="shadow-lg"
                        ></Image>
                    </div>

                    <div className="flex items-center md:items-start flex-col">
                        <span className="font-medium text-sky-900 block">ISO 3200 f/2 50.0mm 1/160s</span>
                        <span className="text-lg font-medium block">2025-8-29 19:25</span>
                        <span className="font-medium text-sky-900 block">24.913731° N, 110.410955° W</span>
                    </div>
                </div>
            </div>

            <div className={"text-lg text-center mb-6 mt-30"}>
                <p>-------------</p>
                <p>will be more to go</p>
            </div>
            {/* Space holder */}
            <div className={" pb-20"}></div>
        </div>
    )
}