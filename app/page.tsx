import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { PageBackground } from '@/components/layout/PageBackground';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturedWorkSection } from '@/components/sections/FeaturedWorkSection';
import { ResearchSection } from '@/components/sections/ResearchSection';
import { ArtGallerySection } from '@/components/sections/ArtGallerySection';
import { BlogSection } from '@/components/sections/BlogSection';
import { getPersonalInfo, getProjects, getBlogs, getArt, getResearch } from '@/lib/data';

export default function Home() {
  const personal = getPersonalInfo();
  const featuredProjects = getProjects().filter(p => p.featured).slice(0, 3);
  const blogs = getBlogs().slice(0, 5);
  const artPieces = getArt().slice(0, 3);
  const research = getResearch();

  return (
    <PageBackground>
      <Navigation />
      <HeroSection personal={personal} />

      {/* Hero to Content Gradient Transition */}
      <div className="absolute top-[100vh] left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#0B0C14] -mt-32 z-20 pointer-events-none"></div>

      {/* Main Content Area */}
      <div className="relative z-20 bg-[#0B0C14]">
        <FeaturedWorkSection featuredProjects={featuredProjects} />
        <ResearchSection research={research} />
        <ArtGallerySection artPieces={artPieces} />
        <BlogSection blogs={blogs} />
      </div>

      <Footer />
    </PageBackground>
  );
}
