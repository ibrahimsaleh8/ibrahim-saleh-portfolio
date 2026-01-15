import CollaborationSection from "@/components/Home/CollaborationSection";
import FooterSection from "@/components/Home/FooterSection";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col gap-16 w-full h-full items-center">
      <div className="flex flex-col gap-16 w-full h-full items-center px-2">
        {children}
        <CollaborationSection />
      </div>
      <FooterSection />
    </div>
  );
}
