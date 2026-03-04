"use client";

import { motion } from "framer-motion";

export function LogoLoop() {
    const logos = [
        { src: "/images/partenaires/authentic-beauty-concept-logo-jpg.webp", alt: "Authentic Beauty Concept" },
        { src: "/images/partenaires/davines-logo-e1497978373540.png", alt: "Davines" },
        { src: "/images/partenaires/planity.png", alt: "Planity" },
        { src: "/images/partenaires/schwarzkopf-professional-logo.webp", alt: "Schwarzkopf Professional" },
    ];

    // duplicate the array for a seamless infinite loop
    const loopItems = [...logos, ...logos, ...logos];

    return (
        <div className="relative w-full overflow-hidden bg-white/50 dark:bg-charcoal-light/50 border-y border-gold/10 py-12">
            {/* Gradient masks for smooth fade in/out at edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-cream dark:from-charcoal to-transparent"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-cream dark:from-charcoal to-transparent"></div>

            <div className="w-full flex">
                <motion.div
                    className="flex whitespace-nowrap items-center gap-24 px-12"
                    animate={{ x: ["0%", "-33.333%"] }}
                    transition={{
                        ease: "linear",
                        duration: 20,
                        repeat: Infinity,
                    }}
                >
                    {loopItems.map((logo, index) => (
                        <img
                            key={index}
                            src={logo.src}
                            alt={logo.alt}
                            className="h-16 object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-300"
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
