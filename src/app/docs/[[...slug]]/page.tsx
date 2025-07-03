import { source } from "@/lib/source";
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { getMDXComponents } from "@/mdx-components";
import type { Metadata } from "next";

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDXContent = page.data.body;

  // Generate structured data for the page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.data.title,
    description: page.data.description,
    author: {
      "@type": "Organization",
      name: "Optimatic",
    },
    publisher: {
      "@type": "Organization",
      name: "Lexiq",
      url: "https://lexiq.com",
    },
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://lexiq.com/docs/${params.slug?.join("/") || ""}`,
    },
    articleSection: params.slug?.[0] || "Political Terms",
    keywords: ["political terms", "politics", "democracy"],
    url: `https://lexiq.com/docs/${params.slug?.join("/") || ""}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <DocsPage toc={page.data.toc} full={page.data.full}>
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription>{page.data.description}</DocsDescription>
        <DocsBody>
          <MDXContent
            components={getMDXComponents({
              // this allows you to link to other pages with relative file paths
              a: createRelativeLink(source, page),
            })}
          />
        </DocsBody>
      </DocsPage>
    </>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const url = `https://lexiq.com/docs/${params.slug?.join("/") || ""}`;
  const category = params.slug?.[0] || "Political Terms";

  return {
    title: page.data.title,
    description: page.data.description,
    keywords: [
      "political terms",
      "politics",
      "democracy",
      category.toLowerCase(),
    ],
    authors: [{ name: "Optimatic" }],
    openGraph: {
      title: page.data.title,
      description: page.data.description,
      url: url,
      siteName: "Lexiq",
      type: "article",
      locale: "en_US",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: page.data.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.data.title,
      description: page.data.description,
      images: ["/og-image.jpg"],
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
