"use client";

import { motion } from "framer-motion";

export default function Presse() {
    const presseImages = [
        { src: "/images/parution dans la presse/parution1.png", alt: "Parution Presse 1" },
        { src: "/images/parution dans la presse/parution2.png", alt: "Parution Presse 2" },
        { src: "/images/parution dans la presse/parution3.png", alt: "Parution Presse 3" },
        { src: "/images/parution dans la presse/parution4.png", alt: "Parution Presse 4" },
        { src: "/images/parution dans la presse/parution5.png", alt: "Parution Presse 5" },
        { src: "/images/parution dans la presse/parution6.png", alt: "Parution Presse 6" },
        { src: "/images/parution dans la presse/presse-grise.png", alt: "Presse Grise" },
    ];

    // duplicate the array for a seamless infinite loop
    const loopItems = [...presseImages, ...presseImages, ...presseImages];

    return (
        <main className="w-full pt-32 pb-24 md:pb-32 bg-cream dark:bg-charcoal min-h-screen overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl mb-16 md:mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h1 className="font-serif text-5xl md:text-6xl text-charcoal dark:text-cream mb-6">
                        <span className="italic text-gold">Presse</span>
                    </h1>
                    <p className="font-sans text-sm md:text-base text-charcoal/80 dark:text-cream/80 font-light max-w-2xl mx-auto leading-relaxed">
                        Un aperçu des médias et parutions de presse qui parlent de l&apos;expertise de William Le Pec.
                    </p>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative w-full bg-white/30 dark:bg-charcoal-light/30 border-y border-gold/10 py-16"
            >
                {/* Gradient masks for smooth fade in/out at edges */}
                <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 z-10 bg-gradient-to-r from-cream dark:from-charcoal to-transparent"></div>
                <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 z-10 bg-gradient-to-l from-cream dark:from-charcoal to-transparent"></div>

                <div className="w-full flex">
                    <motion.div
                        className="flex whitespace-nowrap items-center gap-12 md:gap-24 px-12 md:px-24"
                        animate={{ x: ["0%", "-33.333%"] }}
                        transition={{
                            ease: "linear",
                            duration: 40, // Slower for larger press images so they can be read
                            repeat: Infinity,
                        }}
                    >
                        {loopItems.map((item, index) => (
                            <img
                                key={index}
                                src={item.src}
                                alt={item.alt}
                                className="h-64 md:h-96 w-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
                            />
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </main>
    );
}
