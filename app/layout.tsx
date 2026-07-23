import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LenisProvider } from "@/components/LenisProvider";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aresh — Portfolio",
  description:
    "Portfolio exploring data, design, and code through integrated case studies and editorial storytelling.",
  keywords: ["Portfolio", "Data", "Design", "Frontend", "Next.js"],
  openGraph: {
    title: "Aresh — Portfolio",
    description: "A multidisciplinary portfolio spanning data, design, and code.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="bg-[#f7f5f0] text-[#111111] antialiased">
        <LenisProvider>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
