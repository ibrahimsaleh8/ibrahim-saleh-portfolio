import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function FooterLinks() {
  return (
    <div className="w-full h-full flex items-center justify-between">
      <div className="text-center md:flex items-center gap-3 mx-auto text-sm opacity-80 hidden">
        <p>Developed With &#10084;</p>
        <p>Based in Egypt</p>
      </div>
      <div className="h-full flex items-center gap-4 ml-auto md:ml-0 pr-1">
        {/* Socials */}
        <Link
          href={"/contact"}
          className="px-4 py-1.5 sm:text-sm text-xs border border-border-color rounded-sm flex items-center gap-2">
          {"Let's"} Get in touch <ArrowRightIcon className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
