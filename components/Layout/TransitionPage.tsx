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
            scaleY: "0",
            display: "none",
            opacity: "0",
            backgroundColor: "#0b0b0be3",
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.6,
            scaleY: { delay: 3, duration: 0.5 },
            backgroundColor: { delay: 1, duration: 1 },
            opacity: { delay: 3.2 },
            display: { delay: 3.2 },
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "bottom" }}
          className="fixed overflow-hidden backdrop-blur-sm md:left-11.75 left-2.25 md:w-[calc(100vw-3.5rem)] w-[calc(100vw-1.1rem)] h-[calc(100vh-6rem)] top-12.25 bg-black z-50 text-white flex flex-col items-center justify-center">
          <AnimationLogo />
          <motion.p
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 2.8 }}
            className="md:text-6xl text-5xl capitalize font-medium mb-36">
            {pathname.split("/")[1] ? pathname.split("/")[1] : "home"}
          </motion.p>
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
