"use client";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function CloseMessage() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (open) {
        setOpen(false);
      }
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [open]);

  return (
    <>
      <button
        aria-label="Close"
        onClick={() => setOpen(!open)}
        className="cursor-pointer">
        <X className="w-4 h-4 opacity-60 hidden md:flex" />
      </button>
      <AnimatePresence>
        <motion.div
          initial={false}
          animate={{ opacity: open ? 1 : 0 }}
          className="flex z-100000 overflow-hidden flex-col gap-3 fixed top-20 right-10 w-100 bg-[#0f0f0fa1] backdrop-blur-3xl border border-border-color rounded-sm">
          {/* Text */}
          <div className="w-full text-left p-4 py-6 flex flex-col gap-5 relative">
            <button
              aria-label="Close"
              onClick={() => setOpen(!open)}
              className="cursor-pointer absolute right-3.5 top-3">
              <X className="w-4 h-4 opacity-60 hidden md:flex" />
            </button>
            <p>Close tab?</p>
            <p>But… I prepared something cool for you 🥺</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
