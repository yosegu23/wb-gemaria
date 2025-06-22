import AboutUsSection from "./components/about-us-section";
import { BentoSection } from "./components/bento-sections";
import HeroSection from "./components/hero-section";
import { TestimonialsSectionDemo } from "./components/testimonials-section";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="z-50 w-full flex flex-col">
        <HeroSection />
        <BentoSection />
        <AboutUsSection />
        <TestimonialsSectionDemo />
      </div>
    </div>
  );
}
