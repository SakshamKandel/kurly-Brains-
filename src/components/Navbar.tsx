"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Navbar.module.css";

const navLinks = [
    { href: "/work", label: "Work" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navContent}`}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/logos/White Logo Without Text.png"
                        alt="Kurly Brains"
                        width={44}
                        height={44}
                        className={styles.logoImage}
                    />
                </Link>

                {/* Desktop Navigation */}
                <ul className={styles.navLinks}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`${styles.navLink} ${pathname === link.href ? styles.active : ""}`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Toggle */}
                <button
                    className={styles.menuToggle}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    Menu
                </button>

                {/* Fullscreen Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            className={styles.mobileMenu}
                            initial={{ y: "-100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-100%" }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className={styles.mobileContent}>
                                <button
                                    className={styles.closeButton}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Close
                                </button>

                                <div className={styles.mobileLinks}>
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className={styles.mobileLink}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
