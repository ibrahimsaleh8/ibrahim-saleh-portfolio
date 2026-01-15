"use client";

import AboutSection from "@/components/Home/AboutSection";
import ProjectSection from "@/components/Home/ProjectSection";
import MainHeroSection from "@/components/MainHeroSection";
export default function Home() {
  return (
    <>
      <MainHeroSection
        page="Home"
        smallParagraph="I bring value to web development projects by merging technical expertise
        with creativity and aesthetics."
        Toptitle="Hi, I’m Ibrahim, a"
        ShineyTxt="Creative Developer"
      />
      <AboutSection withLink={true} />
      <ProjectSection />
    </>
  );
}
