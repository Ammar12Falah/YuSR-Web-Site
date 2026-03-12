import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://yusr.ai"; // Update to your actual domain
  return [
    { url: base, lastModified: new Date(), priority: 1.0 },
    { url: `${base}/products/yusr-model`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/products/lithogpt`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/products/genni`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/about`, lastModified: new Date(), priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), priority: 0.6 },
  ];
}
