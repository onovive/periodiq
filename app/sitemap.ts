// app/sitemap.ts
import { MetadataRoute } from "next";
import { getBlogSlugs, getGameSlugs, getGlossarySlugs } from "@/utils/query";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://periodiq.co";
  const languages = ["en", "it"];

  // Get all dynamic routes for each language
  const blogsPromises = languages.map((lang) => getBlogSlugs(lang));
  const gamesPromises = languages.map((lang) => getGameSlugs(lang));
  const glossariesPromises = languages.map((lang) => getGlossarySlugs(lang));

  const [enBlogs, itBlogs] = await Promise.all(blogsPromises);
  const [enGames, itGames] = await Promise.all(gamesPromises);
  const [enGlossaries, itGlossaries] = await Promise.all(glossariesPromises);

  const blogs = [...enBlogs.map((blog: any) => ({ ...blog, lang: "en" })), ...itBlogs.map((blog: any) => ({ ...blog, lang: "it" }))];
  const games = [...enGames.map((game: any) => ({ ...game, lang: "en" })), ...itGames.map((game: any) => ({ ...game, lang: "it" }))];
  const glossaries = [...enGlossaries.map((glossary: any) => ({ ...glossary, lang: "en" })), ...itGlossaries.map((glossary: any) => ({ ...glossary, lang: "it" }))];

  // Base static routes for each language
  const staticRoutes: MetadataRoute.Sitemap = languages.map((lang) => ({
    url: `${baseUrl}/${lang}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1,
  }));

  // Dynamic blog routes
  const blogRoutes: MetadataRoute.Sitemap = blogs.map((blog: any) => ({
    url: `${baseUrl}/${blog.lang}/blogs/${blog.slug}`,
    lastModified: new Date(blog._updatedAt) || new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Dynamic game routes
  const gameRoutes: MetadataRoute.Sitemap = games.map((game: any) => ({
    url: `${baseUrl}/${game.lang}/game-detail/${game.slug}`,
    lastModified: new Date(game._updatedAt) || new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Dynamic glossary routes
  const glossaryRoutes: MetadataRoute.Sitemap = glossaries.map((glossary: any) => ({
    url: `${baseUrl}/${glossary.lang}/glossary/${glossary.slug}`,
    lastModified: new Date(glossary._updatedAt) || new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes, ...gameRoutes, ...glossaryRoutes];
}
