"use client";

import MainLinks from "@/components/Layout/MainLinks";
import { Copy, Minus, Plus, Square } from "lucide-react";
import { motion } from "motion/react";
import { ReactNode, useEffect, useRef, useState } from "react";
import SearchButton from "./SearchButton";
import SearchContent from "./SearchContent";
import Logo from "../Logo";
import FooterLinks from "./FooterLinks";
import SmallNavbar from "./SmallNavbar";
import TransitionPage from "./TransitionPage";
import CloseMessage from "./CloseMessage";

export default function MainLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [minimize, setMinimize] = useState(false);
  const [maxmize, setMaxmize] = useState(false);
  const searchingRef = useRef<HTMLDivElement>(null);
  const mainLayoutRef = useRef<HTMLDivElement>(null);
  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
    setMaxmize(!maxmize);
  };
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
    <div className="w-full h-screen p-2 relative z-50 overflow-hidden">
      <motion.div
        ref={mainLayoutRef}
        initial={{
          width: "var(--top-width)",
          marginLeft: "auto",
          marginRight: "auto",
          y: "44vh",
          height: "2.56rem",
        }}
        animate={{
          width: "100%",
          y: "0",
          height: "100%",
        }}
        transition={{
          width: { delay: 2, duration: 1 },
          y: { delay: 3, duration: 1 },
          height: { delay: 3, duration: 1 },
          ease: "easeInOut",
        }}
        className="overflow-hidden! frame-content relative size-full">
        <header className="w-[2.4rem] h-full min-h-10 border-l border-t border-border-color col-span-1 main-header hidden md:flex flex-col z-50 backdrop-blur-3xl">
          <Logo size="small" withBorder={true} />
          <MainLinks />
        </header>

        {/* top */}
        <div className="w-full flex items-center text-center justify-between h-10 border-x border-t border-border-color col-span-2 main-top">
          <div className="flex md:hidden border-r border-border-color">
            <Logo size="small" withBorder={true} />
          </div>
          <p className="mx-auto text-center w-full">
            Ibrahim Saleh <span className="text-main-color">{"<noyan>"}</span>
          </p>

          <div className="md:w-28 w-fit h-full flex items-center gap-3 pr-3">
            <motion.div
              initial={{ opacity: 0, display: "none" }}
              animate={{ opacity: 1, display: "flex" }}
              transition={{ duration: 1, delay: 3 }}
              className="w-full flex items-center justify-end gap-3">
              <button
                aria-label="Toggle Minimize"
                className="opacity-60 hidden md:flex cursor-pointer"
                onClick={() => {
                  setMinimize(!minimize);
                  if (mainLayoutRef.current) {
                    mainLayoutRef.current.classList.toggle("md:w-[90%]!");
                    mainLayoutRef.current.classList.toggle("md:h-[90%]!");
                    mainLayoutRef.current.classList.add("mx-0!");
                    mainLayoutRef.current.classList.toggle("origin-top-left!");
                    mainLayoutRef.current.classList.add("duration-500");
                  }
                }}>
                {minimize ? (
                  <Plus className="w-4 h-4" />
                ) : (
                  <Minus className="w-4 h-4" />
                )}
              </button>
              <button
                aria-label="Toggle Fullscreen"
                onClick={toggleFullscreen}
                className="opacity-60 hidden md:flex cursor-pointer">
                {maxmize ? (
                  <Copy className="w-3 h-3" />
                ) : (
                  <Square className="w-3 h-3" />
                )}
              </button>
              <CloseMessage />
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

        {/* Contetn */}
        <div className="w-full h-full border-x border-y border-border-color main-content relative overflow-hidden">
          <div className="w-full overflow-y-auto h-full">
            <TransitionPage>{children}</TransitionPage>
            {/* Search Panel */}
            <motion.div
              ref={searchingRef}
              initial={false}
              animate={{
                x: open ? 0 : "-100%",
                opacity: open ? 1 : "0",
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="absolute top-0 left-0 w-full md:w-[65%] lg:w-1/2 h-[calc(100vh-6.1rem)] bg-[#0f0f0fdb] backdrop-blur-sm shadow-lg z-10 border-r border-border-color">
              <SearchContent setOpen={setOpen} />
            </motion.div>
          </div>
        </div>

        {/* Bottom */}
        <footer className="w-full h-10 border-b border-x border-border-color main-footer flex overflow-hidden">
          {/* Search */}
          <SearchButton setOpen={setOpen} open={open} />
          {/* Links */}
          <FooterLinks />
        </footer>
      </motion.div>
    </div>
  );
}
