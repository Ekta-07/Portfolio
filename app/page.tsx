import Link from 'next/link';
import TypedText from '@/components/TypedText';
import ProjectCard from '@/components/ProjectCard';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { BackgroundLines } from '@/components/ui/background-lines';
import { getPersonalInfo, getProjects, getBlogs, getArt } from '@/lib/data';

export default function Home() {
  const personal = getPersonalInfo();
  const featuredProjects = getProjects().filter(p => p.featured);
  const blogs = getBlogs().slice(0, 2);
  const artPieces = getArt().slice(0, 3);

  return (
    <div className="min-h-screen text-[#e5e5e5]">
      <Navigation />

      {/* Hero Section with Animated Background */}
      <BackgroundLines className="w-full">
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          {/* Top gradient bar - subtle accent at top only */}
          <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-r from-purple-900/15 via-cyan-900/15 to-teal-900/15 blur-2xl"></div>

          {/* Very subtle gradient accent in center */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-gradient-to-br from-purple-900/6 via-cyan-900/6 to-transparent rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
            <div className="text-center space-y-8">
              {/* Name */}
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">Hi, I'm Shalmoly</h1>

              {/* Typed Text */}
              <div className="text-xl md:text-2xl text-[#737373] min-h-[2rem]">
                I'm a{' '}
                <span className="text-white font-medium">
                  <TypedText
                    texts={['Data Engineer', 'Problem Solver', 'Creative Soul', 'Open Source Contributor']}
                  />
                </span>
              </div>

              {/* Bio */}
              <p className="text-base md:text-lg text-[#737373] max-w-2xl mx-auto leading-relaxed">
                {personal.bio}
              </p>

              {/* Social Links */}
              <div className="flex justify-center gap-3">
                <a
                  href={`https://github.com/${personal.social.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-[#1a1a1a] hover:bg-[#262626] rounded-full transition-colors border border-[#262626]"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href={`https://linkedin.com/in/${personal.social.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-[#1a1a1a] hover:bg-[#262626] rounded-full transition-colors border border-[#262626]"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href={`https://twitter.com/${personal.social.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-[#1a1a1a] hover:bg-[#262626] rounded-full transition-colors border border-[#262626]"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href={`https://medium.com/@${personal.social.medium}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-[#1a1a1a] hover:bg-[#262626] rounded-full transition-colors border border-[#262626]"
                  aria-label="Medium"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                  </svg>
                </a>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href="/contact"
                  className="px-6 py-2.5 bg-white text-black hover:bg-[#e5e5e5] rounded-full font-medium transition-all text-sm"
                >
                  Contact me here →
                </Link>
                <Link
                  href="/work"
                  className="px-6 py-2.5 bg-[#1a1a1a] hover:bg-[#262626] rounded-full font-medium transition-all text-sm border border-[#262626]"
                >
                  View My Work
                </Link>
              </div>

              {/* Scroll Indicator */}
              <div className="mt-20 animate-bounce">
                <svg className="w-6 h-6 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </section>
      </BackgroundLines>

      {/* Featured Projects Section */}
      <section className="py-24 border-t border-[#262626]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">Featured Work</h2>
            <p className="text-[#737373]">Selected projects</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-[#e5e5e5] hover:text-white font-medium text-sm"
            >
              View All Projects
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Writings & Art Section */}
      <section className="py-24 border-t border-[#262626]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">Latest Writings & Art</h2>
            <p className="text-[#737373]">Thoughts and creative expressions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Blog Posts */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Blog Posts</h3>
              <div className="space-y-4">
                {blogs.map((blog) => (
                  <a
                    key={blog.id}
                    href={blog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-5 bg-[#0f0f0f] rounded-lg hover:bg-[#1a1a1a] transition-colors border border-[#262626] hover:border-[#404040]"
                  >
                    <div className="text-xs text-[#737373] mb-2">{blog.category} · {blog.date}</div>
                    <h4 className="text-base font-semibold text-white mb-2 hover:text-[#e5e5e5] transition-colors">{blog.title}</h4>
                    <p className="text-[#737373] text-sm mb-2 line-clamp-2">{blog.excerpt}</p>
                    <div className="text-xs text-[#737373]">{blog.readTime}</div>
                  </a>
                ))}
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[#e5e5e5] hover:text-white font-medium mt-6 text-sm"
              >
                View All Posts
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Art Preview */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Art</h3>
              <div className="grid grid-cols-1 gap-4">
                {artPieces.map((art) => (
                  <div
                    key={art.id}
                    className="group relative overflow-hidden rounded-lg bg-[#0f0f0f] border border-[#262626] hover:border-[#404040] transition-all"
                  >
                    <div className="aspect-video bg-[#1a1a1a] flex items-center justify-center">
                      <span className="text-3xl opacity-50">🎨</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-white mb-1 text-sm">{art.title}</h4>
                      <p className="text-xs text-[#737373]">{art.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/art"
                className="inline-flex items-center gap-2 text-[#e5e5e5] hover:text-white font-medium mt-6 text-sm"
              >
                View All Art
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Currently Working On */}
      <section className="py-20 bg-black/20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Currently Working On</h2>
          </div>

          <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 animate-pulse"></div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Real-time Analytics Platform</h3>
                  <p className="text-gray-400">Building a scalable real-time data processing system using Apache Kafka and Spark</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 animate-pulse"></div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Data Pipeline Orchestration</h3>
                  <p className="text-gray-400">Designing and implementing ETL pipelines with Airflow and dbt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
