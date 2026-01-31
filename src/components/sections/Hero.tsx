"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import ParallaxText from "@/components/ui/ParallaxText";

// Staggered Text Variants
const variants: Variants = {
    hidden: { opacity: 0, y: 100, rotate: 5 },
    visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        rotate: -2,
        transition: {
            delay: custom * 0.2, // Stagger effect
            duration: 1,
            ease: [0.215, 0.61, 0.355, 1], // Cubic bezier for cinematic feel
        },
    }),
};

export default function Hero() {
    return (
        <section className="relative w-full h-screen bg-[#050505] overflow-hidden flex flex-col justify-center items-center gap-6">

            {/* Background Noise */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] pointer-events-none mix-blend-overlay" />

            {/* 
            BACKGROUND LAYER: CROSSED TAPES (Crime Scene X)
            Animated fade-in
            */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                {/* Background Tape 1: Top (Outer) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 0.1, x: 0 }}
                    transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                    className="absolute top-[10%] w-[120%] left-[-10%] transform -rotate-6 select-none"
                >
                    <ParallaxText baseVelocity={-2} className="text-[18vh] font-oswald font-bold text-transparent text-stroke-white py-4 uppercase tracking-tighter leading-none">
                        SYSTEM SECURE — BACKGROUND PROTOCOL — STATIC NOISE —
                    </ParallaxText>
                </motion.div>
                {/* Background Tape 2: Bottom (Outer) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 0.1, x: 0 }}
                    transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
                    className="absolute bottom-[5%] w-[120%] left-[-10%] transform rotate-6 select-none"
                >
                    <ParallaxText baseVelocity={2} className="text-[18vh] font-oswald font-bold text-transparent text-stroke-white py-4 uppercase tracking-tighter leading-none">
                        RESTRICTED AREA — AUTHORIZED PERSONNEL ONLY —
                    </ParallaxText>
                </motion.div>
            </div>

            {/* 
            TRIPLE TAPE LAYOUT (Sandwich)
            Animated Staggered Entrance
            */}

            {/* Tape 0: Top Section (Outline) */}
            <motion.div
                custom={1}
                variants={variants}
                initial="hidden"
                animate="visible"
                className="w-full origin-center z-10 mix-blend-difference opacity-60"
            >
                <ParallaxText baseVelocity={1} className="text-[5vh] md:text-[6vh] font-oswald font-light text-transparent text-stroke-white py-1 uppercase tracking-widest leading-none">
                    EMOTIONAL INTELLIGENCE — SYNTHETIC SOUL — BEYOND LOGIC —
                </ParallaxText>
            </motion.div>

            {/* Tape 1: Middle (Solid White) */}
            <motion.div
                custom={2}
                variants={variants}
                initial="hidden"
                animate="visible"
                className="w-full origin-center z-20 mix-blend-normal"
            >
                <ParallaxText baseVelocity={-2} className="text-[10vh] md:text-[14vh] font-oswald font-bold text-black bg-white py-2 uppercase tracking-tighter leading-none">
                    KURLY BRAINS — THE HUMAN SIDE OF AI — EST. 2026 —
                </ParallaxText>
            </motion.div>

            {/* Tape 2: Bottom (Transparent Outline) */}
            <motion.div
                custom={3}
                variants={variants}
                initial="hidden"
                animate="visible"
                className="w-full origin-center z-10 mix-blend-difference opacity-80"
            >
                <ParallaxText baseVelocity={2} className="text-[10vh] md:text-[14vh] font-oswald font-bold text-transparent text-stroke-white py-2 uppercase tracking-tighter leading-none">
                    CODE THAT BREATHES — FEELING THE FUTURE — ALIVE SYSTEMS —
                </ParallaxText>
            </motion.div>

            {/* Center Static Element (Anchor) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30"
            >
                <div className="w-px h-12 bg-white/30" />
                <span className="font-mono text-[10px] text-white/50 uppercase tracking-widest">Scroll to Explore</span>
            </motion.div>

        </section>
    );
}
