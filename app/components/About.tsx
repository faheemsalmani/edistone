"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function About() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    const stats = [
        { label: "Years of Trust", value: "10+" },
        { label: "Happy Families", value: "500+" },
        { label: "Sq. Ft. Delivered", value: "1M+" },
    ];

    return (
        <section
            id="philosophy"
            className="w-full py-20 bg-slate-50 overflow-hidden relative"
            ref={ref}
        >
            <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left: Image / Visual */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="rounded-2xl overflow-hidden shadow-2xl relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2666&auto=format&fit=crop"
                        alt="Edistone Vision"
                        className="w-full h-full object-cover transform transition-transform hover:scale-110 duration-700 ease-[cubic-bezier(0.25, 1, 0.5, 1)]"
                        loading="lazy"
                    />
                    <div className="absolute bottom-6 left-6 z-20 text-white font-serif italic text-2xl drop-shadow-md">
                        "Where Vision Meets Value"
                    </div>
                </motion.div>

                {/* Right: Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="space-y-6"
                >
                    <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">Our Philosophy</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">
                        Crafting <span className="text-amber-500">Masterpieces</span>, <br />
                        Building Communities.
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed font-light">
                        At <span className="font-semibold text-slate-800">Edistone Real Estates Private Limited</span>, we believe that a home is more than just walls and a roof. It is a sanctuary where memories are made and legacies are born.
                    </p>
                    <p className="text-slate-600 text-lg leading-relaxed font-light">
                        With a decade of unwavering commitment to quality and innovation in Ghaziabad and NCR, we have established ourselves as pioneers in delivering premium residential and commercial spaces that stand the test of time.
                    </p>

                    <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200 mt-8">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.4 + (idx * 0.1) }}
                                className="text-center md:text-left"
                            >
                                <h4 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-1">{stat.value}</h4>
                                <span className="text-xs md:text-sm text-slate-500 uppercase tracking-wide">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

        </section>
    );
}
