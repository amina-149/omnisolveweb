import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Header from "../Components/Header";
import Footer from "@/Components/Footer";
import WhatsAppButton from "@/Components/WhatsAppButton";
import Chatbot from "@/Components/Chatbot";

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
  title: "OmniSolve AI — SECP Registered AI Agency | Islamabad Pakistan",
  description: "OMNISOLVEAI (SMC-PRIVATE) LIMITED — Pakistan's SECP-registered AI agency. NICAT Cohort 7. AI Agents, Voice Agents & automation for Pakistani and international businesses. FAO Competition Winner. MOU with Pakistan Executive Forum.",
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
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
        <Chatbot />
      </body>
    </html>
  );
}
