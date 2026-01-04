import { Search } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}

export default function SearchButton({ setOpen, open }: Props) {
  console.log("open", open);
  return (
    <button
      disabled={open}
      onClick={() => setOpen((prev) => !prev)}
      className="border-r cursor-pointer border-border-color flex h-full w-10 items-center justify-center bg-green-500 text-border-color rounded-bl-sm">
      <Search className="w-5 h-5" />
    </button>
  );
}
