"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./Contact.module.css";

export default function Contact() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.wrapper}>
                    <span className={styles.label}>Inquiry</span>
                    <h2 className={styles.title}>
                        Raw Ideas <br />
                        Into Reality.
                    </h2>
                    <Link href="/contact" className={styles.bigLink}>
                        Let&apos;s Talk
                    </Link>
                    <div className={styles.info}>
                        <span>hello@kurlybrains.com</span>
                        <span>Based Globally</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
