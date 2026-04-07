import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yash Patel — AI & Full-Stack Developer",
  description:
    "B.Tech IT student at MBIT, Gujarat. I build AI-powered full-stack systems — civic infrastructure platforms, deep learning pipelines, and production-grade web applications.",
  keywords: [
    "Yash Patel",
    "Full Stack Developer",
    "AI Engineer",
    "Next.js",
    "MBIT",
    "Gujarat",
    "Deep Learning",
  ],
  authors: [{ name: "Yash Patel" }],
  openGraph: {
    title: "Yash Patel — AI & Full-Stack Developer",
    description:
      "B.Tech IT student at MBIT. Building AI-powered systems that solve real problems.",
    url: "https://yashpatel13.netlify.app",
    type: "website",
    siteName: "Yash Patel Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Patel — AI & Full-Stack Developer",
    description: "B.Tech IT @ MBIT. Building AI-powered systems that solve real problems.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans bg-paper text-ink antialiased">{children}</body>
    </html>
  );
}
