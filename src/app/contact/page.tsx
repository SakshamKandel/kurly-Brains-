"use client";
import React, { useState } from 'react';
import ParallaxText from '@/components/ui/ParallaxText';
import { motion } from 'framer-motion';

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };
    return (
        <main className="bg-[#050505] min-h-screen text-white pt-32 pb-24 overflow-hidden flex flex-col justify-between">

            {/* Header Tape */}
            <div className="mb-12 relative z-10 opacity-50">
                <ParallaxText baseVelocity={1} className="text-[6vw] font-oswald font-light text-transparent text-stroke-white uppercase tracking-widest">
                    START COLLABORATION — OPEN COMMUNICATION —
                </ParallaxText>
            </div>

            <div className="container mx-auto px-6 max-w-[1200px] flex-grow flex flex-col justify-center">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                    {/* Left: Heading */}
                    <div className="flex flex-col justify-center">
                        <h1 className="text-[15vw] md:text-[10vw] leading-[0.8] font-oswald font-bold uppercase mb-6 md:mb-8">
                            LET'S <br />
                            <span className="text-transparent text-stroke-white">TALK.</span>
                        </h1>
                        <p className="font-mono text-sm text-gray-500 uppercase tracking-widest max-w-md">
                            &gt; Start a project <br />
                            &gt; Request Audit <br />
                            &gt; General Inquiry
                        </p>
                    </div>

                    {/* Right: Terminal Form */}
                    <div className="flex flex-col gap-0 border border-white/20">
                        {status === 'success' ? (
                            <div className="p-12 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6"
                                >
                                    <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </motion.div>
                                <h3 className="text-2xl font-oswald font-bold uppercase mb-2">Message Sent</h3>
                                <p className="font-mono text-sm text-gray-500">We will initiate contact shortly.</p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="mt-8 text-sm font-mono text-white/50 hover:text-white uppercase underline"
                                >
                                    Send another transmission
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                {/* Name */}
                                <div className="group border-b border-white/20 p-6 hover:bg-white/5 transition-colors focus-within:bg-white/10">
                                    <label className="block font-mono text-xs text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-white">
                                        // FULL NAME
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="ENTER NAME"
                                        className="w-full bg-transparent border-none outline-none font-oswald text-xl md:text-2xl uppercase placeholder-white/20 text-white"
                                    />
                                </div>

                                {/* Email */}
                                <div className="group border-b border-white/20 p-6 hover:bg-white/5 transition-colors focus-within:bg-white/10">
                                    <label className="block font-mono text-xs text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-white">
                                        // EMAIL ADDRESS
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="ENTER EMAIL"
                                        className="w-full bg-transparent border-none outline-none font-oswald text-xl md:text-2xl uppercase placeholder-white/20 text-white"
                                    />
                                </div>

                                {/* Message */}
                                <div className="group p-6 hover:bg-white/5 transition-colors focus-within:bg-white/10">
                                    <label className="block font-mono text-xs text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-white">
                                        // PROJECT DETAILS
                                    </label>
                                    <textarea
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="ENTER MESSAGE..."
                                        rows={4}
                                        className="w-full bg-transparent border-none outline-none font-oswald text-xl md:text-2xl uppercase placeholder-white/20 text-white resize-none"
                                    />
                                </div>

                                {/* Error Message */}
                                {status === 'error' && (
                                    <div className="px-6 py-2 bg-red-500/10 border-l-2 border-red-500">
                                        <p className="font-mono text-xs text-red-400">TRANSMISSION FAILED. PLEASE RETRY.</p>
                                    </div>
                                )}

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full bg-white text-black font-oswald font-bold text-xl uppercase py-6 hover:bg-blue-600 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === 'loading' ? 'TRANSMITTING...' : 'SEND MESSAGE'}
                                </button>
                            </form>
                        )}
                    </div>

                </div>
            </div>

        </main>
    );
}
