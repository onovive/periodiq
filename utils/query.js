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
