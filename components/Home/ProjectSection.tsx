import ProjectCard from "@/components/ProjectCard";
import { TextAnimate } from "@/components/ui/text-animate";
import gamingStoreImage from "@images/projects/gameingStore.webp";
import universityManagImage from "@images/projects/University_Management_System.webp";
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
        {/* <ProjectCard
          title="Megaza – Men's Fashion Store"
          viewLink="https://megaza-store.vercel.app/"
          repoLink="https://github.com/ibrahimsaleh8/megaza-store"
          videoLink="https://www.linkedin.com/posts/ibrahim-saleh-dev_nextjs-typescript-react-activity-7307411410517401600-qyzA"
          keywords={[
            "Next.js",
            "TypeScript",
            "React Query",
            "Zustand",
            "Prisma",
            "PostgreSQL",
            "Stripe",
            "Cloudinary",
            "Tailwind CSS",
            "Zod",
          ]}
          description="A full-stack men's fashion e-commerce platform focused on performance and scalability. Features advanced product filtering and search that reduced user search time by 50%, along with seamless pagination. Integrated Stripe for secure payments and built an admin dashboard for managing inventory, orders, and discount codes. Achieved 40% faster load times and 90+ Lighthouse SEO scores using SSR, API caching, and lazy loading."
        /> */}

        {/* ================= University Management System ================= */}
        <ProjectCard
          image={universityManagImage}
          imageAlt="University Management System"
          title="University Management System"
          projectNumber={2}
          year={2025}
          keywords={["Next.js", "PostgreSQL", "Tailwind CSS"]}
          projectLink="university-management-system"
        />

        {/* ================= Optimo ================= */}
        {/* <ProjectCard
          title="Optimo – Image Compression & Conversion"
          viewLink="https://optimizer-frontend.vercel.app/"
          repoLink="https://github.com/ibrahimsaleh8/optimo-backend"
          videoLink="https://www.linkedin.com/posts/ibrahim-saleh-dev_%D8%A7%D9%84%D8%AD%D9%85%D8%AF%D9%84%D9%84%D9%87-%D8%A7%D9%88%D9%84-%D9%85%D8%B4%D8%B1%D9%88%D8%B9-%D9%84%D9%8A%D8%A7-%D8%A8-node-js-%D9%88-express-activity-7403763016099569664-orZm"
          keywords={[
            "Next.js",
            "Node.js",
            "Express.js",
            "Sharp",
            "Tailwind CSS",
            "Shadcn UI",
            "Vercel",
          ]}
          description="A lightweight web application for compressing images and converting them between formats while preserving quality. Users can control compression levels to significantly reduce file size with minimal visual loss. Built with a high-performance Sharp-based backend and an intuitive, fast UI suitable for developers and content creators."
        /> */}
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
