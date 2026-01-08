import Link from "next/link";
type Props = {
  withBorder: boolean;
  size: "small" | "large";
};
export default function Logo({ withBorder, size }: Props) {
  return (
    <Link
      href={"/"}
      className={`relative group duration-500 font-bold flex items-center justify-center ${
        size == "small" ? "text-xl h-10 w-10" : "text-4xl h-10 w-10"
      } ${withBorder ? "border-b border-border-color" : ""}`}>
      <span
        className={`group-hover:text-main-color duration-500 absolute left-1.25`}>
        {"{"}
      </span>
      <span
        className={`absolute ${
          size == "small" ? "left-3.25" : "left-5.5 "
        } rotate-133 text-main-color duration-500 pb-px group-hover:text-white`}>
        {"/"}
      </span>
      <span
        className={`group-hover:text-main-color duration-500 absolute ${
          size == "small" ? "left-[1.4rem]" : "left-9.75"
        }`}>
        {"}"}
      </span>
    </Link>
  );
}
