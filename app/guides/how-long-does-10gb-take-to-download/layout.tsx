import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/guides/how-long-does-10gb-take-to-download/",
  },
};

export default function TenGbGuideLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}