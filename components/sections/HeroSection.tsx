'use client';

import Link from 'next/link';
import type { Personal } from '@/lib/data';
import TypedText from '@/components/TypedText';
import FadeIn from '@/components/FadeIn';
import ShootingStarsBackground from '@/components/ShootingStarsBackground';
import Spotlight from '@/components/Spotlight';
import TextGenerateEffect from '@/components/TextGenerateEffect';
import ScrollIndicator from '@/components/ScrollIndicator';
import { CodeWindow } from '@/components/CodeWindow';

interface HeroSectionProps {
  personal: Personal;
}

export function HeroSection({ personal }: HeroSectionProps) {

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center bg-[#0B0C14] antialiased w-full">
      <ShootingStarsBackground />

      {/* Spotlight Effect */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Column: Text Content */}
          <div className="space-y-8 text-left">
            <FadeIn direction="up" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs text-white/70 tracking-wider uppercase font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
                Available for new opportunities
              </div>
            </FadeIn>

            <div className="space-y-4">
              <FadeIn direction="up" delay={0.2}>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[0.9]">
                  {personal.name.split(' ')[0]} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    {personal.name.split(' ')[1]}
                  </span>
                </h1>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <div className="text-xl md:text-2xl text-neutral-300 font-light max-w-lg">
                  <TextGenerateEffect
                    words="Building scalable data infrastructure and crafting intelligent systems."
                    className="leading-snug"
                  />
                </div>
              </FadeIn>
            </div>

            <FadeIn direction="up" delay={0.4}>
              <p className="text-base text-neutral-400 max-w-md leading-relaxed">
                I'm a Data Engineer and creative technologist passionate about transforming raw data into meaningful insights.
                Currently open to collaborating on innovative projects.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.5}>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-gradient-to-r from-[#6366F1] to-[#4F46E5] text-white hover:from-[#818CF8] hover:to-[#6366F1] rounded-full font-medium transition-all text-sm shadow-lg shadow-[#6366F1]/20"
                >
                  Contact me here →
                </Link>
                <Link
                  href="/work"
                  className="px-6 py-3 bg-[#1a1a1a] hover:bg-[#262626] rounded-full font-medium transition-all text-sm border border-[#262626] text-white"
                >
                  View My Work
                </Link>
              </div>
            </FadeIn>

            {/* Socials Minimal */}
            <FadeIn direction="up" delay={0.6}>
              <div className="flex gap-4 pt-4">
                {[
                  {
                    name: 'GitHub',
                    href: personal.social.github,
                    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                  },
                  {
                    name: 'LinkedIn',
                    href: personal.social.linkedin,
                    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  },
                  {
                    name: 'Twitter',
                    href: personal.social.twitter,
                    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  },
                  {
                    name: 'Medium',
                    href: personal.social.medium,
                    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" /></svg>
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#1a1a1a] hover:bg-[#262626] rounded-full transition-colors border border-[#262626] text-white/70 hover:text-white"
                  >
                    {social.icon}
                  </a>
                ))}
                <a
                  href="/resume.pdf"
                  download
                  className="p-3 bg-[#1a1a1a] hover:bg-[#262626] rounded-full transition-colors border border-[#262626] text-white/70 hover:text-white"
                  title="Download Resume"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3v-7" />
                  </svg>
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Visual/Abstract Element */}
          <div className="hidden lg:flex items-center justify-center relative h-[600px] w-full">
            <CodeWindow />
          </div>

        </div>

        {/* Scroll Indicator - Bottom Absolute */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <FadeIn delay={1.0}>
            <ScrollIndicator />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
