"use client";

import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";

export default function Contact() {
    return (
        <main className="w-full pt-12 pb-24 md:pb-32 bg-cream dark:bg-charcoal min-h-screen flex flex-col items-center justify-center">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="font-serif text-5xl md:text-6xl text-charcoal dark:text-cream mb-6">
                        <span className="italic text-gold">Contact</span>
                    </h1>

                    <div className="mt-16 flex flex-col items-center space-y-8 bg-white/50 dark:bg-charcoal-light/50 p-12 border border-charcoal/5 dark:border-white/5 max-w-md mx-auto">
                        <div className="flex flex-col items-center space-y-4">
                            <MapPin className="text-gold" size={32} strokeWidth={1} />
                            <p className="font-sans text-lg text-charcoal dark:text-cream font-light">
                                150 rue Montmartre<br />75002 PARIS
                            </p>
                        </div>

                        <div className="w-12 h-[1px] bg-gold/30" />

                        <div className="flex flex-col items-center space-y-4">
                            <Phone className="text-gold" size={32} strokeWidth={1} />
                            <a href="tel:+33142335420" className="font-sans text-lg text-charcoal dark:text-cream font-light hover:text-gold transition-colors">
                                01 42 33 54 20
                            </a>
                        </div>

                        <a
                            href="http://www.planity.com/salon-w-william-le-pec-75002-paris"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 px-8 py-3 bg-gold text-white font-sans text-sm uppercase tracking-widest hover:bg-gold-light transition-colors w-full"
                        >
                            Réserver en ligne
                        </a>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
