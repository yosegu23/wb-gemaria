import { Footer7 } from "@/components/ui/footer-ui";
import AboutUsSection from "./components/about-us-section";
import { BentoSection } from "./components/bento-sections";
import { Feature197Demo } from "./components/faq-section";
import { TestimonialsSectionDemo } from "./components/testimonials-section";
import HeroSection from "./components/hero-section";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="z-30 flex flex-col">
        <HeroSection />
        <BentoSection />
        <AboutUsSection />
        <TestimonialsSectionDemo />
        <Feature197Demo />
        <Footer7 />
      </div>
    </div>
  );
}
