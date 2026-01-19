import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/Layout/MainLayout";
import { Toaster } from "@/components/ui/sonner";

const font = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Ibrahim Saleh - Portfolio",
  description:
    "Explore the portfolio of Ibrahim Saleh, a passionate Frontend Developer specializing in Next.js, React, and modern web technologies. Discover projects, experience, and creative UI/UX designs built with performance and precision.",
  keywords: [
    "Ibrahim Saleh",
    "ibrahim saleh portfolio",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "Full Stack Developer",
    "TypeScript Developer",
    "Web Developer Portfolio",
    "UI UX Designer",
    "Software Engineer",
    "Egypt Frontend Developer",
    "Next.js Portfolio",
    "Professional Web Developer",
    "Modern Web Development",
    "JavaScript Developer",
    "Responsive Web Design",
    "Tailwind CSS",
    "React Projects",
    "Next.js Projects",
    "Frontend Engineer",
    "Creative Developer",
    "إبراهيم صالح",
    "بورتفوليو ابراهيم صالح",
    "معرض أعمال ابراهيم صالح",
    "مطور فرونت إند",
    "مطور Next.js",
    "مطور React",
    "مطور مواقع",
    "مطور ويب في مصر",
    "تصميم مواقع",
    "مطور جافاسكربت",
    "برمجة مواقع",
    "بورتفوليو مطور",
    "مشاريع Next.js",
    "مشاريع React",
    "تصميم واجهات مستخدم",
    "تطوير الواجهات الأمامية",
    "تطوير مواقع حديثة",
    "مطور برمجيات",
    "مصمم UI UX",
  ],
  authors: [{ name: "Ibrahim Saleh" }],
  creator: "Ibrahim Saleh",
  publisher: "Ibrahim Saleh",
  category: "Web Development",
  verification: {
    google: "SrI98gSOZNrMvxTByRc926pb0un84BxxbVxc0PAUfuM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <div className="min-h-screen w-full relative">
          <MainLayout>{children}</MainLayout>
          <Toaster />
        </div>
      </body>
    </html>
  );
}
