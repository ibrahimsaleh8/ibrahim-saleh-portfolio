import AboutInfoSection from "@/components/About/AboutInfoSection";
import TechnologySection from "@/components/About/TechnologySection";
import CollaborationSection from "@/components/Home/CollaborationSection";
import FooterSection from "@/components/Home/FooterSection";
import MainHeroSection from "@/components/MainHeroSection";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16 w-full h-full">
      <div className="flex flex-col gap-16 w-full items-center px-2">
        <MainHeroSection
          page="About"
          smallParagraph="I’m Ibrahim Saleh, a Frontend Developer who builds modern, scalable, and
        user-focused web experiences using React, Next.js, and clean UI
        principles."
          Toptitle="Get to"
          Secondtitle="Know "
          ShineyTxt="me Better"
        />
        <AboutInfoSection />
        <TechnologySection />
        <CollaborationSection />
      </div>
      <FooterSection />
    </div>
  );
}
