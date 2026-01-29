"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/animations";
import styles from "./page.module.css";

const values = [
    {
        title: "Excellence",
        description: "We don't settle for good enough. Every pixel, every line of code, every interaction is crafted with precision.",
    },
    {
        title: "Innovation",
        description: "We stay ahead of the curve, embracing new technologies and approaches to deliver cutting-edge solutions.",
    },
    {
        title: "Partnership",
        description: "We work alongside our clients as true partners, understanding their goals and challenges deeply.",
    },
    {
        title: "Impact",
        description: "We measure success by the real results we deliver—increased conversions, stronger brands, better experiences.",
    },
];

const team = [
    { name: "Team Member 1", role: "Creative Director" },
    { name: "Team Member 2", role: "Lead Developer" },
    { name: "Team Member 3", role: "UI/UX Designer" },
    { name: "Team Member 4", role: "Brand Strategist" },
];

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main>
                {/* Page Header */}
                <section className={styles.header}>
                    <div className="container">
                        <motion.span
                            className={styles.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Who We Are
                        </motion.span>
                        <motion.h1
                            className={styles.title}
                            initial={{ opacity: 0, y: 60 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            About Us
                        </motion.h1>
                        <motion.p
                            className={styles.subtitle}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            A creative digital agency crafting exceptional experiences for
                            visionary brands worldwide.
                        </motion.p>
                    </div>
                </section>

                {/* Story Section */}
                <section className={styles.story}>
                    <div className="container">
                        <div className={styles.storyGrid}>
                            <FadeIn>
                                <div className={styles.storyContent}>
                                    <h2 className={styles.storyTitle}>Our Story</h2>
                                    <p className={styles.storyText}>
                                        Kurly Brains was founded with a simple mission: to help
                                        ambitious brands create digital experiences that truly
                                        matter. We believe great design is more than aesthetics—it's
                                        about solving problems and creating meaningful connections.
                                    </p>
                                    <p className={styles.storyText}>
                                        Today, we work with clients across 10+ countries, from
                                        innovative startups to established enterprises. Our diverse
                                        team brings together expertise in design, development, AI,
                                        and brand strategy to deliver comprehensive digital
                                        solutions.
                                    </p>
                                </div>
                            </FadeIn>
                            <FadeIn delay={0.2}>
                                <div className={styles.storyStats}>
                                    <div className={styles.storyStat}>
                                        <span className={styles.storyStatNumber}>10+</span>
                                        <span className={styles.storyStatLabel}>Countries</span>
                                    </div>
                                    <div className={styles.storyStat}>
                                        <span className={styles.storyStatNumber}>100M+</span>
                                        <span className={styles.storyStatLabel}>Reach</span>
                                    </div>
                                    <div className={styles.storyStat}>
                                        <span className={styles.storyStatNumber}>50+</span>
                                        <span className={styles.storyStatLabel}>Projects</span>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className={styles.values}>
                    <div className="container">
                        <FadeIn>
                            <span className={styles.label}>What Drives Us</span>
                            <h2 className={styles.sectionTitle}>Our Values</h2>
                        </FadeIn>
                        <div className={styles.valuesGrid}>
                            {values.map((value, index) => (
                                <motion.div
                                    key={value.title}
                                    className={styles.valueCard}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <h3 className={styles.valueTitle}>{value.title}</h3>
                                    <p className={styles.valueDesc}>{value.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className={styles.team}>
                    <div className="container">
                        <FadeIn>
                            <span className={styles.label}>The People</span>
                            <h2 className={styles.sectionTitle}>Our Team</h2>
                        </FadeIn>
                        <div className={styles.teamGrid}>
                            {team.map((member, index) => (
                                <motion.div
                                    key={member.name}
                                    className={styles.teamCard}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className={styles.teamImage} />
                                    <h4 className={styles.teamName}>{member.name}</h4>
                                    <span className={styles.teamRole}>{member.role}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className={styles.cta}>
                    <div className="container">
                        <FadeIn>
                            <h2 className={styles.ctaTitle}>
                                Ready to Work Together?
                            </h2>
                            <p className={styles.ctaText}>
                                Let&apos;s create something amazing.
                            </p>
                            <Link href="/contact" className="btn-primary">
                                Get in Touch
                            </Link>
                        </FadeIn>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
