import { Eye, Github, Play } from "lucide-react";
import RollingOutLink from "./RollingOutLink";
import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";
type Props = {
  title: string;
  keywords: string[];
  description: string;
  viewLink: string;
  repoLink: string;
  videoLink: string;
  image: StaticImageData;
  imageAlt: string;
};
export default function ProjectCard({
  description,
  keywords,
  title,
  repoLink,
  videoLink,
  viewLink,
  image,
  imageAlt,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      viewport={{ once: true }}
      className="flex flex-col gap-5 lg:w-200 w-full py-4">
      <div className="w-full bg-card-black overflow-hidden rounded-sm">
        <Image
          src={image}
          alt={imageAlt}
          width={1000}
          height={1000}
          className="w-full"
        />
      </div>

      {/* Keywords */}
      <div className="flex items-center gap-3 flex-wrap">
        {keywords.map((k) => (
          <p
            key={k}
            className="px-2 py-1.5 border border-border-color text-xs rounded-sm bg-[#4b4b4b33]">
            {k}
          </p>
        ))}
      </div>

      {/* Title & Links */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <p className="text-2xl font-bold capitalize">{title}</p>
        <div className="flex items-center gap-4 flex-wrap ml-auto">
          <RollingOutLink
            delay={0.2}
            icon={<Eye className="w-5 h-5" />}
            link={viewLink}
            title="Live Preview"
          />
          <RollingOutLink
            delay={0.2}
            icon={<Github className="w-5 h-5" />}
            link={repoLink}
            title="Github"
          />

          <RollingOutLink
            delay={0.2}
            icon={<Play className="w-5 h-5" />}
            link={videoLink}
            title="Video Show Project"
          />
        </div>
      </div>

      <p className="text-sm text-low-color">{description}</p>
    </motion.div>
  );
}
