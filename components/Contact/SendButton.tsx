import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
export default function SendButton({ loading }: { loading: boolean }) {
  return (
    <button
      disabled={loading}
      type="submit"
      className="w-fit group border border-border-color rounded-sm flex items-center gap-2 scrooling-link relative duration-500 overflow-hidden hover:text-main-color hover:border-main-color px-8 text-sm py-3 cursor-pointer disabled:cursor-default">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={`font-medium capitalize relative flex flex-col text-center items-center justify-center gap-5 duration-300 overflow-hidden`}>
            <span className="group-hover:-translate-y-full duration-300">
              Send
            </span>
            <span className="absolute w-full -translate-x-1/2 bottom-[-150%] left-1/2 group-hover:bottom-0 duration-300">
              Send
            </span>
          </motion.span>
          <Mail className="w-4.5 h-4.5" />
        </>
      )}
    </button>
  );
}
