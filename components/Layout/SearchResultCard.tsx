import Link from "next/link";
import { SearchCardDataType } from "./SearchMainCard";

export default function SearchResultCard({
  description,
  icon,
  link,
  title,
  i,
}: SearchCardDataType & { i: number }) {
  return (
    <Link
      href={link}
      className="w-full text-low-color group p-4 border hover:border-main-color duration-500 border-border-color rounded-sm bg-card-black flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <p className="text-low-color">{i <= 9 ? `0${i}` : i}</p>
        <p className="text-xl capitalize group-hover:text-main-color duration-300">
          {title}
        </p>
        <span className="ml-auto group-hover:text-main-color duration-300">
          {icon}
        </span>
      </div>

      <p className="text-sm">{description}</p>
    </Link>
  );
}
