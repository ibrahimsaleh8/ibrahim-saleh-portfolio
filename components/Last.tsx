"use client";

import { Minus, Square, X } from "lucide-react";
import { motion } from "motion/react";
export default function Last() {
  return (
    <div className="w-full min-h-screen p-2 overflow-hidden relative">
      {/* Top */}
      <motion.div
        initial={{
          width: "var(--top-width)",
          y: "1000%",
          marginLeft: "auto",
          marginRight: "auto",
          borderBottomRightRadius: "0.25rem",
          borderBottomLeftRadius: "0.25rem",
        }}
        animate={{
          y: "0%",
          width: "100%",
          borderBottomRightRadius: "0",
          borderBottomLeftRadius: "0",
        }}
        transition={{
          y: { duration: 1, delay: 3 },
          width: { duration: 1, delay: 2 },
          borderBottomRightRadius: { delay: 3 },
          borderBottomLeftRadius: { delay: 3 },
        }}
        style={{
          transformOrigin: "center",
        }}
        className="w-full overflow-hidden h-10 border border-border-color justify-between flex rounded-tr-sm rounded-tl-sm">
        {/* Logo */}
        <div className="border-r border-border-color flex h-full w-11.25"></div>
        {/* Header */}
        <div className="w-full h-full flex items-center justify-between">
          <div className="flex items-center justify-center w-full text-center sm:text-lg text-sm">
            <p>Ibrahim Saleh {"<Noyan>"}</p>
          </div>

          <div className="w-28 h-full flex items-center gap-3 pr-3">
            <motion.div
              initial={{ opacity: 0, display: "none" }}
              animate={{ opacity: 1, display: "flex" }}
              transition={{ duration: 1, delay: 3 }}
              className="w-full flex items-center justify-end gap-3">
              <Minus className="w-4 h-4 opacity-60" />
              <Square className="w-3 h-3 opacity-60" />
              <X className="w-4 h-4 opacity-60" />
            </motion.div>

            <motion.div
              initial={{ opacity: 1, display: "flex" }}
              animate={{ opacity: 0, display: "none" }}
              transition={{ duration: 0.5, delay: 2.7 }}
              className="w-full  h-full flex items-center justify-end">
              <div className="h-full flex items-center justify-center border-l pl-4 border-border-color">
                <span className="relative flex size-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-border-color"></span>
                  <span className="relative inline-flex size-3 rounded-full bg-border-color"></span>
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Body */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 3, ease: "easeInOut" }}
        style={{
          height: "calc(100vh - 97px)",
          transformOrigin: "center",
        }}
        className="w-full flex border-x border-border-color overflow-hidden">
        {/* Left */}
        <div className="w-11.25 border-r border-border-color md:flex hidden"></div>

        {/* Content */}
        <div className="w-full overflow-x-hidden overflow-y-auto p-4 main-content">
          {Array.from({ length: 300 }).map((_e, i) => (
            <p key={i}>{i}</p>
          ))}
        </div>
      </motion.div>

      {/* Bottom */}

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "40px", opacity: 1 }}
        transition={{ duration: 1, delay: 4.4 }}
        className="w-full h-10 border border-border-color flex rounded-br-sm rounded-bl-sm">
        {/* Search */}
        <div className="border-r border-border-color flex h-full w-11.25"></div>
        {/* Links */}
        <div className="w-full h-full"></div>
      </motion.div>
    </div>
  );
}
