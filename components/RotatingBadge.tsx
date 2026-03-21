'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface RotatingBadgeProps {
  words: string[];
  duration?: number;
}

export default function RotatingBadge({
  words,
  duration = 3500,
}: RotatingBadgeProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'visible' | 'deleting'>('typing');
  const rafRef = useRef<number>(0);
  const lastTickRef = useRef(0);

  const TYPE_INTERVAL = 80;
  const currentWord = words[currentIndex];

  const tick = useCallback((timestamp: number) => {
    if (!lastTickRef.current) lastTickRef.current = timestamp;

    const elapsed = timestamp - lastTickRef.current;

    if (phase === 'typing' && elapsed >= TYPE_INTERVAL) {
      lastTickRef.current = timestamp;
      setCharCount((prev) => {
        const next = prev + 1;
        if (next >= currentWord.length) {
          setPhase('visible');
          return currentWord.length;
        }
        return next;
      });
    }

    if (phase === 'typing') {
      rafRef.current = requestAnimationFrame(tick);
    }
  }, [phase, currentWord]);

  // Drive typing with rAF
  useEffect(() => {
    if (phase === 'typing') {
      lastTickRef.current = 0;
      rafRef.current = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(rafRef.current);
    }
  }, [phase, tick]);

  // Hold phase
  useEffect(() => {
    if (phase !== 'visible') return;
    const t = setTimeout(() => setPhase('deleting'), duration);
    return () => clearTimeout(t);
  }, [phase, duration]);

  // Delete: clear instantly, advance word
  useEffect(() => {
    if (phase !== 'deleting') return;
    setCharCount(0);
    setCurrentIndex((prev) => (prev + 1) % words.length);
    setPhase('typing');
  }, [phase, words.length]);

  return (
    <div
      className="inline-flex items-center"
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="relative group">
        {/* Soft glow */}
        <div className="absolute -inset-1.5 bg-gradient-to-r from-[#6366F1]/20 to-[#6366F1]/10 rounded-xl opacity-20 group-hover:opacity-30 blur-md transition duration-500 -z-10" />

        {/* Badge */}
        <div className="relative px-4 py-2 bg-gradient-to-r from-[#6366F1]/15 to-[#4F46E5]/10 border border-[#818CF8]/20 rounded-xl overflow-hidden">
          <div className="h-6 flex items-center">
            {/* Invisible full word to reserve width — prevents layout shift */}
            <span
              className="text-sm font-semibold tracking-wide uppercase whitespace-nowrap invisible"
              style={{ textShadow: '0 0 8px rgba(99, 102, 241, 0.3)' }}
              aria-hidden
            >
              {currentWord}
            </span>
            {/* Visible typed text overlaid at same position */}
            <span
              className="absolute left-4 text-sm font-semibold tracking-wide uppercase whitespace-nowrap text-[#C4B5FD]"
            >
              {currentWord.slice(0, charCount)}
            </span>
            {/* Blinking cursor positioned right after typed text */}
            <span
              className="absolute left-4 text-sm font-semibold tracking-wide uppercase whitespace-nowrap pointer-events-none"
              aria-hidden
              style={{ color: 'transparent' }}
            >
              {currentWord.slice(0, charCount)}
              <span className="inline-block w-[2px] h-4 bg-white align-middle ml-px animate-blink" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
