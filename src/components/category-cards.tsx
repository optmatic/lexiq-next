"use client";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";

// Define the type for each item
interface CategoryItem {
  slug: string;
  title: string;
  description?: string;
}

// Define the type for the categoriesData prop
interface CategoryCardsProps {
  categoriesData: Record<string, CategoryItem[]>;
}

export default function CategoryCards({ categoriesData }: CategoryCardsProps) {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {Object.entries(categoriesData).map(([category, items]) => (
        <Card
          key={category}
          className="bg-white border rounded-md border-slate-900 transition-shadow duration-200 hover:shadow-lg relative overflow-hidden min-h-[320px] flex flex-col"
          style={{ borderImage: "none" }}
          onClick={() => router.push(`/docs/${category}`)}
          tabIndex={0}
          role="button"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              router.push(`/docs/${category}`);
            }
          }}
        >
          <CardContent className="p-4 relative z-10 flex flex-col flex-1">
            <h3 className="pl-2 text-lg font-bold text-slate-900 mb-4">
              {category
                .replace(/-/g, " ")
                .replace(/\b\w/g, (l) => l.toUpperCase())}
            </h3>
            <ul className="space-y-2 flex-1">
              {(items as CategoryItem[]).slice(0, 3).map((item) => (
                <li key={item.slug} onClick={(e) => e.stopPropagation()}>
                  <Link
                    href={`/docs/${item.slug}`}
                    className="block group/item transition-colors duration-200  hover:bg-lime-50/90 cursor-pointer rounded-none px-2 py-1 "
                  >
                    <span className="font-light">{item.title}</span>
                    {item.description && (
                      <span className="block text-xs text-gray-500 mt-1">
                        {item.description}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-3 border-t border-gray-100">
              <Link
                href={`/docs/${category}`}
                className="text-sm font-medium text-lime-700 hover:text-lime-800 hover:underline flex items-center"
                onClick={(e) => e.stopPropagation()}
              >
                See all {(items as CategoryItem[]).length} terms
                <ArrowRight className="ml-1 w-3 h-3" />
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
