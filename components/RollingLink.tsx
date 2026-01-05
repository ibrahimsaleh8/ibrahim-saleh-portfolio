"use client";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function RollingLink({
  title,
  delay,
  classes,
  linkTo,
}: {
  title: string;
  linkTo: string;
  classes?: string;
  delay: number;
}) {
  return (
    <Link
      href={linkTo}
      className={`w-fit group border border-border-color rounded-sm flex items-center gap-2 scrooling-link relative duration-500 overflow-hidden hover:text-main-color hover:border-main-color ${
        classes || ""
      }`}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay }}
        className={`font-medium capitalize relative flex flex-col text-center items-center justify-center gap-5 duration-300 overflow-hidden`}>
        <span className="group-hover:-translate-y-full duration-300">
          {title}
        </span>
        <span className="absolute w-full -translate-x-1/2 bottom-[-150%] left-1/2 group-hover:bottom-0 duration-300">
          {title}
        </span>
      </motion.span>
      <ChevronRight className="w-4.5 h-4.5" />
    </Link>
  );
}
