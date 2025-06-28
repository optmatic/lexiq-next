"use client";

import { useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  SearchDialog,
  SearchDialogContent,
  SearchDialogInput,
  SearchDialogList,
  SearchDialogListItem,
} from "fumadocs-ui/components/dialog/search";
import { useDocsSearch } from "fumadocs-core/search/client";

export function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const { query } = useDocsSearch(
    {
      type: "fetch",
      api: "/api/search",
    },
    searchQuery
  );

  const handleSearch = (query: string) => {
    if (!query.trim()) return;
    setSearchQuery(query);
    setIsOpen(true);
  };

  return (
    <>
      <div className="max-w-2xl mx-auto mb-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            placeholder='Search political terms... (e.g., "deep state", "Abraham Accords")'
            className="pl-12 pr-4 py-4 text-lg bg-white/10 border-2 border-white/20 text-white placeholder:text-gray-400 focus:border-lime-400 focus:bg-white/20 backdrop-blur-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch(searchQuery);
              }
            }}
          />
          <Button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-lime-400 hover:bg-lime-500 text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            onClick={() => handleSearch(searchQuery)}
          >
            Search
          </Button>
        </div>
      </div>

      <SearchDialog
        open={isOpen}
        onOpenChange={setIsOpen}
        search={searchQuery}
        onSearchChange={setSearchQuery}
        isLoading={query.isLoading}
      >
        <SearchDialogContent className="max-w-2xl">
          <SearchDialogInput
            placeholder="Search political terms..."
            className="text-lg"
          />
          <SearchDialogList
            items={query.data === "empty" ? [] : query.data}
            Empty={() => (
              <div className="text-center py-8 text-gray-500">
                <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p>No results found for "{searchQuery}"</p>
                <p className="text-sm">Try searching for different terms</p>
              </div>
            )}
            Item={({ item, onClick }) => (
              <SearchDialogListItem
                item={item}
                onClick={onClick}
                className="p-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {item.type === "page"
                        ? "Page"
                        : item.type === "heading"
                        ? "Heading"
                        : "Text"}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {item.content}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </div>
              </SearchDialogListItem>
            )}
          />
        </SearchDialogContent>
      </SearchDialog>
    </>
  );
}
