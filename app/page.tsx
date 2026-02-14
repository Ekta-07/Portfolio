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
                  <MagneticButton href="/work" strength={0.2}>
                    <span className="px-6 py-3 bg-white text-black text-sm font-medium rounded-lg hover:bg-neutral-200 transition-colors">
                      View My Work
                    </span>
                  </MagneticButton>
                  <MagneticButton href="/contact" strength={0.2}>
                    <span className="px-6 py-3 bg-transparent border border-white/20 text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-colors">
                      Contact Me
                    </span>
                  </MagneticButton>
                </div>
              </FadeIn>

              {/* Socials Minimal */}
              <FadeIn direction="up" delay={0.6}>
                <div className="flex gap-6 pt-4">
                  {[
                    { name: 'GitHub', href: personal.social.github },
                    { name: 'LinkedIn', href: personal.social.linkedin },
                    { name: 'Twitter', href: personal.social.twitter },
                    { name: 'Medium', href: personal.social.medium },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:text-white transition-colors text-sm font-medium"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Visual/Abstract Element (Placeholder for future 3D element, keeping it clean for now) */}
            <div className="hidden lg:block relative h-[600px]">
              {/* We can put a 3D element here later, or a stylized image. 
                    For now, the Spotlight + Shooting Stars provides enough atmosphere 
                    without a specific 'hero image' cluttering the split. 
                    Let's just leave the space open for the spotlight to shine through.
                */}
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

      {/* Featured Projects */}
      <AnimatedGridBackground className="pt-24 pb-8 bg-[#0B0C14]">
        <div className="max-w-6xl mx-auto px-6">
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
      </AnimatedGridBackground>

      {/* Research & Publications */}
      <section className="pt-8 pb-24 bg-[#0B0C14]">
        <div className="max-w-6xl mx-auto px-6">

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
              <SpotlightCard className="bg-[#171926] border border-[#727DA1]/15 rounded-xl p-6 mb-8">
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
                      className="block bg-[#171926] border border-[#727DA1]/15 rounded-xl p-6 hover:border-[#6366F1]/30 transition-all group"
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

      {/* Writings & Art */}
      <AnimatedGridBackground className="py-24 bg-[#0E0F1A]">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn direction="up">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#818CF8]"></div>
              <h2 className="text-lg font-bold text-white">Latest Writings & Art</h2>
            </div>
            <p className="text-sm text-[#939DB8] mb-10 ml-5">Thoughts and creative expressions</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Blog Posts */}
            <div>
              <h3 className="text-sm font-semibold text-[#6366F1] uppercase tracking-wider mb-5">Blog</h3>
              <div className="space-y-3">
                {blogs.map((blog) => (
                  <Card3DTilt key={blog.id} tiltDegree={6} scale={1.02}>
                    <SpotlightCard>
                      <a href={blog.url} target="_blank" rel="noopener noreferrer"
                        className="block p-5 bg-[#171926] rounded-xl hover:bg-[#1E2133] transition-all border border-[#727DA1]/10 hover:border-[#6366F1]/25 group">
                        <div className="text-xs text-[#939DB8] mb-2">{blog.category} · {blog.date}</div>
                        <h4 className="text-sm font-semibold text-white mb-2 group-hover:text-[#C9D3EE] transition-colors">{blog.title}</h4>
                        <p className="text-[#939DB8] text-xs leading-relaxed line-clamp-2">{blog.excerpt}</p>
                        <div className="text-xs text-[#939DB8]/60 mt-2">{blog.readTime}</div>
                      </a>
                    </SpotlightCard>
                  </Card3DTilt>
                ))}
              </div>
              <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-[#6366F1] hover:text-[#818CF8] font-medium mt-5 transition-colors">
                View All Posts
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>

            {/* Art Preview */}
            <div>
              <h3 className="text-sm font-semibold text-[#6366F1] uppercase tracking-wider mb-5">Art</h3>
              <div className="space-y-3">
                {artPieces.map((art) => (
                  <Card3DTilt key={art.id} tiltDegree={6} scale={1.02}>
                    <SpotlightCard className="group overflow-hidden rounded-xl bg-[#171926] border border-[#727DA1]/10 hover:border-[#6366F1]/25 transition-all">
                      <div className="aspect-[21/9] bg-[#1E2133] flex items-center justify-center">
                        <span className="text-2xl opacity-30">🎨</span>
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-white text-sm mb-0.5">{art.title}</h4>
                        <p className="text-xs text-[#939DB8]">{art.description}</p>
                      </div>
                    </SpotlightCard>
                  </Card3DTilt>
                ))}
              </div>
              <Link href="/art" className="inline-flex items-center gap-2 text-sm text-[#6366F1] hover:text-[#818CF8] font-medium mt-5 transition-colors">
                View All Art
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </AnimatedGridBackground>

      {/* Currently Working On */}
      <section className="py-24 bg-[#0B0C14]">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn direction="up">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#6366F1] animate-pulse"></div>
              <h2 className="text-lg font-bold text-white">Currently Working On</h2>
            </div>
            <p className="text-sm text-[#939DB8] mb-8 ml-5">What I&apos;m building right now</p>
          </FadeIn>

          <div className="space-y-0">
            {about.currentlyWorkingOn.map((work, index) => (
              <div key={index} className="flex items-start gap-4 py-5 border-b border-[#727DA1]/10 last:border-b-0">
                <div className="w-8 h-8 rounded-lg bg-[#6366F1]/10 border border-[#6366F1]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[#6366F1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">{work.title}</h3>
                  <p className="text-xs text-[#939DB8] leading-relaxed">{work.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
