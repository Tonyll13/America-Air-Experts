import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function esc(v: unknown) {
  return String(v ?? "").replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[c] as string));
}

export async function POST(req: Request) {
  console.log("API /api/lead HIT"); // <-- תראה אם זה בכלל מגיע

  try {
    const body = await req.json();
    console.log("BODY:", body);

    const { name, phone, email, service, location, notes } = body ?? {};

    if (!name || !phone || !service || !location) {
      console.log("VALIDATION_FAIL");
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const to = process.env.LEADS_TO_EMAIL;
    const fromRaw = process.env.LEADS_FROM_EMAIL || "";
    const from = fromRaw.replace(/^"+|"+$/g, "").trim(); // מנקה גרשיים אם יש

    console.log("ENV:", { hasTo: !!to, hasFrom: !!from, hasKey: !!process.env.RESEND_API_KEY, from });

    if (!to || !from || !process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { success: false, message: "Email env vars are not set" },
        { status: 500 }
      );
    }

    const subject = `New Lead: ${name} • ${service} • ${location}`;

    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.5">
        <h2>New Lead</h2>
        <p><b>Name:</b> ${esc(name)}</p>
        <p><b>Phone:</b> ${esc(phone)}</p>
        <p><b>Email:</b> ${esc(email || "-")}</p>
        <p><b>Service:</b> ${esc(service)}</p>
        <p><b>City/ZIP:</b> ${esc(location)}</p>
        <p><b>Notes:</b><br/>${esc(notes || "-").replace(/\n/g, "<br/>")}</p>
        <hr/>
        <p style="color:#666;font-size:12px">Sent from your website form.</p>
      </div>
    `;

    const safeReplyTo =
      typeof email === "string" && email.includes("@") ? email : undefined;

    const result = await resend.emails.send({
      from,
      to,
      subject,
      html,
      reply_to: safeReplyTo,
    } as any);

    console.log("RESEND_RESULT:", result);

    // @ts-ignore
    if (result?.error) {
      // @ts-ignore
      console.log("RESEND_ERROR:", result.error);
      return NextResponse.json(
        { success: false, message: "Email provider error" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("LEAD_ROUTE_ERROR:", err?.message || err);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
