"use client";

import Image, { StaticImageData } from "next/image";
import RollingLink from "../RollingLink";
import { TextAnimate } from "../ui/text-animate";
import { motion } from "motion/react";

type Props = {
  name: string;
  link: string;
  description: string;
  techStack: string[];
  overviewLink: string;
  repoLink: string;
  videoLink: string;
  year: number;
  mainImage: StaticImageData;
  otherImages: StaticImageData[];
  services: string[];
};
export default function ShowProjectDetails({
  description,
  name,
  overviewLink,
  repoLink,
  techStack,
  videoLink,
  year,
  mainImage,
  otherImages,
  services,
}: Props) {
  return (
    <div className="flex flex-col gap-15 container mx-auto pt-40">
      {/* Top */}
      <div className="flex items-center justify-center flex-col">
        <p className="text-low-color">Project</p>
        <TextAnimate
          className="lg:text-7xl md:text-5xl text-4xl text-center font-medium"
          animation="blurInUp"
          by="character">
          {name}
        </TextAnimate>
        <div className="flex items-center gap-3 flex-wrap mt-10 justify-center">
          {techStack.map((k) => (
            <p
              key={k}
              className="p-1 px-2 text-low-color border border-border-color text-xs rounded-full bg-[#0f0f0f69] backdrop-blur-lg">
              {k}
            </p>
          ))}
        </div>
      </div>

      {/* Main Image */}

      <div className="xl:w-300 w-full mx-auto all-projects my-30">
        <Image
          src={mainImage}
          alt={`${name} image`}
          className="w-full border border-border-color rounded-sm"
        />
      </div>

      {/* Text */}
      <div className="p-4 flex justify-between w-full gap-10 lg:flex-row flex-col-reverse py-20">
        {/* Left */}
        <div className="flex flex-col gap-10 lg:w-3/5 w-full">
          <div className="flex gap-1 flex-col">
            <p className="text-sm text-low-color">Year</p>
            <TextAnimate
              animation="scaleUp"
              by="text"
              className="text-2xl font-serif">
              {year.toString()}
            </TextAnimate>
          </div>

          {/* Desc */}
          <div className="flex gap-1 flex-col">
            <p className="text-sm text-low-color">Description</p>
            <TextAnimate
              className="text-xl leading-[1.6] *:mb-3"
              animation="fadeIn"
              by="line"
              as="p"
              duration={0.5}
              delay={0.1}>
              {description}
            </TextAnimate>
          </div>
        </div>

        {/* Right */}
        <div className="flex md:flex-col flex-wrap gap-10 md:min-w-96 min-w-full pt-6">
          {/* Services */}
          <div className="flex gap-3 flex-col">
            <p className="text-sm text-low-color">Services</p>
            {services.map((s, i) => (
              <motion.p
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{ duration: 0.3, delay: i / 5 }}
                key={s}
                className="py-1.5 capitalize px-4 w-fit border border-border-color rounded-full text-sm bg-[#0f0f0f69] backdrop-blur-lg">
                {s}
              </motion.p>
            ))}
          </div>
          {/* Links */}
          <div className="flex flex-col gap-5">
            <p className="text-sm text-low-color">Links</p>
            <RollingLink
              target="_blank"
              classes="px-6 py-3 text-sm"
              delay={0.3}
              linkTo={overviewLink}
              title="Live Preview"
            />
            <RollingLink
              classes="px-6 py-3 text-sm"
              delay={0.3}
              target="_blank"
              linkTo={repoLink}
              title="Github Repo"
            />
            <RollingLink
              classes="px-6 py-3 text-sm"
              delay={0.3}
              target="_blank"
              linkTo={videoLink}
              title="Video Show Project"
            />
          </div>
        </div>
      </div>

      {/* Another Image */}
      <div className="flex flex-col gap-6 py-10">
        {otherImages.map((image, i) => (
          <Image
            key={i}
            src={image}
            alt={`${name} image-${i}`}
            className="xl:w-300 w-full mx-auto border border-border-color rounded-sm"
          />
        ))}
      </div>
    </div>
  );
}
