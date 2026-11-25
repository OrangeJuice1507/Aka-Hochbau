import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const pages: { path: string; priority: number; changeFrequency: "monthly" | "yearly" }[] = [
  { path: "", priority: 1, changeFrequency: "monthly" },
  { path: "/leistungen", priority: 0.9, changeFrequency: "monthly" },
  { path: "/projekte", priority: 0.8, changeFrequency: "monthly" },
  { path: "/unternehmen", priority: 0.7, changeFrequency: "yearly" },
  { path: "/karriere", priority: 0.7, changeFrequency: "monthly" },
  { path: "/kontakt", priority: 0.8, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((p) => ({
    url: `${site.url}${p.path}`,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
