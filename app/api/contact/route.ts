import { NextResponse } from "next/server";
import sendgrid from "@sendgrid/mail";
import { env } from "process";

export async function POST(request: Request) {
    const res = await request.json();
    const api = env.SENDGRID_API_KEY || "";
    sendgrid.setApiKey(api);

    const message = `
    You have a new contact form submission\r\n
    Name: ${res.name}\r\n
    Email: ${res.email}\r\n
    Phone: ${res.phone}\r\n
    Message: ${res.message}
  `;

    const data = {
        to: "james@dreamscapespoolandpatio.com",
        from: "no-reply@marchess.dev",
        cc: "no-reply@marchess.dev",
        subject: `New Contact Form Submission From ${res.name}`,
        text: message,
        html: message.replace(/\r\n/g, "<br />"),
    };
    await sendgrid.send(data);
    return NextResponse.json({ res });
}
