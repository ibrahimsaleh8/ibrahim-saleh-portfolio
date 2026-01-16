import ProjectCard from "@/components/ProjectCard";
import { TextAnimate } from "@/components/ui/text-animate";
import gamingStoreImage from "@images/projects/gameingStore.webp";
import universityManagImage from "@images/projects/University_Management_System.webp";
import megazaStoreImage from "@images/projects/MegazaStore.webp";
import RollingLink from "../RollingLink";
import { motion } from "motion/react";

export default function ProjectSection() {
  return (
    <div className="pt-14 flex flex-col gap-16 w-full items-center">
      <div className="text-4xl">
        <TextAnimate animation="blurInUp" by="character" once as={"span"}>
          Projects
        </TextAnimate>{" "}
        <TextAnimate
          className="text-main-color"
          animation="blurInUp"
          by="character"
          once
          as={"span"}
          delay={0.3}>
          Highlight
        </TextAnimate>
      </div>

      {/* Card */}
      <div className="flex flex-col md:gap-10 gap-16 w-full items-center justify-center">
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
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}>
        <RollingLink
          target="_self"
          linkTo="/projects"
          title="All Projects"
          delay={0.5}
          classes="px-6 py-3"
        />
      </motion.div>
    </div>
  );
}
