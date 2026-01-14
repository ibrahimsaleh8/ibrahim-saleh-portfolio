import { Minus, Square, X } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import myImage from "@images/my-image.jpg";
export default function ImageWidowCard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      viewport={{ once: true }}
      className="bg-[#0f0f0f30] backdrop-blur-sm w-96 h-full border border-border-color">
      {/*Top  */}
      <div className="border-b border-border-color px-3 py-1 flex items-center justify-between gap-3">
        <p>Portait</p>
        <div className="flex items-center gap-2">
          <Minus className="w-4 h-4 opacity-60 " />
          <Square className="w-3 h-3 opacity-60 " />
          <X className="w-4 h-4 opacity-60" />
        </div>
      </div>

      {/* Bottom */}
      <div className="w-full h-70 ">
        {/* <Image
          src={myImage}
          alt="My image"
          className="w-full object-cover object-center"
        /> */}
      </div>
    </motion.div>
  );
}
