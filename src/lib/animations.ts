/**
 * Premium Animation Utilities
 * Framer Motion variants and utilities for world-class animations
 */

// Custom easing curves for premium feel
export const easings = {
    // Exponential ease out - starts fast, ends smooth
    easeOutExpo: [0.16, 1, 0.3, 1],
    // Smooth cubic bezier
    easeOutCubic: [0.33, 1, 0.68, 1],
    // Elastic feel
    easeOutBack: [0.34, 1.56, 0.64, 1],
    // Gentle spring-like
    easeOutQuint: [0.22, 1, 0.36, 1],
    // Premium smooth
    smooth: [0.25, 0.1, 0.25, 1],
} as const;

// Stagger configuration
export const stagger = {
    fast: 0.05,
    normal: 0.08,
    slow: 0.12,
} as const;

// Fade up animation - most common reveal
export const fadeUpVariants = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: (delay: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            delay,
            ease: easings.easeOutExpo,
        },
    }),
};

// Fade in animation - subtle reveal
export const fadeInVariants = {
    hidden: {
        opacity: 0,
    },
    visible: (delay: number = 0) => ({
        opacity: 1,
        transition: {
            duration: 0.6,
            delay,
            ease: easings.smooth,
        },
    }),
};

// Slide up with mask effect
export const slideUpVariants = {
    hidden: {
        y: "100%",
    },
    visible: (delay: number = 0) => ({
        y: "0%",
        transition: {
            duration: 0.7,
            delay,
            ease: easings.easeOutExpo,
        },
    }),
};

// Scale up animation
export const scaleUpVariants = {
    hidden: {
        opacity: 0,
        scale: 0.9,
    },
    visible: (delay: number = 0) => ({
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            delay,
            ease: easings.easeOutCubic,
        },
    }),
};

// Staggered container for children
export const staggerContainer = {
    hidden: {},
    visible: (staggerDelay: number = stagger.normal) => ({
        transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1,
        },
    }),
};

// Word-by-word text reveal
export const wordRevealContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.2,
        },
    },
};

export const wordRevealChild = {
    hidden: {
        opacity: 0,
        y: 20,
        rotateX: 45,
    },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            duration: 0.6,
            ease: easings.easeOutExpo,
        },
    },
};

// Line reveal animation
export const lineRevealVariants = {
    hidden: {
        scaleX: 0,
        originX: 0,
    },
    visible: (delay: number = 0) => ({
        scaleX: 1,
        transition: {
            duration: 0.8,
            delay,
            ease: easings.easeOutExpo,
        },
    }),
};

// Counting animation helper
export const countingAnimation = {
    duration: 2,
    ease: easings.easeOutExpo,
};

// Parallax scroll effect values
export const parallaxValues = {
    slow: 0.5,
    medium: 0.3,
    fast: 0.1,
} as const;

// Magnetic button effect helper
export const magneticStrength = {
    weak: 0.2,
    normal: 0.3,
    strong: 0.5,
} as const;

// Viewport settings for scroll-triggered animations
export const viewportSettings = {
    once: true,
    amount: 0.3,
    margin: "-50px",
};

// Scroll progress thresholds
export const scrollThresholds = {
    navbarBlur: 50,
    heroParallax: 0.5,
};
