import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BriefcaseBusiness, House, Laptop, Mail, User } from "lucide-react";
import Link from "next/link";
const Links = [
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
    <div className="w-10 border-r border-border-color md:flex hidden flex-col gap-5 items-center justify-center">
      <TooltipProvider>
        {Links.map((l) => (
          <Tooltip key={l.title}>
            <TooltipTrigger asChild>
              <Link
                href={l.link}
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
    </div>
  );
}
