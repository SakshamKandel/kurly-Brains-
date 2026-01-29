"use client";

import { motion } from "framer-motion";
import styles from "./GlobalReach.module.css";

export default function GlobalReach() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.layout}>
                    <div className={styles.headingBlock}>
                        <span className={styles.label}>Global Impact</span>
                        <h2 className={styles.headline}>
                            Digital Presence <br />
                            <span className={styles.accent}>Without Borders.</span>
                        </h2>
                    </div>

                    <div className={styles.statsRow}>
                        <div className={styles.stat}>
                            <span className={styles.value}>10+</span>
                            <span className={styles.key}>Countries</span>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.value}>100M+</span>
                            <span className={styles.key}>Reach</span>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.value}>50+</span>
                            <span className={styles.key}>Projects</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
