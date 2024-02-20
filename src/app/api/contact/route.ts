import { mailOptions, transporter } from "@/config/nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const req = await request.json();

    if (!req.body) {
      return NextResponse.error();
    }

    await transporter.sendMail({
      ...mailOptions,
      subject: "New query from portfolio website",
      text: "",
      html: `<h1>Name - ${req.body.name}</h1>
      <p>E-mail - ${req.body.email}</P>
      <p>Message - ${req.body.message}</p>
      <p>How did he find me - ${req.body.find || ""}</p>`,
    });

    return NextResponse.json({ success: "Form submitted" }, { status: 200 });
  } catch (error) {
    return NextResponse.error();
  }
}
