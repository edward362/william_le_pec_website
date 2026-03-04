"use client";

import { motion } from "framer-motion";
import { LogoLoop } from "@/components/ui/logo-loop";

export default function Salon() {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const salonImages = [
        "/images/images of the salon/01.jpg",
        "/images/images of the salon/03.jpg",
        "/images/images of the salon/04.jpg",
        "/images/images of the salon/05.jpg",
        "/images/images of the salon/06.jpg",
        "/images/images of the salon/07.jpg",
        "/images/images of the salon/08.jpg",
        "/images/images of the salon/download (1).webp",
        "/images/images of the salon/download.webp",
    ];

    return (
        <main className="w-full pt-32 pb-24 md:pb-32 bg-cream dark:bg-charcoal min-h-screen">
            <div className="container mx-auto px-6 max-w-6xl">
                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 md:mb-24"
                >
                    <h1 className="font-serif text-5xl md:text-6xl text-charcoal dark:text-cream mb-6">
                        Le <span className="italic text-gold">Salon</span>
                    </h1>
                    <p className="font-sans text-sm md:text-base text-charcoal/80 dark:text-cream/80 font-light max-w-2xl mx-auto leading-relaxed">
                        Un espace où l'élégance parisienne rencontre l'expertise sur mesure. Découvrez l'atmosphère du salon William Le Pec.
                    </p>
                </motion.div>

                {/* GALLERY GRID */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 mb-32"
                >
                    {salonImages.map((src, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="break-inside-avoid overflow-hidden border border-gold/10 group bg-charcoal-light/5"
                        >
                            <div className="relative w-full overflow-hidden">
                                <img
                                    src={src}
                                    alt={`Vue du salon ${idx + 1}`}
                                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* PARTNERS SECTION */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="w-full"
            >
                <div className="text-center mb-12">
                    <h2 className="font-serif text-3xl md:text-4xl text-charcoal dark:text-cream">
                        Nos <span className="italic text-gold">Partenaires</span>
                    </h2>
                </div>
                <LogoLoop />
            </motion.div>
        </main>
    );
}
