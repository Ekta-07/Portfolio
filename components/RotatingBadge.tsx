'use client';

import { useState, useEffect, useRef } from 'react';

interface RotatingBadgeProps {
  words: string[];
  duration?: number;
}

/**
 * RotatingBadge - Elegant fade animation
 *
 * Features:
 * - Subtle highlighted fade effect
 * - Soft, muted color palette
 * - Clean, minimal design
 * - GPU-accelerated transitions
 * - Professional, not overdone
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
      className="inline-flex items-center"
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      {/* Main Badge Container - Simplified */}
      <div className="relative group">
        {/* Soft glow layer - much more subtle */}
        <div className="absolute -inset-1.5 bg-gradient-to-r from-[#6366F1]/20 to-[#6366F1]/10 rounded-xl opacity-20 group-hover:opacity-30 blur-md transition duration-500 -z-10" />

        {/* Badge content - minimal styling */}
        <div className="relative px-4 py-2 bg-gradient-to-r from-[#6366F1]/15 to-[#4F46E5]/10 border border-[#818CF8]/20 rounded-xl">
          {/* Text Container with Fade Animation */}
          <div
            className={`transition-all duration-500 ease-in-out whitespace-nowrap ${
              isFading
                ? 'opacity-30 blur-sm'
                : 'opacity-100 blur-0'
            }`}
          >
            <span className="text-sm font-medium text-white/80 tracking-wide uppercase">
              {words[currentIndex]}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
