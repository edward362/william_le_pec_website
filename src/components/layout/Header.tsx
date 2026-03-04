"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
    { name: "Accueil", href: "/" },
    { name: "Le salon", href: "/salon" },
    { name: "Les prestations", href: "/prestations" },
    { name: "L'équipe", href: "/equipe" },
    { name: "Presse", href: "/presse" },
    { name: "Contact", href: "/contact" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? "bg-cream/90 dark:bg-charcoal/90 backdrop-blur-md shadow-sm py-4"
                : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
                {/* LOGO */}
                <Link href="/" className="z-50 group flex flex-col items-center">
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        src="/images/Logo/logo-petit.png"
                        alt="Salon W William Le Pec"
                        className="h-12 md:h-14 w-auto object-contain"
                    />
                </Link>

                {/* DESKTOP NAV */}
                <nav className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative group font-sans text-sm uppercase tracking-widest text-charcoal/80 hover:text-charcoal dark:text-cream/80 dark:hover:text-cream transition-colors"
                            >
                                {link.name}
                                {isActive && (
                                    <motion.div
                                        layoutId="active-nav-indicator"
                                        className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gold"
                                    />
                                )}
                                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100" />
                            </Link>
                        );
                    })}
                </nav>

                {/* BOOKING BUTTON (DESKTOP) */}
                <div className="hidden md:block">
                    <a
                        href="http://www.planity.com/salon-w-william-le-pec-75002-paris"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative px-6 py-2 border border-gold text-gold font-sans text-xs uppercase tracking-widest transition-colors hover:text-charcoal hover:bg-gold/10"
                    >
                        Réserver en ligne
                    </a>
                </div>

                {/* MOBILE MENU TOGGLE */}
                <button
                    className="md:hidden z-50 text-charcoal dark:text-cream"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
                </button>
            </div>

            {/* MOBILE NAV OVERLAY */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 bg-cream dark:bg-charcoal z-40 flex flex-col items-center justify-center space-y-8"
                    >
                        <nav className="flex flex-col items-center gap-6">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="font-serif text-2xl tracking-wider text-charcoal dark:text-cream hover:text-gold dark:hover:text-gold transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                        <a
                            href="http://www.planity.com/salon-w-william-le-pec-75002-paris"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="mt-8 px-8 py-3 bg-gold text-white font-sans text-sm uppercase tracking-widest"
                        >
                            Réserver en ligne
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
