import { ChevronRight, House } from "lucide-react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";

export default function CurrentLocation() {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {pathname != "/" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className=" hidden sm:flex items-center gap-2 px-3 lg:text-sm text-xs">
          <Link className="text-low-color" href={"/"}>
            <House className="w-4 h-4" />
          </Link>
          <ChevronRight className="w-3 h-3" />

          <Link href={`/${pathname.split("/")[1]}`}>
            {pathname.split("/")[1]}
          </Link>
          <AnimatePresence>
            {pathname.split("/").length == 3 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2">
                <ChevronRight className="w-3 h-3" />
                <Link
                  className="hover:text-main-color duration-500"
                  href={pathname}>
                  {pathname.split("/")[2].split("-").join(" ")}
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
