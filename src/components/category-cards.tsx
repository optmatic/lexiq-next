"use client";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  BookOpen,
  Globe,
  Shield,
  TrendingUp,
  Users,
  FileText,
  Target,
} from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";

// Define the type for each item
interface CategoryItem {
  slug: string;
  title: string;
  description?: string;
}

interface CategoryMeta {
  title: string;
  icon?: string;
  description?: string;
}

// Define the type for the categoriesData prop
interface CategoryCardsProps {
  categoriesData: Record<string, CategoryItem[]>;
  categoryMeta: Record<string, CategoryMeta>;
}

// Lucide icon map for string lookup
const lucideIconMap: Record<string, React.ElementType> = {
  Globe,
  BookOpen,
  Shield,
  TrendingUp,
  Users,
  FileText,
  Target,
};

function renderCategoryIcon(icon?: string, fallbackIcon?: React.ElementType) {
  if (!icon)
    return fallbackIcon
      ? React.createElement(fallbackIcon, {
          className: "w-8 h-8 text-lime-600",
        })
      : null;
  // Emoji (short, non-alphabetic string)
  if (icon && icon.length <= 3 && !/^[a-zA-Z]+$/.test(icon)) {
    return (
      <span className="text-2xl" aria-hidden>
        {icon}
      </span>
    );
  }
  // Lucide icon name
  const LucideIcon = lucideIconMap[icon];
  if (LucideIcon) return <LucideIcon className="w-8 h-8 text-lime-600" />;
  // Fallback
  return fallbackIcon
    ? React.createElement(fallbackIcon, { className: "w-8 h-8 text-lime-600" })
    : null;
}

// Icon mapping for categories (fallback)
const getCategoryIcon = (category: string) => {
  const categoryLower = category.toLowerCase();
  if (
    categoryLower.includes("global") ||
    categoryLower.includes("international")
  )
    return Globe;
  if (categoryLower.includes("policy") || categoryLower.includes("analysis"))
    return Target;
  if (categoryLower.includes("media") || categoryLower.includes("news"))
    return FileText;
  if (categoryLower.includes("digital") || categoryLower.includes("democracy"))
    return TrendingUp;
  if (categoryLower.includes("healthcare") || categoryLower.includes("reform"))
    return Shield;
  if (categoryLower.includes("auspol") || categoryLower.includes("australian"))
    return Users;
  return BookOpen;
};

export default function CategoryCards({
  categoriesData,
  categoryMeta,
}: CategoryCardsProps) {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {Object.entries(categoriesData).map(([category, items], index) => {
        const meta = categoryMeta[category] || {};
        const fallbackIcon = getCategoryIcon(category);
        return (
          <Card
            key={category}
            className="category-card group bg-white border border-slate-200 transition-all duration-300 hover:shadow-xl hover:shadow-lime-100/50 hover:border-lime-300 relative overflow-hidden min-h-[320px] flex flex-col transform hover:-translate-y-1"
            style={{
              borderImage: "none",
            }}
            onClick={() => router.push(`/docs/${category}`)}
            tabIndex={0}
            role="button"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                router.push(`/docs/${category}`);
              }
            }}
          >
            {/* Subtle gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-lime-50/0 to-emerald-50/0 group-hover:from-lime-50/30 group-hover:to-emerald-50/30 transition-all duration-300 pointer-events-none" />

            {/* Category icon */}
            <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
              {renderCategoryIcon(meta.icon, fallbackIcon)}
            </div>

            <CardContent className="p-6 relative z-10 flex flex-col flex-1">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-lime-800 transition-colors duration-300">
                  {meta.title ||
                    category
                      .replace(/-/g, " ")
                      .replace(/\b\w/g, (l) => l.toUpperCase())}
                </h3>
                <div className="w-8 h-0.5 bg-gradient-to-r from-lime-400 to-emerald-400 rounded-full group-hover:w-12 transition-all duration-300" />
              </div>

              <ul className="space-y-2 flex-1">
                {(items as CategoryItem[])
                  .slice(0, 3)
                  .map((item, itemIndex) => (
                    <li key={item.slug} onClick={(e) => e.stopPropagation()}>
                      <Link
                        href={`/docs/${item.slug}`}
                        className="category-item block group/item transition-all duration-300 cursor-pointer rounded-md px-3 py-2 hover:bg-lime-50 hover:shadow-sm hover:shadow-lime-100/50 focus:shadow-sm focus:shadow-lime-100/50 hover:text-lime-900 border border-transparent hover:border-lime-200"
                      >
                        <span className="font-medium text-sm">
                          {item.title}
                        </span>
                        {item.description && (
                          <span className="block text-xs text-gray-500 mt-1 leading-relaxed">
                            {item.description}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-gray-100 group-hover:border-lime-200 transition-colors duration-300">
                <Link
                  href={`/docs/${category}`}
                  className="text-sm font-medium text-lime-700 hover:text-lime-800 flex items-center group/link transition-all duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="group-hover/link:underline">
                    See all {(items as CategoryItem[]).length} terms
                  </span>
                  <ArrowRight className="ml-2 w-3 h-3 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
