import client from "../client";

export async function getBlogs(category) {
  console.log("Category", category);
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
  console.log("Letter", letter);
  const content = await client.fetch(
    `{
      "glossary": *[_type == "glossary" && ($letter == '' || title match "${letter}*")] | order(term asc){
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
          ...
        }
      }
    }
  `,
    "",
    { next: { revalidate: 60 } }
  );

  return content;
}
