import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
type Props = {
  iconWidth: string;
  mainClasses?: string;
};
export default function SocialsIcons({ iconWidth, mainClasses }: Props) {
  const iconsWidth = `w-${iconWidth} h-${iconWidth}`;
  return (
    <div
      className={`flex items-center justify-center flex-wrap ${
        mainClasses ?? ""
      }`}>
      <a target="_blank" href="#" className="hover:scale-125 duration-300">
        <FaLinkedin className={iconsWidth} />
      </a>
      <a target="_blank" href="#" className="hover:scale-125 duration-300">
        <SiGithub className={iconsWidth} />
      </a>
      <a target="_blank" href="#" className="hover:scale-125 duration-300">
        <FaFacebook className={iconsWidth} />
      </a>
      <a target="_blank" href="#" className="hover:scale-125 duration-300">
        <FaWhatsapp className={iconsWidth} />
      </a>
    </div>
  );
}
