import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "465"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, company, email, tel, message } = body;

    await transporter.sendMail({
      from: "contact@allainweb.fr",
      replyTo: email,
      to: "contact@allainweb.fr",
      subject: `Nouveau message de ${firstName} ${lastName}`,
      text: `Nom: ${firstName} ${lastName}
Email: ${email}
Entreprise: ${company || "Non précisé"}
Téléphone: ${tel || "Non précisé"}

Message:
${message}`,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi de l'email" },
      { status: 500 },
    );
  }
}
