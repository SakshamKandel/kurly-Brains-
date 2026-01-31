"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";

const services = [
    {
        id: "01",
        title: "Web Design",
        description: "Interfaces that breathe. We craft digital environments where form meets function in perfect silence.",
        tags: ["UI/UX", "Motion", "Design Systems"]
    },
    {
        id: "02",
        title: "Engineering",
        description: "Robust architecture built for speed. Scalable solutions that power the next generation of the web.",
        tags: ["Next.js", "React", "Node.js"]
    },
    {
        id: "03",
        title: "Intelligence",
        description: "AI integration that feels natural. We weave predictive models into the fabric of your user experience.",
        tags: ["LLMs", "Automation", "Analytics"]
    },
    {
        id: "04",
        title: "Brand Identity",
        description: "Stories told through silence. Visual identities that command authority without shouting.",
        tags: ["Strategy", "Visual", "Voice"]
    }
];

export default function Services() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="w-full bg-[#050505] text-white py-32 px-6">
            <div className="max-w-[1600px] mx-auto">

                {/* Minimal Header - Left Aligned */}
                <div className="mb-24">
                    <span className="block font-inter text-xs tracking-[0.3em] text-gray-500 mb-4 uppercase">
                        Our Expertise
                    </span>
                    <h2 className="text-[5rem] md:text-[7rem] font-oswald font-bold leading-[0.9] tracking-tight">
                        DIGITAL <br />
                        <span className="text-gray-600">DISCIPLINE</span>
                    </h2>
                </div>

                {/* The Fluid List */}
                <div className="flex flex-col">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="group relative border-t border-white/10 py-12 md:py-16 transition-all duration-500 hover:border-white/50 cursor-pointer"
                        >
                            <div className="flex flex-col md:flex-row items-baseline md:items-center justify-between gap-8 md:gap-0">

                                {/* ID & Title */}
                                <div className="flex items-baseline gap-8 md:gap-16 w-full md:w-1/2">
                                    <span className="font-mono text-sm text-gray-600 group-hover:text-white transition-colors duration-300">
                                        /{service.id}
                                    </span>
                                    <h3 className="text-4xl md:text-6xl font-oswald font-medium uppercase text-gray-300 group-hover:text-white group-hover:translate-x-4 transition-all duration-500 ease-out">
                                        {service.title}
                                    </h3>
                                </div>

                                {/* Description & arrow (Reveals on Hover) */}
                                <div className="flex items-center justify-between w-full md:w-1/2 overflow-hidden">
                                    <p className="font-inter text-sm md:text-base text-gray-500 max-w-sm leading-relaxed opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0 delay-75">
                                        {service.description}
                                    </p>

                                    <div className="hidden md:flex ml-8 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 text-white">
                                        <IconArrowRight size={48} stroke={1} />
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                    {/* Closing Line */}
                    <div className="w-full h-[1px] bg-white/10" />
                </div>

            </div>
        </section>
    );
}
