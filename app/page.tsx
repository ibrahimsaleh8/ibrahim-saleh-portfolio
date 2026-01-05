"use client";

import AboutSection from "@/components/Home/AboutSection";
import HeroSection from "@/components/Home/HeroSection";
import ProjectSection from "@/components/Home/ProjectSection";
export default function Home() {
  return (
    <div className="flex flex-col gap-16 w-full h-full items-center pb-10">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
    </div>
  );
}
