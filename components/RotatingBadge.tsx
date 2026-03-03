'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

interface RotatingBadgeProps {
  words: string[];
  duration?: number;
}

export default function RotatingBadge({
  words,
  duration = 3500,
}: RotatingBadgeProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<'entering' | 'visible' | 'exiting'>('entering');
  const [maxWidth, setMaxWidth] = useState<number | undefined>(undefined);
  const measureRef = useRef<HTMLDivElement>(null);

  const ENTER_MS = 500;
  const EXIT_MS = 500;

  const advance = useCallback(() => {
    // Start exit
    setPhase('exiting');

    // After exit completes, swap word and enter
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
      setPhase('entering');

      // After enter completes, mark visible
      setTimeout(() => {
        setPhase('visible');
      }, ENTER_MS);
    }, EXIT_MS);
  }, [words.length]);

  // Measure widest word on mount
  useEffect(() => {
    if (measureRef.current) {
      const spans = measureRef.current.querySelectorAll('span');
      let widest = 0;
      spans.forEach((span) => {
        widest = Math.max(widest, span.offsetWidth);
      });
      setMaxWidth(widest);
    }
  }, [words]);

  // On mount, finish the initial enter
  useEffect(() => {
    const t = setTimeout(() => setPhase('visible'), ENTER_MS);
    return () => clearTimeout(t);
  }, []);

  // While visible, wait `duration` then advance
  useEffect(() => {
    if (phase !== 'visible') return;
    const t = setTimeout(advance, duration);
    return () => clearTimeout(t);
  }, [phase, duration, advance]);

  const transform =
    phase === 'entering'
      ? 'translateX(-30px)'
      : phase === 'exiting'
        ? 'translateX(30px)'
        : 'translateX(0)';

  const opacity = phase === 'visible' ? 1 : 0;

  return (
    <div
      className="inline-flex items-center"
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      {/* Hidden measure container — renders all words offscreen to find widest */}
      <div ref={measureRef} aria-hidden className="absolute opacity-0 pointer-events-none">
        {words.map((word) => (
          <span key={word} className="text-sm font-semibold tracking-wide uppercase whitespace-nowrap">
            {word}
          </span>
        ))}
      </div>

      <div className="relative group">
        {/* Soft glow */}
        <div className="absolute -inset-1.5 bg-gradient-to-r from-[#6366F1]/20 to-[#6366F1]/10 rounded-xl opacity-20 group-hover:opacity-30 blur-md transition duration-500 -z-10" />

        {/* Badge — fixed width based on widest word */}
        <div className="relative px-4 py-2 bg-gradient-to-r from-[#6366F1]/15 to-[#4F46E5]/10 border border-[#818CF8]/20 rounded-xl overflow-hidden">
          <div
            className="h-6 flex items-center justify-center"
            style={maxWidth ? { width: maxWidth } : undefined}
          >
            <span
              className="text-sm font-semibold tracking-wide uppercase text-white whitespace-nowrap"
              style={{
                transform,
                opacity,
                transition: `transform ${phase === 'visible' ? ENTER_MS : EXIT_MS}ms ease-out, opacity ${phase === 'visible' ? ENTER_MS : EXIT_MS}ms ease-out`,
                textShadow: '0 0 8px rgba(99, 102, 241, 0.3)',
                willChange: 'transform, opacity',
              }}
            >
              {words[currentIndex]}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
