'use client';

import { useState, useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';

interface RotatingBadgeProps {
  words: string[];
  duration?: number;
}

/**
 * RotatingBadge - Premium highlighted fade animation
 *
 * Features:
 * - Prominent text fade in/out with highlight glow
 * - Gradient background with accent colors
 * - Visual pulse effect for attention
 * - GPU-accelerated smooth transitions
 * - Maximum visibility, high engagement
 */
export default function RotatingBadge({
  words,
  duration = 4000,
}: RotatingBadgeProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    // Start fade out 500ms before change
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, duration - 500);

    // Change word
    timerRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
      setIsFading(false);
    }, duration);

    return () => {
      clearTimeout(fadeTimer);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentIndex, duration, words.length]);

  return (
    <div
      ref={containerRef}
      className="inline-flex items-center gap-4"
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      {/* Main Badge Container */}
      <div className="relative group">
        {/* Outer glow layer - more prominent */}
        <div className="absolute -inset-2 bg-gradient-to-r from-[#6366F1] via-[#818CF8] to-[#6366F1] rounded-2xl opacity-40 group-hover:opacity-70 blur-lg transition duration-300 -z-10 animate-pulse" />

        {/* Secondary glow - adds depth */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#4F46E5] to-[#6366F1] rounded-2xl opacity-20 group-hover:opacity-40 blur transition duration-300 -z-10" />

        {/* Main Badge */}
        <div className="relative px-6 py-3 bg-gradient-to-r from-[#6366F1]/95 to-[#4F46E5]/95 backdrop-blur-md border-2 border-[#818CF8]/60 rounded-2xl shadow-2xl shadow-[#6366F1]/40">
          {/* Icon with glow */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <div className="absolute inset-0 bg-white/20 rounded-full blur-md" />
            <Sparkles className="relative w-5 h-5 text-white" />
          </div>

          {/* Text Container with Fade Animation */}
          <div className="flex items-center gap-4 ml-8">
            {/* Main rotating text with prominent fade */}
            <div className="relative w-48 h-7 flex items-center">
              <div
                className={`absolute transition-all duration-500 ease-in-out whitespace-nowrap ${
                  isFading
                    ? 'opacity-0 blur-sm scale-95'
                    : 'opacity-100 blur-0 scale-100'
                }`}
              >
                <span
                  className={`text-lg font-bold text-white uppercase tracking-wider ${
                    isFading ? '' : 'animate-pulse'
                  }`}
                  style={{
                    textShadow: `
                      0 0 10px rgba(255, 255, 255, 0.8),
                      0 0 20px rgba(129, 140, 248, 0.6),
                      0 0 30px rgba(99, 102, 241, 0.4)
                    `,
                  }}
                >
                  {words[currentIndex]}
                </span>
              </div>
            </div>

            {/* Indicator dots - more visible */}
            <div className="flex gap-2.5 ml-2">
              {words.map((_, index) => (
                <div
                  key={`indicator-${index}`}
                  className={`rounded-full transition-all duration-500 ${
                    index === currentIndex
                      ? 'w-2.5 h-2.5 bg-white shadow-lg shadow-white/80 scale-125'
                      : 'w-2 h-2 bg-white/30 hover:bg-white/50 scale-100'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* "LIVE" indicator - prominent */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <div className="relative flex items-center">
              <div className="absolute w-2 h-2 rounded-full bg-white/80 animate-pulse" />
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-white/40 absolute inset-0 blur-sm" />
              </div>
            </div>
            <span className="text-xs font-bold text-white/90 tracking-widest animate-pulse">
              LIVE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
