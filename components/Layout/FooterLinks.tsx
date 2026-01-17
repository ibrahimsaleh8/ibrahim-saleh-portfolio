import SocialsIcons from "../SocialsIcons";
import RollingLink from "../RollingLink";
import { motion } from "motion/react";
import CurrentLocation from "./CurrentLocation";

export default function FooterLinks() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 3.4 }}
      className="w-full h-full flex items-center justify-between">
      <CurrentLocation />
      <div className="text-center xl:pl-20 lg:pl-10 md:flex items-center gap-3 md:mx-auto lg:text-sm text-xs opacity-80 hidden">
        <p>Developed With &#10084;</p>
        <p>Based in Egypt</p>
      </div>
      <div className="h-full flex items-center gap-4 ml-auto lg:ml-0 pr-1">
        {/* Socials */}
        <SocialsIcons
          iconWidth="small"
          mainClasses="gap-4 opacity-80 hidden lg:flex"
        />

        <RollingLink
          target="_self"
          linkTo="/contact"
          title="Get in touch"
          delay={0.5}
          classes="px-4 py-1.5 xl:text-sm text-xs"
        />
      </div>
    </motion.div>
  );
}
