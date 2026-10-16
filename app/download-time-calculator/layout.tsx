import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download Time Calculator",
  description:
    "Calculate how long a file will take to download based on its size and internet speed. Get a quick and accurate download time estimate for any file.",
  alternates: {
  canonical: "/download-time-calculator",
  },
  openGraph: {
    title: "Download Time Calculator | DownloadGauge",
    description:
      "Calculate how long a file will take to download based on its size and internet speed. Get a quick and accurate download time estimate for any file.",
    url: "/download-time-calculator",
    type: "website",
  },
};

export default function DownloadTimeCalculatorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}