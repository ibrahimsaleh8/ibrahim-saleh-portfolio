"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import RollingLink from "../RollingLink";
import wesalImage from "@images/projects/wesal.webp";
import Image from "next/image";
export default function ExperienceCard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:w-235 all-projects relative w-full flex flex-col rounded-sm bg-project-card backdrop-blur-lg border border-border-color">
      {/* Header */}
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between cursor-pointer md:px-10 px-4 py-16 w-full experience-card">
        <div className="flex items-start gap-3">
          <span className="text-low-color font-serif font-medium duration-500">
            01
          </span>

          <div className="flex flex-col gap-2 duration-500 main-text-experience">
            <p className="md:text-5xl text-3xl font-medium">Wesal</p>
            <p className="text-low-color sm:text-sm text-xs capitalize">
              Freelance accessibility web app converting Arabic text into sign
              language symbols
            </p>
          </div>
        </div>

        <div className="bg-card-black px-4 py-1.5 rounded-md border border-border-color">
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>

      <div
        className={`grid transition-[grid-template-rows] duration-500 ease-in-out
          ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
        `}>
        <div className="overflow-hidden md:px-10 px-4">
          <div className="py-5 border-t border-border-color mt-6 flex flex-col gap-4">
            <div className="bg-card-black">
              <Image
                src={wesalImage}
                alt="wesal image"
                className="w-full rounded-sm mx-auto"
              />
            </div>
            <div className="flex flex-col gap-7">
              <div className="flex flex-col gap-2">
                <p>
                  Wesal is a freelance accessibility-focused web application
                  built to help bridge the communication gap for the deaf and
                  hard-of-hearing community. The platform converts Arabic text
                  into sign language symbols, making digital content more
                  inclusive and easier to understand.
                </p>
                <p>
                  I worked directly with the client to gather requirements,
                  translate real-world needs into intuitive UI solutions, and
                  deliver a fully responsive, production-ready frontend. The
                  project was completed within a tight one-week timeline, with a
                  strong focus on performance, accessibility best practices, and
                  clean, maintainable code.
                </p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <p className="p-1 px-2 border border-border-color text-xs rounded-full bg-[#0f0f0f69] backdrop-blur-lg">
                  Html
                </p>
                <p className="p-1 px-2 border border-border-color text-xs rounded-full bg-[#0f0f0f69] backdrop-blur-lg">
                  CSS
                </p>
                <p className="p-1 px-2 border border-border-color text-xs rounded-full bg-[#0f0f0f69] backdrop-blur-lg">
                  Java Script
                </p>
              </div>

              <div className="flex items-center justify-center gap-4 flex-wrap">
                <RollingLink
                  target="_blank"
                  classes="px-6 py-3 text-sm"
                  delay={0.3}
                  linkTo={"https://sign-language-project.netlify.app/"}
                  title="Live Preview"
                />
                <RollingLink
                  target="_blank"
                  classes="px-6 py-3 text-sm"
                  delay={0.3}
                  linkTo={"https://github.com/ibrahimsaleh8/sign-language"}
                  title="Github Repo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
