import Link from 'next/link';
import Image from 'next/image';
import type { Blog } from '@/lib/data';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';

interface BlogSectionProps {
  blogs: Blog[];
}

export function BlogSection({ blogs }: BlogSectionProps) {

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#6366F1] animate-pulse"></div>
          <h2 className="text-lg font-bold text-white">Latest Thoughts</h2>
        </div>
        <p className="text-sm text-[#939DB8] mb-10 ml-5">Insights, tutorials, and reflections</p>

        <BentoGrid className="md:grid-cols-2">
          {blogs.map((blog, i) => (
            <BentoGridItem
              key={blog.id}
              title={blog.title}
              description={blog.excerpt}
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden border border-white/10 relative">
                  {blog.image ? (
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover transform hover:scale-105 transition-transform duration-500"
                      loading="eager"
                      quality={85}
                      priority={true}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
  );
}
