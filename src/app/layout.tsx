import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { site } from "@/data/portfolio";
import { SITE_URL } from "@/lib/siteUrl";

const sans = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-mono",
});

const description =
  "Anas Khan is an embedded systems and firmware engineer in New Delhi — bare-metal STM32 drivers written from datasheet register maps, communication protocols debugged on the wire, drone firmware at ENORD, and RFID reader firmware in development.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name} — Embedded Systems, RFID & Firmware Engineer`,
    template: `%s — ${site.name}`,
  },
  description,
  keywords: [
    "Anas Khan",
    "embedded systems engineer",
    "firmware engineer",
    "bare-metal firmware",
    "STM32",
    "ARM Cortex-M",
    "RFID reader firmware",
    "SPI",
    "I2C",
    "UART",
    "PCB design",
    "device drivers",
  ],
  authors: [{ name: site.name, url: SITE_URL }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: `${site.name} — Embedded Systems, RFID & Firmware Engineer`,
    description,
    siteName: site.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Embedded Systems, RFID & Firmware Engineer`,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#060708",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="min-h-screen bg-base text-txt antialiased">
        {/* Ambient background layer — sits behind all content */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10 bg-radial-fade"
        />
        <div
          aria-hidden
          className="grid-backdrop pointer-events-none fixed inset-0 -z-10 opacity-[0.35]"
        />

        <ScrollProgress />
        <Navbar />
        <main id="top">{children}</main>
      </body>
    </html>
  );
}
