import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getBlogs } from '@/lib/data';

export default function BlogPage() {
    const blogs = getBlogs();

    return (
        <div className="min-h-screen bg-[#0B0C14] text-white">
            <Navigation />

            <main className="pt-24 pb-20">
                <div className="max-w-4xl mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog</h1>
                        <p className="text-xl text-[#939DB8]">
                            Thoughts on data engineering, technology, and more
                        </p>
                    </div>

                    {/* Blog Posts */}
                    <div className="space-y-6">
                        {blogs.map((blog) => (
                            <a
                                key={blog.id}
                                href={blog.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block bg-gradient-to-br from-[#171926] to-[#0B0C14] border border-[#727DA1]/15 rounded-xl p-8 hover:border-[#6366F1]/40 transition-all hover:shadow-2xl hover:shadow-[#6366F1]/10"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="px-3 py-1 bg-[#6366F1]/20 text-[#818CF8] text-sm rounded-full border border-[#6366F1]/30">
                                        {blog.category}
                                    </span>
                                    <span className="text-[#939DB8] text-sm">{blog.date}</span>
                                    <span className="text-[#939DB8] text-sm">{blog.readTime}</span>
                                    {blog.featured && (
                                        <span className="px-3 py-1 bg-[#4F46E5]/20 text-[#A5B4FC] text-sm rounded-full border border-[#4F46E5]/30">
                                            Featured
                                        </span>
                                    )}
                                </div>

                                <h2 className="text-2xl font-bold mb-3 hover:text-[#6366F1] transition-colors">
                                    {blog.title}
                                </h2>

                                <p className="text-[#939DB8] leading-relaxed mb-4">
                                    {blog.excerpt}
                                </p>

                                <div className="flex items-center gap-2 text-[#6366F1] font-semibold">
                                    Read More
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
