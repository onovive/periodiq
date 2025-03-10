// app/sitemap.ts
import { MetadataRoute } from "next";
import { getBlogSlugs, getGameSlugs, getGlossarySlugs } from "@/utils/query";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://periodiq.co";
  const gamelanguages = ["en", "it"];
  const languages = ["it"];

  // Get all dynamic routes
  const blogs = await getBlogSlugs();
  const games = await getGameSlugs();
  const glossaries = await getGlossarySlugs();

  // Base static routes for each language
  const staticRoutes: MetadataRoute.Sitemap = languages.map((lang) => ({
    url: `${baseUrl}/${lang}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1,
  }));

  // Dynamic blog routes
  const blogRoutes: MetadataRoute.Sitemap = blogs.flatMap((blog: any) =>
    languages.map((lang) => ({
      url: `${baseUrl}/${lang}/blogs/${blog.slug}`,
      lastModified: new Date(blog._updatedAt) || new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    }))
  );

  // Dynamic game routes
  const gameRoutes: MetadataRoute.Sitemap = games.flatMap((game: any) =>
    gamelanguages.map((lang) => ({
      url: `${baseUrl}/${lang}/game-detail/${game.slug}`,
      lastModified: new Date(game._updatedAt) || new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    }))
  );

  // Dynamic glossary routes
  const glossaryRoutes: MetadataRoute.Sitemap = glossaries.flatMap((glossary: any) =>
    languages.map((lang) => ({
      url: `${baseUrl}/${lang}/glossary/${glossary.slug}`,
      lastModified: new Date(glossary._updatedAt) || new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    }))
  );

  return [...staticRoutes, ...blogRoutes, ...gameRoutes, ...glossaryRoutes];
}
