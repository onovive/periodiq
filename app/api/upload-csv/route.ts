export const runtime = "nodejs"; // Ensure it runs as a Serverless Function

import { NextRequest, NextResponse } from "next/server";
import client from "@/client";
import convertHtmlToBlockContent from "@/components/csv/htmlToBlockContent";

export async function POST(req: NextRequest) {
  try {
    const csvData = await req.json();
    console.log(`✅ Received CSV data (${csvData.length} rows)`);

    // Start background processing without waiting
    processCsvData(csvData);

    // Return immediately to avoid timeout
    return NextResponse.json({ message: "CSV import started. Processing in the background." }, { status: 202 });
  } catch (error) {
    console.error("❌ Error processing request:", error);
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}

// Process CSV data asynchronously
async function processCsvData(csvData: any[]) {
  console.log("🚀 Starting background processing...");

  try {
    const results = await Promise.allSettled(
      csvData.map(async (row) => {
        try {
          console.log(`🔹 Processing row: ${row.title}`);

          const convertedBody = convertHtmlToBlockContent(row.body);
          const document = {
            _type: "glossary",
            title: row.title,
            language: row.language,
            status: row.status,
            slug: { _type: "slug", current: row.slug__current || row.slug },
            description: row.description,
            publishedAt: row.publishedAt,
            body: convertedBody,
          };

          return await createOrUpdateDocument(document);
        } catch (rowError) {
          console.error(`❌ Error processing row: ${row.title}`, rowError);
          return { error: (rowError as Error).message, row };
        }
      })
    );

    console.log("✅ Background processing completed:", JSON.stringify(results, null, 2));
  } catch (error) {
    console.error("❌ Background processing failed:", error);
  }
}

// Create or update document in Sanity
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
      console.log(`✅ Updated document: ${doc.title}`);
      return { success: true, id: updatedDoc._id, title: doc.title, action: "updated" };
    } else {
      const createdDoc = await client.create(doc);
      console.log(`✅ Created new document: ${doc.title}`);
      return { success: true, id: createdDoc._id, title: doc.title, action: "created" };
    }
  } catch (error) {
    console.error(`❌ Error creating/updating document: ${doc.title}`, error);
    return { success: false, error: (error as Error).message, title: doc.title };
  }
}
