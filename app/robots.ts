// app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://periodiq.co";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/api/", "/admin/", "*/preview"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
