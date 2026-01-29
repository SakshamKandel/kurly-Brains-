"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.main}>
                        <Link href="/" className={styles.logoLink}>
                            <Image
                                src="/logos/White Long Text.png"
                                alt="Kurly Brains"
                                width={160}
                                height={36}
                                className={styles.logoImage}
                            />
                        </Link>
                        <div className={styles.socials}>
                            <a href="#">Instagram</a>
                            <a href="#">LinkedIn</a>
                            <a href="#">Behance</a>
                        </div>
                    </div>

                    <div className={styles.bottom}>
                        <span className={styles.copyright}>© {currentYear}</span>
                        <div className={styles.legal}>
                            <Link href="/privacy">Privacy</Link>
                            <Link href="/terms">Terms</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
