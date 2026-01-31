"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./Preloader.module.css";

const words = ["INITIALIZING", "ASSETS", "KINETICS", "KURLY", "BRAINS"];

export default function Preloader() {
    const [index, setIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Check session storage to run only once per session
        const hasLoaded = sessionStorage.getItem("hasLoaded");
        if (hasLoaded) {
            setIsVisible(false);
            return;
        }

        const interval = setInterval(() => {
            setIndex((prev) => {
                if (prev === words.length - 1) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setIsVisible(false);
                        sessionStorage.setItem("hasLoaded", "true");
                    }, 800);
                    return prev;
                }
                return prev + 1;
            });
        }, 200); // Fast typography switch

        return () => clearInterval(interval);
    }, []);

    if (!isVisible) return null;

    return (
        <motion.div
            className={styles.preloader}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        >
            <div className={styles.center}>
                <motion.h1
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.15 }}
                    className={styles.text}
                >
                    {words[index]}
                </motion.h1>
            </div>
            <div className={styles.loaderLine} />
        </motion.div>
    );
}
