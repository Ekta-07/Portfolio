'use client';

import { motion } from 'motion/react';
import React, { ReactNode } from 'react';

interface CosmicBackgroundProps {
    children?: ReactNode;
    className?: string;
}

import { BackgroundBeams } from '@/components/ui/background-beams';

export default function CosmicBackground({ children, className = '' }: CosmicBackgroundProps) {
    return (
        <div className={`relative w-full overflow-hidden bg-gradient-to-b from-[#0B0C14] via-[#0f101f] to-[#161a31] ${className}`}>
            <BackgroundBeams className="opacity-40" />

            {/* Background Gradients */}
            <div className="absolute inset-0 pointer-events-none">

                {/* Deep Galaxy Blue/Purple Blob - Top Left - INTENSIFIED */}
                <motion.div
                    initial={{ opacity: 0.5, scale: 0.8 }}
                    animate={{
                        opacity: [0.5, 0.7, 0.5],
                        scale: [0.8, 1.2, 0.8],
                        x: [0, 50, 0],
                        y: [0, 30, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-[20%] -left-[10%] w-[80vw] h-[80vw] rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-800/40 via-[#1E1B4B]/30 to-transparent blur-[120px]"
                />

                {/* Mystic Teal/Cyan Blob - Bottom Right - INTENSIFIED */}
                <motion.div
                    initial={{ opacity: 0.4, scale: 0.9 }}
                    animate={{
                        opacity: [0.4, 0.6, 0.4],
                        scale: [0.9, 1.3, 0.9],
                        x: [0, -40, 0],
                        y: [0, -40, 0]
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute -bottom-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-800/30 via-cyan-800/20 to-transparent blur-[130px]"
                />

                {/* Center Accent - Subtle Violet - INTENSIFIED */}
                <motion.div
                    initial={{ opacity: 0.3 }}
                    animate={{
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-[30%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-800/20 to-transparent blur-[120px]"
                />

                {/* New Accent - Bottom Left - Warmth */}
                <motion.div
                    initial={{ opacity: 0.2 }}
                    animate={{
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                    className="absolute bottom-[10%] -left-[10%] w-[40vw] h-[40vw] rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-fuchsia-900/20 to-transparent blur-[120px]"
                />

                {/* Noise Texture Overlay for Premium Feel */}
                <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

            </div>

            <div className="relative z-10 w-full">
                {children}
            </div>
        </div>
    );
}
