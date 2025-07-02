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
} from "lucide-react";
import Link from "next/link";
import { Inter, Crimson_Text } from "next/font/google";
// import { SearchBar } from "@/components/search-bar";
import { getCategoriesAndItems } from "@/lib/getCategories";
import CategoryCards from "@/components/category-cards";

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
    <div className={`${inter.variable} ${crimson.variable} min-h-screen`}>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 flex items-center justify-center gradient-background">
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
          <p className="text-base text-white mb-8 max-w-3xl mx-auto leading-normal font-light">
            Cut through the political noise with clear, unbiased definitions of
            contemporary terms. Multiple perspectives, real-world context, and
            the clarity you need to understand today&apos;s political landscape.
          </p>
          <div className="flex justify-center items-center md:ml-2">
            <a
              href="/docs"
              className="relative inline-flex items-center px-6 py-2 font-heading text-xl text-white transition-all duration-300 group animate-pulse hover:shadow-[0_0_16px_4px_rgba(217,249,157,0.7)] focus:shadow-[0_0_16px_4px_rgba(217,249,157,0.7)]"
              style={{
                letterSpacing: "0.03em",
              }}
            >
              Explore
              <ArrowRight className="ml-2 w-6 h-6 transition-transform duration-200 group-hover:translate-x-1" />
              <span className="absolute left-0 -bottom-1 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 theme-gradient-light rounded" />
            </a>
          </div>
        </div>
      </section>

      {/* Minimalist Categories Section */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 font-heading">
              Categories
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Navigate through curated collections of political terminology,
              organized by theme and context.
            </p>
          </div>
          <CategoryCards categoriesData={categoriesData} />
        </div>
      </section>
    </div>
  );
}
