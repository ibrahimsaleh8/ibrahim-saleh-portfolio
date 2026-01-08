import Logo from "@/components/Logo";
import Link from "next/link";
import SocialsIcons from "@/components/SocialsIcons";

export default function FooterSection() {
  return (
    <div className="w-full min-h-96 border-t border-border-color bg-project-card backdrop-blur-lg lg:px-30 md:px-10 px-5 py-10 flex flex-col gap-5 items-center lg:items-start">
      <div className="flex items-start justify-between lg:gap-4 gap-10 flex-col lg:flex-row w-full">
        <div className="flex items-center justify-center gap-7">
          <Logo size="large" withBorder={false} />
          <p className="md:text-2xl text-xl font-medium">
            Ibrahim Saleh <span className="text-main-color">{"<noyan>"}</span>
          </p>
        </div>
        <ul className="flex items-start text-sm gap-4 text-low-color mx-auto lg:mx-0">
          <li>
            <Link className="hover:text-white duration-300" href={"/about"}>
              About
            </Link>
          </li>
          <li>
            <Link className="hover:text-white duration-300" href={"/projects"}>
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-white duration-300"
              href={"/experience"}>
              Experience
            </Link>
          </li>
          <li>
            <Link className="hover:text-white duration-300" href={"/contact"}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex lg:items-start items-center justify-between lg:gap-4 gap-10 mt-auto text-low-color flex-col lg:flex-row w-full">
        <SocialsIcons iconWidth="larg" mainClasses="gap-10 opacity-80" />

        <p>© 2026</p>
      </div>
    </div>
  );
}
