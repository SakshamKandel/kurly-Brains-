"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 md:py-8 bg-transparent">
            <div className="flex justify-between items-center w-full">
                {/* Logo - Image */}
                <Link href="/" className="z-50 relative w-10 h-10 md:w-12 md:h-12">
                    <Image
                        src="/logos/White Logo Without Text.png"
                        alt="KurlyBrains Logo"
                        fill
                        className="object-contain"
                    />
                </Link>

                {/* Desktop Nav - Simple Text */}
                <div className="hidden md:flex gap-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="relative group font-inter text-sm font-medium uppercase tracking-widest text-white transition-colors"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white z-50"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu - Flat Black */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ clipPath: "circle(0% at 100% 0%)" }}
                        animate={{ clipPath: "circle(150% at 100% 0%)" }}
                        exit={{ clipPath: "circle(0% at 100% 0%)" }}
                        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 bg-[#050505] z-40 flex flex-col items-center justify-center"
                    >
                        {navLinks.map((link, i) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="font-oswald text-6xl md:text-8xl font-bold text-white hover:text-gray-500 transition-colors uppercase my-2 tracking-tighter"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
