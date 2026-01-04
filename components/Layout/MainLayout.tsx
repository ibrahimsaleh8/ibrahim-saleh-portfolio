"use client";

import MainLinks from "@/components/Layout/MainLinks";
import { Minus, Square, X } from "lucide-react";
import { motion } from "motion/react";
import { ReactNode, useEffect, useRef, useState } from "react";
import SearchButton from "./SearchButton";
import SearchContent from "./SearchContent";
import Logo from "../Logo";
import FooterLinks from "./FooterLinks";
import SmallNavbar from "./SmallNavbar";

export default function MainLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const searchingRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchingRef.current &&
        !searchingRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setOpen]);

  return (
    <div className="w-full min-h-screen p-2 overflow-hidden relative  z-50">
      <div className="relative w-full  z-50">
        {/* Top */}
        <motion.header
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
          className="w-full z-50 overflow-hidden h-10 border border-border-color justify-between flex rounded-tr-sm rounded-tl-sm">
          {/* Logo */}
          <Logo />
          {/* Header */}
          <div className="w-full h-full flex items-center justify-between">
            <div className="flex items-center justify-center w-full text-center sm:text-base text-sm">
              <p>
                Ibrahim Saleh{" "}
                <span className="text-main-color">{"<noyan>"}</span>
              </p>
            </div>

            <div className="w-28 h-full flex items-center gap-3 pr-3">
              <motion.div
                initial={{ opacity: 0, display: "none" }}
                animate={{ opacity: 1, display: "flex" }}
                transition={{ duration: 1, delay: 3 }}
                className="w-full flex items-center justify-end gap-3">
                <Minus className="w-4 h-4 opacity-60 hidden md:flex" />
                <Square className="w-3 h-3 opacity-60 hidden md:flex" />
                <X className="w-4 h-4 opacity-60 hidden md:flex" />
                <SmallNavbar />
              </motion.div>

              <motion.div
                initial={{ opacity: 1, display: "flex" }}
                animate={{ opacity: 0, display: "none" }}
                transition={{ duration: 0.5, delay: 2.7 }}
                className="w-full  h-full flex items-center justify-end">
                <div className="h-full flex items-center justify-center border-l pl-4 border-border-color">
                  <span className="relative flex size-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-main-color"></span>
                    <span className="relative inline-flex size-3 rounded-full bg-main-color"></span>
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.header>

        <motion.div
          initial={{ scaleY: 0, y: "-30px" }}
          animate={{ scaleY: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.93 }}
          style={{
            height: "calc(100vh - 97px)",
            transformOrigin: "center",
          }}>
          {/* Body */}
          <div
            style={{
              height: "calc(100vh - 97px)",
              transformOrigin: "center",
            }}
            className="w-full flex z-40 border-x border-border-color overflow-hidden">
            {/* Left */}
            <MainLinks />

            {/* Content Wrapper */}
            <div className="relative w-full h-screen overflow-hidden">
              {/* Scrollable Content */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 3.5 }}
                className="w-full h-full overflow-y-auto p-4 main-content">
                {children}
              </motion.div>

              {/* Search Panel */}
              <motion.div
                ref={searchingRef}
                initial={false}
                animate={{ x: open ? 0 : "-100%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-full md:w-[65%] lg:w-1/2  h-full bg-[#0f0f0f30] backdrop-blur-sm shadow-lg z-40 border-r border-border-color">
                <SearchContent setOpen={setOpen} />
              </motion.div>
            </div>
          </div>

          {/* Bottom */}

          <footer className="w-full h-10 border border-border-color flex rounded-br-sm rounded-bl-sm">
            {/* Search */}
            <SearchButton setOpen={setOpen} open={open} />
            {/* Links */}
            <FooterLinks />
          </footer>
        </motion.div>
      </div>
    </div>
  );
}
