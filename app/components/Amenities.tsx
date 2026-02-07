"use client";

import { motion } from 'framer-motion';
import { Shield, Sparkles, MapPin, Layers, Users, Leaf } from 'lucide-react';

const amenities = [
    { icon: Shield, title: "24/7 Security", desc: "Advanced surveillance and manned security for peace of mind." },
    { icon: Sparkles, title: "Premium Finishes", desc: "Exquisite interiors crafted with imported materials." },
    { icon: Leaf, title: "Lush Greenery", desc: "Expansive landscaped gardens and eco-friendly design." },
    { icon: MapPin, title: "Prime Location", desc: "Strategically located near major hubs and expressways." },
    { icon: Layers, title: "Smart Homes", desc: "Integrated home automation for modern living." },
    { icon: Users, title: "Community Living", desc: "Vibrant clubhouses and social spaces for residents." },
];

export default function Amenities() {
    return (
        <section id="amenities" className="py-20 bg-slate-50 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-200 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-2 block">Why Choose Edistone</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
                        Designed for the <span className="italic text-amber-500">Discerning</span> Few.
                    </h2>
                    <p className="text-slate-600 font-light text-lg">
                        Every detail at Edistone is meticulously planned to offer an unparalleled lifestyle of comfort, luxury, and serenity.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {amenities.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group"
                        >
                            <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-50 transition-colors">
                                <item.icon className="text-slate-700 w-7 h-7 group-hover:text-amber-600 transition-colors" />
                            </div>
                            <h3 className="text-xl font-serif font-bold text-slate-800 mb-3">{item.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
