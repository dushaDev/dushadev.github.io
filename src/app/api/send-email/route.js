"use server";
import { Resend } from "resend";
import { NextResponse } from 'next/server';
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

    return NextResponse.json({ success: true, response });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// // app/api/send-email/route.js
// import { NextResponse } from 'next/server';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req) {
//   try {
//     const { name, email, message } = await req.json();

//     if (!name || !email || !message) {
//       return NextResponse.json(
//         { success: false, error: 'Missing required fields' },
//         { status: 400 }
//       );
//     }

//     const { data, error } = await resend.emails.send({
//       from: process.env.EMAIL_FROM,
//       to: process.env.EMAIL_TO,
//       subject: `New Portfolio Contact from ${name}`,
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
//           <h2 style="color: #2563eb;">New Contact Form Submission</h2>
//           <p><strong>Name:</strong> ${name}</p>
//           <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></p>
//           <p><strong>Message:</strong></p>
//           <blockquote style="
//             border-left: 4px solid #2563eb;
//             padding: 8px 15px;
//             margin: 15px 0;
//             background: #f8fafc;
//             color: #334155;
//           ">${message}</blockquote>
//           <hr style="border: 0; height: 1px; background: #e2e8f0;">
//           <p style="color: #64748b; font-size: 0.9em;">
//             This email was sent from your portfolio contact form.
//           </p>
//         </div>
//       `,
//     });

//     if (error) {
//       return NextResponse.json(
//         { success: false, error: error.message },
//         { status: 500 }
//       );
//     }

//     return NextResponse.json({ success: true, data });
//   } catch (error) {
//     return NextResponse.json(
//       { success: false, error: error.message || 'Internal server error' },
//       { status: 500 }
//     );
//   }
// }
