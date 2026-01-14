"use client";

import { Minus, Square, X } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

import htmlIcon from "@images/icons/html5.svg";
import cssIcon from "@images/icons/css_old.svg";
import javascriptIcon from "@images/icons/javascript.svg";
import reactIcon from "@images/icons/react_light.svg";
import tailwindcssIcon from "@images/icons/tailwindcss.svg";
import shadcnIcon from "@images/icons/shadcn-ui_dark.svg";
import zustandIcon from "@images/icons/zustand-original.svg";
import nextjsIcon from "@images/icons/nextjs_logo_dark.svg";
import nodejsIcon from "@images/icons/nodejs.svg";
import expressjsIcon from "@images/icons/expressjs_dark.svg";
import postgresqlIcon from "@images/icons/postgresql.svg";
import prismaIcon from "@images/icons/prisma_dark.svg";

const technologies = [
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "JavaScript", icon: javascriptIcon },
  { name: "React", icon: reactIcon },
  { name: "Next.js", icon: nextjsIcon },
  { name: "Tailwind", icon: tailwindcssIcon },
  { name: "Shadcn UI", icon: shadcnIcon },
  { name: "Zustand", icon: zustandIcon },
  { name: "Node.js", icon: nodejsIcon },
  { name: "Express.js", icon: expressjsIcon },
  { name: "PostgreSQL", icon: postgresqlIcon },
  { name: "Prisma", icon: prismaIcon },
];

export default function TechnologiesCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-[#0f0f0f7d] backdrop-blur-sm border border-border-color lg:w-240 w-full tech-card">
      {/* Header */}
      <div className="border-b border-border-color px-3 py-1.5 flex items-center justify-between gap-3">
        <p>Technologies</p>

        <div className="flex items-center gap-2">
          <Minus className="w-4 h-4 opacity-60" />
          <Square className="w-3 h-3 opacity-60" />
          <X className="w-4 h-4 opacity-60" />
        </div>
      </div>

      {/* Content */}
      <div className="p-8 grid grid-cols-4 sm:grid-cols-6 gap-10 gap-y-13 py-10">
        {technologies.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: i / 15 }}
            className="flex items-center justify-center">
            <Image
              src={tech.icon}
              alt={`${tech.name} icon`}
              className={`grayscale opacity-80 ${
                tech.name == "Next.js" ? "w-20" : "w-11"
              } hover:grayscale-0 hover:opacity-100 transition duration-500`}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
