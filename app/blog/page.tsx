import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getBlogs } from '@/lib/data';

export default function BlogPage() {
    const blogs = getBlogs();

    return (
        <div className="min-h-screen bg-black text-white">
            <Navigation />

            <main className="pt-24 pb-20">
                <div className="max-w-4xl mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog</h1>
                        <p className="text-xl text-gray-400">
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
                                className="block bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8 hover:border-red-500/50 transition-all hover:shadow-2xl hover:shadow-red-500/20"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="px-3 py-1 bg-red-500/20 text-red-400 text-sm rounded-full border border-red-500/50">
                                        {blog.category}
                                    </span>
                                    <span className="text-gray-500 text-sm">{blog.date}</span>
                                    <span className="text-gray-500 text-sm">{blog.readTime}</span>
                                    {blog.featured && (
                                        <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-sm rounded-full border border-yellow-500/50">
                                            Featured
                                        </span>
                                    )}
                                </div>

                                <h2 className="text-2xl font-bold mb-3 hover:text-red-500 transition-colors">
                                    {blog.title}
                                </h2>

                                <p className="text-gray-400 leading-relaxed mb-4">
                                    {blog.excerpt}
                                </p>

                                <div className="flex items-center gap-2 text-red-500 font-semibold">
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
