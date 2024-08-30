import { NextResponse } from "next/server";
import Papa from "papaparse";
import client from "@/client"; // Ensure this points to your configured Sanity client

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { file } = body;
    console.log("file:", file);
    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    return new Promise((resolve, reject) => {
      Papa.parse(file, {
        header: true,
        complete: async function (results) {
          try {
            for (const row of results.data) {
              const document = {
                _type: "glossary",
                title: row.title,
                slug: {
                  _type: "slug",
                  current: row.slug,
                },
                description: row.description,
                publishedAt: row.publishedAt,
                body: row.body, // Adjust this field according to your schema
              };

              await createOrUpdateDocument(document);
            }
            resolve(NextResponse.json({ message: "CSV imported successfully" }));
          } catch (error) {
            console.error("Error importing documents:", error);
            reject(NextResponse.json({ error: "Failed to import CSV" }, { status: 500 }));
          }
        },
        error: function (error) {
          console.error("Error parsing CSV:", error);
          reject(NextResponse.json({ error: "Error parsing CSV" }, { status: 500 }));
        },
      });
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}

const createOrUpdateDocument = async (doc: any) => {
  const existingDoc = await client.fetch('*[_type == "glossary" && title == $title][0]', {
    title: doc.title,
  });

  if (existingDoc) {
    // Update the document
    await client.patch(existingDoc._id).set(doc).commit();
  } else {
    // Create a new document
    await client.create(doc);
  }
};
