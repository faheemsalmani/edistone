"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="group flex items-center gap-2">
                    <div className="w-10 h-10 bg-amber-500 rounded-sm flex items-center justify-center transform rotate-45 group-hover:rotate-0 transition-transform duration-500">
                        <span className="text-slate-900 font-bold text-xl -rotate-45 group-hover:rotate-0 transition-transform duration-500">E</span>
                    </div>
                    <span className={`text-2xl font-serif font-bold tracking-widest ${scrolled ? 'text-white' : 'text-white'}`}>
                        EDISTONE
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-8">
                    {['Philosophy', 'Projects', 'Amenities', 'Contact'].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-slate-200 hover:text-amber-400 font-medium tracking-wide transition-colors text-sm uppercase"
                        >
                            {item}
                        </Link>
                    ))}
                    <button
                        onClick={() => window.location.href = '#contact'}
                        className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-6 py-2 rounded-sm font-bold uppercase text-sm tracking-wider transition-all hover:scale-105"
                    >
                        Enquire Now
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800 p-6 md:hidden flex flex-col space-y-4 shadow-xl"
                    >
                        {['Philosophy', 'Projects', 'Amenities', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setIsOpen(false)}
                                className="text-slate-300 hover:text-amber-400 font-medium text-lg border-b border-slate-800 pb-2"
                            >
                                {item}
                            </Link>
                        ))}
                        <div className="flex items-center gap-2 text-amber-500 pt-2">
                            <Phone size={18} />
                            <span className="font-bold">+91 9910699330</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
