"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/animations";
import styles from "./page.module.css";

const projects = [
    {
        id: 1,
        title: "Brand Redesign",
        client: "TechStart Inc.",
        category: "Brand Identity",
        year: "2024",
    },
    {
        id: 2,
        title: "E-Commerce Platform",
        client: "Fashion Forward",
        category: "Web Design",
        year: "2024",
    },
    {
        id: 3,
        title: "Mobile App UI",
        client: "FinTech Pro",
        category: "UI/UX Design",
        year: "2024",
    },
    {
        id: 4,
        title: "AI Chatbot",
        client: "Support Hub",
        category: "AI Solutions",
        year: "2023",
    },
    {
        id: 5,
        title: "Amazon Storefront",
        client: "Wellness Co.",
        category: "Amazon A+",
        year: "2023",
    },
    {
        id: 6,
        title: "Marketing Campaign",
        client: "Growth Labs",
        category: "Graphic Design",
        year: "2023",
    },
];

export default function WorkPage() {
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
                            Portfolio
                        </motion.span>
                        <motion.h1
                            className={styles.title}
                            initial={{ opacity: 0, y: 60 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Our Work
                        </motion.h1>
                        <motion.p
                            className={styles.subtitle}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            A selection of projects we&apos;re proud of. Each one represents a
                            unique challenge and creative solution.
                        </motion.p>
                    </div>
                </section>

                {/* Projects Grid */}
                <section className={styles.projects}>
                    <div className="container">
                        <div className={styles.projectsGrid}>
                            {projects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    className={styles.projectCard}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    whileHover={{ y: -10 }}
                                >
                                    <div className={styles.projectImage}>
                                        <span className={styles.projectPlaceholder}>
                                            {project.title}
                                        </span>
                                    </div>
                                    <div className={styles.projectInfo}>
                                        <div className={styles.projectMeta}>
                                            <span className={styles.projectCategory}>
                                                {project.category}
                                            </span>
                                            <span className={styles.projectYear}>{project.year}</span>
                                        </div>
                                        <h3 className={styles.projectTitle}>{project.title}</h3>
                                        <p className={styles.projectClient}>{project.client}</p>
                                    </div>
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
                                Like What You See?
                            </h2>
                            <p className={styles.ctaText}>
                                Let&apos;s create something amazing together.
                            </p>
                            <Link href="/contact" className="btn-primary">
                                Start a Project
                            </Link>
                        </FadeIn>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
