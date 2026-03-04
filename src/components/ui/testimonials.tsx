"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

interface Review {
    text: string;
    date: string;
    author: string;
}

const REVIEWS: Review[] = [
    {
        text: "Cela fait maintenant 10 ans que je vais chez William Lepec. Ils sont très pro, ponctuels, sympas et discrets, et je ressors toujours très satisfaite, couleur coupe et brushing au top!",
        date: "14/11/2025",
        author: "Cliente Fidèle"
    },
    {
        text: "Le salon est super ! Dès l'accueil on se sent écouté et à l'aise. Gros + sur les soins! Que ce soit Marc ou Céline chacun conseille très bien et explique au fur et à mesure ce qu'ils font.",
        date: "25/01/2026",
        author: "Cliente Vérifiée"
    },
    {
        text: "Je recommande encore et encore à tous points de vues.",
        date: "26/02/2026",
        author: "Cliente Vérifiée"
    },
    {
        text: "Rien de plus à dire non ? Tout est parfait et la gentillesse de Céline est un plus.",
        date: "04/02/2026",
        author: "Cliente Vérifiée"
    },
    {
        text: "Accueil et ambiance agréable, prestation impeccable, merci",
        date: "15/02/2026",
        author: "Client Vérifié"
    },
    {
        text: "Toujours aussi satisfait des talents de Céline, le résultat est toujours impeccable !",
        date: "09/01/2026",
        author: "Client Vérifié"
    }
];

export function Testimonials() {
    // Duplicate for infinite scroll
    const loopItems = [...REVIEWS, ...REVIEWS];

    return (
        <div className="relative w-full overflow-hidden py-12 bg-charcoal-dark/5">
            {/* Edge fade masks */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-r from-cream dark:from-charcoal to-transparent"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-l from-cream dark:from-charcoal to-transparent"></div>

            <div className="w-full flex">
                <motion.div
                    className="flex whitespace-normal items-stretch gap-6 px-6"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        ease: "linear",
                        duration: 40,
                        repeat: Infinity,
                    }}
                >
                    {loopItems.map((review, index) => (
                        <div
                            key={index}
                            className="relative w-[300px] md:w-[400px] flex-shrink-0 p-8 rounded-2xl bg-white dark:bg-charcoal-light shadow-sm border border-gold/10 flex flex-col justify-between group hover:border-gold/30 transition-colors"
                        >
                            <Quote className="absolute top-6 right-6 text-gold/10 group-hover:text-gold/20 transition-colors" size={40} />

                            <div>
                                <div className="flex gap-1 mb-4">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} size={14} className="fill-gold text-gold" />
                                    ))}
                                </div>
                                <p className="font-sans text-charcoal/80 dark:text-cream/80 text-sm md:text-base leading-relaxed font-light italic mb-6">
                                    "{review.text}"
                                </p>
                            </div>

                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gold/10">
                                <div className="flex items-center gap-2">
                                    <span className="font-sans text-xs uppercase tracking-widest text-charcoal/50 dark:text-cream/50">
                                        {review.author}
                                    </span>
                                    <div className="flex items-center gap-1 opacity-60">
                                        <span className="text-[10px] text-charcoal/40 dark:text-cream/40">via</span>
                                        <Image
                                            src="/images/partenaires/planity.png"
                                            alt="Planity"
                                            width={65}
                                            height={24}
                                            className="object-contain brightness-0 dark:invert opacity-70"
                                        />
                                    </div>
                                </div>
                                <span className="font-sans text-xs text-gold/80">
                                    {review.date}
                                </span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
