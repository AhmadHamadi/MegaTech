import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      type, // "contact" (default) or "pickup"
      name,
      phone,
      email,
      service,
      message,
      // pickup-specific extras
      clinic,
      address,
      pickupTime,
    } = body ?? {};

    if (!name || !phone || !email || !service) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // TODO: Wire to Resend, SendGrid, or your CRM. A pickup request should also
    // trigger an instant notification (email/SMS/Slack) to the front desk and
    // driver — add RESEND_API_KEY (or a webhook URL) to .env.local to enable it.
    const kind = type === "pickup" ? "pickup" : "contact";
    console.log(`[${kind}]`, {
      name,
      phone,
      email,
      service,
      message,
      ...(kind === "pickup" ? { clinic, address, pickupTime } : {}),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
