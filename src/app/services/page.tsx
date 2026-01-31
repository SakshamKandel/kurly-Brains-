"use client";
import React from 'react';
import ParallaxText from '@/components/ui/ParallaxText';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const SERVICES = [
    {
        category: "DESIGN",
        items: [
            { label: "UI / UX Design", desc: "We design beautiful, easy-to-use interfaces." },
            { label: "Brand Identity", desc: "Logos, colors, and fonts that make your brand stand out." },
            { label: "Motion Graphics", desc: "Animations that bring your website to life." }
        ]
    },
    {
        category: "DEVELOPMENT",
        items: [
            { label: "Frontend Development", desc: "Fast, responsive websites using the latest technology." },
            { label: "Backend Systems", desc: "Secure and scalable server-side solutions." },
            { label: "Content Management", desc: "Easy-to-use tools for updating your content." }
        ]
    },
    {
        category: "STRATEGY",
        items: [
            { label: "SEO & Growth", desc: "Helping you rank higher and reach more customers." },
            { label: "Analytics", desc: "Understanding your users to improve performance." }
        ]
    }
];

export default function ServicesPage() {
    const [expanded, setExpanded] = useState<string | null>(null);

    return (
        <main className="bg-[#050505] min-h-screen text-white pt-32 pb-24 overflow-hidden">

            {/* Header Tape */}
            <div className="mb-24 relative z-10 border-t border-b border-white/10 py-4 bg-[#050505]">
                <ParallaxText baseVelocity={2} className="text-[8vw] font-oswald font-bold text-transparent text-stroke-white uppercase tracking-tighter opacity-50">
                    OUR EXPERTISE — WHAT WE DO — SERVICES —
                </ParallaxText>
            </div>

            <div className="container mx-auto px-6 max-w-[1400px]">
                {SERVICES.map((section) => (
                    <div key={section.category} className="mb-16 md:mb-24 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 border-t border-white/20 pt-6 md:pt-8">

                        {/* Category Name */}
                        <div className="md:col-span-4">
                            <h2 className="text-xl font-mono text-gray-500 tracking-widest uppercase">
                                {section.category}
                            </h2>
                        </div>

                        {/* Services List */}
                        <div className="md:col-span-8 flex flex-col">
                            {section.items.map((item) => (
                                <div
                                    key={item.label}
                                    className="group py-8 border-b border-white/10 cursor-pointer"
                                    onMouseEnter={() => setExpanded(item.label)}
                                // onMouseLeave={() => setExpanded(null)} // Keep expanded for easier reading? Or auto-collapse. Let's keep hover for clean look.
                                >
                                    <h3 className="text-2xl md:text-5xl font-oswald font-bold text-white group-hover:text-gray-300 transition-colors">
                                        {item.label}
                                    </h3>
                                    <p className="mt-4 text-gray-400 font-mono text-sm md:text-base max-w-xl">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer Tape */}
            <div className="mt-24 relative z-10 opacity-30">
                <ParallaxText baseVelocity={-2} className="text-[4vw] font-mono text-white uppercase tracking-widest">
                    READY TO START? — CONTACT US —
                </ParallaxText>
            </div>

        </main>
    );
}
