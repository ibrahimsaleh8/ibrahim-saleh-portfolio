import { Search } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}

export default function SearchButton({ setOpen, open }: Props) {
  return (
    <>
      <button
        disabled={open}
        onClick={() => setOpen((prev) => !prev)}
        className="border-r cursor-pointer border-border-color hidden md:flex h-full w-10 items-center justify-center bg-green-600 text-border-color">
        <Search className="w-4 h-4 text-black" />
      </button>
      <button
        disabled={true}
        className="border-r border-border-color md:hidden flex h-full w-10 items-center justify-center text-border-color">
        <span className="flex w-2 h-2 rounded-full bg-main-color"></span>
      </button>
    </>
  );
}
