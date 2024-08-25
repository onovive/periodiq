import client from "../client";

export async function getBlogs() {
  const content = await client.fetch(
    `{
      "blogs": *[_type == "blogs"]{
        ...,
  },
   "categories": *[_type == "blogCategory"]{
        ...,
      }
   
    }`,
    "",
    { next: { revalidate: 60 } }
  );

  return content;
}
