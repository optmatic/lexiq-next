// removed 'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  // BookOpen,
  // Globe,
  ArrowRight,
  Zap,
  // Shield,
  // Target,
  // Cpu,
  // Network,
  // Database,
  // BarChart3,
  // TrendingUp,
  // Users,
  // FileText,
  Globe,
} from "lucide-react";
import Link from "next/link";
import { Inter, Crimson_Text } from "next/font/google";
// import { SearchBar } from "@/components/search-bar";
import { getCategoriesAndItems } from "@/lib/getCategories";
import CategoryCards from "@/components/category-cards";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-crimson",
});

export const metadata: Metadata = {
  title: "Lexiq - Your Modern Political Lexicon",
  description:
    "Cut through the political noise with clear, unbiased definitions of contemporary political terms. Explore our comprehensive political lexicon organized by categories.",
  keywords: [
    "political terms",
    "political lexicon",
    "political definitions",
    "democracy",
    "politics",
    "political education",
    "political vocabulary",
  ],
  openGraph: {
    title: "Lexiq - Your Modern Political Lexicon",
    description:
      "Cut through the political noise with clear, unbiased definitions of contemporary political terms.",
    url: "https://lexiq.com",
    siteName: "Lexiq",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lexiq - Political Lexicon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lexiq - Your Modern Political Lexicon",
    description:
      "Cut through the political noise with clear, unbiased definitions of contemporary political terms.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function LexiqLanding() {
  // Dynamically get categories and items
  const { categories, categoryMeta } = getCategoriesAndItems();

  // Structured data for the homepage
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Lexiq",
    description:
      "Your Modern Political Lexicon - Cut through the political noise with clear, unbiased definitions of contemporary political terms.",
    url: "https://lexiq.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://lexiq.com/docs?search={search_term_string}",
      "query-input": "required name=search_term_string",
    },
    publisher: {
      "@type": "Organization",
      name: "Optimatic",
      url: "https://optimatic.com.au",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div
        className={`${inter.variable} ${crimson.variable} min-h-screen flex flex-col`}
      >
        <main className="flex-1 flex flex-col">
          {/* Hero Section */}
          <section className="relative overflow-hidden py-20 flex items-center justify-center gradient-background">
            <div className="relative max-w-4xl mx-auto px-4 py-12 w-full text-center">
              <Badge className="mb-6 bg-gradient-to-r from-lime-200 to-emerald-200 px-2 py-1 border border-black shadow-sm text-black font-mono text-xs tracking-wider">
                <Zap className="w-3 h-3 mr-2 text-lime-600" />
                Politics, Decoded
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-semibold text-white mb-4 leading-tight font-heading">
                Your Modern{" "}
                <span className="bg-gradient-to-r from-lime-400 to-emerald-500 bg-clip-text text-transparent animate-gradient">
                  Political Lexicon
                </span>
              </h1>
              <p className="text-base text-white mb-8 max-w-3xl mx-auto leading-normal font-light">
                Cut through the political noise with clear, unbiased definitions
                of contemporary terms.
              </p>
              {/* <div className="flex justify-center items-center md:ml-2">
                <a
                  href="/docs"
                  className="relative inline-flex items-center px-6 py-2 font-heading text-xl text-white transition-all duration-300 group animate-pulse hover:shadow-[0_0_16px_4px_rgba(217,249,157,0.7)] focus:shadow-[0_0_16px_4px_rgba(217,249,157,0.7)]"
                  style={{
                    letterSpacing: "0.03em",
                  }}
                >
                  Explore
                  <ArrowRight className="ml-2 w-6 h-6 transition-transform duration-200 group-hover:translate-x-1" />
                  <span className="absolute left-0 -bottom-1 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-lime-200 to-emerald-200 rounded" />
                </a>
              </div> */}
            </div>
          </section>

          {/* Enhanced Categories Section */}
          <section className="relative py-20 bg-white overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 brutalist-bg opacity-30" />

            {/* Floating accent elements */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-lime-100/20 to-emerald-100/20 rounded-full blur-3xl animate-pulse floating-accent" />
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-tl from-lime-100/20 to-emerald-100/20 rounded-full blur-2xl animate-pulse delay-1000 floating-accent" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                {/* Animated Globe Icon */}
                <div className="flex justify-center mb-6">
                  <span className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-lime-200 to-emerald-200 shadow-lg">
                    <Globe className="w-10 h-10 text-slate-800 animate-spin-slow" />
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 font-heading">
                  Explore Categories
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                  Navigate through curated collections of political terminology,
                  organized by theme and context for deeper understanding.
                </p>
                <div className="mt-6 flex justify-center">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-lime-400 to-transparent" />
                </div>
              </div>

              <div className="relative">
                <CategoryCards
                  categoriesData={categories}
                  categoryMeta={categoryMeta}
                />
              </div>
            </div>
          </section>
        </main>
        {/* Footer pill at the bottom */}
        <footer className="w-full flex justify-center mt-auto pt-10 pb-6 sm:pb-8">
          <div className="px-6 py-2 rounded-xl bg-gradient-to-r from-lime-200 to-emerald-200 shadow-md border border-lime-100 text-gray-700 text-sm font-medium flex items-center">
            Built by{" "}
            <a
              href="https://optimatic.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 italic font-black hover:text-lime-700"
            >
              optimatic
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
