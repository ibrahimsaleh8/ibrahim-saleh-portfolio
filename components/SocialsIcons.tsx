import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
type Props = {
  iconWidth: "small" | "larg";
  mainClasses?: string;
};
export default function SocialsIcons({ iconWidth, mainClasses }: Props) {
  const iconsWidth = `${iconWidth == "small" ? "w-4 h-4" : "w-8 h-8"}`;
  return (
    <div
      className={`flex items-center justify-center flex-wrap ${
        mainClasses ?? ""
      }`}>
      <a
        aria-label="Linkedin"
        target="_blank"
        href="https://www.linkedin.com/in/ibrahim-saleh-dev/"
        className="hover:scale-125 duration-300">
        <FaLinkedin className={iconsWidth} />
      </a>
      <a
        aria-label="Github"
        target="_blank"
        href="https://github.com/ibrahimsaleh8"
        className="hover:scale-125 duration-300">
        <SiGithub className={iconsWidth} />
      </a>
      <a
        aria-label="Facebook"
        target="_blank"
        href="https://www.facebook.com/ibrahim7saleh/"
        className="hover:scale-125 duration-300">
        <FaFacebook className={iconsWidth} />
      </a>
      <a
        target="_blank"
        aria-label="Whatsapp"
        href="https://wa.me/201015405904?text="
        className="hover:scale-125 duration-300">
        <FaWhatsapp className={iconsWidth} />
      </a>
    </div>
  );
}
