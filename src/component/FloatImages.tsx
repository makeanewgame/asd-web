"use client";

import { motion } from "framer-motion";

export default function FloatImage({ data }: any) {
    return (
        <div className="flex">
            <motion.div
                initial={{ opacity: 0, scale: 1, y: +100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                    duration: 5,
                    delay: 2,
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
                            ["--width" as any]: "200px",
                            ["--height" as any]: "100px",
                            ["--quantity" as any]: "10",
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
                                            ["--position" as any]: index,
                                        }}
                                    >
                                        <img
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