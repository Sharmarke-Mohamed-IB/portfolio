import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sharmarke Mohamed Ibrahim | Computer Engineer",
  description: "Computer Engineer building practical software, computer vision, machine learning, and systems projects.",
  openGraph: {
    title: "Sharmarke Mohamed Ibrahim | Computer Engineer",
    description: "Selected software, computer vision, machine learning, and systems engineering work.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Sharmarke Mohamed Ibrahim | Computer Engineer",
    description: "Selected software, computer vision, machine learning, and systems engineering work.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
