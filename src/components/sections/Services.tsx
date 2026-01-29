"use client";

import { motion } from "framer-motion";
import styles from "./Services.module.css";
import { useState } from "react";

const services = [
    {
        id: "01",
        title: "Web Design",
        categories: ["UX/UI", "Development", "Interaction"],
        desc: "We craft digital destinations. Not just websites, but immersive platforms that define perception and drive action."
    },
    {
        id: "02",
        title: "AI Solutions",
        categories: ["Machine Learning", "Automation", "NLP"],
        desc: "Intelligence engineered. We build custom models that automate the complex and predict the future."
    },
    {
        id: "03",
        title: "Brand Identity",
        categories: ["Strategy", "Visual Systems", "Guidelines"],
        desc: "The soul of your business assigned a face. Logos, typography, and voice that cut through the noise."
    },
    {
        id: "04",
        title: "Amazon A+",
        categories: ["Content", "Storefronts", "Conversion"],
        desc: "Dominating the marketplace. Enhanced brand content that turns skimmers into buyers."
    },
    {
        id: "05",
        title: "Sports Graphics",
        categories: ["Jerseys", "Posters", "Branding"],
        desc: "Game-changing visuals for the sports world. Dynamic designs for teams, athletes, and sporting events."
    },
];

export default function Services() {
    const [hoveredService, setHoveredService] = useState<string | null>(null);

    return (
        <section className={styles.services}>
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.label}>Our Expertise</span>
                    <h2 className={styles.sectionTitle}>Precision <br /> Engineering</h2>
                </div>

                <div className={styles.list}>
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            className={styles.item}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            onMouseEnter={() => setHoveredService(service.id)}
                            onMouseLeave={() => setHoveredService(null)}
                        >
                            <div className={styles.meta}>
                                <span className={styles.number}>{service.id}</span>
                                <div className={styles.categories}>
                                    {service.categories.map(c => <span key={c}>{c}</span>)}
                                </div>
                            </div>

                            <div className={styles.main}>
                                <h3 className={`${styles.title} ${hoveredService === service.id ? styles.active : ''}`}>
                                    {service.title}
                                </h3>
                            </div>

                            <div className={styles.description}>
                                <p>{service.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
