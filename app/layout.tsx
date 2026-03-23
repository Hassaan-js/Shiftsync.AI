import type { Metadata, Viewport } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShiftSync AI - AI-Powered Shift Scheduling",
  description: "Intelligent shift scheduling and workforce management powered by AI. Automate scheduling, optimize team productivity, and reduce labor costs.",
  keywords: ["shift scheduling", "workforce management", "AI scheduling", "team management"],
  openGraph: {
    title: "ShiftSync AI",
    description: "AI-powered shift scheduling and management platform",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geist.className} font-sans`}>{children}</body>
    </html>
  );
}
