"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const response = await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `Message From Portfolio ${name}`,
      subject: `New Portfolio Contact from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Message:</strong></p>
        <blockquote style="border-left: 4px solid #3498db; padding-left: 10px; color: #555;">${message}</blockquote>
        <hr>
        <p>This email was sent from your portfolio contact form.</p>
      `,
    });

    return Response.json({ success: true, response });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
