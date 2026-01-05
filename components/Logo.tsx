import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href={"/"}
      className="border-r relative group duration-500 font-bold border-border-color flex h-full w-10 items-center justify-center text-xl">
      <span className="group-hover:text-main-color duration-500 absolute left-1.25">
        {"{"}
      </span>
      <span className="absolute left-3.25 rotate-133 text-main-color duration-500 pb-px group-hover:text-white">
        {"/"}
      </span>
      <span className="group-hover:text-main-color duration-500 absolute left-[1.4rem]">
        {"}"}
      </span>
    </Link>
  );
}
