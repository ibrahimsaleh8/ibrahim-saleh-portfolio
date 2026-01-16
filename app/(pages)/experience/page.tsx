import ExperienceCard from "@/components/Experience/ExperienceCard";
import MainHeroSection from "@/components/MainHeroSection";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Experience",
};
export default function ExperiencePage() {
  return (
    <div className="flex flex-col gap-16 w-full h-full">
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
    </div>
  );
}
