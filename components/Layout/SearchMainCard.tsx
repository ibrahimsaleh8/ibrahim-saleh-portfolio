import Link from "next/link";
import { ReactNode } from "react";
export type SearchCardDataType = {
  title: string;
  link: string;
  description: string;
  icon: ReactNode;
};
export default function SearchMainCard({
  description,
  icon,
  link,
  title,
}: SearchCardDataType) {
  return (
    <Link
      href={link}
      className="p-4 rounded-sm bg-card-black text-low-color border border-border-color flex flex-col gap-5 w-full hover:border-main-color duration-700 group">
      {/* Title */}
      <div className="flex items-center gap-3 text-xl font-medium group-hover:text-main-color duration-500">
        {icon}
        <p className="capitalize">{title}</p>
      </div>
      {/* Description */}
      <p className="text-sm">{description}</p>
    </Link>
  );
}
