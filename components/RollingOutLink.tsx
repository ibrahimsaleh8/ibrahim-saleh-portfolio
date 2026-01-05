"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function RollingOutLink({
  title,
  delay,
  classes,
  link,
  icon,
}: {
  title: string;
  link: string;
  classes?: string;
  delay: number;
  icon: ReactNode;
}) {
  return (
    <motion.a
      href={link}
      target="_blank"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay }}
      className={`font-medium capitalize flex hover:text-main-color items-center group gap-3 border px-4 text-xs py-1.5 rounded-sm border-border-color  ${
        classes || ""
      }`}>
      <span>{icon}</span>

      <div className="relative flex flex-col text-center items-center justify-center gap-5  duration-300 overflow-hidden">
        <span className="group-hover:translate-y-[-135%] duration-300 flex items-center gap-1 text-white group-hover:text-black dark:group-hover:text-white">
          {title}
        </span>
        <span className="absolute -translate-x-1/2 bottom-[-150%] flex items-center gap-1 left-1/2 group-hover:bottom-0 duration-300 justify-center w-full">
          {title}
        </span>
      </div>
    </motion.a>
  );
}
