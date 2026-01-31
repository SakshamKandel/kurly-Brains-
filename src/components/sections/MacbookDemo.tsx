"use client";
import React, { useState, useEffect } from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { Oswald, JetBrains_Mono, Inter } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { FileCode, Play, Users, Zap, Layout, MousePointer2 } from "lucide-react";

const oswald = Oswald({ subsets: ["latin"] });
const mono = JetBrains_Mono({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export function MacbookScrollDemo() {
    return (
        <section
            style={{
                width: '100%',
                overflow: 'hidden',
                backgroundColor: '#050505',
                paddingTop: '12rem',
                paddingBottom: '12rem',
            }}
            className="relative"
        >
            <MacbookScroll
                title={
                    <span style={{
                        color: '#fff',
                        fontSize: '3rem',
                        fontFamily: 'var(--font-oswald)',
                        textTransform: 'uppercase',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.5, // Increased line-height
                        display: 'block', // Ensure block display
                        padding: '1rem', // Added padding
                        opacity: 0.1
                    }}>
                        DIGITAL REALITY
                    </span>
                }
                showGradient={false}
            >
                <InteractiveScreen />
            </MacbookScroll>
        </section>
    );
}

// --- Interactive Logic ---
const InteractiveScreen = () => {
    // Phases: 'typing' -> 'clicking_run' -> 'compiling' -> 'dashboard_view' -> 'dashboard_interact'
    const [phase, setPhase] = useState('typing');

    useEffect(() => {
        const sequence = async () => {
            while (true) {
                setPhase('typing'); // 3s
                await wait(3000);
                setPhase('clicking_run'); // 1.5s
                await wait(1500);
                setPhase('compiling'); // 1.5s
                await wait(1500);
                setPhase('dashboard_view'); // 1s wait
                await wait(1000);
                setPhase('dashboard_interact'); // 4s interacting
                await wait(4000);
            }
        };
        sequence();
    }, []);

    return (
        <div className="relative w-full h-full bg-[#020202] overflow-hidden">
            <AnimatePresence mode="wait">
                {(phase === 'typing' || phase === 'clicking_run') && (
                    <motion.div
                        key="code"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="w-full h-full absolute inset-0"
                    >
                        <VSCodeView isTyping={phase === 'typing'} />
                    </motion.div>
                )}

                {phase === 'compiling' && (
                    <motion.div
                        key="compiling"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="w-full h-full absolute inset-0 bg-black flex items-center justify-center flex-col"
                    >
                        <span className={`text-white text-[10px] tracking-[0.2em] uppercase ${mono.className} animate-pulse`}>
                            Compiling
                        </span>
                    </motion.div>
                )}

                {(phase === 'dashboard_view' || phase === 'dashboard_interact') && (
                    <motion.div
                        key="reality"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="w-full h-full absolute inset-0"
                    >
                        <RealityView isInteracting={phase === 'dashboard_interact'} />
                    </motion.div>
                )}
            </AnimatePresence>

            <CursorOverlay phase={phase} />
        </div>
    );
};

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const CursorOverlay = ({ phase }: { phase: string }) => {
    // ... Same coordinates ...
    const variants = {
        typing: { x: "40%", y: "45%" },
        clicking_run: { x: "92%", y: "5%" },
        compiling: { x: "50%", y: "50%" },
        dashboard_view: { x: "20%", y: "80%" },
        dashboard_interact: {
            x: ["20%", "75%", "75%"],
            y: ["80%", "30%", "30%"],
            transition: { duration: 2, times: [0, 0.5, 1] }
        }
    };

    return (
        <motion.div
            className="absolute z-[200] pointer-events-none"
            animate={phase}
            variants={variants as any}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
            {/* Using a sleek circle cursor instead of a pointer for more "Design" feel */}
            <div className="w-3 h-3 rounded-full border border-white bg-transparent mix-blend-difference" />
        </motion.div>
    );
};

// --- Views (Updated for Fluid Minimalist Theme) ---

const VSCodeView = ({ isTyping }: { isTyping: boolean }) => (
    <div className={`flex flex-col w-full h-full bg-[#020202] text-[#888] ${mono.className} overflow-hidden`}>
        {/* No Title Bar - Just Code */}
        <div className="flex flex-1 p-4">
            <div className="flex-1 text-[10px] sm:text-[11px] leading-[1.8] text-gray-500">
                <div><span className="text-white">import</span> <span className="text-gray-400">Future</span> <span className="text-white">from</span> <span className="text-gray-600">'@agency/next'</span>;</div>
                <div className="h-4" />
                <div><span className="text-white">const</span> <span className="text-white">vision</span> <span className="text-gray-600">=</span> <span className="text-white">new</span> <span className="text-white">Future</span>({`{`}</div>
                <div className="pl-4"><span className="text-gray-400">simplicity</span>: <span className="text-white">true</span>,</div>
                <div className="pl-4"><span className="text-gray-400">borders</span>: <span className="text-white">false</span>,</div>
                <div className="pl-4"><span className="text-gray-400">experience</span>: <span className="text-white">'seamless'</span></div>
                <div>{`});`}</div>
                <div className="h-4" />
                <div>
                    <span className="text-white">vision</span>.<span className="text-white">manifest</span>();
                    {isTyping && (
                        <span className="inline-block w-2 h-4 bg-white ml-1 align-middle animate-pulse" />
                    )}
                </div>
            </div>
        </div>

        {/* Minimal Status Bar */}
        <div className="h-6 flex items-center justify-end px-4 gap-4 text-[8px] uppercase tracking-widest text-[#444]">
            <span>TS</span>
            <span>4K</span>
            <span className="text-white">Ready</span>
        </div>
    </div>
);

const RealityView = ({ isInteracting }: { isInteracting: boolean }) => (
    <div className={`flex flex-col w-full h-full bg-white text-black font-sans overflow-hidden ${inter.className}`}>
        {/* White Theme for High Contrast Reality */}
        <div className="flex-1 p-6 flex flex-col justify-between">

            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-2xl font-oswald font-bold uppercase tracking-tighter leading-none mb-1">Analytics</h3>
                    <p className="text-[9px] text-gray-400 uppercase tracking-widest">Realtime Data</p>
                </div>
                <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
            </div>

            {/* Minimal Chart - Just the line */}
            <div className="relative h-32 w-full flex items-end gap-1">
                {[40, 65, 50, 85, 60, 95, 55, 80].map((h, i) => (
                    <motion.div
                        key={i}
                        className={`flex-1 ${i === 5 && isInteracting ? 'bg-black' : 'bg-gray-200'}`}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: i * 0.05 }}
                    />
                ))}

                {/* Minimal Floating Value */}
                <AnimatePresence>
                    {isInteracting && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute top-0 right-0 text-4xl font-oswald font-bold"
                        >
                            95%
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-4">
                <div>
                    <div className="text-[8px] text-gray-400 uppercase tracking-widest mb-1">Users</div>
                    <div className="text-xl font-bold">2.4M</div>
                </div>
                <div>
                    <div className="text-[8px] text-gray-400 uppercase tracking-widest mb-1">Growth</div>
                    <div className="text-xl font-bold">+12%</div>
                </div>
            </div>
        </div>
    </div>
);
