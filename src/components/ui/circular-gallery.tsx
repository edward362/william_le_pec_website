"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";

interface CircularGalleryProps {
    images: string[];
}

export function CircularGallery({ images }: CircularGalleryProps) {
    const [width, setWidth] = useState(0);
    const carousel = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (carousel.current) {
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        }
    }, []);

    return (
        <div className="w-full overflow-hidden py-12">
            <motion.div
                ref={carousel}
                className="cursor-grab overflow-hidden"
                whileTap={{ cursor: "grabbing" }}
            >
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    className="flex gap-8 px-6"

                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            className="min-w-[280px] md:min-w-[400px] h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl flex-shrink-0 relative group"
                            whileHover={{ scale: 1.02, y: -10 }}
                            transition={{ duration: 0.4 }}
                        >
                            <motion.div
                                className="w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: `url('${img}')` }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            <div className="text-center mt-8">
                <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold/70">
                    Glissez pour explorer
                </p>
            </div>
        </div>
    );
}
