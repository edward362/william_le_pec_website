"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ImageLoopProps {
    images: string[];
}

export function ImageLoop({ images }: ImageLoopProps) {
    // duplicate the array to ensure a seamless infinite loop
    const loopItems = [...images, ...images];

    return (
        <div className="relative w-full overflow-hidden py-12">
            {/* Gradient masks for smooth fade in/out at the edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-white dark:from-charcoal-light to-transparent"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-white dark:from-charcoal-light to-transparent"></div>

            <div className="w-full flex">
                <motion.div
                    className="flex whitespace-nowrap items-center gap-6 px-6"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        ease: "linear",
                        duration: 30,
                        repeat: Infinity,
                    }}
                >
                    {loopItems.map((img, index) => (
                        <div
                            key={index}
                            className="relative w-[300px] h-[450px] md:w-[400px] md:h-[600px] rounded-2xl overflow-hidden flex-shrink-0 shadow-lg border border-white/10"
                        >
                            <Image
                                src={img}
                                alt={`Haircut image ${index}`}
                                fill
                                sizes="(max-width: 768px) 300px, 400px"
                                className="object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
