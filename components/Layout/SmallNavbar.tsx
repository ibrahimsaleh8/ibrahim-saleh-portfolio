import { Menu, X } from "lucide-react";
import { RoutesLinks } from "./MainLinks";
import Link from "next/link";
import { useRef } from "react";
import SocialsIcons from "../SocialsIcons";

export default function SmallNavbar() {
  const smallNavRef = useRef<HTMLDivElement>(null);
  const HandleNavbarToggleing = () => {
    if (smallNavRef.current) {
      smallNavRef.current.classList.toggle("h-[calc(100vh-96px)]");
      smallNavRef.current.classList.toggle("h-0");
      smallNavRef.current.classList.toggle("border-transparent");
      smallNavRef.current.classList.toggle("border-border-color");
    }
  };
  return (
    <div className="flex md:hidden">
      <button
        aria-label="Open Small Navbar"
        onClick={HandleNavbarToggleing}
        className="cursor-pointer">
        <Menu className="w-5 h-5 opacity-60" />
      </button>
      <div
        ref={smallNavRef}
        className="bg-[#00000099] overflow-hidden duration-300 z-1000000 p-0 backdrop-blur-sm shadow-lg absolute left-0 top-10.25 w-[calc(100vw-1rem)] h-0">
        <div className="flex flex-col gap-3 p-5 border-x border-border-color h-full border-b">
          <button
            aria-label="Close"
            onClick={HandleNavbarToggleing}
            className="ml-auto cursor-pointer">
            <X />
          </button>
          <ul className="w-full flex flex-col gap-6">
            {RoutesLinks.map((link, i) => (
              <li key={link.title} className="text-3xl font-medium w-fit">
                <Link
                  onClick={HandleNavbarToggleing}
                  className="w-full flex items-center gap-3"
                  href={link.link}>
                  <span className="text-sm text-low-color pt-1">{`0${
                    i + 1
                  }`}</span>{" "}
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

          <SocialsIcons iconWidth="larg" mainClasses="mt-auto gap-8" />
        </div>
      </div>
    </div>
  );
}
