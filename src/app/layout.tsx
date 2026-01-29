import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kurly Brains | Creative Digital Agency",
  description:
    "We craft stunning digital experiences. Web Design, AI Solutions, UI/UX Design, Amazon A+ Content, Brand Identity & More. Trusted by clients across 10+ countries.",
  keywords: [
    "Web Design",
    "AI Model Training",
    "UI/UX Design",
    "Amazon A+ Content",
    "Graphic Design",
    "Brand Identity",
    "Digital Agency",
  ],
  authors: [{ name: "Kurly Brains" }],
  openGraph: {
    title: "Kurly Brains | Creative Digital Agency",
    description:
      "We craft stunning digital experiences. Trusted by clients across 10+ countries.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
