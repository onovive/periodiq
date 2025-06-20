import client from "../client";

export async function getBlogs(category, lang = "it") {
  const content = await client.fetch(
    `{
      "blogs": *[_type == "blogs" && language == $lang && ($category == '' || references(*[_type == "blogCategory" && title == $category]._id))] | order(publishedAt desc) {
        ...,
      }
    }`,
    { category: `${category}`, lang },
    { next: { revalidate: 0 } }
  );

  return content;
}
export async function getGlossary(letter, lang = "it") {
  const content = await client.fetch(
    `{
      "glossary": *[_type == "glossary" && 
                    language == $lang && 
                    status == "active" && 
                    ($letter == '' || title match "${letter}*")] | order(term asc){
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
export async function getBlogCategories(lang = "it") {
  const content = await client.fetch(
    `{ 
      "categories": *[_type == "blogCategory" && language == $lang]{
        ...,
      },
  
      "blogPage": *[_type == "blogPage" && language == $lang][0]{
        ...,
        seo{
          title,
          description,
          "image": image.asset->url
        },
      },
    }`,
    { lang },
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
          "mainImage": mainImage.asset->url
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
         "mainImage": mainImage.asset->url
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
        "bannerImages": bannerImages[]{
        _key,
        "image": image.asset->url,
      }
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
            ...
          }
        }
      },
      testimonialSection{
        title,
        subtitle,
        testimonials[]->{
          ...,
          "avatar": avatar.asset->url
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
export async function getLatestBlogs(lang = "it") {
  const content = await client.fetch(
    `
    *[_type == "blogs" && language == $lang] | order(publishedAt desc)[0..7]{
      ...,
     _id,
  language,
  title,
  description,
  slug,
  mainImage,
  categories[]->{
    _id,
    title
  },
  publishedAt,
  body
    }
  `,
    { lang },
    { next: { revalidate: 0 } }
  );
  console.log("jsdskjd", content);
  return content;
}
export async function getGlossaryPage(lang = "it") {
  const content = await client.fetch(
    `
    *[_type == "glossaryPage" && language == $lang][0]{
      ...,
          seo{
        title,
        description,
        "image": image.asset->url
      },
    }
  `,
    { lang },
    { next: { revalidate: 0 } }
  );
  // console.log("jsdskjd", content.blogsSection);
  return content;
}

export async function getBlogSlugs(lang = "it") {
  return await client.fetch(
    `
    *[_type == "blogs" && language == $lang] {
      "slug": slug.current,
      _updatedAt
    }
  `,
    { lang }
  );
}

export async function getGameSlugs(lang = "it") {
  return await client.fetch(
    `
    *[_type == "games" && language == $lang] {
      "slug": slug.current,
      _updatedAt
    }
  `,
    { lang }
  );
}

export async function getGlossarySlugs(lang = "it") {
  return await client.fetch(
    `
    *[_type == "glossary" && language == $lang] {
      "slug": slug.current,
      _updatedAt
    }
  `,
    { lang }
  );
}
