"use client";

import { motion } from "framer-motion";

export default function Equipe() {
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

    return (
        <main className="w-full pt-32 pb-24 md:pb-32 bg-cream dark:bg-charcoal min-h-screen">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h1 className="font-serif text-5xl md:text-6xl text-charcoal dark:text-cream mb-6">
                        L&apos;<span className="italic text-gold">Équipe</span>
                    </h1>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-16 text-left"
                >
                    <motion.section variants={itemVariants} className="bg-white/50 dark:bg-charcoal-light/50 p-8 border border-gold/10">
                        <h2 className="font-serif text-2xl text-charcoal dark:text-cream mb-2">William LE PEC</h2>
                        <p className="font-sans text-xs uppercase tracking-widest text-gold mb-6">Directeur de création</p>
                        <p className="font-sans text-sm text-charcoal/80 dark:text-cream/80 font-light leading-relaxed mb-4">
                            La passion de la coiffure sur mesure. Des expériences uniques enrichies par des voyages internationaux et des collaborations prestigieuses. William est à l&apos;écoute pour révéler la beauté unique de chaque client grâce à ses coupes &quot;mémorielles&quot;.
                        </p>
                    </motion.section>

                    <motion.section variants={itemVariants} className="bg-white/50 dark:bg-charcoal-light/50 p-8 border border-gold/10">
                        <h2 className="font-serif text-2xl text-charcoal dark:text-cream mb-2">Jérôme</h2>
                        <p className="font-sans text-xs uppercase tracking-widest text-gold mb-6">Manager</p>
                        <p className="font-sans text-sm text-charcoal/80 dark:text-cream/80 font-light leading-relaxed mb-4">
                            L&apos;art de l&apos;organisation et du service perfectionnés. Jérôme veille à ce que votre expérience au salon W soit exceptionnelle à chaque visite, mettant son talent au service de votre bien-être.
                        </p>
                    </motion.section>

                    <motion.section variants={itemVariants} className="bg-white/50 dark:bg-charcoal-light/50 p-8 border border-gold/10">
                        <h2 className="font-serif text-2xl text-charcoal dark:text-cream mb-2">Nao</h2>
                        <p className="font-sans text-xs uppercase tracking-widest text-gold mb-6">Top Styliste</p>
                        <p className="font-sans text-sm text-charcoal/80 dark:text-cream/80 font-light leading-relaxed mb-4">
                            Créativité et précision au service de votre style. Nao maîtrise les techniques les plus récentes pour vous offrir une coupe et une apparence qui vous correspondent.
                        </p>
                    </motion.section>
                </motion.div>
            </div>
        </main>
    );
}
