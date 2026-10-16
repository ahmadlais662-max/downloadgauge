import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download Speed Calculator",
  description:
    "Calculate the internet download speed you need to download a file within a specific amount of time. Get a quick and accurate required speed estimate.",

  alternates: {
    canonical: "/download-speed-calculator",
  },

  openGraph: {
    title: "Download Speed Calculator | DownloadGauge",
    description:
      "Calculate the internet download speed you need to download a file within a specific amount of time. Get a quick and accurate required speed estimate.",
    url: "/download-speed-calculator",
    type: "website",
  },
};

export default function DownloadSpeedCalculatorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}