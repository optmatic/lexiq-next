import { MetadataRoute } from "next";
import { source } from "@/lib/source";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://lexiq.com";

  // Get all pages from the source
  const allPages = source.getPages();

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ];

  // Dynamic pages from MDX content
  const dynamicPages = allPages.map((page) => {
    const slug = page.slugs.join("/");
    return {
      url: `${baseUrl}/docs/${slug}`,
      lastModified: new Date(), // You could add actual lastModified data to your MDX frontmatter
      changeFrequency: "monthly" as const,
      priority: 0.8,
    };
  });

  return [...staticPages, ...dynamicPages];
}
