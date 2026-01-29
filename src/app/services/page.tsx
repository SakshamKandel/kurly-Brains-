"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import styles from "./page.module.css";

const services = [
    {
        id: "web-design",
        icon: "◈",
        title: "Web Design & Development",
        description:
            "We create stunning, responsive websites that don't just look beautiful—they perform. From minimal landing pages to complex web applications, we build digital experiences that convert visitors into customers.",
        details: [
            "Custom responsive design tailored to your brand",
            "Performance-optimized code for fast loading",
            "SEO-ready structure and semantic markup",
            "Content management system integration",
            "E-commerce functionality",
            "Ongoing maintenance and support",
        ],
    },
    {
        id: "ai-solutions",
        icon: "◇",
        title: "AI Model Training",
        description:
            "Harness the power of artificial intelligence with custom-trained models designed for your specific needs. We develop intelligent solutions that automate processes and unlock new possibilities.",
        details: [
            "Custom machine learning models",
            "Natural language processing",
            "Computer vision solutions",
            "Predictive analytics",
            "Automation systems",
            "AI integration consulting",
        ],
    },
    {
        id: "ui-ux",
        icon: "○",
        title: "UI/UX Design",
        description:
            "Great design is invisible—it just works. We craft intuitive interfaces and seamless user experiences that delight users and drive engagement through research-driven design decisions.",
        details: [
            "User research and personas",
            "Information architecture",
            "Wireframing and prototyping",
            "Visual design systems",
            "Usability testing",
            "Interaction design",
        ],
    },
    {
        id: "amazon-content",
        icon: "□",
        title: "Amazon A+ Content",
        description:
            "Stand out in the world's largest marketplace with enhanced brand content that tells your story. We create compelling A+ content that increases conversion rates and builds brand loyalty.",
        details: [
            "Enhanced Brand Content (EBC)",
            "Brand Story modules",
            "Product comparison charts",
            "Lifestyle imagery",
            "Mobile-optimized layouts",
            "A/B testing strategies",
        ],
    },
    {
        id: "graphic-design",
        icon: "△",
        title: "Graphic Design",
        description:
            "Visual content that stops the scroll. From social media graphics to comprehensive marketing materials, we create designs that capture attention and communicate your message.",
        details: [
            "Social media graphics",
            "Marketing collateral",
            "Presentation design",
            "Digital advertising assets",
            "Infographics",
            "Print design",
        ],
    },
    {
        id: "brand-identity",
        icon: "◆",
        title: "Brand Identity",
        description:
            "Your brand is more than a logo—it's the complete experience people have with your company. We create cohesive brand systems that resonate with your audience and stand the test of time.",
        details: [
            "Logo design and variations",
            "Color palette development",
            "Typography selection",
            "Brand guidelines",
            "Visual identity system",
            "Brand strategy",
        ],
    },
    {
        id: "sports-graphics",
        icon: "⬡",
        title: "Sports Graphic Design",
        description:
            "Bring the energy of the game to life. We create dynamic, high-impact sports visuals that capture the intensity and passion of athletics—from jersey designs to stadium graphics.",
        details: [
            "Jersey and kit design",
            "Match day posters and graphics",
            "Team branding and logos",
            "Athlete portraits and composites",
            "Stadium and arena signage",
            "Sports social media content",
        ],
    },
];

export default function ServicesPage() {
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
                            What We Do
                        </motion.span>
                        <motion.h1
                            className={styles.title}
                            initial={{ opacity: 0, y: 60 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Our Services
                        </motion.h1>
                        <motion.p
                            className={styles.subtitle}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            End-to-end digital solutions for ambitious brands ready to make an
                            impact in the digital world.
                        </motion.p>
                    </div>
                </section>

                {/* Services List */}
                <section className={styles.servicesList}>
                    <div className="container">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                id={service.id}
                                className={styles.serviceBlock}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                            >
                                <div className={styles.serviceHeader}>
                                    <span className={styles.serviceNumber}>
                                        0{index + 1}
                                    </span>
                                    <span className={styles.serviceIcon}>{service.icon}</span>
                                </div>
                                <div className={styles.serviceContent}>
                                    <h2 className={styles.serviceTitle}>{service.title}</h2>
                                    <p className={styles.serviceDesc}>{service.description}</p>
                                    <ul className={styles.serviceDetails}>
                                        {service.details.map((detail) => (
                                            <li key={detail}>{detail}</li>
                                        ))}
                                    </ul>
                                    <Link href="/contact" className={styles.serviceLink}>
                                        Start a Project <span>→</span>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className={styles.cta}>
                    <div className="container">
                        <FadeIn>
                            <h2 className={styles.ctaTitle}>
                                Ready to Transform Your
                                <br />
                                <span className={styles.ctaAccent}>Digital Presence?</span>
                            </h2>
                            <p className={styles.ctaText}>
                                Let&apos;s discuss how we can help bring your vision to life.
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
