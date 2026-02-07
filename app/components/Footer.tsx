"use client";

import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 text-slate-500 py-16 border-t border-slate-900">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand */}
                <div>
                    <h3 className="text-2xl font-serif text-white mb-4">EDISTONE</h3>
                    <p className="text-sm font-light leading-relaxed mb-6">
                        Edistone Real Estates Private Limited is a premier real estate developer committed to creating landmarks of luxury and improved lifestyle.
                    </p>
                    <div className="flex gap-4">
                        {/* Social placeholders */}
                        <div className="w-8 h-8 rounded-full bg-slate-800 hover:bg-amber-500 transition-colors cursor-pointer" />
                        <div className="w-8 h-8 rounded-full bg-slate-800 hover:bg-amber-500 transition-colors cursor-pointer" />
                        <div className="w-8 h-8 rounded-full bg-slate-800 hover:bg-amber-500 transition-colors cursor-pointer" />
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-6">Explore</h4>
                    <ul className="space-y-3 text-sm">
                        <li><Link href="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
                        <li><Link href="#philosophy" className="hover:text-amber-400 transition-colors">Philosophy</Link></li>
                        <li><Link href="#projects" className="hover:text-amber-400 transition-colors">Projects</Link></li>
                        <li><Link href="#contact" className="hover:text-amber-400 transition-colors">Contact</Link></li>
                    </ul>
                </div>

                {/* Projects */}
                <div>
                    <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-6">Projects</h4>
                    <ul className="space-y-3 text-sm">
                        <li className="hover:text-amber-400 transition-colors cursor-pointer">The Royal Pavilion</li>
                        <li className="hover:text-amber-400 transition-colors cursor-pointer">Edistone Heights</li>
                        <li className="hover:text-amber-400 transition-colors cursor-pointer">Green Valley</li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-6">Legal</h4>
                    <ul className="space-y-3 text-sm">
                        <li className="hover:text-amber-400 transition-colors cursor-pointer">Privacy Policy</li>
                        <li className="hover:text-amber-400 transition-colors cursor-pointer">Terms of Service</li>
                        <li className="hover:text-amber-400 transition-colors cursor-pointer">RERA Compliance</li>
                        <li className="hover:text-amber-400 transition-colors cursor-pointer">Disclaimer</li>
                    </ul>
                </div>
            </div>

            <div className="text-center mt-16 pt-8 border-t border-slate-900 text-xs">
                &copy; {currentYear} Edistone Real Estates Private Limited. All Rights Reserved.
            </div>
        </footer>
    );
}
