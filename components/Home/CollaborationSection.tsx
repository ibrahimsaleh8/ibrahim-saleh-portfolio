"use client";

import RollingLink from "@/components/RollingLink";
import WindowCard from "@/components/WindowCard";
import { motion } from "motion/react";
import { TextAnimate } from "../ui/text-animate";

export default function CollaborationSection() {
  return (
    <div className="py-14 flex flex-col gap-16 w-full items-center">
      <WindowCard
        withNumbers={false}
        delay={0.4}
        classes="w-full lg:w-240"
        title="Collaboration"
        description={[
          <div
            className="flex flex-col lg:flex-row gap-9 justify-between md:p-5 p-4 py-16"
            key={0}>
            <div className="lg:w-35 w-30 h-30 rounded-full border border-border-color relative">
              <div className="absolute right-0 bottom-0 w-10 h-10 border border-border-color bg-card-black rounded-full flex items-center justify-center">
                &#128075;
              </div>
            </div>

            <div className="flex flex-col gap-10 w-full">
              <TextAnimate
                animation="blurInUp"
                by="word"
                duration={0.6}
                as={"p"}
                className="md:text-5xl text-3xl leading-[1.3]">
                Let’s work together on your next project
              </TextAnimate>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}>
                <RollingLink
                  linkTo="/contact"
                  title="Contact me"
                  delay={0.5}
                  classes="px-6 py-3"
                />
              </motion.div>
            </div>
          </div>,
        ]}
      />
    </div>
  );
}
