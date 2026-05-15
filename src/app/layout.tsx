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
  title: "Advocate Putla Srinivas | Criminal, Civil & Family Lawyer in Tanuku, West Godavari",
  description:
    "Advocate Putla Srinivas is an experienced senior lawyer practicing at Tanuku Court, West Godavari District, Andhra Pradesh. Specializing in Criminal Law (bail, cyber crime), Civil Litigation (property disputes, consumer cases), and Family Law (divorce, child custody). Call 9000696403 for free consultation.",
  keywords: [
    "Advocate Putla Srinivas",
    "Putla Srinivas lawyer",
    "Lawyer Tanuku",
    "Criminal Lawyer Tanuku",
    "Civil Lawyer Tanuku",
    "Family Lawyer Tanuku",
    "Divorce Lawyer Tanuku",
    "Bail Lawyer West Godavari",
    "Property Dispute Lawyer Tanuku",
    "Child Custody Advocate Andhra Pradesh",
    "Tanuku Court",
    "Advocate West Godavari",
    "Legal Services Tanuku",
    "Best Lawyer in Tanuku",
    "Advocate near me Tanuku",
    "Tanuku District Court lawyer",
    "West Godavari lawyer",
    "Penumantra Mandal advocate",
    "Maruteru lawyer",
  ],
  authors: [{ name: "Advocate Putla Srinivas" }],
  creator: "Advocate Putla Srinivas",
  publisher: "Advocate Putla Srinivas",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Advocate Putla Srinivas | Trusted Senior Advocate in Tanuku, West Godavari",
    description:
      "Over 15 years of experience in Criminal, Civil & Family Law at Tanuku Court. Expert bail, property, divorce, and child custody representation. Call 9000696403.",
    type: "website",
    locale: "en_IN",
    siteName: "Advocate Putla Srinivas - Tanuku Court",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advocate Putla Srinivas | Senior Advocate - Tanuku Court",
    description:
      "Expert Criminal, Civil & Family Lawyer at Tanuku Court, West Godavari, Andhra Pradesh. 15+ years experience. Call 9000696403.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://advocateputlasrinivas.com",
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
