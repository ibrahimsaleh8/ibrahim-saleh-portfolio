import { SearchIcon, X } from "lucide-react";
import { Dispatch, SetStateAction, useMemo, useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import SearchMainCard from "./SearchMainCard";
import { Home, User, Folder, Briefcase, Mail } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import SearchResultCard from "./SearchResultCard";

interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const sections = [
  {
    title: "home",
    link: "/",
    description: "Welcome to the homepage",
    icon: <Home />,
  },
  {
    title: "about",
    link: "/about",
    description: "Learn more about me",
    icon: <User />,
  },
  {
    title: "projects",
    link: "/projects",
    description: "Check out my projects",
    icon: <Folder />,
  },
  {
    title: "experience",
    link: "/experience",
    description: "See my work experience",
    icon: <Briefcase />,
  },
  {
    title: "contact",
    link: "/contact",
    description: "Get in touch with me",
    icon: <Mail />,
  },
];

export default function SearchContent({ setOpen }: Props) {
  const [searchTxt, setSearchTxt] = useState("");
  const data = useMemo(() => {
    return searchTxt.trim().length > 0
      ? sections.filter(
          (s) =>
            s.title.toLowerCase().includes(searchTxt.toLowerCase()) ||
            s.description.toLowerCase().includes(searchTxt.toLowerCase())
        )
      : sections;
  }, [searchTxt]);
  return (
    <div className="p-4 flex flex-col gap-8">
      <button onClick={() => setOpen(false)} className="cursor-pointer ml-auto">
        <X className="w-5.5 h-5.5" />
      </button>

      <h1 className="md:text-4xl text-2xl font-bold text-center">
        Search For Any <span className="text-main-color">Section</span>
      </h1>
      <div>
        <InputGroup className="h-11 md:w-1/2 mx-auto">
          <InputGroupInput
            onChange={(e) => setSearchTxt(e.target.value)}
            placeholder="Search..."
            className="placeholder:text-lg"
          />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
        </InputGroup>
      </div>

      {/* Results */}
      <AnimatePresence mode="wait">
        <div className="max-h-130 overflow-y-auto p-1">
          {searchTxt.trim().length > 0 ? (
            <div key="result-sections" className="flex flex-col gap-3">
              {data.length > 0 ? (
                data.map((section, i) => (
                  <SearchResultCard
                    setOpen={setOpen}
                    i={i + 1}
                    key={section.title}
                    {...section}
                  />
                ))
              ) : (
                <div className="p-4 text-lg text-center text-low-color">
                  No Results Found...
                </div>
              )}
            </div>
          ) : (
            <motion.div
              key="main-sections"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              exit={{ opacity: 0 }}
              className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 mt-10">
              {data.map((section) => (
                <SearchMainCard
                  description={section.description}
                  icon={section.icon}
                  setOpen={setOpen}
                  key={section.title}
                  link={section.link}
                  title={section.title}
                />
              ))}
            </motion.div>
          )}
        </div>
      </AnimatePresence>
    </div>
  );
}
