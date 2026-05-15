import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Advocate Putla Srinivas Putla | Criminal, Civil & Family Lawyer in Tanuku",
  description:
    "Advocate Putla Srinivas Putla is an experienced lawyer practicing at Tanuku Court, specializing in Criminal Law, Civil Litigation, and Family Disputes. Trusted legal counsel for justice.",
  keywords: [
    "Advocate Putla Srinivas Putla",
    "Lawyer Tanuku",
    "Criminal Lawyer Tanuku",
    "Civil Lawyer Tanuku",
    "Family Lawyer Tanuku",
    "Tanuku Court",
    "Advocate West Godavari",
    "Legal Services Tanuku",
  ],
  authors: [{ name: "Advocate Putla Srinivas Putla" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Advocate Putla Srinivas Putla | Trusted Legal Counsel in Tanuku",
    description:
      "Experienced advocate specializing in Criminal, Civil & Family Law at Tanuku Court. Dedicated to delivering justice.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
