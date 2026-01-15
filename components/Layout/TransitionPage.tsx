"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import AnimationLogo from "./AnimationLogo";

export default function TransitionPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div className="overflow-hidden overflow-x-hidden">
        <motion.div
          key={pathname}
          initial={{ height: "0%" }}
          animate={{
            height: "calc(100vh - 6.1rem)",
            y: "100%",
            display: "none",
            backgroundColor: "#0b0b0be3",
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.6,
            y: { delay: 3, duration: 0.5 },
            backgroundColor: { delay: 1, duration: 1 },
            display: { delay: 3.5 },
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "bottom" }}
          className="absolute overflow-hidden backdrop-blur-sm left-0 md:w-[calc(100vw-3.5rem)] w-[calc(100vw-1.1rem)] h-[calc(100vh-6rem)] top-0 bg-black z-50 text-white flex flex-col items-center justify-center">
          <AnimationLogo />
          <p className="md:text-6xl text-5xl capitalize font-medium mb-36">
            {pathname.split("/")[1] ? pathname.split("/")[1] : "home"}
          </p>
        </motion.div>
        <motion.div
          key={pathname + 2}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}>
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
