import { mailOptions, transporter } from "@/config/nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const req = await request.json();

    if (!req) {
      return NextResponse.json({ error: "No body provided" }, { status: 400 });
    }

    await transporter.sendMail({
      ...mailOptions,
      subject: "New query from portfolio website",
      text: "",
      html: `<h1>Name - ${req.name}</h1>
      <p>E-mail - ${req.email}</P>
      <p>Message - ${req.message}</p>
      <p>How did he find me - ${req.find || ""}</p>`,
    });

    return NextResponse.json({ success: "Form submitted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
