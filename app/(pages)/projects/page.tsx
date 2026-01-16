import MainHeroSection from "@/components/MainHeroSection";
import ShowAllProjects from "@/components/Projects/ShowAllProjects";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Projects",
};
export default function ProjectsPage() {
  return (
    <>
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
    </>
  );
}
