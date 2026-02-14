import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedGridBackground from '@/components/AnimatedGridBackground';
import Card3DTilt from '@/components/Card3DTilt';
import SpotlightCard from '@/components/SpotlightCard';
import FadeIn from '@/components/FadeIn';
import { getBlogs } from '@/lib/data';

export default function BlogPage() {
    const blogs = getBlogs();

    return (
        <div className="min-h-screen bg-[#0B0C14] text-white">
            <Navigation />

            <AnimatedGridBackground className="pt-20 pb-16">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Header - Improved Typography */}
                    <FadeIn direction="up">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6366F1]/25 bg-[#6366F1]/5 text-xs text-[#818CF8] tracking-wider uppercase font-medium mb-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1] animate-pulse"></span>
                                Latest Writings
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">Blog</h1>
                            <p className="text-base text-[#939DB8] max-w-2xl mx-auto leading-relaxed">
                                Thoughts on data engineering, technology, and more
                            </p>
                        </div>
                    </FadeIn>

                    {/* Masonry/Bento Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-auto">
                        {blogs.map((blog, index) => {
                            // Create varying card sizes for masonry effect
                            const isFeatured = blog.featured;
                            const isLarge = index % 5 === 0;
                            const spanClass = isFeatured
                                ? 'md:col-span-2 md:row-span-2'
                                : isLarge
                                ? 'md:col-span-2'
                                : '';

                            return (
                                <FadeIn key={blog.id} direction="up" delay={index * 0.1}>
                                    <Card3DTilt
                                        tiltDegree={5}
                                        scale={1.02}
                                        className={spanClass}
                                    >
                                        <SpotlightCard className="h-full">
                                            <a
                                                href={blog.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block h-full bg-[#171926] border border-[#727DA1]/15 rounded-xl p-6 hover:border-[#6366F1]/40 transition-all group"
                                            >
                                                {/* Badges */}
                                                <div className="flex items-center gap-2 mb-3 flex-wrap">
                                                    <span className="px-2.5 py-1 bg-[#6366F1]/15 text-[#818CF8] text-xs font-medium rounded-full border border-[#6366F1]/20">
                                                        {blog.category}
                                                    </span>
                                                    {blog.featured && (
                                                        <span className="px-2.5 py-1 bg-[#4F46E5]/15 text-[#A5B4FC] text-xs font-medium rounded-full border border-[#4F46E5]/20">
                                                            Featured
                                                        </span>
                                                    )}
                                                </div>

                                                {/* Title */}
                                                <h2 className={`font-bold mb-2 group-hover:text-[#818CF8] transition-colors leading-tight ${
                                                    isFeatured ? 'text-2xl md:text-3xl' : 'text-lg'
                                                }`}>
                                                    {blog.title}
                                                </h2>

                                                {/* Excerpt */}
                                                <p className={`text-[#939DB8] leading-relaxed mb-3 ${
                                                    isFeatured ? 'text-base line-clamp-4' : 'text-sm line-clamp-3'
                                                }`}>
                                                    {blog.excerpt}
                                                </p>

                                                {/* Meta Info */}
                                                <div className="flex items-center gap-3 text-xs text-[#939DB8]/70 mt-auto pt-3 border-t border-[#727DA1]/10">
                                                    <span>{blog.date}</span>
                                                    <span>•</span>
                                                    <span>{blog.readTime}</span>
                                                </div>

                                                {/* Read More Link */}
                                                <div className="flex items-center gap-2 text-[#6366F1] font-medium text-sm mt-3 group-hover:gap-3 transition-all">
                                                    Read Article
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                    </svg>
                                                </div>
                                            </a>
                                        </SpotlightCard>
                                    </Card3DTilt>
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>
            </AnimatedGridBackground>

            <Footer />
        </div>
    );
}
