import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/Navbar";
import AIChat from "@/components/ai/AIChat";

const oswald = Oswald({
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
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
      <body className={`${oswald.className} ${oswald.variable} ${inter.variable}`}>
        <CustomCursor />
        <Navbar />
        <AIChat />
        {children}
      </body>
    </html>
  );
}
