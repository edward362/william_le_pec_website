"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";

interface ProfileCardProps {
    name: string;
    role: string;
    image: string;
    description: string;
}

export function ProfileCard({ name, role, image, description }: ProfileCardProps) {
    return (
        <motion.div
            whileHover="hover"
            className="relative w-full max-w-sm mx-auto h-[450px] rounded-2xl overflow-hidden cursor-pointer group shadow-lg"
        >
            {/* Background Image */}
            <motion.div
                variants={{
                    hover: { scale: 1.05 },
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url('${image}')` }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10 transition-opacity duration-500 group-hover:from-black group-hover:via-black/95 group-hover:to-black/40" />

            {/* Content Container */}
            <div className="relative z-20 h-full flex flex-col justify-end p-8 text-white">
                <motion.div
                    variants={{
                        hover: { y: -20 },
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    <p className="font-sans text-xs uppercase tracking-widest text-[#a8824a] mb-2">{role}</p>
                    <h3 className="font-serif text-3xl mb-1 text-[#d4af37] drop-shadow-md">{name}</h3>
                </motion.div>

                {/* Hidden Description that reveals on hover */}
                <motion.div
                    variants={{
                        hover: { opacity: 1, height: "auto", y: -10 },
                    }}
                    initial={{ opacity: 0, height: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="overflow-hidden"
                >
                    <p className="font-sans text-sm font-light text-white/80 leading-relaxed mt-4 line-clamp-4">
                        {description}
                    </p>
                </motion.div>

                {/* Toggle Icon */}
                <motion.div
                    className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20"
                    variants={{
                        hover: { rotate: 45, backgroundColor: "rgba(255,255,255,0.2)" }
                    }}
                >
                    <Plus size={20} className="text-white" />
                </motion.div>
            </div>
        </motion.div>
    );
}
