"use client";
import React from 'react';
import ParallaxText from '@/components/ui/ParallaxText';
import { motion } from 'framer-motion';
import Image from 'next/image';

const PROJECTS = [
    { title: "Kurly Branding", category: "Brand Identity", year: "2025" },
    { title: "Kurly Web", category: "Web Interface", year: "2026" },
    { title: "Kurly AI", category: "AI Model Creation", year: "2025" },
    { title: "Kurly Sports", category: "Graphic Design", year: "2025" },
    { title: "Kurly Social", category: "Content Strategy", year: "2026" },
];

export default function WorkPage() {
    return (
        <main className="bg-[#050505] min-h-screen text-white pt-32 pb-24 overflow-hidden">

            {/* Header Tape */}
            <div className="mb-24 relative z-10 border-t border-b border-white/10 py-4 bg-[#050505]">
                <ParallaxText baseVelocity={2} className="text-[8vw] font-oswald font-bold text-transparent text-stroke-white uppercase tracking-tighter opacity-50">
                    OUR WORK — RECENT PROJECTS — PORTFOLIO —
                </ParallaxText>
            </div>

            {/* Project List */}
            <div className="container mx-auto px-6 max-w-[1800px]">
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative border-t border-white/20 py-12 md:py-16 hover:bg-white hover:text-black transition-colors duration-500 cursor-pointer overflow-hidden"
                    >
                        <div className="relative z-10 flex flex-col md:flex-row md:items-baseline md:justify-between gap-4">
                            <h2 className="text-[8vw] md:text-[6vw] font-oswald font-bold uppercase leading-none tracking-tighter">
                                {project.title}
                            </h2>
                            <div className="flex items-center gap-8 font-mono text-sm md:text-base uppercase tracking-widest opacity-60 group-hover:opacity-100">
                                <span>{project.category}</span>
                                <span>[{project.year}]</span>
                            </div>
                        </div>


                    </motion.div>
                ))}
            </div>

            {/* Footer Tape */}
            <div className="mt-24 relative z-10 opacity-30">
                <ParallaxText baseVelocity={-2} className="text-[4vw] font-mono text-white uppercase tracking-widest">
                    END OF LIST — SCROLL UP —
                </ParallaxText>
            </div>

        </main>
    );
}
