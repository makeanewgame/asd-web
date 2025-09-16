"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type FloatImagesProps = {
    data: { id: number; logo: string; name: string }[];
};

export default function FloatImage({ data }: FloatImagesProps) {
    return (
        <div className="flex">
            <motion.div
                initial={{ opacity: 0, scale: 1, y: +100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                    duration: 1,
                    delay: 0,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
            >
                <div
                    style={{
                        margin: "auto",
                        width: "min(1920px, 90vw)",
                        height: "150px",
                    }}
                >
                    <div
                        className="slider mt-20"
                        style={{
                            ["--width" as string]: "200px",
                            ["--height" as string]: "100px",
                            ["--quantity" as string]: "10",
                        }}
                    >
                        <div className="list">
                            {data.map(
                                (
                                    item: { id: number; logo: string; name: string },
                                    index: number
                                ) => (
                                    <div
                                        className="item"
                                        key={item.id}
                                        style={{
                                            ["--position" as string]: index,
                                        }}
                                    >
                                        <Image
                                            src={item.logo}
                                            alt={item.name}
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}