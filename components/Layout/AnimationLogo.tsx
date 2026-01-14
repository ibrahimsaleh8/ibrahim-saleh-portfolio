"use client";
import { motion } from "framer-motion";

export default function AnimationLogo() {
  return (
    <div className="w-full p-10 text-8xl flex items-center justify-center gap-3 overflow-hidden relative group">
      <motion.p className="">{"{"}</motion.p>
      <motion.p
        initial={{ rotate: "9deg", marginLeft: "-21px", marginTop: "0" }}
        whileInView={{
          rotate: "140deg",
          color: "var(--main-color)",
          marginTop: "-10px",
        }}
        transition={{ duration: 0.3, ease: "easeIn", delay: 0.4 }}
        className="-ml-6 -mt-0.5 duration-500">
        {"/"}
      </motion.p>
      <motion.p
        initial={{ marginLeft: "-21px" }}
        whileInView={{
          marginLeft: "-15px",
        }}
        transition={{ duration: 0.3, ease: "easeIn", delay: 0.4 }}>
        {"}"}
      </motion.p>
    </div>
  );
}
