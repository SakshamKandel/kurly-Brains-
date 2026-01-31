"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import { IconArrowUpRight } from '@tabler/icons-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-[#050505] text-white pt-0 pb-8 relative overflow-hidden">

            {/* Top Row: Meta Info (Migrated from Contact) */}
            <div className="container mx-auto px-6 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 border-t border-white/10 pt-12">

                    {/* Direct Line */}
                    <div className="flex flex-col gap-4">
                        <span className="font-mono text-xs text-gray-500 uppercase tracking-widest"> Direct Line </span>
                        <a href="mailto:hello@kurlybrains.com" className="group flex items-center gap-2 text-xl md:text-2xl font-oswald text-white hover:text-gray-400 transition-colors">
                            hello@kurlybrains.com
                            <IconArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </a>
                    </div>

                    {/* Socials */}
                    <div className="flex flex-col gap-4">
                        <span className="font-mono text-xs text-gray-500 uppercase tracking-widest"> Social </span>
                        <div className="flex flex-col gap-2">
                            {['Instagram', 'LinkedIn', 'Twitter', 'Behance'].map((social) => (
                                <a key={social} href="#" className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors w-fit">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white transition-colors" />
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Availability */}
                    <div className="flex flex-col gap-4 md:text-right">
                        <span className="font-mono text-xs text-gray-500 uppercase tracking-widest"> Availability </span>
                        <div className="flex flex-col md:items-end gap-1">
                            <span className="text-sm text-white">Q1 {currentYear}</span>
                            <div className="flex items-center gap-2 px-3 py-1 bg-green-900/20 border border-green-500/20 rounded-full w-fit">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span className="text-[10px] font-bold text-green-500 uppercase tracking-wide">Accepting Projects</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Massive Brand Text */}
            <div className="w-full overflow-hidden border-t border-white/5 pt-8 md:pt-0 mb-16 pb-4">
                <motion.h1
                    initial={{ y: 100 }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[13vw] leading-[1] font-oswald font-bold text-center text-white tracking-tighter mix-blend-difference opacity-100 select-none pointer-events-none"
                >
                    KURLY BRAINS
                </motion.h1>
            </div>

            {/* Bottom Utility Bar */}
            <div className="container mx-auto px-6 mt-8 md:mt-0 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-600 uppercase tracking-widest font-mono">
                <span>&copy; {currentYear} Agency Inc.</span>
                <div className="flex gap-8">
                    <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
                </div>
                <div className="hidden md:block">
                    Scrolldown Complete
                </div>
            </div>
        </footer>
    );
}
