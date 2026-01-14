import FooterSection from "@/components/Home/FooterSection";
import ShowProjectDetails from "@/components/Projects/ShowProjectDetails";
import { allProjects } from "@/lib/allProjectsData";
import { notFound } from "next/navigation";

export default async function page({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const projectData = allProjects.find((p) => p.link == name);
  if (!projectData) {
    notFound();
  }
  return (
    <div className="flex flex-col gap-4">
      <ShowProjectDetails {...projectData} />
      <FooterSection />
    </div>
  );
}
