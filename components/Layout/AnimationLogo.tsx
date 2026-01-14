"use client";
import { motion } from "framer-motion";

export default function AnimationLogo() {
  return (
    <div className="w-full p-10 text-8xl flex items-center justify-center gap-3 overflow-hidden relative group">
      <motion.p className="">{"{"}</motion.p>
      <motion.p
        initial={{ rotate: 0 }}
        whileInView={{
          rotate: "144deg",
          color: "var(--main-color)",
          marginTop: "-10px",
        }}
        transition={{ duration: 0.3, ease: "easeIn", delay: 0.4 }}
        className="-ml-7 mt-0 duration-500">
        {"/"}
      </motion.p>
      <motion.p className="-ml-4.75">{"}"}</motion.p>
    </div>
  );
}
