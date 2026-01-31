"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section className="w-full bg-[#050505] min-h-[90vh] flex items-center justify-center relative overflow-hidden py-24">

            {/* Ambient Noise */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 pointer-events-none mix-blend-overlay" />

            <div className="container mx-auto px-6 relative z-10 max-w-[1400px]">

                {/* Header Row */}
                <div className="flex justify-between items-start border-b border-white/10 pb-8 mb-24">
                    <div className="flex flex-col">
                        <span className="font-mono text-xs text-gray-500 mb-2">● SYSTEM STATUS: ONLINE</span>
                        <span className="font-inter text-xs tracking-widest text-white uppercase">Ready for transmission</span>
                    </div>
                    <div className="hidden md:block text-right">
                        <span className="font-mono text-xs text-gray-500">LOC: GLOBAL</span>
                    </div>
                </div>

                {/* Main Action Area */}
                <div className="flex flex-col items-center justify-center py-12 md:py-24">
                    <Link href="/contact" className="group relative">
                        {/* Magnetic Trigger Area */}
                        <div className="relative z-10 flex flex-col items-center cursor-pointer">
                            <motion.h2
                                initial={{ opacity: 0.5, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-[12vw] leading-[0.8] font-oswald font-bold text-transparent text-stroke-white group-hover:text-white transition-all duration-700 ease-out uppercase tracking-tighter"
                            >
                                INITIATE
                            </motion.h2>
                            <motion.h2
                                initial={{ opacity: 0.5, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-[12vw] leading-[0.8] font-oswald font-bold text-white group-hover:text-transparent group-hover:text-stroke-white transition-all duration-700 ease-out uppercase tracking-tighter"
                            >
                                PROJECT
                            </motion.h2>
                        </div>

                        {/* Hover Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-white/5 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    </Link>
                </div>

                {/* Footer Meta moved to main Footer component for seamless flow */}
            </div>
        </section>
    );
}
