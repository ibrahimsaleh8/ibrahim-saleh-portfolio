"use client";

import CollaborationSection from "../Home/CollaborationSection";
import RollingLink from "../RollingLink";
import { TextAnimate } from "../ui/text-animate";

type Props = {
  name: string;
  link: string;
  description: string;
  techStack: string[];
  overviewLink: string;
  repoLink: string;
  videoLink: string;
  year: number;
};
export default function ShowProjectDetails({
  description,
  name,
  overviewLink,
  repoLink,
  techStack,
  videoLink,
  year,
}: Props) {
  return (
    <div className="flex flex-col gap-15 container mx-auto pt-40">
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
      <div className="w-full h-120 bg-zinc-800 all-projects my-30"></div>

      {/* Text */}
      <div className="p-4 flex justify-between w-full gap-10 md:flex-row flex-col-reverse">
        {/* Left */}
        <div className="flex flex-col gap-5">
          <div className="flex gap-1 flex-col">
            <p className="text-sm text-low-color">Year</p>
            <p className="text-xl">{year}</p>
          </div>

          {/* Desc */}
          <div className="flex gap-1 flex-col">
            <p className="text-sm text-low-color">Description</p>
            <p className="text-xl leading-[1.6]">{description}</p>
          </div>
        </div>

        {/* Right */}
        <div className="flex md:flex-col flex-wrap gap-5 md:min-w-96 min-w-full pt-6">
          {/* Links */}

          <RollingLink
            classes="px-6 py-2"
            delay={0.3}
            linkTo={overviewLink}
            title="Live Preview"
          />
          <RollingLink
            classes="px-6 py-2"
            delay={0.3}
            linkTo={repoLink}
            title="Github Repo"
          />
          <RollingLink
            classes="px-6 py-2"
            delay={0.3}
            linkTo={videoLink}
            title="Video Show Project"
          />
        </div>
      </div>

      {/* Another Image */}
      <div className="flex flex-col gap-6 py-10">
        <div className="w-full h-96 bg-neutral-500"></div>
        <div className="w-full h-96 bg-neutral-500"></div>
        <div className="w-full h-96 bg-neutral-500"></div>
        <div className="w-full h-96 bg-neutral-500"></div>
        <div className="w-full h-96 bg-neutral-500"></div>
        <div className="w-full h-96 bg-neutral-500"></div>
        <div className="w-full h-96 bg-neutral-500"></div>
        <div className="w-full h-96 bg-neutral-500"></div>
        <div className="w-full h-96 bg-neutral-500"></div>
        <div className="w-full h-96 bg-neutral-500"></div>
        <div className="w-full h-96 bg-neutral-500"></div>
      </div>
      <CollaborationSection />
    </div>
  );
}
