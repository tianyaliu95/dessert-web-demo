import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, enquiryType = 'general', message } = await req.json();

  if (!name || !email || !enquiryType || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: `Contact Form <${process.env.RESEND_DOMAIN}>`,
      to: `${process.env.RESEND_EMAIL}`,
      subject: `[${enquiryType.toUpperCase()}] Contact Form from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nEnquiry Type: ${enquiryType}\n\nMessage:\n${message}`,
      replyTo: email,
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
} 