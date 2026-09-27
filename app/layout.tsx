import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: "Tsanii Visual — Aesthetic Video Editing Studio",
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Tsanii Visual — Aesthetic Video Editing Studio",
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.brandName,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tsanii Visual — Aesthetic Video Editing Studio",
    description: siteConfig.description
  },
  icons: { icon: "/favicon.svg" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
