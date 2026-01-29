"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./ClientLogos.module.css";

// Updated list - Removed invalid filter props from object to avoid TS issues if not strictly typed, 
// handled in CSS.
const clients = [
    { name: "Bangla Tigers", logo: "/clients/Bangla TIgers Logos.png", invert: false, scale: 1.4 }, /* slightly reduced to prevent cutoff */
    { name: "Biratnagar Kings", logo: "/clients/Biratnagar Kings.png", invert: false, scale: 1.2 },
    { name: "Brampton Wolves", logo: "/clients/Bramptons Wolves Logo.png", invert: false, scale: 1.4 },
    { name: "Everest Thunders", logo: "/clients/Everest Thunders Logo.png", invert: false, scale: 1.1 },
    { name: "FIBA", logo: "/clients/Fiba Logo Png.png", invert: true, scale: 0.5 }, /* Kept small as requested */
    { name: "Gray Nicolls", logo: "/clients/Gray_Nicolls_Secondary_Logo_Positive-2.png", invert: true, scale: 0.45 },
    { name: "Karnali Yaks", logo: "/clients/Karnali Yaks Logo.png", invert: false, scale: 1.0 }, /* Reduced to fit better */
    { name: "Khadka Foods", logo: "/clients/Khadka Foods Logo.png", invert: false, scale: 0.9 },
    { name: "Nawatara School", logo: "/clients/Nawatara Eng School Logo.png", invert: false, scale: 0.8 },
    { name: "Nepal Basketball", logo: "/clients/Nepal Basketball Association.png", invert: false, scale: 0.9 },
    { name: "Peshawar Zalmi", logo: "/clients/Peshawar_Zalmi_logo.png", invert: false, scale: 1.1 },
];

const featuredPerson = {
    name: "Fabrizio Romano",
    photo: "/clients/Fabrizio Romano Photo.jpg",
    role: "Football Transfer Expert"
};

export default function ClientLogos() {
    return (
        <section className={styles.section}>
            <div className="container">

                {/* Featured - Person (Premium Layout) */}
                <div className={styles.featuredContainer}>
                    <div className={styles.featuredWrapper}>
                        <div className={styles.imageContainer}>
                            <Image
                                src={featuredPerson.photo}
                                alt={featuredPerson.name}
                                fill
                                className={styles.personImage}
                            />
                        </div>

                        <div className={styles.featuredContent}>
                            <span className={styles.featuredLabel}>Featured Partner</span>
                            <h3 className={styles.personName}>{featuredPerson.name}</h3>
                            <span className={styles.personRole}>{featuredPerson.role}</span>
                            <p className={styles.quote}>
                                "The digital experience is seamless. Precision at its finest."
                            </p>
                        </div>
                    </div>
                </div>

                {/* Scrolling Marquee */}
                <div className={styles.marqueeWrapper}>
                    <div className={styles.track}>
                        {/* Double set for seamless loop */}
                        {[...clients, ...clients].map((client, i) => (
                            <div key={i} className={styles.logoItem}>
                                <div className={styles.scaler} style={{ transform: `scale(${client.scale})` }}>
                                    <Image
                                        src={client.logo}
                                        alt={client.name}
                                        width={150}
                                        height={80}
                                        className={`${styles.logo} ${client.invert ? styles.invert : ''}`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
