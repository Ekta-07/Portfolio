import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { PageBackground } from '@/components/layout/PageBackground';
import { HeroSection } from '@/components/sections/HeroSection';
import { CurrentFocusSection } from '@/components/sections/CurrentFocusSection';
import { MyJourneySection } from '@/components/sections/MyJourneySection';
import { ArtGallerySection } from '@/components/sections/ArtGallerySection';
import { BlogSection } from '@/components/sections/BlogSection';
import { getPersonalInfo, getBlogs, getArt, getSkills, getAbout } from '@/lib/data';

export default function Home() {
  const personal = getPersonalInfo();
  const blogs = getBlogs().slice(0, 5);
  const artPieces = getArt().slice(0, 3);
  const skills = getSkills();
  const about = getAbout();

  return (
    <PageBackground>
      <Navigation />
      <HeroSection personal={personal} />

      {/* Hero to Content Gradient Transition */}
      <div className="absolute top-[100vh] left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#0B0C14] -mt-32 z-20 pointer-events-none"></div>

      {/* Main Content Area */}
      <div className="relative z-20 bg-[#0B0C14]">
        <CurrentFocusSection />
        <MyJourneySection skills={skills} experience={about.experience} education={about.education} />
        <ArtGallerySection artPieces={artPieces} />
        <BlogSection blogs={blogs} />
      </div>

      <Footer />
    </PageBackground>
  );
}
