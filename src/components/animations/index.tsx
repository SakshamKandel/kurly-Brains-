"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface AnimatedTextProps {
    text: string;
    className?: string;
    delay?: number;
}

// Animated text that reveals character by character
export function AnimatedText({ text, className = "", delay = 0 }: AnimatedTextProps) {
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: delay },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
        },
    };

    return (
        <motion.span
            className={className}
            variants={container}
            initial="hidden"
            animate="visible"
            style={{ display: "inline-block", overflow: "hidden" }}
        >
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    variants={child}
                    style={{ display: "inline-block", marginRight: "0.3em" }}
                >
                    {word}
                </motion.span>
            ))}
        </motion.span>
    );
}

// Animated heading with line reveal
export function AnimatedHeading({
    children,
    className = "",
    delay = 0,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Scroll-triggered fade in
export function FadeIn({
    children,
    className = "",
    delay = 0,
    direction = "up",
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
}) {
    const directionOffset = {
        up: { y: 60 },
        down: { y: -60 },
        left: { x: 60 },
        right: { x: -60 },
    };

    return (
        <motion.div
            initial={{ opacity: 0, ...directionOffset[direction] }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.7,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Staggered children animation
export function StaggerContainer({
    children,
    className = "",
    staggerDelay = 0.1,
}: {
    children: React.ReactNode;
    className?: string;
    staggerDelay?: number;
}) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.6,
                        ease: [0.25, 0.46, 0.45, 0.94],
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Parallax effect
export function Parallax({
    children,
    className = "",
    speed = 0.5,
}: {
    children: React.ReactNode;
    className?: string;
    speed?: number;
}) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);

    return (
        <motion.div ref={ref} style={{ y }} className={className}>
            {children}
        </motion.div>
    );
}

// Magnetic button effect
export function MagneticButton({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Animated counter for stats
export function AnimatedCounter({
    value,
    suffix = "",
    className = "",
}: {
    value: number;
    suffix?: string;
    className?: string;
}) {
    return (
        <motion.span
            className={className}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                {value}
                {suffix}
            </motion.span>
        </motion.span>
    );
}

// Reveal mask animation
export function RevealMask({
    children,
    className = "",
    delay = 0,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) {
    return (
        <motion.div
            style={{ overflow: "hidden" }}
            className={className}
        >
            <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.8,
                    delay,
                    ease: [0.25, 0.46, 0.45, 0.94],
                }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
}

// Floating element
export function FloatingElement({
    children,
    className = "",
    duration = 4,
    distance = 15,
}: {
    children: React.ReactNode;
    className?: string;
    duration?: number;
    distance?: number;
}) {
    return (
        <motion.div
            animate={{
                y: [-distance, distance, -distance],
            }}
            transition={{
                duration,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
