import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { TextAnimate } from "./ui/text-animate";
type Props = {
  title: string;
  keywords: string[];
  image: StaticImageData;
  imageAlt: string;
  projectNumber: number;
  year: number;
  projectLink: string;
};
export default function ProjectCard({
  keywords,
  title,
  image,
  imageAlt,
  projectNumber,
  year,
  projectLink,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      viewport={{ once: true }}
      className="lg:w-235 w-full">
      <Link
        href={`/projects/${projectLink}`}
        className="relative flex items-center group justify-between gap-2 lg:min-h-60 w-full py-7 md:px-10 px-4 p-5 rounded-sm bg-project-card backdrop-blur-lg border border-border-color">
        <div className="w-full flex gap-7 flex-col lg:flex-row  justify-between items-start">
          {/* Image */}
          <div className="lg:absolute top-1/2 z-50 mx-auto lg:-translate-y-1/2 right-40 lg:mt-0 -mt-14 md:w-100 w-full hover:-rotate-3 border group-hover:scale-100 lg:scale-0 duration-700 border-border-color rounded-sm overflow-hidden">
            <Image src={image} alt={imageAlt} width={1000} height={1000} />
          </div>

          {/* Title & Keywords */}
          <div className="flex gap-4 ">
            <p className="text-low-color font-serif font-medium group-hover:opacity-0 duration-700">
              {`0${projectNumber}`}
            </p>

            <div className="flex flex-col gap-3 group-hover:-ml-3 duration-500">
              <TextAnimate
                delay={0.3}
                animation="blurInUp"
                by="character"
                className="md:text-3xl text-2xl font-medium"
                as={"p"}>
                {title}
              </TextAnimate>

              {/* Keywords */}
              <div className="flex items-center gap-3 flex-wrap">
                {keywords.map((k) => (
                  <p
                    key={k}
                    className="p-1 px-2 text-low-color border border-border-color text-xs rounded-full bg-[#0f0f0f69] backdrop-blur-lg">
                    {k}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Year */}
          <p className="flex items-center gap-2 text-sm text-low-color group-hover:mr-3 duration-500 ml-auto lg:ml-0">
            {year}
            <ArrowUpRight className="w-4 h-4 text-white mb-3 opacity-0 group-hover:opacity-100 duration-300" />
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
