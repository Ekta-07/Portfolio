'use client';

import { Database, Palette } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

export function CurrentFocusSection() {
  const focusItems = [
    'Working as a Data Engineer',
    'Creating thoughtful digital products',
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <FadeIn direction="up" delay={0.1}>
          <p className="text-xs font-medium tracking-widest text-[#6366F1] uppercase mb-3">Current Focus</p>
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

        {/* Focus Items - Cards with Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {focusItems.map((item, index) => {
            const isDataEngineer = index === 0;
            const bgColor = isDataEngineer ? 'bg-blue-500/20' : 'bg-amber-500/20';
            const iconColor = isDataEngineer ? 'text-blue-400' : 'text-amber-400';
            const borderColor = isDataEngineer ? 'border-blue-500/20 hover:border-blue-500/40' : 'border-amber-500/20 hover:border-amber-500/40';
            const hoverBg = isDataEngineer ? 'hover:bg-blue-500/10' : 'hover:bg-amber-500/10';

            return (
              <FadeIn key={index} direction="left" delay={0.4 + index * 0.1}>
                <div className={`flex items-center gap-4 p-4 rounded-lg border transition-all ${borderColor} ${hoverBg}`}>
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
