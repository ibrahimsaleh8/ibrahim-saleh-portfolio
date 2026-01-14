import AboutInfoSection from "@/components/About/AboutInfoSection";
import HeroAbout from "@/components/About/HeroAbout";
import TechnologySection from "@/components/About/TechnologySection";
import CollaborationSection from "@/components/Home/CollaborationSection";
import FooterSection from "@/components/Home/FooterSection";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16 w-full h-full">
      <div className="flex flex-col gap-16 w-full items-center px-2">
        <HeroAbout />
        <AboutInfoSection />
        <TechnologySection />
        <CollaborationSection />
      </div>
      <FooterSection />
    </div>
  );
}
