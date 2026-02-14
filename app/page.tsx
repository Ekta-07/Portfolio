import Link from 'next/link';
import TypedText from '@/components/TypedText';
import ProjectCard from '@/components/ProjectCard';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroBlob from '@/components/HeroBlob';
import FadeIn from '@/components/FadeIn';
import AnimatedGridBackground from '@/components/AnimatedGridBackground';
import MagneticButton from '@/components/MagneticButton';
import SpotlightCard from '@/components/SpotlightCard';
import Card3DTilt from '@/components/Card3DTilt';
import { getPersonalInfo, getProjects, getBlogs, getArt, getAbout, getResearch } from '@/lib/data';

export default function Home() {
  const personal = getPersonalInfo();
  const featuredProjects = getProjects().filter(p => p.featured).slice(0, 3);
  const blogs = getBlogs().slice(0, 2);
  const artPieces = getArt().slice(0, 3);
  const about = getAbout();
  const research = getResearch();

  return (
    <div className="min-h-screen bg-[#0B0C14] text-[#C9D3EE]">
      <Navigation />

      {/* Hero Section with Animated Blob Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <HeroBlob />

        <FadeIn direction="none" className="relative z-10 max-w-5xl mx-auto px-6 py-20">
          <div className="text-center space-y-6">
            {/* Tagline above name */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6366F1]/25 bg-[#6366F1]/5 text-xs text-[#818CF8] tracking-wider uppercase font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1] animate-pulse"></span>
              Available for opportunities
            </div>

            {/* Name — large and dramatic */}
            <h1 className="text-7xl md:text-9xl font-extrabold tracking-tighter text-white leading-[0.9]">
              {personal.name}
              <span className="bg-gradient-to-r from-[#6366F1] to-[#818CF8] bg-clip-text text-transparent">.</span>
            </h1>

            {/* Dynamic role */}
            <div className="text-2xl md:text-3xl font-light text-[#C9D3EE]/80 tracking-tight">
              <TypedText
                texts={['Building Data Infrastructure', 'Engineering Scalable Pipelines', 'Crafting Real-time Analytics', 'Turning Data into Impact']}
              />
            </div>

            {/* Bio — shorter, punchier */}
            <p className="text-sm md:text-base text-[#939DB8] max-w-lg mx-auto leading-relaxed">
              Data engineer, former researcher, and creative soul — building
              systems that transform raw data into actionable intelligence.
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-3">
              <MagneticButton href={personal.social.github} external strength={0.2}>
                <span className="p-2.5 bg-[#171926]/80 hover:bg-[#1E2133] rounded-full transition-all border border-[#727DA1]/15 backdrop-blur-sm hover:border-[#6366F1]/30 inline-block" aria-label="GitHub">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                </span>
              </MagneticButton>
              <MagneticButton href={personal.social.linkedin} external strength={0.2}>
                <span className="p-2.5 bg-[#171926]/80 hover:bg-[#1E2133] rounded-full transition-all border border-[#727DA1]/15 backdrop-blur-sm hover:border-[#6366F1]/30 inline-block" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </span>
              </MagneticButton>
              <MagneticButton href={personal.social.twitter} external strength={0.2}>
                <span className="p-2.5 bg-[#171926]/80 hover:bg-[#1E2133] rounded-full transition-all border border-[#727DA1]/15 backdrop-blur-sm hover:border-[#6366F1]/30 inline-block" aria-label="Twitter">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </span>
              </MagneticButton>
              <MagneticButton href={personal.social.medium} external strength={0.2}>
                <span className="p-2.5 bg-[#171926]/80 hover:bg-[#1E2133] rounded-full transition-all border border-[#727DA1]/15 backdrop-blur-sm hover:border-[#6366F1]/30 inline-block" aria-label="Medium">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" /></svg>
                </span>
              </MagneticButton>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 justify-center pt-2">
              <MagneticButton href="/contact">
                <span className="px-7 py-3 bg-gradient-to-r from-[#6366F1] to-[#4F46E5] text-white hover:from-[#818CF8] hover:to-[#6366F1] rounded-lg font-medium transition-all text-sm shadow-lg shadow-[#6366F1]/20 inline-block">
                  Contact me here →
                </span>
              </MagneticButton>
              <MagneticButton href="/work">
                <span className="px-7 py-3 bg-[#171926]/60 hover:bg-[#1E2133] rounded-lg font-medium transition-all text-sm border border-[#727DA1]/15 text-[#C9D3EE] backdrop-blur-sm inline-block">
                  View My Work
                </span>
              </MagneticButton>
            </div>

            {/* Scroll Indicator */}
            <div className="pt-16 animate-bounce">
              <svg className="w-5 h-5 mx-auto text-[#939DB8]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </FadeIn>
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
