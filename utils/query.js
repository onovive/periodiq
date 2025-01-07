import client from "../client";

export async function getBlogs(category, lang = "it") {
  const content = await client.fetch(
    `{
      "blogs": *[_type == "blogs" && language == $lang && ($category == '' || references(*[_type == "blogCategory" && title == $category]._id))]{
        ...,
  },
     
  
   
    }`,
    { category: `${category}`, lang },
    { next: { revalidate: 0 } }
  );

  return content;
}
export async function getGlossary(letter, lang = "it") {
  const content = await client.fetch(
    `{
      "glossary": *[_type == "glossary" &&  language == $lang && ($letter == '' || title match "${letter}*")] | order(term asc){
        ...,
  },
   "glossaryPage": *[_type == "glossaryPage"]{
        ...,
  },
  
   
    }`,
    { letter: `${letter}`, lang },
    { next: { revalidate: 0 } }
  );

  return content;
}
export async function getBlogCategories() {
  const content = await client.fetch(
    `{ "categories": *[_type == "blogCategory"]{
        ...,
      },
  
    "blogPage": *[_type == "blogPage"]{
        ...,
  },
    }`,
    "",
    { next: { revalidate: 0 } }
  );

  return content;
}
export async function getHeaderFooter() {
  const content = await client.fetch(
    `{ "header": *[_type == "header"][0]{
        ...,
      },
    "glossaryPage": *[_type == "glossaryPage"]{
        ...,
  },
   
    }`,
    "",
    { next: { revalidate: 0 } }
  );

  return content;
}
export async function getBlogsDetail(blog) {
  const content = await client.fetch(
    `{
      "blogs": *[_type == "blogs" && slug.current == $blog]{
        ...,
  },
  
    }`,
    { blog: `${blog}` },
    { next: { revalidate: 0 } }
  );

  return content;
}
export async function getGlossaryDetail(glossary) {
  const content = await client.fetch(
    `{
      "glossary": *[_type == "glossary" && slug.current == $glossary]{
        ...,
  },
  
    }`,
    { glossary: `${glossary}` },
    { next: { revalidate: 0 } }
  );

  return content;
}
export async function getGamesDetail(game) {
  const content = await client.fetch(
    `{
      "games": *[_type == "games" && slug.current == $game]{
        ...,
  },
  
    }`,
    { game: `${game}` },
    { next: { revalidate: 0 } }
  );

  return content;
}
export async function getHomePage(lang = "it") {
  const content = await client.fetch(
    `
    *[_type == "home" && language == $lang][0]{
      ...,
      seo{
        title,
        description,
        "image": image.asset->url
      },
      gamesSection{
        ...,
        games[]->{
          ...
        }
      },
      blogsSection{
        ...,
        blogs[]->{
          ...,
          language == $lang => {
            ... // Add any specific fields if needed
          }
        }
      }
     
    }
  `,
    { lang },
    { next: { revalidate: 0 } }
  );
  // console.log("jsdskjd", content.blogsSection);
  return content;
}
export async function getGlossaryPage(lang = "it") {
  const content = await client.fetch(
    `
    *[_type == "glossaryPage" && language == $lang][0]{
      ...,
          
    }
  `,
    { lang },
    { next: { revalidate: 0 } }
  );
  // console.log("jsdskjd", content.blogsSection);
  return content;
}
export const getGlobalSEO = async (lang = "it") => {
  return await client.fetch(
    `
    *[_type == "globalSEO" && language == $lang][0]{
      defaultTitle,
      defaultDescription,
      titleTemplate,
      siteName,
      "defaultOGImage": defaultOGImage.asset->url
    }
  `,
    { lang }
  );
};
// utils/query.ts
// utils/query.ts
export async function getBlogSlugs() {
  return await client.fetch(`
    *[_type == "blogs"] {
      "slug": slug.current,
      _updatedAt
    }
  `);
}

export async function getGameSlugs() {
  return await client.fetch(`
    *[_type == "games"] {
      "slug": slug.current,
      _updatedAt
    }
  `);
}

export async function getGlossarySlugs() {
  return await client.fetch(`
    *[_type == "glossary"] {
      "slug": slug.current,
      _updatedAt
    }
  `);
}
