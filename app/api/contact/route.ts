import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const res = await request.json();
    let nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp:gmail.com",
    });
    return NextResponse.json({ res });
}
