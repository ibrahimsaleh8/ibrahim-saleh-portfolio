"use client";

import AboutSection from "@/components/Home/AboutSection";
import CollaborationSection from "@/components/Home/CollaborationSection";
import HeroSection from "@/components/Home/HeroSection";
import ProjectSection from "@/components/Home/ProjectSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 w-full h-full items-center pb-10">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <CollaborationSection />
    </div>
  );
}
