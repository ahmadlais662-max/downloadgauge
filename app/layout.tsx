import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://downloadgauge.com"),

  title: {
    default: "DownloadGauge | Download & Transfer Calculators",
    template: "%s | DownloadGauge",
  },

  description:
    "Free online download time and download speed calculators. Calculate how long a file will take to download or what internet speed you need for a specific download time.",

  applicationName: "DownloadGauge",

  other: {
  "google-adsense-account": "ca-pub-9719119056514637",
      },

  authors: [
    {
      name: "Muhammad Ahmad",
    },
  ],

  creator: "Muhammad Ahmad",
  publisher: "DownloadGauge",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    siteName: "DownloadGauge",
    title: "DownloadGauge | Download & Transfer Calculators",
    description:
      "Free online download time and download speed calculators. Calculate download times and the internet speed required for your downloads.",
    url: "https://downloadgauge.com/",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "DownloadGauge | Download & Transfer Calculators",
    description:
      "Free online download time and download speed calculators. Calculate download times and the internet speed required for your downloads.",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}