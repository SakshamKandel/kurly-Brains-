"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    // Start visible to avoid "missing cursor" if mousemove is delayed
    const [isVisible, setIsVisible] = useState(true);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 10);
            cursorY.set(e.clientY - 10);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener("mousemove", moveCursor);
        document.body.addEventListener("mouseenter", handleMouseEnter);
        document.body.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            document.body.removeEventListener("mouseenter", handleMouseEnter);
            document.body.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [cursorX, cursorY, isVisible]);

    return (
        <motion.div
            style={{
                translateX: cursorXSpring,
                translateY: cursorYSpring,
                position: "fixed",
                left: 0,
                top: 0,
                zIndex: 2147483647, // Max integer to ensure it's always on top
                pointerEvents: "none",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
        >
            <div
                style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    mixBlendMode: "difference",
                }}
            />
        </motion.div>
    );
}
