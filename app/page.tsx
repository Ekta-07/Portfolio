import Link from 'next/link';
import TypedText from '@/components/TypedText';
import ProjectCard from '@/components/ProjectCard';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import AnimatedGridBackground from '@/components/AnimatedGridBackground';
import MagneticButton from '@/components/MagneticButton';
import SpotlightCard from '@/components/SpotlightCard';
import Card3DTilt from '@/components/Card3DTilt';
import FlowingGradient from '@/components/FlowingGradient';
import ShootingStarsBackground from '@/components/ShootingStarsBackground';
import ScrollIndicator from '@/components/ScrollIndicator';
import CosmicBackground from '@/components/CosmicBackground';
import { CodeWindow } from '@/components/CodeWindow';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';

import Spotlight from '@/components/Spotlight';
import TextGenerateEffect from '@/components/TextGenerateEffect';


import { getPersonalInfo, getProjects, getBlogs, getArt, getAbout, getResearch } from '@/lib/data';

export default function Home() {
  const personal = getPersonalInfo();
  const featuredProjects = getProjects().filter(p => p.featured).slice(0, 3);
  const blogs = getBlogs().slice(0, 2);
  const artPieces = getArt().slice(0, 3);
  const about = getAbout();
  const research = getResearch();

  return (
    <div className="min-h-screen bg-[#0B0C14] text-[#C9D3EE] relative overflow-hidden">
      {/* Flowing Gradient Background */}
      <FlowingGradient />

      <Navigation />

      {/* Hero Section - Spotlight & Split Layout */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#0B0C14] antialiased">
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
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Visual/Abstract Element (Placeholder for future 3D element, keeping it clean for now) */}
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
      {/* Hero to Content Gradient Transition */}
      <div className="absolute top-[100vh] left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#0B0C14] -mt-32 z-20 pointer-events-none"></div>

      {/* Main Content Area with Cosmic Background */}
      <div className="relative z-20 bg-[#0B0C14]">
        <CosmicBackground>

          {/* Featured Projects */}
          <section className="pt-32 pb-16 px-6">
            <div className="max-w-6xl mx-auto">
              <FadeIn direction="up">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6366F1]"></div>
                  <h2 className="text-lg font-bold text-white">Featured Work</h2>
                </div>
                <p className="text-sm text-[#939DB8] mb-10 ml-5">Selected projects I&apos;ve built</p>
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {featuredProjects.map((project, index) => (
                  <FadeIn key={project.id} direction="up" delay={index * 0.15}>
                    <ProjectCard project={project} />
                  </FadeIn>
                ))}
              </div>

              <div className="mt-10 ml-1">
                <Link href="/work" className="inline-flex items-center gap-2 text-sm text-[#6366F1] hover:text-[#818CF8] font-medium transition-colors">
                  View All Projects
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </section>

          {/* Research & Publications */}
          <section className="py-16 px-6">
            <div className="max-w-6xl mx-auto">

              {/* Thesis */}
              <FadeIn direction="up">
                <h3 className="text-base font-medium text-[#C9D3EE] mb-4 flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#818CF8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                  Thesis
                </h3>
                <Card3DTilt tiltDegree={5} scale={1.01}>
                  <SpotlightCard className="bg-[#171926]/80 backdrop-blur-sm border border-[#727DA1]/15 rounded-xl p-6 mb-8">
                    <p className="text-[#C9D3EE] text-sm leading-relaxed">
                      {research.description}
                    </p>
                    {research.thesis.url && (
                      <a
                        href={research.thesis.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#6366F1] hover:text-[#818CF8] text-sm font-medium mt-4 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Read Thesis
                      </a>
                    )}
                  </SpotlightCard>
                </Card3DTilt>
              </FadeIn>

              {/* Publications */}
              <div>
                <h3 className="text-base font-medium text-[#C9D3EE] mb-4 flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#818CF8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Publications
                </h3>
                <div className="space-y-4">
                  {research.publications.map((pub) => (
                    <Card3DTilt key={pub.id} tiltDegree={5} scale={1.01}>
                      <SpotlightCard>
                        <a
                          href={pub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block bg-[#171926]/80 backdrop-blur-sm border border-[#727DA1]/15 rounded-xl p-6 hover:border-[#6366F1]/30 transition-all group"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <span className="px-2 py-0.5 bg-[#6366F1]/15 text-[#818CF8] text-xs font-medium rounded border border-[#6366F1]/20">
                                  {pub.venue}
                                </span>
                                <span className="text-[#939DB8] text-xs">{pub.year}</span>
                                <span className="text-[#939DB8] text-xs">· {pub.type}</span>
                              </div>
                              <h4 className="text-base font-medium text-white mb-2 group-hover:text-[#C9D3EE] transition-colors leading-snug">
                                {pub.title}
                              </h4>
                              <p className="text-[#939DB8] text-sm">{pub.authors}</p>
                            </div>
                            <svg className="w-5 h-5 text-[#939DB8] group-hover:text-[#6366F1] transition-colors flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </div>
                        </a>
                      </SpotlightCard>
                    </Card3DTilt>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Creative Arts */}
          <section className="py-16 px-6">
            <div className="max-w-6xl mx-auto">
              <FadeIn direction="up">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#818CF8]"></div>
                  <h2 className="text-lg font-bold text-white">Creative Arts</h2>
                </div>
                <p className="text-sm text-[#939DB8] mb-10 ml-5">Digital art and creative expressions</p>
              </FadeIn>

              <div className="grid grid-cols-1 gap-8">
                {/* Art Preview (Full Width) */}
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {artPieces.map((art) => (
                      <Card3DTilt key={art.id} tiltDegree={6} scale={1.02}>
                        <SpotlightCard className="group overflow-hidden rounded-xl bg-[#171926]/80 backdrop-blur-sm border border-[#727DA1]/10 hover:border-[#6366F1]/25 transition-all h-full">
                          <div className="aspect-[16/9] bg-[#1E2133] relative">
                            <img
                              src={art.image}
                              alt={art.title}
                              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <div className="p-4">
                            <h4 className="font-semibold text-white text-sm mb-1">{art.title}</h4>
                            <p className="text-xs text-[#939DB8]">{art.description}</p>
                          </div>
                        </SpotlightCard>
                      </Card3DTilt>
                    ))}
                  </div>
                  <div className="mt-6 ml-1">
                    <Link href="/art" className="inline-flex items-center gap-2 text-sm text-[#6366F1] hover:text-[#818CF8] font-medium transition-colors">
                      View All Art
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Latest Thoughts (Blogs) - Bento Grid */}
          <section className="py-16 px-6">
            <div className="max-w-6xl mx-auto">
              <FadeIn direction="up">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6366F1] animate-pulse"></div>
                  <h2 className="text-lg font-bold text-white">Latest Thoughts</h2>
                </div>
                <p className="text-sm text-[#939DB8] mb-10 ml-5">Insights, tutorials, and reflections</p>
              </FadeIn>

              <BentoGrid className="md:grid-cols-2">
                {blogs.slice(0, 5).map((blog, i) => (
                  <BentoGridItem
                    key={blog.id}
                    title={blog.title}
                    description={blog.excerpt}
                    header={
                      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden border border-white/10 relative">
                        {blog.image ? (
                          <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-neutral-900 to-neutral-800" />
                        )}
                      </div>
                    }
                    icon={<svg className="h-4 w-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>}
                    className={i === 2 || i === 3 || i === 6 ? "md:col-span-2" : ""}
                    url={blog.url}
                    category={blog.category}
                    date={blog.date}
                  />
                ))}
              </BentoGrid>

              <div className="mt-10 text-center">
                <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-[#6366F1] hover:text-[#818CF8] font-medium transition-colors">
                  Read All Articles
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </div>
          </section>

        </CosmicBackground>
      </div>

      <Footer />
    </div>
  );
}
