import ContactForm from "@/components/Contact/ContactForm";
import MainHeroSection from "@/components/MainHeroSection";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-16 w-full h-full">
      <MainHeroSection
        page="Contact"
        smallParagraph="Whether you have an idea you’d like to collaborate on or just want to connect and chat, you’re in the right place. Let’s get in touch."
        Toptitle="Want to discuss"
        Secondtitle="Call "
        ShineyTxt="Me"
      />

      <ContactForm />
    </div>
  );
}
