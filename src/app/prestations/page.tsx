"use client";

import { motion } from "framer-motion";

export default function Prestations() {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 },
        },
    };

    return (
        <main className="w-full pt-32 pb-24 md:pb-32 bg-cream dark:bg-charcoal min-h-screen">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="font-serif text-5xl md:text-6xl text-charcoal dark:text-cream mb-6">
                        Les <span className="italic text-gold">Prestations</span>
                    </h1>
                    <p className="font-sans text-sm md:text-base text-charcoal/80 dark:text-cream/80 font-light max-w-2xl mx-auto leading-relaxed">
                        Nous pensons à votre bien-être : nous vous accueillons dans un espace climatisé et pour toute prestation, nous vous offrons snack et boissons.
                    </p>
                    <p className="mt-4 font-sans text-xs uppercase tracking-widest text-gold font-medium">
                        * Selon les longueurs des cheveux, -20% pour les - de 25 ans
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-16"
                >
                    {/* Les Coupes */}
                    <motion.section variants={itemVariants} className="space-y-6">
                        <h2 className="font-serif text-3xl text-charcoal dark:text-cream border-b border-gold/30 pb-4">
                            Les Coupes MÉMORIELLES®
                        </h2>
                        <p className="font-sans text-sm text-charcoal/80 dark:text-cream/80 font-light leading-relaxed">
                            Les coupes sont des techniques de coupes qui permettent aux cheveux de mémoriser la forme durablement. Elles sont créées par William Le Pec et sont spécifiques au salon WLP. Outre le fait qu’elles permettent de se recoiffer facilement, en quoi ces techniques sont-elles révolutionnaires ? Parce que ce sont des techniques de coupes sur mesure qui s’adaptent à tous types de cheveux. Elles sont systématiquement accompagnées d’une analyse approfondie du style de chacun avec une écoute attentive des désirs de la clientèle : c'est la coiffure "bespoke".
                        </p>
                        <div className="bg-white/50 dark:bg-charcoal-light/50 p-8 border border-gold/10 grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="font-sans font-medium uppercase tracking-[0.2em] text-sm mb-4 text-charcoal dark:text-cream">Forfait Coupe Femme</h3>
                                <p className="font-sans text-xs text-charcoal/60 dark:text-cream/60 font-light mb-4">
                                    Intègre l’analyse, le shampoing, le massage, le soin et le coiffage.
                                </p>
                                <div className="space-y-2 font-sans text-sm font-light">
                                    <div className="flex justify-between border-b border-charcoal/5 dark:border-cream/5 pb-2">
                                        <span>Directeur de création</span>
                                        <span>150 €</span>
                                    </div>
                                    <div className="flex justify-between border-b border-charcoal/5 dark:border-cream/5 pb-2">
                                        <span>Manager</span>
                                        <span>105 €</span>
                                    </div>
                                    <div className="flex justify-between pb-2">
                                        <span>Top Styliste</span>
                                        <span>90 €</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-sans font-medium uppercase tracking-[0.2em] text-sm mb-4 text-charcoal dark:text-cream">Forfait Coupe Homme</h3>
                                <p className="font-sans text-xs text-charcoal/60 dark:text-cream/60 font-light mb-4">
                                    Intègre l’analyse, le shampoing, le massage, le soin et le coiffage.
                                </p>
                                <div className="space-y-2 font-sans text-sm font-light">
                                    <div className="flex justify-between border-b border-charcoal/5 dark:border-cream/5 pb-2">
                                        <span>Directeur de création</span>
                                        <span>75 €</span>
                                    </div>
                                    <div className="flex justify-between border-b border-charcoal/5 dark:border-cream/5 pb-2">
                                        <span>Manager</span>
                                        <span>56 €</span>
                                    </div>
                                    <div className="flex justify-between pb-2">
                                        <span>Top Styliste</span>
                                        <span>49 €</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Les Coiffages */}
                    <motion.section variants={itemVariants} className="space-y-6">
                        <h2 className="font-serif text-3xl text-charcoal dark:text-cream border-b border-gold/30 pb-4">
                            Nos Coiffages
                        </h2>
                        <div className="bg-white/50 dark:bg-charcoal-light/50 p-8 border border-gold/10">
                            <p className="font-sans text-xs text-charcoal/60 dark:text-cream/60 font-light mb-6">
                                Nos coiffages intègrent l’analyse, le shampoing, le massage et le soin.
                            </p>
                            <div className="grid md:grid-cols-2 gap-x-12 gap-y-2 font-sans text-sm font-light max-w-2xl">
                                <div className="flex justify-between border-b border-charcoal/5 dark:border-cream/5 pb-2">
                                    <span>Brushing Cheveux courts</span>
                                    <span>38 €</span>
                                </div>
                                <div className="flex justify-between border-b border-charcoal/5 dark:border-cream/5 pb-2">
                                    <span>Brushing Cheveux mi-longs</span>
                                    <span>48 €</span>
                                </div>
                                <div className="flex justify-between border-b border-charcoal/5 dark:border-cream/5 pb-2">
                                    <span>Brushing Cheveux longs</span>
                                    <span>58 €</span>
                                </div>
                                <div className="flex justify-between border-b border-charcoal/5 dark:border-cream/5 pb-2">
                                    <span>Attaches</span>
                                    <span>65 €</span>
                                </div>
                                <div className="flex justify-between border-b border-charcoal/5 dark:border-cream/5 pb-2">
                                    <span>Chignon</span>
                                    <span>sur devis</span>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Les Colorations */}
                    <motion.section variants={itemVariants} className="space-y-6">
                        <h2 className="font-serif text-3xl text-charcoal dark:text-cream border-b border-gold/30 pb-4">
                            Les Colorations MÉMORIELLES® / Balayages
                        </h2>
                        <p className="font-sans text-sm text-charcoal/80 dark:text-cream/80 font-light leading-relaxed">
                            Les colorations sont des techniques de coloration durables qui accompagnent et soulignent les géométries des coupes afin d'accentuer ou d'atténuer les volumes développés. Elles s'adaptent à tous types de cheveux et sont entièrement personnalisées en fonction des carnations des peaux : c'est la coloration "bespoke".
                        </p>
                        <div className="bg-white/50 dark:bg-charcoal-light/50 p-8 border border-gold/10">
                            <div className="grid md:grid-cols-2 gap-x-12 gap-y-2 font-sans text-sm font-light">
                                <div className="flex justify-between border-b border-charcoal/5 dark:border-cream/5 pb-2">
                                    <span>Coloration</span>
                                    <span>à partir de 50 €</span>
                                </div>
                                <div className="flex justify-between border-b border-charcoal/5 dark:border-cream/5 pb-2">
                                    <span>Coloration végétale</span>
                                    <span>à partir de 65 €</span>
                                </div>
                                <div className="flex justify-between border-b border-charcoal/5 dark:border-cream/5 pb-2">
                                    <span>Balayage</span>
                                    <span>à partir de 95 €</span>
                                </div>
                                <div className="flex justify-between border-b border-charcoal/5 dark:border-cream/5 pb-2">
                                    <span>Lissage Végétal Japonais ou Brésilien</span>
                                    <span>sur devis</span>
                                </div>
                                <div className="flex justify-between border-b border-charcoal/5 dark:border-cream/5 pb-2">
                                    <span>Permanente</span>
                                    <span>sur devis</span>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Soins Spa */}
                    <motion.section variants={itemVariants} className="space-y-6">
                        <h2 className="font-serif text-3xl text-charcoal dark:text-cream border-b border-gold/30 pb-4">
                            Nos Soins Spa
                        </h2>
                        <div className="bg-white/50 dark:bg-charcoal-light/50 p-8 border border-gold/10">
                            <p className="font-sans text-xs text-charcoal/60 dark:text-cream/60 font-light mb-6">
                                Nos soins Spa intègrent le shampoing, le gommage du cuir chevelu et le massage.
                            </p>
                            <div className="grid md:grid-cols-2 gap-x-12 gap-y-2 font-sans text-sm font-light max-w-2xl">
                                <div className="flex justify-between border-b border-charcoal/5 dark:border-cream/5 pb-2">
                                    <span>Rituel Intense</span>
                                    <span>40 €</span>
                                </div>
                                <div className="flex justify-between border-b border-charcoal/5 dark:border-cream/5 pb-2">
                                    <span>Rituel d'Exception Tokio Inkarami</span>
                                    <span>100 €</span>
                                </div>
                            </div>
                        </div>
                    </motion.section>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-20 text-center"
                >
                    <a
                        href="http://www.planity.com/salon-w-william-le-pec-75002-paris"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-10 py-4 bg-charcoal text-cream dark:bg-cream dark:text-charcoal font-sans text-sm uppercase tracking-widest hover:bg-gold dark:hover:bg-gold hover:text-white dark:hover:text-white transition-colors"
                    >
                        Réserver un rendez-vous
                    </a>
                </motion.div>
            </div>
        </main>
    );
}
