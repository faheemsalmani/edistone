"use client";

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image - Parallax Effect Idea */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=3540&auto=format&fit=crop')",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/90 mix-blend-multiply" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center md:text-left flex flex-col md:flex-row items-center justify-between h-full pt-20">

                {/* Left Side: Headline */}
                <div className="md:w-2/3 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block py-1 px-3 border border-amber-500/50 rounded-full text-amber-400 text-xs md:text-sm font-medium tracking-[0.2em] mb-4 uppercase backdrop-blur-sm bg-slate-900/30">
                            Welcome to Edistone
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] mb-6">
                            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600">Dreams</span>,<br />
                            Crafting <span className="italic font-light opacity-90">Legacies</span>.
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 font-light max-w-xl leading-relaxed">
                            Experience the pinnacle of luxury with Edistone Real Estates Private Limited.
                            Refining the skyline of Ghaziabad & NCR for over a decade.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <button
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                            className="group relative px-8 py-4 bg-amber-500 text-slate-900 font-bold tracking-wide uppercase overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]"
                        >
                            <span className="relative z-10">Explore Projects</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 transform origin-bottom" />
                        </button>
                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-sm text-white font-medium tracking-wide uppercase hover:bg-white/10 transition-colors hover:border-amber-400/50"
                        >
                            Get in Touch
                        </button>
                    </motion.div>
                </div>

                {/* Right Side: Decorative or minimal on UFHD */}
                <div className="hidden lg:block md:w-1/3">
                    {/* Abstract Minimal Element */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                        className="w-96 h-96 border-[1px] border-amber-500/20 rounded-full flex items-center justify-center relative"
                    >
                        <div className="w-[90%] h-[90%] border-[1px] border-white/10 rounded-full absolute" />
                        <div className="w-[80%] h-[80%] border-[1px] border-amber-500/10 rounded-full absolute" />
                    </motion.div>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 cursor-pointer hover:text-amber-400 transition-colors"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
                <span className="text-[10px] tracking-[0.3em] uppercase block mb-2 text-center">Scroll</span>
                <ChevronDown className="mx-auto" size={24} />
            </motion.div>
        </section>
    );
}
