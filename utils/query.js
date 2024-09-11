import client from "../client";

export async function getBlogs(category) {
  const content = await client.fetch(
    `{
      "blogs": *[_type == "blogs" && ($category == '' || references(*[_type == "blogCategory" && title == $category]._id))]{
        ...,
  },
     
  
   
    }`,
    { category: `${category}` },
    { next: { revalidate: 60 } }
  );

  return content;
}
export async function getGlossary(letter) {
  const content = await client.fetch(
    `{
      "glossary": *[_type == "glossary" && ($letter == '' || title match "${letter}*")] | order(term asc){
        ...,
  },
   "glossaryPage": *[_type == "glossaryPage"]{
        ...,
  },
  
   
    }`,
    { letter: `${letter}` },
    { next: { revalidate: 60 } }
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
    { next: { revalidate: 60 } }
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
    { next: { revalidate: 60 } }
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
    { next: { revalidate: 60 } }
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
    { next: { revalidate: 60 } }
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
    { next: { revalidate: 60 } }
  );

  return content;
}
export async function getHomePage() {
  const content = await client.fetch(
    `
    *[_type == "home"][0]{
      ...,
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
        }
      }
    }
  `,
    "",
    { next: { revalidate: 0 } }
  );

  return content;
}
