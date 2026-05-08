import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyButtons from "@/components/shared/StickyButtons";
import { COMPANY } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://a1roofrepairscolchester.co.uk"),
  title: {
    default: `${COMPANY.name} — Expert Roof Inspections & Surveys`,
    template: `%s | ${COMPANY.name}`,
  },
  description:
    "Colchester's leading roof inspection specialists. Professional roof surveys, drone inspections and homebuyer reports across Essex. Independent assessments from £149 with 24hr reports.",
  keywords: [
    "roof inspections colchester",
    "roof survey colchester",
    "roof inspector colchester",
    "drone roof inspection colchester",
    "roofing surveyors colchester",
    "roof reports colchester",
    "roof inspection near me",
    "commercial roof surveys colchester",
    "homebuyer roof inspection colchester",
    "roof assessment colchester",
    "essex roofing inspection",
  ],
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
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
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: COMPANY.name,
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
  other: {
    "geo.region": "GB-ESS",
    "geo.placename": "Colchester, Essex",
    "geo.position": `${COMPANY.geo.lat};${COMPANY.geo.lng}`,
    ICBM: `${COMPANY.geo.lat}, ${COMPANY.geo.lng}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col antialiased bg-white text-slate-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyButtons />
      </body>
    </html>
  );
}
