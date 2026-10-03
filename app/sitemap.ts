import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://downloadgauge.com/",
      lastModified: new Date(),
    },
    {
      url: "https://downloadgauge.com/download-time-calculator/",
      lastModified: new Date(),
    },
    {
      url: "https://downloadgauge.com/download-speed-calculator/",
      lastModified: new Date(),
    },
    {
      url: "https://downloadgauge.com/guides/how-long-does-1gb-take-to-download/",
      lastModified: new Date(),
    },
    {
      url: "https://downloadgauge.com/guides/how-long-does-10gb-take-to-download/",
      lastModified: new Date(),
    },
    {
      url: "https://downloadgauge.com/about/",
      lastModified: new Date(),
    },
    {
      url: "https://downloadgauge.com/privacy-policy/",
      lastModified: new Date(),
    },
    {
      url: "https://downloadgauge.com/terms-of-use/",
      lastModified: new Date(),
    },
    {
      url: "https://downloadgauge.com/disclaimer/",
      lastModified: new Date(),
    },
    {
      url: "https://downloadgauge.com/contact/",
      lastModified: new Date(),
    },
  ];
}