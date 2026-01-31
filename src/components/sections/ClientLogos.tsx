"use client";
import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
    "/clients/Bangla TIgers Logos.png",
    "/clients/Biratnagar Kings.png",
    "/clients/Bramptons Wolves Logo.png",
    "/clients/Everest Thunders Logo.png",
    "/clients/Karnali Yaks Logo.png",
    "/clients/Khadka Foods Logo.png",
    "/clients/Nawatara Eng School Logo.png",
    "/clients/Nepal Basketball Association.png",
    "/clients/Peshawar_Zalmi_logo.png",
];

const LogoStream = ({ direction = "left", speed = 30 }: { direction?: "left" | "right", speed?: number }) => (
    <div className="flex w-full overflow-hidden mask-fade relative py-8">
        <motion.div
            className="flex gap-16 md:gap-32 min-w-full items-center"
            animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
            transition={{
                duration: speed,
                ease: "linear",
                repeat: Infinity
            }}
        >
            {[...logos, ...logos, ...logos].map((src, i) => (
                <div
                    key={i}
                    className="group relative w-32 h-20 md:w-56 md:h-32 flex-shrink-0 flex items-center justify-center transition-all duration-300"
                >
                    {/* Glow Container */}
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 rounded-lg blur-xl transition-opacity duration-300" />

                    {/* Main Logo */}
                    <div className="relative w-full h-full grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 transform">
                        <Image
                            src={src}
                            alt={`Partner ${i}`}
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            ))}
        </motion.div>
    </div>
);

export default function ClientLogos() {
    return (
        <section className="w-full bg-[#050505] py-32 overflow-hidden border-b border-white/5 relative">

            {/* Background Grid Accent */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none opacity-20" />

            <div className="container mx-auto px-6 mb-24 flex flex-col items-center text-center z-10 relative">
                <span className="w-px h-16 bg-gradient-to-b from-transparent to-white/50 mb-8" />
                <h2 className="font-oswald text-4xl md:text-6xl uppercase tracking-tighter text-white mb-4">
                    TRUSTED <span className="text-gray-600">ALLIANCE</span>
                </h2>
                <p className="font-inter text-sm md:text-base text-gray-500 max-w-lg mx-auto leading-relaxed">
                    Collaborating with industry leaders to engineer the future of digital interaction.
                </p>
                {/* Fabrizio Romano Spotlight */}
                <div className="container mx-auto px-6 mb-32 mt-24 relative z-20">
                    <div className="relative w-full max-w-4xl mx-auto group cursor-pointer">

                        {/* Background "Card" with Noise */}
                        <div className="absolute inset-0 bg-white/5 transform rotate-2 group-hover:rotate-0 transition-transform duration-500" />

                        <div className="relative bg-[#0a0a0a] border border-white/10 overflow-hidden flex flex-col md:flex-row items-center">

                            {/* Image Section */}
                            <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] grayscale group-hover:grayscale-0 transition-all duration-700 ease-out">
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                                <Image
                                    src="/clients/Fabrizio Romano Photo.jpg"
                                    alt="Fabrizio Romano"
                                    fill
                                    className="object-cover object-top"
                                />
                            </div>

                            {/* Text Content */}
                            <div className="w-full md:w-1/2 p-12 flex flex-col justify-center relative">
                                {/* Decorative Tape */}
                                <div className="absolute top-8 right-0 bg-white text-black px-4 py-1 font-mono text-xs uppercase tracking-widest transform translate-x-4 group-hover:translate-x-0 transition-transform duration-500">
                                    Global Authority
                                </div>

                                <h3 className="font-oswald text-5xl md:text-7xl uppercase text-white leading-[0.9] mb-6">
                                    Fabrizio <br />
                                    <span className="text-transparent text-stroke-white group-hover:text-white transition-colors duration-500">Romano</span>
                                </h3>

                                <div className="w-12 h-1 bg-blue-600 mb-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />



                                <div className="font-oswald text-2xl uppercase text-white/50 group-hover:text-white transition-colors flex items-center gap-4">
                                    <span>Here We Go</span>
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dual Stream - Infinite Marquee */}
                <div className="flex flex-col gap-0 z-10 relative">
                    <LogoStream direction="left" speed={40} />
                    <LogoStream direction="right" speed={50} />
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
        </section>
    );
}
