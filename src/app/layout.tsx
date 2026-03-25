import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Header from "../Components/Header";
import Footer from "@/Components/Footer";
import WhatsAppButton from "@/Components/WhatsAppButton";
import Chatbot from "@/Components/Chatbot";
import Preloader from "@/Components/Preloader";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "OmniSolve AI — Enterprise AI Agency | Global Solutions",
  description: "OmniSolve AI — Enterprise-grade AI agency delivering intelligent automation, custom voice agents, and secure data integrations for forward-thinking organizations worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} font-poppins antialiased`}
      >
        <Preloader />
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
        <Chatbot />
        <Analytics />
      </body>
    </html>
  );
}
