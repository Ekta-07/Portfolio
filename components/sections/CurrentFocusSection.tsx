'use client';

import { Database, Palette } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

export function CurrentFocusSection() {
  const focusItems = [
    'Working as a Data Engineer',
    'Creating thoughtful digital products',
  ];

  return (
    <section className="py-16 px-6 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#6366F1]/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <FadeIn direction="up" delay={0.1}>
          <div className="flex items-center gap-2">
            <p className="text-xs font-medium tracking-widest text-[#6366F1] uppercase">Current Focus</p>
            {/* Pulsing dot indicator */}
            <div className="relative w-2 h-2">
              <div className="w-2 h-2 rounded-full bg-[#6366F1]" />
              <div className="absolute inset-0 rounded-full bg-[#6366F1] animate-pulse" />
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
            What I'm working on right now
          </h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.3}>
          <p className="text-[#939DB8] text-sm leading-relaxed mb-6">
            Passionately invested in leveraging data to solve complex problems while building beautiful, functional digital experiences.
          </p>
        </FadeIn>

        {/* Focus Items - Cards with Left Border Accent */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {focusItems.map((item, index) => {
            const isDataEngineer = index === 0;
            const bgColor = isDataEngineer ? 'bg-blue-500/20' : 'bg-amber-500/20';
            const iconColor = isDataEngineer ? 'text-blue-400' : 'text-amber-400';
            const borderColor = isDataEngineer ? 'border-l-blue-500' : 'border-l-amber-500';
            const hoverBg = isDataEngineer ? 'hover:bg-blue-500/10' : 'hover:bg-amber-500/10';

            return (
              <FadeIn key={index} direction="left" delay={0.4 + index * 0.1}>
                <div className={`flex items-center gap-4 p-4 rounded-lg border border-[#727DA1]/15 border-l-4 ${borderColor} transition-all ${hoverBg} hover:border-[#6366F1]/30`}>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${bgColor} flex items-center justify-center`}>
                    {isDataEngineer ? (
                      <Database className={`w-5 h-5 ${iconColor}`} />
                    ) : (
                      <Palette className={`w-5 h-5 ${iconColor}`} />
                    )}
                  </div>
                  <p className="text-[#C9D3EE] text-base flex-1">{item}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
