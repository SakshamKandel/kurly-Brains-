"use client";

import { motion } from "framer-motion";
import styles from "./page.module.css";

export default function TermsPage() {
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
                    <h1 className={styles.title}>Terms of Service</h1>
                    <p className={styles.updated}>Last updated: January 2026</p>
                </motion.div>

                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <section className={styles.section}>
                        <h2>1. Agreement to Terms</h2>
                        <p>
                            By accessing or using Kurly Brains' services, you agree to be bound by these
                            Terms of Service. If you disagree with any part of these terms, you may not
                            access our services.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>2. Services</h2>
                        <p>Kurly Brains provides digital creative services including but not limited to:</p>
                        <ul>
                            <li>Web Design & Development</li>
                            <li>AI Solutions & Model Training</li>
                            <li>Brand Identity Creation</li>
                            <li>UI/UX Design</li>
                            <li>Amazon A+ Content & Enhanced Brand Content</li>
                            <li>Graphic Design Services</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2>3. Project Engagement</h2>
                        <h3>Proposals & Quotes</h3>
                        <p>
                            All project proposals and quotes are valid for 30 days from the date of issue
                            unless otherwise specified. Project scope, timelines, and deliverables will be
                            outlined in a separate project agreement.
                        </p>

                        <h3>Payment Terms</h3>
                        <p>
                            Unless agreed otherwise in writing, payment terms are as follows:
                        </p>
                        <ul>
                            <li>50% deposit required before project commencement</li>
                            <li>Remaining 50% due upon project completion</li>
                            <li>Invoices are payable within 14 days</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2>4. Intellectual Property</h2>
                        <h3>Client Materials</h3>
                        <p>
                            You retain all rights to materials you provide to us. You grant us a license
                            to use these materials solely for the purpose of completing your project.
                        </p>

                        <h3>Deliverables</h3>
                        <p>
                            Upon full payment, you will own all rights to the final deliverables, except
                            for any third-party materials or pre-existing Kurly Brains tools and templates.
                        </p>

                        <h3>Portfolio Rights</h3>
                        <p>
                            We reserve the right to display completed work in our portfolio and marketing
                            materials unless otherwise agreed in writing.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>5. Client Responsibilities</h2>
                        <p>You agree to:</p>
                        <ul>
                            <li>Provide accurate and complete project information</li>
                            <li>Respond to requests for feedback within reasonable timeframes</li>
                            <li>Provide all necessary materials, assets, and access credentials</li>
                            <li>Ensure you have rights to all materials provided to us</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2>6. Revisions & Changes</h2>
                        <p>
                            The number of revision rounds will be specified in your project agreement.
                            Additional revisions beyond the agreed scope may incur additional charges.
                            Significant changes to project scope may require a new proposal.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>7. Confidentiality</h2>
                        <p>
                            We will treat all client information as confidential and will not disclose
                            any proprietary information to third parties without your consent, except
                            as required by law.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>8. Limitation of Liability</h2>
                        <p>
                            To the maximum extent permitted by law, Kurly Brains shall not be liable for
                            any indirect, incidental, special, consequential, or punitive damages arising
                            from your use of our services.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>9. Termination</h2>
                        <p>
                            Either party may terminate a project with written notice. In the event of
                            termination, you will be responsible for payment of all work completed up
                            to the termination date.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>10. Contact</h2>
                        <p>
                            For questions regarding these Terms of Service, please contact us:
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
