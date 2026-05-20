import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, service, message } = body ?? {};

    if (!name || !phone || !email || !service) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // TODO: Wire to Resend, SendGrid, or your CRM.
    // For now we log to the server and return success so the form is functional
    // out-of-the-box. Add RESEND_API_KEY to .env.local to enable real delivery.
    console.log("[contact]", { name, phone, email, service, message });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
