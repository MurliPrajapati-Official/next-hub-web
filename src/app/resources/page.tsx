"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { CategoryFilters } from "@/components/home/CategoryFilters";
import { ResourceGrid } from "@/components/home/ResourceGrid";
import { Search } from "lucide-react";
import { SearchAutocomplete } from "@/components/ui/SearchAutocomplete";

function ResourcesContent() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";

  const [activeCategory, setActiveCategory] = useState("All");
  const [searchInput, setSearchInput] = useState(q);
  const [searchQuery, setSearchQuery] = useState(q);
  const [sortBy, setSortBy] = useState("popular");
  const [activeType, setActiveType] = useState("All");
  const [activeDifficulty, setActiveDifficulty] = useState("All");
  const [activePricing, setActivePricing] = useState("All");

  useEffect(() => {
    if (q) {
      setSearchInput(q);
      setSearchQuery(q);
    }
  }, [q]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(searchInput);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="border-b border-border py-12">
        <div className="w-full px-4 md:px-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Resource Explorer</h1>
          <p className="text-foreground/50 text-lg mb-8 leading-relaxed">
            Discover, bookmark, and share the best technical resources across the web.
          </p>

          <SearchAutocomplete 
            value={searchInput} 
            onChange={(val) => {
              setSearchInput(val);
              setSearchQuery(val);
            }} 
          />

          <div className="flex items-center gap-4 sm:gap-6 text-sm font-medium text-foreground/40 mt-8 flex-wrap">
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/60" /> 12,483 Resources</span>
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500/60" /> 324 Categories</span>
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500/60" /> 96,000 Members</span>
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500/60" /> Updated Daily</span>
          </div>
        </div>
      </div>

      <div className="w-full px-4 md:px-8 py-10 flex flex-col md:flex-row gap-8 flex-grow">
        <aside className="w-full md:w-64 shrink-0">
          <div className="sticky top-20 space-y-4">
            <CategoryFilters
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
              activeType={activeType}
              onSelectType={setActiveType}
              activeDifficulty={activeDifficulty}
              onSelectDifficulty={setActiveDifficulty}
              activePricing={activePricing}
              onSelectPricing={setActivePricing}
              activeSort={sortBy}
              onSelectSort={setSortBy}
            />
          </div>
        </aside>

        <main className="flex-1 min-w-0">
          <ResourceGrid
            title={searchQuery ? `Search Results for "${searchQuery}"` : `${activeCategory === "All" ? "All" : activeCategory} Resources`}
            category={activeCategory}
            searchQuery={searchQuery}
            sortBy={sortBy}
            type={activeType}
            difficulty={activeDifficulty}
            pricing={activePricing}
          />
        </main>
      </div>
    </div>
  );
}

export default function ResourcesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="rolling-rock-loader"></div></div>}>
      <ResourcesContent />
    </Suspense>
  );
}
