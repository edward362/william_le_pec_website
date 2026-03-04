"use client";

import { motion } from "framer-motion";
import { ProfileCard } from "@/components/ui/profile-card";

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
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
                >
                    <motion.div variants={itemVariants}>
                        <ProfileCard
                            name="William Le Pec"
                            role="Directeur Créatif"
                            image="/images/equipe/20160701172545046df9-Portrait_WLP-1200x1200-2.jpg"
                            description="La passion de la coiffure sur mesure. Des expériences uniques enrichies par des voyages internationaux et des collaborations prestigieuses. William est à l'écoute pour révéler la beauté unique de chaque client grâce à ses coupes &quot;mémorielles&quot;."
                        />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <ProfileCard
                            name="Marc André"
                            role="Coiffeur Expert"
                            image="/images/equipe/marc1.jpg"
                            description="L'art de l'organisation et du service perfectionnés. Marc veille à ce que votre expérience au salon W soit exceptionnelle à chaque visite, mettant son talent au service de votre bien-être."
                        />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <ProfileCard
                            name="Céline Le Pec"
                            role="Directrice Artistique et Créatrice"
                            image="/images/equipe/celine1.jpg"
                            description="Créativité et précision au service de votre style. Céline maîtrise les techniques les plus récentes pour vous offrir une coupe et une apparence qui vous correspondent."
                        />
                    </motion.div>
                </motion.div>
            </div>
        </main>
    );
}
