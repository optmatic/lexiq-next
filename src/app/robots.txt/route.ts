import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const robotsTxt = `# Allow all crawlers
User-agent: *
Allow: /

# Sitemap location
Sitemap: https://lexiq.com/sitemap.xml

# Crawl-delay for polite crawling
Crawl-delay: 1

# Disallow admin or private areas (if any)
Disallow: /api/
Disallow: /_next/
Disallow: /admin/

# Allow important pages
Allow: /docs/
Allow: /search`;

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
