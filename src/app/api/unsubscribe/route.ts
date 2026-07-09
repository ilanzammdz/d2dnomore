import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
    }

    // TODO: Wire to GHL/LeadConnector CRM to remove from contact lists.
    // Example: POST to your GHL webhook with { email, action: "unsubscribe" }
    // For now, the request is logged and confirmed to the user.
    console.log(`[Unsubscribe Request] ${new Date().toISOString()} — ${email}`);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Server error. Please try again." }, { status: 500 });
  }
}
