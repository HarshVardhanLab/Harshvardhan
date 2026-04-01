import type { Metadata } from "next";
import { Space_Grotesk, Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import SideNav from "@/components/SideNav";
import dynamic from "next/dynamic";

const Background3D = dynamic(() => import("@/components/Background3D"), {
  ssr: false,
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-headline"
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-body"
});

const firaCode = Fira_Code({ 
  subsets: ["latin"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: "HARSH VARDHAN | Python Backend Developer & AI/ML Engineer",
  description: "Building scalable backend systems and AI-powered solutions. Python developer specializing in FastAPI, Flask, REST APIs, and Machine Learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${firaCode.variable} bg-background text-on-surface font-body selection:bg-primary/30 antialiased`}
      >
        <Background3D />
        <Navigation />
        <SideNav />
        {children}
      </body>
    </html>
  );
}
