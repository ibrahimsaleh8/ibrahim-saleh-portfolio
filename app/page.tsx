"use client";

import AboutSection from "@/components/Home/AboutSection";
import CollaborationSection from "@/components/Home/CollaborationSection";
import FooterSection from "@/components/Home/FooterSection";
import ProjectSection from "@/components/Home/ProjectSection";
import MainHeroSection from "@/components/MainHeroSection";
export default function Home() {
  return (
    <div className="flex flex-col gap-16 w-full h-full items-center">
      <div className="flex flex-col gap-16 w-full h-full items-center px-2">
        <MainHeroSection
          page="Home"
          smallParagraph="I bring value to web development projects by merging technical expertise
        with creativity and aesthetics."
          Toptitle="Hi, I’m Ibrahim, a"
          ShineyTxt="Creative Developer"
        />
        <AboutSection withLink={true} />
        <ProjectSection />
        <CollaborationSection />
      </div>
      <FooterSection />
    </div>
  );
}
