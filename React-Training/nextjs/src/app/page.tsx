import HeroSection from "./components/ui/HeroSection";
import FeaturedCourses from "./components/ui/FeaturedCourses";

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <FeaturedCourses />
    </main>
  );
}