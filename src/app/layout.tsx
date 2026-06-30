import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["300", "400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EAutomata – Automating the Future of Engineering",
  description:
    "EAutomata delivers AI-powered SaaS solutions for engineering automation. From AI resume analysis to tenant management, we build the tools that scale your business.",
  keywords: [
    "EAutomata",
    "AI automation",
    "SaaS",
    "engineering automation",
    "AI resume analyzer",
    "tenant management",
    "bill reminder",
  ],
  authors: [{ name: "EAutomata" }],
  openGraph: {
    title: "EAutomata – Automating the Future of Engineering",
    description:
      "AI-powered SaaS solutions for modern engineering teams. Scale faster, automate smarter.",
    type: "website",
    siteName: "EAutomata",
  },
  twitter: {
    card: "summary_large_image",
    title: "EAutomata – Automating the Future of Engineering",
    description: "AI-powered SaaS solutions for modern engineering teams.",
  },
  metadataBase: new URL("https://eautomata.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} scroll-smooth`}>
      <body className={`antialiased ${inter.className}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
