import { Minus, Square, X } from "lucide-react";
import { motion } from "motion/react";
import { ReactNode } from "react";
type Props = {
  title: string;
  description: ReactNode[];
  classes?: string;
  delay: number;
  withNumbers: boolean;
};
export default function WindowCard({
  description,
  title,
  classes,
  delay,
  withNumbers,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay }}
      viewport={{ once: true }}
      className={`bg-[#0f0f0f30] backdrop-blur-sm border border-border-color ${
        classes ?? ""
      }`}>
      {/*Top  */}
      <div className="border-b border-border-color px-3 py-1 flex items-center justify-between gap-3">
        <p>{title}</p>
        <div className="flex items-center gap-2">
          <Minus className="w-4 h-4 opacity-60 " />
          <Square className="w-3 h-3 opacity-60 " />
          <X className="w-4 h-4 opacity-60" />
        </div>
      </div>

      {/* Bottom */}
      <ul className="w-full h-full p-3 flex flex-col gap-4">
        {description.map((desc, i) => (
          <li className="flex items-start gap-2" key={i}>
            {withNumbers && (
              <span className="text-low-color text-sm">{i + 1}.</span>
            )}

            {desc}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
