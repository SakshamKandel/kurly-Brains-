"use client";
import React from 'react';
import ParallaxText from '@/components/ui/ParallaxText';
import { motion } from 'framer-motion';

export default function AboutPage() {
    return (
        <main className="bg-[#050505] min-h-screen text-white pt-32 pb-24 overflow-hidden">

            {/* Header Tape */}
            <div className="mb-24 relative z-10 bg-white text-black py-2 transform -rotate-1">
                <ParallaxText baseVelocity={-3} className="text-[8vw] font-oswald font-bold uppercase tracking-tighter">
                    WHO WE ARE — THE HUMAN SIDE OF CODE —
                </ParallaxText>
            </div>

            <div className="container mx-auto px-6 max-w-[1600px] grid grid-cols-1 md:grid-cols-12 gap-12">

                {/* Manifesto Section */}
                <div className="md:col-span-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-[4rem] md:text-[6rem] leading-[0.9] font-oswald font-bold uppercase mb-12"
                    >
                        WE BUILD <br />
                        <span className="text-transparent text-stroke-white">SYNTHETIC</span> <br />
                        SOULS.
                    </motion.h1>
                    <div className="font-mono text-sm md:text-lg text-gray-400 max-w-2xl leading-relaxed space-y-8 uppercase tracking-wide">
                        <p>
                            &gt; NOT JUST AN AGENCY. A COLLECTIVE INTELLIGENCE.
                        </p>
                        <p>
                            We bridge the gap between cold logic and human emotion.
                            In a world of generated noise, we craft signals that matter.
                            System-level thinking meets raw artistic expression.
                        </p>
                        <p className="text-white">
                            // EST. 2026 // GLOBAL TEAM
                        </p>
                    </div>
                </div>

                {/* Data Logs (Stats/Team) */}
                <div className="md:col-span-4 border-l border-white/10 pl-8 flex flex-col gap-12 font-mono text-xs uppercase tracking-widest text-gray-500">

                    <div className="flex flex-col gap-2">
                        <span>OPERATING STATUS</span>
                        <div className="flex items-center gap-2 text-green-500">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            ONLINE
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <span>LOCATION</span>
                        <div className="text-white">
                            GLOBAL DISTRIBUTED
                            <br />
                            34.0522° N, 118.2437° W
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <span>CORE CAPABILITIES</span>
                        <ul className="text-white space-y-1">
                            <li>&gt; NEXT.JS ARCHITECTURE</li>
                            <li>&gt; AI INTEGRATION</li>
                            <li>&gt; BRAND IDENTITY</li>
                            <li>&gt; SYSTEM DESIGN</li>
                        </ul>
                    </div>

                </div>
            </div>
        </main>
    );
}
