"use client";

import { useRef } from "react";
import { Footer7 } from "@/components/ui/footer-ui";
import AboutUsSection from "./components/about-us-section";
import { BentoSection } from "./components/bento-sections";
import { Feature197Demo } from "./components/faq-section";
import { TestimonialsSectionDemo } from "./components/testimonials-section";
import HeroSection from "./components/hero-section";
import Header from "./components/header";
import { Gallery } from "./components/gallery";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const testiRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full h-full flex flex-col">
      <div className="z-30 flex flex-col">
        <Header aboutRef={aboutRef} testiRef={testiRef} />
        <HeroSection />
        <BentoSection />
        <div ref={aboutRef}>
          <AboutUsSection />
        </div>
        <div ref={testiRef}>
          <TestimonialsSectionDemo />
        </div>
        <Gallery />
        <Feature197Demo />
        <Footer7 />
      </div>
    </div>
  );
}
