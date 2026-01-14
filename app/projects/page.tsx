import CollaborationSection from "@/components/Home/CollaborationSection";
import FooterSection from "@/components/Home/FooterSection";
import MainHeroSection from "@/components/MainHeroSection";
import ShowAllProjects from "@/components/Projects/ShowAllProjects";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-16 w-full h-full">
      <div className="flex flex-col gap-16 w-full h-full px-2">
        <MainHeroSection
          page="Projects"
          smallParagraph="With years of experience in web development, I’ve built a strong skill
        set by working on projects across diverse industries and technologies.
        Here are some of my best creations."
          Toptitle="A collection of"
          Secondtitle="my best "
          ShineyTxt="projects"
        />
        <ShowAllProjects />
        <CollaborationSection />
      </div>
      <FooterSection />
    </div>
  );
}
