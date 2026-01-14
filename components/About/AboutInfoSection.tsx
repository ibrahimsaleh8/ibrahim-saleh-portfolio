"use client";

import AboutSection from "@/components/Home/AboutSection";
import WindowCard from "@/components/WindowCard";
import { ArrowUpRight } from "lucide-react";

export default function AboutInfoSection() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <AboutSection withLink={false} />
      <div className="flex gap-2 flex-wrap justify-center">
        {/* Where i Work */}
        <WindowCard
          withNumbers={true}
          delay={0.4}
          classes="lg:w-96 w-full"
          title="Where i work"
          description={[
            <span key={0}>
              Currently based in Egypt{" "}
              <span className="text-main-color">Menoufia Gov</span>
            </span>,
            <span key={1}>Availabel for Work Remote</span>,
          ]}
        />
        {/* Socials */}
        <WindowCard
          withNumbers={true}
          delay={0.4}
          classes="lg:w-176 w-full"
          title="My Socials"
          description={[
            <a
              className="flex items-center gap-0.5 hover:text-main-color duration-500"
              target="_blank"
              href="https://www.linkedin.com/in/ibrahim-saleh-dev/"
              key={0}>
              Linkedin <ArrowUpRight className="w-4 h-4" />
            </a>,
            <a
              className="flex items-center gap-0.5 hover:text-main-color duration-500"
              target="_blank"
              href="https://github.com/ibrahimsaleh8"
              key={1}>
              Github <ArrowUpRight className="w-4 h-4" />
            </a>,
            <a
              className="flex items-center gap-0.5 hover:text-main-color duration-500"
              target="_blank"
              href="https://www.facebook.com/ibrahim7saleh/"
              key={2}>
              Facebook <ArrowUpRight className="w-4 h-4" />
            </a>,
            <a
              className="flex items-center gap-0.5 hover:text-main-color duration-500"
              target="_blank"
              href="https://wa.me/201015405904?text="
              key={2}>
              Whatsapp <ArrowUpRight className="w-4 h-4" />
            </a>,
          ]}
        />
      </div>
    </div>
  );
}
