import { NextRequest, NextResponse } from "next/server";
import client from "@/client";
import convertHtmlToBlockContent from "@/components/csv/htmlToBlockContent";

export async function POST(req: NextRequest) {
  try {
    const csvData = await req.json();
    console.log("Received CSV data:", JSON.stringify(csvData, null, 2));

    const results = [];

    for (const row of csvData) {
      try {
        console.log("Processing row:", JSON.stringify(row, null, 2));

        const convertedBody = convertHtmlToBlockContent(row.body);
        console.log("Converted body:", JSON.stringify(convertedBody, null, 2));

        const document = {
          _type: "glossary",
          title: row.title,
          slug: {
            _type: "slug",
            current: row.slug__current || row.slug,
          },
          description: row.description,
          publishedAt: row.publishedAt,
          body: convertedBody,
        };

        console.log("Prepared document:", JSON.stringify(document, null, 2));

        const result = await createOrUpdateDocument(document);
        results.push(result);
      } catch (rowError) {
        console.error(`Error processing row: ${JSON.stringify(row, null, 2)}`, rowError);
        results.push({ error: (rowError as Error).message, row });
      }
    }

    return NextResponse.json({ message: "CSV import completed", results });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}

async function createOrUpdateDocument(doc: any) {
  try {
    const existingDoc = await client.fetch('*[_type == "glossary" && title == $title][0]', {
      title: doc.title,
    });

    if (existingDoc) {
      const updatedDoc = await client.createOrReplace({
        ...doc,
        _id: existingDoc._id,
        _rev: existingDoc._rev,
      });
      console.log(`Updated document: ${doc.title}`, JSON.stringify(updatedDoc, null, 2));
      return { success: true, id: updatedDoc._id, title: doc.title, action: "updated" };
    } else {
      const createdDoc = await client.create(doc);
      console.log(`Created new document: ${doc.title}`, JSON.stringify(createdDoc, null, 2));
      return { success: true, id: createdDoc._id, title: doc.title, action: "created" };
    }
  } catch (error) {
    console.error(`Error creating/updating document: ${doc.title}`, error);
    return { success: false, error: (error as Error).message, title: doc.title };
  }
}
