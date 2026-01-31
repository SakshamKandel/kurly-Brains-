"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface Message {
    role: 'user' | 'assistant';
    content: string;
    timestamp: string;
}

export default function AIChat() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'assistant',
            content: 'Ready. Establishing secure connection.',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!inputValue.trim()) return;

        const userMsg = inputValue;
        setInputValue('');
        const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        setMessages(prev => [...prev, { role: 'user', content: userMsg, timestamp }]);
        setIsLoading(true);

        try {
            // Filter out the initial greeting (index 0) - it's UI-only, not for API
            // Only include messages after index 0 to ensure proper alternation
            const conversationHistory = messages.slice(1).map(m => ({ role: m.role, content: m.content }));
            const apiMessages = [...conversationHistory, { role: 'user', content: userMsg }];

            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: apiMessages })
            });

            if (!response.ok) throw new Error('Network response was not ok');

            const data = await response.json();
            const aiContent = data.choices?.[0]?.message?.content || "Connection Interrupted.";

            setMessages(prev => [...prev, {
                role: 'assistant',
                content: aiContent,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }]);
        } catch (error) {
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: "Signal Lost.",
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[100] font-sans">
            <AnimatePresence mode="wait">
                {isOpen ? (
                    <motion.div
                        layoutId="chat-container"
                        className="fixed inset-0 md:relative md:inset-auto w-full md:w-[420px] h-full md:h-[600px] bg-zinc-900 flex flex-col overflow-hidden shadow-2xl"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                    >
                        {/* FADING EDGE STROKES */}
                        <div className="absolute inset-0 pointer-events-none z-[5]">
                            {/* Top-Left Corner */}
                            <div className="absolute top-0 left-0 w-24 h-px bg-gradient-to-r from-white/40 to-transparent" />
                            <div className="absolute top-0 left-0 w-px h-24 bg-gradient-to-b from-white/40 to-transparent" />
                            {/* Top-Right Corner */}
                            <div className="absolute top-0 right-0 w-24 h-px bg-gradient-to-l from-white/40 to-transparent" />
                            <div className="absolute top-0 right-0 w-px h-24 bg-gradient-to-b from-white/40 to-transparent" />
                            {/* Bottom-Left Corner */}
                            <div className="absolute bottom-0 left-0 w-24 h-px bg-gradient-to-r from-white/40 to-transparent" />
                            <div className="absolute bottom-0 left-0 w-px h-24 bg-gradient-to-t from-white/40 to-transparent" />
                            {/* Bottom-Right Corner */}
                            <div className="absolute bottom-0 right-0 w-24 h-px bg-gradient-to-l from-white/40 to-transparent" />
                            <div className="absolute bottom-0 right-0 w-px h-24 bg-gradient-to-t from-white/40 to-transparent" />
                        </div>

                        {/* ANIMATED GRADIENT SPOTLIGHT */}
                        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                            <motion.div
                                className="absolute w-[300px] h-[300px] rounded-full bg-gradient-radial from-white/5 via-transparent to-transparent blur-3xl"
                                animate={{
                                    x: ['-50%', '150%'],
                                    y: ['0%', '100%'],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    repeatType: 'mirror',
                                    duration: 15,
                                    ease: 'easeInOut'
                                }}
                            />
                        </div>

                        {/* HEADER: SEAMLESS TILTED TAPES */}
                        <div className="relative z-50 shrink-0">
                            {/* Close Button (Floating) */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 z-[60] w-8 h-8 flex items-center justify-center text-white/50 hover:text-white transition-colors bg-black/50 backdrop-blur-sm rounded-full"
                            >
                                <X size={20} />
                            </button>

                            {/* Taped Header Area */}
                            <div className="relative h-24 w-full overflow-hidden">
                                {/* Tape 1: Background Outline */}
                                <div className="absolute top-4 left-[-10%] w-[120%] rotate-3 z-10 opacity-60">
                                    <motion.div
                                        className="whitespace-nowrap flex gap-4 text-[10px] md:text-[12px] font-oswald font-light text-transparent text-stroke-white uppercase tracking-widest"
                                        animate={{ x: [0, -500] }}
                                        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                                    >
                                        {[...Array(6)].map((_, i) => (
                                            <span key={i}>INTELLIGENCE // DESIGN // FUTURE // SOUL</span>
                                        ))}
                                    </motion.div>
                                </div>
                                {/* Tape 2: Foreground Solid */}
                                <div className="absolute top-6 left-[-10%] w-[120%] -rotate-2 bg-white z-20 py-2">
                                    <motion.div
                                        className="whitespace-nowrap flex gap-6 text-[12px] md:text-[14px] font-oswald font-bold text-black uppercase tracking-widest leading-none"
                                        animate={{ x: [0, -500] }}
                                        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                                    >
                                        {[...Array(6)].map((_, i) => (
                                            <React.Fragment key={i}>
                                                <span>KURLY BRAINS AI</span>
                                                <span className="opacity-30">—</span>
                                                <span>EST. 2026</span>
                                                <span className="opacity-30">—</span>
                                                <span>SECURE</span>
                                                <span className="opacity-30">—</span>
                                            </React.Fragment>
                                        ))}
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                        {/* TRANSCRIPT VIEW */}
                        <div className="flex-1 px-4 md:px-6 py-4 overflow-y-auto space-y-6 md:space-y-8 font-mono text-sm relative custom-scrollbar z-10">
                            {messages.map((msg, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`relative ${msg.role === 'user' ? 'text-white text-right' : 'text-zinc-400 text-left'}`}
                                >
                                    {/* Role Label */}
                                    <div className={`text-[9px] uppercase tracking-widest mb-1 opacity-40 font-oswald ${msg.role === 'user' ? 'text-white' : 'text-zinc-500'}`}>
                                        {msg.role === 'user' ? 'YOU' : 'KURLY SYSTEM'}
                                    </div>

                                    {/* Content */}
                                    <div className={`leading-relaxed tracking-wide ${msg.role === 'assistant' ? 'max-w-[90%]' : 'ml-auto max-w-[80%]'}`}>
                                        {msg.role === 'assistant' ? (
                                            <ReactMarkdown
                                                components={{
                                                    strong: ({ children }) => <span className="text-white font-bold">{children}</span>,
                                                    a: ({ href, children }) => <a href={href} target="_blank" className="text-white underline decoration-zinc-700 underline-offset-4 hover:decoration-white transition-all">{children}</a>
                                                }}
                                            >
                                                {msg.content}
                                            </ReactMarkdown>
                                        ) : (
                                            msg.content
                                        )}
                                    </div>
                                </motion.div>
                            ))}

                            {isLoading && (
                                <div className="text-zinc-600 text-[10px] animate-pulse uppercase tracking-widest font-oswald">
                                    Thinking...
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* QUICK COMMANDS */}
                        {messages.length === 1 && (
                            <div className="px-6 pb-2 z-10 flex flex-wrap gap-2 justify-center">
                                {['Services', 'Consultation', 'Pricing'].map((cmd, i) => (
                                    <button
                                        key={cmd}
                                        onClick={() => setInputValue(cmd)}
                                        className="px-3 py-1 border border-white/10 text-[10px] text-zinc-500 hover:text-white hover:border-white/40 transition-all uppercase tracking-widest font-oswald bg-zinc-900"
                                    >
                                        {cmd}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* MINIMALIST INPUT */}
                        <div className="px-4 md:px-6 pb-6 pt-2 bg-zinc-900 z-20 safe-area-pb">
                            <div className="flex items-end gap-3 border-b border-white/20 pb-2 focus-within:border-white transition-colors duration-300">
                                <textarea
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Type a message..."
                                    rows={1}
                                    className="flex-1 bg-transparent text-white text-base focus:outline-none placeholder:text-zinc-700 font-light resize-none max-h-32 overflow-y-auto custom-scrollbar"
                                    style={{ minHeight: '24px' }}
                                    autoFocus
                                    autoComplete="off"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!inputValue.trim()}
                                    className="text-white hover:opacity-100 opacity-50 disabled:opacity-20 transition-opacity mb-0.5"
                                >
                                    <Send size={20} strokeWidth={1} />
                                </button>
                            </div>
                        </div>

                    </motion.div>
                ) : (
                    /* LAUNCH BUTTON (Morph Source) */
                    <motion.button
                        layoutId="chat-container"
                        className="w-14 h-14 md:w-16 md:h-16 bg-zinc-900 flex items-center justify-center group relative cursor-pointer rounded-xl shadow-lg"
                        onClick={() => setIsOpen(true)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.div
                            className="w-8 h-8 md:w-10 md:h-10 relative opacity-100 transition-opacity"
                            layoutId="chat-logo"
                        >
                            <img
                                src="/logos/White Logo Without Text.png"
                                alt="Open"
                                className="w-full h-full object-contain"
                            />
                        </motion.div>
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}
