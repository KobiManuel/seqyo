import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SEQYO — Cybersecurity Intelligence Platform",
  description:
    "SEQYO helps companies automate security operations, detect threats in real-time, and connect with trusted cybersecurity professionals.",
  keywords:
    "cybersecurity, security automation, vulnerability analysis, threat detection, security professionals",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-body bg-green-deep text-white antialiased">
        {children}
      </body>
    </html>
  );
}
