"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
// import Image from "next/image"; // Placeholder

const works = [
    { title: "NEPAL SUPER LEAGUE", tags: ["BRANDING", "WEB", "2025"] },
    { title: "KURLY BRAINS V1", tags: ["IDENTITY", "DEV", "2024"] },
    { title: "BIRATNAGAR KINGS", tags: ["SOCIAL", "CONTENT", "2025"] },
    { title: "CHITWAN TIGERS", tags: ["STRATEGY", "WEB", "2024"] },
];

export default function WorkCarousel() {
    const carouselRef = useRef(null);

    return (
        <section className="container" style={{ padding: "10rem 0", overflow: "hidden" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "4rem", padding: "0 2rem" }}>
                <h2 style={{ fontSize: "3rem", margin: 0 }}>FEATURED_WORK</h2>
                <span style={{ fontFamily: "var(--font-body)", color: "#525252" }}>DRAG TO EXPLORE --&gt;</span>
            </div>

            <motion.div
                ref={carouselRef}
                className="carousel"
                style={{ display: "flex", gap: "2rem", cursor: "grab", paddingLeft: "2rem" }}
                drag="x"
                dragConstraints={{ right: 0, left: -1000 }}
            >
                {works.map((work, i) => (
                    <motion.div
                        key={i}
                        style={{
                            minWidth: "40vw",
                            height: "50vh",
                            backgroundColor: "#111",
                            border: "1px solid rgba(255,255,255,0.1)",
                            position: "relative",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-end",
                            padding: "2rem"
                        }}
                        whileHover={{ scale: 0.98, backgroundColor: "#1a1a1a" }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Image Placeholder */}
                        <div style={{
                            position: "absolute",
                            top: 0, left: 0,
                            width: "100%", height: "100%",
                            background: `linear-gradient(45deg, #111, #222)`,
                            zIndex: 0,
                            opacity: 0.5
                        }} />

                        <div style={{ zIndex: 1 }}>
                            <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
                                {work.tags.map(tag => (
                                    <span key={tag} style={{
                                        fontSize: "0.7rem",
                                        border: "1px solid rgba(255,255,255,0.3)",
                                        padding: "0.2rem 0.5rem",
                                        borderRadius: "50px"
                                    }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h3 style={{ fontSize: "2rem", margin: 0 }}>{work.title}</h3>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
