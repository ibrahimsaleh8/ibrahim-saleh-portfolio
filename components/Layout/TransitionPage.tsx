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
            duration: 0.5,
            y: { delay: 2, duration: 0.5 },
            backgroundColor: { delay: 0.6, duration: 0.5 },
            display: { delay: 3.5 },
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "bottom" }}
          className="absolute overflow-hidden backdrop-blur-sm left-0 w-full h-[calc(100vh-6rem)] top-0 bg-black z-50 text-white flex flex-col items-center justify-center">
          <AnimationLogo />
          <div className="flex flex-col gap-10 items-center justify-center text-center mb-36">
            <p className="md:text-6xl text-5xl capitalize font-medium">
              {pathname.split("/")[1] ? pathname.split("/")[1] : "home"}
            </p>
            {pathname.split("/").length == 3 && (
              <p className="md:text-4xl text-2xl font-medium capitalize text-main-color">
                {pathname.split("/")[2].split("-").join(" ")}
              </p>
            )}
          </div>
        </motion.div>
        <motion.div
          key={pathname + 2}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}>
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
