import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/merchant-services", "/contact", "/privacy", "/terms"];
  return routes.map((route) => ({ url: `https://cinarmerchant.com${route}`, lastModified: new Date(), changeFrequency: route === "" ? "weekly" : "monthly", priority: route === "" ? 1 : 0.7 }));
}
