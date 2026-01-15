import ExperienceCard from "@/components/Experience/ExperienceCard";
import CollaborationSection from "@/components/Home/CollaborationSection";
import FooterSection from "@/components/Home/FooterSection";
import MainHeroSection from "@/components/MainHeroSection";

export default function ExperiencePage() {
  return (
    <div className="flex flex-col gap-16 w-full h-full">
      <div className="flex flex-col gap-16 w-full h-full md:px-4 px-2">
        <MainHeroSection
          page="Experience"
          smallParagraph="I enjoy building experiments and personal projects. These explorations allow me to test new ideas, learn continuously, and contribute back to the open-source community."
          Toptitle="More than just "
          Secondtitle="Client "
          ShineyTxt="Work"
        />

        <div className="flex flex-col gap-3 items-center py-32">
          <ExperienceCard />
        </div>

        <CollaborationSection />
      </div>
      <FooterSection />
    </div>
  );
}
