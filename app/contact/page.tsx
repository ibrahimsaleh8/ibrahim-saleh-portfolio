import ContactForm from "@/components/Contact/ContactForm";
import CollaborationSection from "@/components/Home/CollaborationSection";
import FooterSection from "@/components/Home/FooterSection";
import MainHeroSection from "@/components/MainHeroSection";

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-16 w-full h-full">
      <div className="flex flex-col gap-16 w-full h-full md:px-4 px-2">
        <MainHeroSection
          page="Contact"
          smallParagraph="Whether you have an idea you’d like to collaborate on or just want to connect and chat, you’re in the right place. Let’s get in touch."
          Toptitle="Want to discuss"
          Secondtitle="Call "
          ShineyTxt="Me"
        />

        <ContactForm />

        <CollaborationSection />
      </div>
      <FooterSection />
    </div>
  );
}
