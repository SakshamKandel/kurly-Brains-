"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const LayoutTextFlip = ({
    text,
    words,
}: {
    text: string;
    words: string[];
}) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 2000); // Change word every 2 seconds
        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <div className="flex items-center justify-center gap-2 font-[var(--font-heading)] uppercase tracking-tight">
            <span className="text-xl md:text-3xl text-[var(--text-muted)]">{text}</span>
            <div className="relative inline-block h-[1.5em] overflow-hidden text-xl md:text-3xl text-[var(--text-primary)]">
                <AnimatePresence mode="popLayout">
                    <motion.span
                        key={index}
                        initial={{ y: "100%", opacity: 0, filter: "blur(4px)" }}
                        animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                        exit={{ y: "-100%", opacity: 0, filter: "blur(4px)" }}
                        transition={{
                            duration: 0.6,
                            ease: [0.19, 1, 0.22, 1], // Expo ease for snappiness
                        }}
                        className="block whitespace-nowrap"
                    >
                        {words[index]}
                    </motion.span>
                </AnimatePresence>
            </div>
        </div>
    );
};
