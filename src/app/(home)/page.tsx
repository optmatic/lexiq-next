// removed 'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Globe,
  ArrowRight,
  Zap,
  Shield,
  Target,
  Cpu,
  Network,
  Database,
  BarChart3,
  TrendingUp,
  Users,
  FileText,
} from "lucide-react";
import Link from "next/link";
import { Inter, Crimson_Text } from "next/font/google";
import { SearchBar } from "@/components/search-bar";
import { getCategoriesAndItems } from "@/lib/getCategories";

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

export default function LexiqLanding() {
  // Dynamically get categories and items
  const categoriesData = getCategoriesAndItems();

  return (
    <div
      className={`${inter.variable} ${crimson.variable} min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900`}
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 flex items-center justify-center brutalist-bg">
        <div className="relative max-w-4xl mx-auto px-4 py-12 w-full text-center">
          <Badge className="mb-6 theme-gradient-light px-2 py-1 border border-black shadow-sm text-black font-mono text-xs tracking-wider">
            <Zap className="w-3 h-3 mr-2 text-lime-600" />
            Politics, Decoded
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-semibold text-white mb-6 leading-tight font-heading">
            Your Modern{" "}
            <span className="theme-gradient-dark bg-clip-text text-transparent animate-gradient">
              Political Lexicon
            </span>
          </h1>
          <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
            Cut through the political noise with clear, unbiased definitions of
            contemporary terms. Multiple perspectives, real-world context, and
            the clarity you need to understand today&apos;s political landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/docs">
              <Button
                size="lg"
                className="group cursor-pointer relative overflow-hidden theme-gradient-light hover:from-lime-300 hover:to-green-300 text-black font-semibold border-2 border-black shadow-sm transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  Start Exploring
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Minimalist Categories Section */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 font-heading">
              Explore Categories
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Navigate through curated collections of political terminology,
              organized by theme and context.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(categoriesData).map(([category, items]) => (
              <Card key={category} className="bg-white border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">
                    {category
                      .replace(/-/g, " ")
                      .replace(/\b\w/g, (l) => l.toUpperCase())}
                  </h3>
                  <ul className="space-y-2">
                    {items.slice(0, 3).map((item) => (
                      <li key={item.slug}>
                        <Link
                          href={`/docs/${item.slug}`}
                          className="block group"
                        >
                          <span className="font-medium text-lime-700 group-hover:underline">
                            {item.title}
                          </span>
                          {item.description && (
                            <span className="block text-xs text-gray-500 mt-1">
                              {item.description}
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {items.length > 3 && (
                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <Link
                        href={`/docs/${category}`}
                        className="text-sm font-medium text-lime-700 hover:text-lime-800 hover:underline flex items-center"
                      >
                        See all {items.length} terms
                        <ArrowRight className="ml-1 w-3 h-3" />
                      </Link>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/docs">
              <Button
                size="lg"
                className="theme-gradient-dark text-white font-semibold border-2 border-black shadow-sm transition-all duration-300 mt-6"
              >
                Browse All Terms
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
