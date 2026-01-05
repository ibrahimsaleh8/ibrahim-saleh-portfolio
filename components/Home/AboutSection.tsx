"use client";
import ImageWidowCard from "@/components/ImageWidowCard";
import RollingLink from "@/components/RollingLink";
import WindowCard from "@/components/WindowCard";
import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <>
      <div className="flex items-start gap-4 flex-wrap justify-center">
        <ImageWidowCard />
        <WindowCard
          delay={0.4}
          classes="md:w-176 w-full"
          title="About Me"
          description={[
            <span key={0}>
              My name is <span className="text-main-color">Ibrahim Saleh.</span>
            </span>,
            <span key={1}>
              I’m a <span className="text-rose-400">Frontend Developer</span>{" "}
              with strong experience in React, Next.js, and TypeScript.
            </span>,
            <span key={2}>
              I build modern,{" "}
              <span className="text-amber-300">
                high-performance web applications
              </span>{" "}
              with clean UI and smooth user experiences.
            </span>,
            <span key={3}>
              I’m currently a <span className="text-sky-400">student</span> at
              the Faculty of Computers and Information, Menoufia University.
            </span>,
            <span key={4}>
              I have{" "}
              <span className="text-fuchsia-500">hands-on experience</span> with
              Tailwind CSS, Shadcn UI, Framer Motion, and state management tools
              like React Query, Zustand, and Redux Toolkit.
            </span>,
          ]}
        />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}>
        <RollingLink
          linkTo="/about"
          title="About me"
          delay={0.5}
          classes="px-6 py-3"
        />
      </motion.div>
    </>
  );
}
