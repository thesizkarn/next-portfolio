import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import HeaderNav from "@/components/layout/header-nav";
import BackgroundEffect from "@/components/layout/background-effect";
import MouseMoveEffect from "@/components/layout/mouse-move-effect";
import Footer from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Développeur Web Freelance à Blois - Allain Web",
  description:
    "Création de sites vitrines, e-commerce et web design par Julien Allain, développeur freelance à Blois. Contactez-moi pour concrétiser votre projet !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen">
            <BackgroundEffect />
            <MouseMoveEffect />
            <div className="relative z-10">
              <HeaderNav />
              <main className="min-h-[calc(100vh-var(--header-height))]">
                {children}
              </main>
              <Footer />
              <Toaster />
            </div>
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
