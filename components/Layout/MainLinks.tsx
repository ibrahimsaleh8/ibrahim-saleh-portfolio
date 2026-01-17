import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BriefcaseBusiness, House, Laptop, Mail, User } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export const RoutesLinks = [
  {
    title: "Home",
    icon: <House className="w-5 h-5" />,
    link: "/",
  },
  {
    title: "About",
    icon: <User className="w-5 h-5" />,
    link: "/about",
  },
  {
    title: "Projects",
    icon: <Laptop className="w-5 h-5" />,
    link: "/projects",
  },
  {
    title: "Experience",
    icon: <BriefcaseBusiness className="w-5 h-5" />,
    link: "/experience",
  },
  {
    title: "Contact",
    icon: <Mail className="w-5 h-5" />,
    link: "/contact",
  },
];
export default function MainLinks() {
  return (
    <motion.div
      initial={{ display: "none" }}
      animate={{ display: "flex" }}
      transition={{ duration: 0.5, delay: 3.3 }}
      className="w-10 md:flex hidden my-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 3.3 }}
        className="flex flex-col gap-5 items-center justify-center h-full w-full">
        <TooltipProvider>
          {RoutesLinks.map((l) => (
            <Tooltip key={l.title}>
              <TooltipTrigger asChild>
                <Link
                  href={l.link}
                  aria-label={l.title}
                  className="hover:text-green-500 duration-200 w-fit cursor-pointer">
                  {l.icon}
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>{l.title}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </motion.div>
    </motion.div>
  );
}
