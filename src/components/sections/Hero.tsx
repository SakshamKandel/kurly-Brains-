"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.container}`}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className={styles.meta}>
                        <span className={styles.agencyTag}>Kurly Brains — Digital Firm</span>
                        <span className={styles.location}>Global / Remote</span>
                    </div>

                    <h1 className={styles.title}>
                        We Build <br />
                        <span className={styles.highlight}>Advanced</span> <br />
                        Digital Future.
                    </h1>

                    <div className={styles.footer}>
                        <p className={styles.manifesto}>
                            We are a creative agency dedicated to precision. <br />
                            Seamless design. Intelligent code.
                        </p>

                        <Link href="/contact" className={styles.cta}>
                            Start Project →
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
