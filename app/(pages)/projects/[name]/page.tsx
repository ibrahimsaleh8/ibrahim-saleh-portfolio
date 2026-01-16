import ShowProjectDetails from "@/components/Projects/ShowProjectDetails";
import { allProjects } from "@/lib/allProjectsData";
import { Metadata } from "next";
import { notFound } from "next/navigation";
type Props = {
  params: Promise<{ name: string }>;
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = await params;
  console.log(name);
  const project = allProjects.find((p) => p.link === name);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.name,
  };
}

export default async function ProjectDetialsPage({ params }: Props) {
  const { name } = await params;
  const projectData = allProjects.find((p) => p.link == name);
  if (!projectData) {
    notFound();
  }
  return <ShowProjectDetails {...projectData} />;
}
