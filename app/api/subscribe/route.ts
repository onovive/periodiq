// app/api/subscribe/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // 1. Grab the data coming from your form
    const { email, name, city, phone } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // 2. Hit MailerLite ➜ add / update subscriber
    const mlRes = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.MAILERLITE_API_KEY!}`,
      },
      body: JSON.stringify({
        email,
        fields: { name, city, phone }, // custom fields are optional
        groups: [process.env.MAILERLITE_GROUP_ID],
        resubscribe: true, // idempotent, safe to call twice
      }),
    });

    if (!mlRes.ok) {
      const text = await mlRes.text();
      return NextResponse.json({ error: text }, { status: 500 });
    }

    return NextResponse.json({ subscribed: true });
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
