"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const stats = [
    { label: "Impressions", value: "100M+" },
    { label: "Global Reach", value: "10+" },
    { label: "Projects", value: "50+" },
    { label: "Retention", value: "99%" },
];

export default function GlobalReach() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

    return (
        <section ref={sectionRef} className="w-full bg-[#050505] overflow-hidden py-32 border-t border-white/5">
            {/* Fluid Ticker Container */}
            <div className="w-full">
                <motion.div
                    style={{ x }}
                    className="flex whitespace-nowrap gap-24 md:gap-48 px-12"
                >
                    {/* Double the array for seamless feel if needed, but here we just want a long strip */}
                    {[...stats, ...stats].map((stat, i) => (
                        <div key={i} className="flex flex-col justify-center">
                            <span className="font-oswald text-[15vw] md:text-[12rem] leading-[0.8] font-bold text-white tracking-tighter">
                                {stat.value}
                            </span>
                            <span className="font-inter text-sm md:text-xl uppercase tracking-[0.5em] text-gray-500 mt-4 ml-2">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Decoration Line */}
            <div className="w-full h-[1px] bg-white/10 mt-32" />
        </section>
    );
}
