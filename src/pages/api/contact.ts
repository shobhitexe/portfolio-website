import { mailOptions, transporter } from "@/config/nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(400).json({ error: "Bad request" });
  }

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: "New query from portfolio website",
      text: "",
      html: `<h1>Name - ${req.body.name}</h1>
      <p>E-mail - ${req.body.email}</P>
      <p>Message - ${req.body.message}</p>
      <p>How did he find me - ${req.body.find || ""}</p>`,
    });

    res.status(200).json({ success: "Form submitted" });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
}
