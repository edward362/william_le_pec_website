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
                        <a
                            href="https://www.google.com/maps/place/150+Rue+Montmartre,+75002+Paris"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center space-y-4 group hover:opacity-80 transition-opacity"
                        >
                            <MapPin className="text-gold group-hover:scale-110 transition-transform" size={32} strokeWidth={1} />
                            <p className="font-sans text-lg text-charcoal dark:text-cream font-light text-center">
                                150 rue Montmartre<br />75002 PARIS
                            </p>
                        </a>

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
                            className="mt-8 px-8 py-3 bg-gold text-white font-sans text-sm uppercase tracking-widest hover:bg-gold-light transition-colors w-full text-center"
                        >
                            Réserver en ligne
                        </a>

                        <div className="w-full mt-8 pt-8 border-t border-charcoal/10 dark:border-white/10">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.4604981882!2d2.342125712165036!3d48.86851080003057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1634591f15%3A0x6bbaaaaae8864f1d!2s150%20Rue%20Montmartre%2C%2075002%20Paris!5e0!3m2!1sen!2sfr!4v1707577544031!5m2!1sen!2sfr"
                                width="100%"
                                height="250"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-lg shadow-sm grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                            ></iframe>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
