"use client";

import { motion } from "framer-motion";
import styles from "./page.module.css";

export default function PrivacyPage() {
    return (
        <main className={styles.page}>
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className={styles.label}>Legal</span>
                    <h1 className={styles.title}>Privacy Policy</h1>
                    <p className={styles.updated}>Last updated: January 2026</p>
                </motion.div>

                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <section className={styles.section}>
                        <h2>1. Introduction</h2>
                        <p>
                            Kurly Brains ("we," "our," or "us") is committed to protecting your privacy.
                            This Privacy Policy explains how we collect, use, disclose, and safeguard your
                            information when you visit our website or engage with our services.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>2. Information We Collect</h2>
                        <h3>Personal Information</h3>
                        <p>We may collect personal information that you voluntarily provide, including:</p>
                        <ul>
                            <li>Name and contact information (email, phone number)</li>
                            <li>Business or company name</li>
                            <li>Project requirements and specifications</li>
                            <li>Payment and billing information</li>
                        </ul>

                        <h3>Automatically Collected Information</h3>
                        <p>When you visit our website, we may automatically collect:</p>
                        <ul>
                            <li>IP address and browser type</li>
                            <li>Device information and operating system</li>
                            <li>Pages visited and time spent on site</li>
                            <li>Referring website addresses</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2>3. How We Use Your Information</h2>
                        <p>We use the information we collect to:</p>
                        <ul>
                            <li>Provide, operate, and maintain our services</li>
                            <li>Communicate with you about projects and inquiries</li>
                            <li>Send you updates, newsletters, and marketing communications</li>
                            <li>Improve our website and services</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2>4. Information Sharing</h2>
                        <p>
                            We do not sell, trade, or rent your personal information to third parties.
                            We may share information with trusted service providers who assist us in
                            operating our website and conducting our business, provided they agree to
                            keep this information confidential.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>5. Data Security</h2>
                        <p>
                            We implement appropriate technical and organizational measures to protect
                            your personal information against unauthorized access, alteration, disclosure,
                            or destruction. However, no method of transmission over the Internet is
                            100% secure.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>6. Your Rights</h2>
                        <p>You have the right to:</p>
                        <ul>
                            <li>Access the personal information we hold about you</li>
                            <li>Request correction of inaccurate information</li>
                            <li>Request deletion of your personal information</li>
                            <li>Opt-out of marketing communications</li>
                            <li>Withdraw consent where applicable</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2>7. Cookies</h2>
                        <p>
                            We use cookies and similar tracking technologies to enhance your experience
                            on our website. You can control cookie preferences through your browser settings.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>8. Contact Us</h2>
                        <p>
                            If you have questions about this Privacy Policy or our data practices,
                            please contact us at:
                        </p>
                        <p className={styles.contact}>
                            <strong>Email:</strong> hello@kurlybrains.com
                        </p>
                    </section>
                </motion.div>
            </div>
        </main>
    );
}
