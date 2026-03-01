'use client';

import { useState, useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';

interface RotatingBadgeProps {
  words: string[];
  duration?: number;
}

/**
 * RotatingBadge - Premium highlighted sliding animation
 *
 * Design inspired by dark.design premium patterns:
 * - Gradient background with indigo accent colors
 * - Soft glow effect for visual hierarchy
 * - Premium typography with icon
 * - GPU-accelerated smooth transitions
 * - Minimal, clean aesthetic with maximum impact
 */
export default function RotatingBadge({
  words,
  duration = 3500,
}: RotatingBadgeProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextIndex = (currentIndex + 1) % words.length;

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, duration);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentIndex, duration]);

  return (
    <div
      ref={containerRef}
      className="inline-flex items-center gap-3"
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      {/* Main Badge Container with Gradient Background */}
      <div className="relative group">
        {/* Glow background layer (premium effect) */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#6366F1] via-[#818CF8] to-[#6366F1] rounded-2xl opacity-30 group-hover:opacity-50 blur transition duration-500 -z-10" />

        {/* Badge content with gradient background */}
        <div className="relative px-5 py-3 bg-gradient-to-r from-[#6366F1]/90 to-[#4F46E5]/90 backdrop-blur-md border border-[#818CF8]/40 rounded-2xl shadow-2xl shadow-[#6366F1]/20">
          {/* Icon */}
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            <Sparkles className="w-4 h-4 text-white/90" />
          </div>

          {/* Words Container with Sliding Animation */}
          <div className="relative overflow-hidden w-fit h-6 ml-6">
            <div
              className="flex flex-col transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateY(-${currentIndex * 100}%)`,
                willChange: 'transform',
              }}
            >
              {words.map((word) => (
                <div
                  key={word}
                  className="text-sm font-semibold text-white tracking-wide uppercase whitespace-nowrap h-6 flex items-center"
                >
                  {word}
                </div>
              ))}
            </div>
          </div>

          {/* Indicator dots with premium styling */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-2">
            {words.map((_, index) => (
              <div
                key={`indicator-${index}`}
                className={`rounded-full transition-all duration-500 ${
                  index === currentIndex
                    ? 'w-2 h-2 bg-white shadow-lg shadow-white/50'
                    : 'w-1.5 h-1.5 bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Animated sparkle accent on the right (subtle) */}
      <div className="hidden sm:flex items-center gap-1.5 ml-2">
        <div className="w-1 h-1 rounded-full bg-[#6366F1] animate-pulse" />
        <span className="text-xs text-white/50 font-medium tracking-widest">LIVE</span>
      </div>
    </div>
  );
}
