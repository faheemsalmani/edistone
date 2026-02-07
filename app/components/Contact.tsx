"use client";

import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission
        console.log('Form Submitted (Edistone):', formData);

        // Construct mailto for fallback
        const subject = `New Inquiry from ${formData.name}`;
        const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AMessage: ${formData.message}`;
        window.location.href = `mailto:ops@rigteq.com?subject=${subject}&body=${body}`;

        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Abstract Shapes */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px] opacity-20 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div className="space-y-10">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4 block">Get in Touch</span>
                            <h2 className="text-5xl md:text-6xl font-serif leading-tight">
                                Start Your <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">Journey</span>.
                            </h2>
                            <p className="text-slate-400 mt-6 text-lg font-light max-w-md">
                                We invite you to experience the Edistone difference. Contact our team for personalized consultations.
                            </p>
                        </motion.div>

                        <div className="space-y-6 text-slate-300">
                            <div className="flex items-start gap-4">
                                <MapPin className="text-amber-500 mt-1 shrink-0" />
                                <div>
                                    <h4 className="font-serif text-white text-lg">Corporate Office</h4>
                                    <p className="text-sm leading-relaxed">
                                        Office No 626, Sixth Floor, Aditya High Street, NH 24,<br />
                                        Lal Kuan, Ghaziabad, Uttar Pradesh 201009
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone className="text-amber-500 shrink-0" />
                                <div>
                                    <h4 className="font-serif text-white text-lg">Phone</h4>
                                    <p className="text-sm">+91 91-9220034414, +91 9220034415</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Mail className="text-amber-500 shrink-0" />
                                <div>
                                    <h4 className="font-serif text-white text-lg">Email</h4>
                                    <p className="text-sm">director@edistonerealestate.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Mail className="text-amber-500 shrink-0" />
                                <div>
                                    <h4 className="font-serif text-white text-lg">Sales</h4>
                                    <p className="text-sm">ops@rigteq.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl relative"
                    >
                        <AnimatePresence>
                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="absolute inset-0 flex flex-col items-center justify-center bg-slate-800/90 rounded-2xl z-20 text-center p-8"
                                >
                                    <CheckCircle className="text-green-500 w-16 h-16 mb-4" />
                                    <h3 className="text-2xl font-serif text-white mb-2">Thank You!</h3>
                                    <p className="text-slate-300">We have received your inquiry. Our team will contact you shortly.</p>
                                </motion.div>
                            ) : null}
                        </AnimatePresence>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs uppercase tracking-wider text-slate-400 font-bold">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                                        placeholder="Your Full Name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-xs uppercase tracking-wider text-slate-400 font-bold">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                                        placeholder="+91 XXXXX XXXXX"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-xs uppercase tracking-wider text-slate-400 font-bold">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs uppercase tracking-wider text-slate-400 font-bold">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors resize-none"
                                    placeholder="Tell us about your requirements..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold py-4 rounded-lg uppercase tracking-wide transition-all shadow-lg hover:shadow-amber-500/20 flex items-center justify-center gap-2 group"
                            >
                                Send Message <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
