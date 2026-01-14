"use client";
import ProjectCard from "../ProjectCard";
import gamingStoreImage from "@images/projects/gameingStore.webp";
import universityManagImage from "@images/projects/University_Management_System.webp";
import megazaStoreImage from "@images/projects/MegazaStore.webp";
import optimoImage from "@images/projects/Optimo.webp";

export default function ShowAllProjects() {
  return (
    <div className="flex flex-col md:gap-10 gap-16 w-full items-center justify-center my-26 all-projects">
      {/* ================= Gaming Store ================= */}
      <ProjectCard
        title="Gaming Store"
        keywords={["React", "RTK Query", "Firebase"]}
        image={gamingStoreImage}
        imageAlt="Gaming Store"
        projectNumber={1}
        year={2024}
        projectLink="gaming-store"
      />

      {/* ================= Megaza Store ================= */}
      <ProjectCard
        title="Megaza – Men's Fashion Store"
        imageAlt="Megaza Store"
        projectNumber={2}
        year={2025}
        projectLink="megaza-store"
        image={megazaStoreImage}
        keywords={[
          "Next.js",
          "React Query",
          "Zustand",
          "Prisma",
          "Stripe",
          "Cloudinary",
          "Tailwind",
        ]}
      />

      {/* ================= University Management System ================= */}
      <ProjectCard
        image={universityManagImage}
        imageAlt="University Management System"
        title="University Management System"
        projectNumber={3}
        year={2025}
        keywords={["Next.js", "PostgreSQL", "Tailwind CSS"]}
        projectLink="university-management-system"
      />

      {/* ================= Optimo ================= */}
      <ProjectCard
        title="Optimo – Image Compression & Conversion"
        image={optimoImage}
        imageAlt="Optimo Image"
        projectLink="optimo"
        projectNumber={4}
        year={2025}
        keywords={[
          "Next.js",
          "Node.js",
          "Express.js",
          "Sharp",
          "Tailwind",
          "Shadcn UI",
        ]}
      />
    </div>
  );
}
