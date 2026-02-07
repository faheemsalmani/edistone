"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "The Royal Pavilion",
        location: "Sector 5, Vasundhra, Ghaziabad",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2600&auto=format&fit=crop", // Modern Skyscraper Building
        description: "Ultra-luxury apartments with panoramic city views.",
        status: "Under Construction"
    },
    {
        id: 2,
        title: "Edistone Heights",
        location: "NH-24, Ghaziabad",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2600&auto=format&fit=crop", // Elegant Corporate Tower
        description: "Premium commercial spaces for the modern business.",
        status: "Ready to Move"
    },
    {
        id: 3,
        title: "Green Valley Villas",
        location: "Sohna Road, Gurgaon",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2600&auto=format&fit=crop", // Modern Villa
        description: "Serene living amidst nature with world-class amenities.",
        status: "New Launch"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-slate-900 text-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif mb-4">
                            Signature <span className="text-amber-500">Creations</span>
                        </h2>
                        <p className="text-slate-400 max-w-lg font-light text-lg">
                            Explore our portfolio of landmark developments that redefine architectural excellence.
                        </p>
                    </motion.div>

                    <motion.button
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="hidden md:flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors uppercase tracking-widest text-sm font-medium mt-6 md:mt-0"
                    >
                        All Projects <ArrowRight size={16} />
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            className="group relative overflow-hidden rounded-xl cursor-pointer"
                        >
                            {/* Image Container */}
                            <div className="aspect-[4/5] overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="inline-block px-3 py-1 bg-amber-500 text-slate-900 text-xs font-bold uppercase tracking-wider mb-3 rounded-full">
                                    {project.status}
                                </span>
                                <h3 className="text-2xl font-serif text-white mb-1 group-hover:text-amber-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-300 text-sm mb-4 font-light flex items-center gap-1">
                                    {project.location}
                                </p>
                                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
                                    <p className="text-slate-400 text-sm leading-relaxed mb-4 border-t border-slate-700 pt-4">
                                        {project.description}
                                    </p>
                                    <button className="text-white text-sm uppercase tracking-wider border-b border-amber-500 pb-1 hover:text-amber-400 transition-colors">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <button className="text-amber-400 hover:text-amber-300 uppercase tracking-widest text-sm font-medium inline-flex items-center gap-2">
                        All Projects <ArrowRight size={16} />
                    </button>
                </div>
            </div>
        </section>
    );
}
