// client.ts
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
const client = sanityClient({
  projectId: "bfoi0uj5", // you can find this in sanity.json
  dataset: "production", // or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
  token: "skiWhTDcIQbYZupUT5kvRuvBFjIm845MhDJAq2sVEUPoc6QxSP4uOfd48a6X24Y9WVxPS1kTUe4VYgHn8bAZfBGgXralingZOhiDKDa01Deg0i8XAsmABt2hhcmD7Lf9QYySnOaN7CwTys1B0SSmg4WJRUqQsMTd69K3W4oOmDMQ4z0MZNg9",
});
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

export default client;
