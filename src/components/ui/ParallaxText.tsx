"use client";
import React, { useRef } from "react";
import { motion, useScroll, useVelocity, useAnimationFrame, useSpring, useTransform } from "framer-motion";

// Utility for wrapping numbers
const wrapNumber = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

interface ParallaxProps {
    children: string;
    baseVelocity: number;
    className?: string;
}

export default function ParallaxText({ children, baseVelocity = 100, className }: ParallaxProps) {
    const baseX = useSpring(0, { stiffness: 400, damping: 50 });
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });

    const x = useTransform(baseX, (v) => `${wrapNumber(-20, -45, v)}%`);

    const directionFactor = useRef<number>(1);

    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
        const velocityFactor = smoothVelocity.get() * 0.05;

        if (velocityFactor < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor;
        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="overflow-hidden flex flex-nowrap whitespace-nowrap w-[200%] ml-[-50%] pointer-events-none select-none">
            <motion.div className={`flex flex-nowrap ${className}`} style={{ x }}>
                {[...Array(8)].map((_, i) => (
                    <span key={i} className="block mr-12">{children}</span>
                ))}
            </motion.div>
        </div>
    );
}
