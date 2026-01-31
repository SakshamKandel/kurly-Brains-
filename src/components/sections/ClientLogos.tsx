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

                                {/* Social Media Stats */}
                                <div className="grid grid-cols-2 gap-4 mt-8">
                                    {/* Facebook */}
                                    <div className="flex items-center gap-3 group/social">
                                        <div className="w-10 h-10 rounded-full bg-[#1877F2]/20 flex items-center justify-center group-hover/social:bg-[#1877F2]/40 transition-colors">
                                            <svg className="w-5 h-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-oswald text-xl text-white">29M</p>
                                            <p className="font-inter text-xs text-gray-500">Followers</p>
                                        </div>
                                    </div>

                                    {/* Instagram */}
                                    <div className="flex items-center gap-3 group/social">
                                        <div className="w-10 h-10 rounded-full bg-[#E4405F]/20 flex items-center justify-center group-hover/social:bg-[#E4405F]/40 transition-colors">
                                            <svg className="w-5 h-5 text-[#E4405F]" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-oswald text-xl text-white">42.3M</p>
                                            <p className="font-inter text-xs text-gray-500">Followers</p>
                                        </div>
                                    </div>

                                    {/* YouTube */}
                                    <div className="flex items-center gap-3 group/social">
                                        <div className="w-10 h-10 rounded-full bg-[#FF0000]/20 flex items-center justify-center group-hover/social:bg-[#FF0000]/40 transition-colors">
                                            <svg className="w-5 h-5 text-[#FF0000]" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-oswald text-xl text-white">3M</p>
                                            <p className="font-inter text-xs text-gray-500">Subscribers</p>
                                        </div>
                                    </div>

                                    {/* X (Twitter) */}
                                    <div className="flex items-center gap-3 group/social">
                                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover/social:bg-white/20 transition-colors">
                                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-oswald text-xl text-white">27M</p>
                                            <p className="font-inter text-xs text-gray-500">Followers</p>
                                        </div>
                                    </div>
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
