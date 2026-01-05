import SocialsIcons from "../SocialsIcons";
import RollingLink from "../RollingLink";

export default function FooterLinks() {
  return (
    <div className="w-full h-full flex items-center justify-between">
      <div className="text-center pl-20 md:flex items-center gap-3 mx-auto text-sm opacity-80 hidden">
        <p>Developed With &#10084;</p>
        <p>Based in Egypt</p>
      </div>
      <div className="h-full flex items-center gap-4 ml-auto md:ml-0 pr-1">
        {/* Socials */}
        <SocialsIcons
          iconWidth="small"
          mainClasses="gap-4 opacity-80 hidden lg:flex"
        />

        <RollingLink
          linkTo="/contact"
          title="Get in touch"
          delay={0.5}
          classes="px-4 py-1.5 sm:text-sm text-xs"
        />
      </div>
    </div>
  );
}
