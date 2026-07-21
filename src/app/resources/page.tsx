"use client";

import React, { useState } from "react";
import { CategoryFilters } from "@/components/home/CategoryFilters";
import { ResourceGrid } from "@/components/home/ResourceGrid";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const [activeType, setActiveType] = useState("All");
  const [activeDifficulty, setActiveDifficulty] = useState("All");
  const [activePricing, setActivePricing] = useState("All");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSortQuery(searchInput);
  };

  const setSortQuery = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-surface border-b border-border py-12">
        <div className="w-full px-4 md:px-8">
          <h1 className="text-4xl font-bold font-sans tracking-tight mb-6">Resource Explorer</h1>
          <p className="text-foreground/70 font-mono text-sm mb-8 leading-relaxed">
            // Discover, bookmark, and share the best technical resources across the web.
          </p>
          
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-foreground/50" />
              </div>
              <Input 
                type="search" 
                className="pl-10 h-12 w-full bg-background border-border" 
                placeholder="Search libraries, frameworks, tutorials..." 
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </div>
            <Button type="submit" className="h-12 px-8">
              Search
            </Button>
          </form>
        </div>
      </div>

      <div className="w-full px-4 md:px-8 py-10 flex flex-col md:flex-row gap-8 flex-grow">
        <aside className="w-full md:w-64 shrink-0">
          <div className="sticky top-20 space-y-4">
            <h3 className="font-bold text-xs uppercase tracking-widest text-foreground/40 font-mono">// Controls</h3>
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
