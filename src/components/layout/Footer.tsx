"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, MapPin, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full bg-charcoal text-cream/80 py-16 border-t border-white/10">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                    {/* BRAND */}
                    <div className="flex flex-col items-center md:items-start space-y-4">
                        <div className="font-serif text-3xl font-light tracking-widest text-white">
                            SALON W
                        </div>
                        <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold">William Le Pec</p>
                        <p className="mt-4 max-w-xs font-sans text-sm leading-relaxed font-light">
                            Un espace dédié à l’excellence. Spécialiste des cheveux bouclés et des couleurs végétales au cœur de Paris.
                        </p>
                    </div>

                    {/* CONTACT INFO */}
                    <div className="flex flex-col items-center md:items-start space-y-4 font-sans text-sm font-light">
                        <h4 className="font-serif text-xl tracking-wider text-white mb-2">Contact</h4>
                        <div className="flex items-center gap-3 hover:text-gold transition-colors">
                            <MapPin size={16} strokeWidth={1.5} className="text-gold" />
                            <span>150 rue Montmartre, 75002 PARIS</span>
                        </div>
                        <a href="tel:+33142335420" className="flex items-center gap-3 hover:text-gold transition-colors">
                            <Phone size={16} strokeWidth={1.5} className="text-gold" />
                            <span>01 42 33 54 20</span>
                        </a>
                        <a
                            href="http://www.planity.com/salon-w-william-le-pec-75002-paris"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-4 text-xs font-medium uppercase tracking-widest text-[#ceaf70] hover:text-white transition-colors underline underline-offset-4 decoration-1 decoration-[#ceaf70]/40"
                        >
                            Réserver via Planity
                        </a>
                    </div>

                    {/* LINKS & SOCIALS */}
                    <div className="flex flex-col items-center md:items-start space-y-4 font-sans text-sm">
                        <h4 className="font-serif text-xl tracking-wider text-white mb-2">Liens utiles</h4>
                        <nav className="flex flex-col gap-2 items-center md:items-start font-light">
                            <Link href="/mentions-legales" className="hover:text-gold transition-colors">
                                Mentions légales
                            </Link>
                            <Link href="/presse" className="hover:text-gold transition-colors">
                                Presse & Partenaires
                            </Link>
                        </nav>
                        <div className="flex gap-4 mt-6">
                            {/* Assuming they might have an Instagram, placeholder icon */}
                            <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-gold hover:border-gold hover:text-white transition-all">
                                <Instagram size={18} strokeWidth={1.5} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/10 text-center font-sans text-xs font-light text-cream/50">
                    <p>© {new Date().getFullYear()} Salon W - William Le Pec. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
}
