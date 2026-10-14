import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/guides/how-long-does-1gb-take-to-download",
  },
};

export default function OneGbGuideLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}