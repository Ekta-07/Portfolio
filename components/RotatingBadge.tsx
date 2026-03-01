'use client';

import { useState, useEffect, useRef } from 'react';

interface RotatingBadgeProps {
  words: string[];
  duration?: number; // Duration each word is displayed (ms)
}

/**
 * RotatingBadge - Premium sliding animation component
 *
 * Key features:
 * - GPU-accelerated transform animations (smooth 60fps)
 * - Minimal DOM nodes (no layout thrashing)
 * - Proper accessibility (aria-live)
 * - Mobile-optimized
 * - No Jank - uses transform/opacity only
 * - Pre-renders next word for seamless transitions
 */
export default function RotatingBadge({
  words,
  duration = 3500, // 3.5s - slightly longer for breathing room
}: RotatingBadgeProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Calculate next index
  const nextIndex = (currentIndex + 1) % words.length;

  useEffect(() => {
    // Clear previous timer
    if (timerRef.current) clearTimeout(timerRef.current);

    // Set timer for next rotation
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
      className="inline-flex items-center border border-white/40 px-4 py-2 rounded-lg"
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="relative overflow-hidden w-fit h-6">
        {/* Words container - uses transform for GPU acceleration */}
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
              className="text-sm font-medium text-white/80 tracking-wide uppercase whitespace-nowrap h-6 flex items-center"
            >
              {word}
            </div>
          ))}
        </div>
      </div>

      {/* Subtle visual indicator (dot) */}
      <div className="ml-3 flex gap-1">
        {words.map((_, index) => (
          <div
            key={`indicator-${index}`}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
              index === currentIndex
                ? 'bg-white/60 scale-100'
                : 'bg-white/20 scale-75'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
