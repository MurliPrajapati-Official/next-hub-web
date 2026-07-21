"use client";

import * as React from "react";
import { SearchHero } from "@/components/home/SearchHero";
import { CategoryFilters } from "@/components/home/CategoryFilters";
import { ResourceGrid } from "@/components/home/ResourceGrid";

export default function Home() {
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [sortBy, setSortBy] = React.useState("popular");
  const [activeType, setActiveType] = React.useState("All");
  const [activeDifficulty, setActiveDifficulty] = React.useState("All");
  const [activePricing, setActivePricing] = React.useState("All");

  return (
    <>
      <SearchHero />
      <div className="w-full px-4 md:px-8 py-10 flex flex-col md:flex-row gap-8">
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
        
        <main className="flex-1 min-w-0 space-y-12">
          <ResourceGrid 
            title={activeCategory === "All" ? "Featured Resources" : `${activeCategory} Resources`} 
            category={activeCategory} 
            sortBy={sortBy}
            type={activeType}
            difficulty={activeDifficulty}
            pricing={activePricing}
          />
          {activeCategory === "All" && activeType === "All" && activeDifficulty === "All" && activePricing === "All" && (
            <ResourceGrid title="Newest Additions" category="All" sortBy="latest" />
          )}
        </main>
      </div>
    </>
  );
}
