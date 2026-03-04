"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

export default function Home() {
  const reasons = [
    "Des techniques de coupe spécifiques : les coupes MÉMORIELLES®",
    "Des techniques exclusives de coloration : les colorations MÉMORIELLES®",
    "Spécialiste des couleurs végétales",
    "Des soins Spa spécifiques pour tous types de cheveux",
    "Un travail de coupes et de techniques sur mesure et réfléchi",
    "Un vrai parcours « sensation » pour la clientèle : de l’accueil à la prise de congés",
    "Un espace dédié à l’excellence",
    "Un salon spécialiste des cheveux bouclés",
    "Un espace idéalement situé en plein cœur de Paris",
    "Une équipe à l’écoute",
  ];

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
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <main className="w-full">
      {/* HERO SECTION */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Abstract animated background placeholder instead of an image to keep it self-contained for now */}
        <div className="absolute inset-0 bg-charcoal-dark z-0">
          <motion.div
            initial={{ scale: 1.1, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0 bg-gradient-to-tr from-charcoal-dark via-charcoal to-[#2a2a2a] opacity-50"
          />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center text-cream">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] text-gold mb-6"
          >
            Salon de coiffure à Paris
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8 text-cream"
          >
            L'Excellence <br />
            <span className="italic text-gold-light">sur mesure.</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <a
              href="http://www.planity.com/salon-w-william-le-pec-75002-paris"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-8 py-4 bg-transparent border border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300 font-sans text-sm uppercase tracking-widest group"
            >
              Prendre rendez-vous
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 10 REASONS SECTION */}
      <section className="py-24 md:py-32 bg-cream dark:bg-charcoal px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-24"
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal dark:text-cream mb-6">
              Pourquoi venir au <br className="md:hidden" />
              <span className="italic">salon WLP ?</span>
            </h2>
            <p className="font-sans text-sm uppercase tracking-widest text-gold">Voici 10 bonnes raisons</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-4 p-6 bg-white dark:bg-charcoal-light shadow-sm hover:shadow-md transition-shadow duration-300 border border-transparent hover:border-gold/20"
              >
                <div className="flex-shrink-0 mt-1">
                  <Star size={20} className="text-gold" strokeWidth={1} />
                </div>
                <p className="font-sans text-charcoal/80 dark:text-cream/80 text-sm md:text-base leading-relaxed font-light">
                  {reason}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CALL TO ACTION / LOCATION */}
      <section className="py-24 bg-charcoal text-cream text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto max-w-2xl border border-white/10 p-12 md:p-20"
        >
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold mb-6">
            Votre voyage commence ici
          </p>
          <h2 className="font-serif text-4xl md:text-5xl mb-8">
            Réservez votre <span className="italic text-gold">sensation</span>
          </h2>
          <a
            href="http://www.planity.com/salon-w-william-le-pec-75002-paris"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gold text-white hover:bg-gold-light transition-colors font-sans text-sm uppercase tracking-widest"
          >
            Prendre rendez-vous
          </a>
        </motion.div>
      </section>
    </main>
  );
}
