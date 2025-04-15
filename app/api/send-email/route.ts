// app/api/send-email/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

// Schéma de validation pour les données entrantes
const emailSchema = z.object({
  firstName: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  lastName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  company: z.string().optional(),
  email: z.string().email("Email invalide"),
  tel: z
    .string()
    .regex(/^\+?[0-9\s-]+$/, "Numéro de téléphone invalide")
    .optional(),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères"),
});

// Vérification des variables d'environnement
const requiredEnvVars = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASSWORD",
] as const;

for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    console.error(
      `Erreur : La variable d'environnement ${envVar} est manquante`,
    );
    throw new Error(`La variable d'environnement ${envVar} est requise`);
  }
}

// Configuration du transporteur Nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "465"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

// Vérification initiale du transporteur
transporter.verify((error) => {
  if (error) {
    console.error("Erreur de configuration SMTP:", error);
  } else {
    console.log("SMTP prêt à envoyer des emails");
  }
});

export async function POST(req: NextRequest) {
  try {
    // Parsing et validation des données
    const body = await req.json();
    const parsedData = emailSchema.safeParse(body);

    if (!parsedData.success) {
      console.error("Erreur de validation:", parsedData.error.format());
      return NextResponse.json(
        {
          error: "Données invalides",
          details: parsedData.error.format(),
        },
        { status: 400 },
      );
    }

    const { firstName, lastName, company, email, tel, message } =
      parsedData.data;

    // Envoi de l'email
    await transporter.sendMail({
      from: '"Allain Web" <contact@allainweb.fr>',
      replyTo: email,
      to: "contact@allainweb.fr",
      subject: `Nouveau message de ${firstName} ${lastName}`,
      text: `Nom: ${firstName} ${lastName}
Email: ${email}
Entreprise: ${company || "Non précisé"}
Téléphone: ${tel || "Non précisé"}

Message:
${message}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom :</strong> ${firstName} ${lastName}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Entreprise :</strong> ${company || "Non précisé"}</p>
        <p><strong>Téléphone :</strong> ${tel || "Non précisé"}</p>
        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return NextResponse.json(
      {
        error: "Erreur lors de l'envoi de l'email",
        details: error instanceof Error ? error.message : "Erreur inconnue",
      },
      { status: 500 },
    );
  }
}
