import AboutInfoSection from "@/components/About/AboutInfoSection";
import HeroAbout from "@/components/About/HeroAbout";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16 w-full h-full items-center px-2">
      <HeroAbout />
      <AboutInfoSection />
    </div>
  );
}
