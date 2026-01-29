"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeIn, FloatingElement } from "@/components/animations";
import styles from "./page.module.css";

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <main>
                {/* Page Header */}
                <section className={styles.header}>
                    <div className={styles.bgElements}>
                        <FloatingElement duration={8} distance={20}>
                            <div className={styles.floatingOrb} />
                        </FloatingElement>
                    </div>

                    <div className="container">
                        <motion.span
                            className={styles.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Get In Touch
                        </motion.span>
                        <motion.h1
                            className={styles.title}
                            initial={{ opacity: 0, y: 60 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Let&apos;s Talk
                        </motion.h1>
                        <motion.p
                            className={styles.subtitle}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            Ready to start your project? We&apos;d love to hear from you.
                            Reach out and let&apos;s create something amazing together.
                        </motion.p>
                    </div>
                </section>

                {/* Contact Content */}
                <section className={styles.contactSection}>
                    <div className="container">
                        <div className={styles.contactGrid}>
                            {/* Contact Form */}
                            <FadeIn>
                                <div className={styles.formWrapper}>
                                    <h2 className={styles.formTitle}>Send a Message</h2>
                                    <form className={styles.form}>
                                        <div className={styles.formRow}>
                                            <div className={styles.formGroup}>
                                                <label htmlFor="name" className={styles.formLabel}>
                                                    Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    className={styles.formInput}
                                                    placeholder="Your name"
                                                />
                                            </div>
                                            <div className={styles.formGroup}>
                                                <label htmlFor="email" className={styles.formLabel}>
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    className={styles.formInput}
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="service" className={styles.formLabel}>
                                                Service Interested In
                                            </label>
                                            <select id="service" className={styles.formSelect}>
                                                <option value="">Select a service</option>
                                                <option value="web-design">Web Design & Development</option>
                                                <option value="ai">AI Model Training</option>
                                                <option value="ui-ux">UI/UX Design</option>
                                                <option value="amazon">Amazon A+ Content</option>
                                                <option value="graphic">Graphic Design</option>
                                                <option value="brand">Brand Identity</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="message" className={styles.formLabel}>
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                className={styles.formTextarea}
                                                placeholder="Tell us about your project..."
                                                rows={6}
                                            />
                                        </div>
                                        <button type="submit" className={styles.formButton}>
                                            Send Message
                                            <span>→</span>
                                        </button>
                                    </form>
                                </div>
                            </FadeIn>

                            {/* Contact Info */}
                            <FadeIn delay={0.2}>
                                <div className={styles.infoWrapper}>
                                    <div className={styles.infoBlock}>
                                        <h3 className={styles.infoTitle}>Email</h3>
                                        <a href="mailto:hello@kurlybrains.com" className={styles.infoLink}>
                                            hello@kurlybrains.com
                                        </a>
                                    </div>

                                    <div className={styles.infoBlock}>
                                        <h3 className={styles.infoTitle}>Location</h3>
                                        <p className={styles.infoText}>
                                            Global • Remote First
                                            <br />
                                            Serving clients worldwide
                                        </p>
                                    </div>

                                    <div className={styles.infoBlock}>
                                        <h3 className={styles.infoTitle}>Availability</h3>
                                        <p className={styles.infoText}>
                                            Currently accepting new projects
                                            <br />
                                            Response within 24 hours
                                        </p>
                                    </div>

                                    <div className={styles.infoBlock}>
                                        <h3 className={styles.infoTitle}>Connect</h3>
                                        <div className={styles.socialLinks}>
                                            <a href="#" className={styles.socialLink}>Instagram</a>
                                            <a href="#" className={styles.socialLink}>LinkedIn</a>
                                            <a href="#" className={styles.socialLink}>Behance</a>
                                            <a href="#" className={styles.socialLink}>Dribbble</a>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
