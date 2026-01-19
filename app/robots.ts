import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://ibrahim-saleh-portfolio.vercel.app/sitemap.xml",
    host: "https://ibrahim-saleh-portfolio.vercel.app",
  };
}
