import { NextResponse } from "next/server";
import client from "@/client"; // Ensure this points to your configured Sanity client

export async function POST(req: Request) {
  try {
    const csvData = await req.json(); // Parse the incoming JSON data
    console.log(csvData);
    // Process each row of the CSV data
    for (const row of csvData) {
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

    return NextResponse.json({ message: "CSV imported successfully" });
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
