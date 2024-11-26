import FeaturedSection from "./components/FeaturedSection";
import HeroSection from "./components/HeroSection";
import Instructors from "./components/Instructors";
import Testimonials from "./components/Testimonials";
import UpcomingProducts from "./components/UpcomingProducts";
import WhyChooseUS from "./components/WhyChooseUS";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[]0.02">
      <HeroSection />
      <FeaturedSection />
      <WhyChooseUS />
      <UpcomingProducts />
      <Instructors />
      <Testimonials />
    </main>
  );
}
