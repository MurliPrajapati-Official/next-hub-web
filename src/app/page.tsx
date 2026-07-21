"use client";

import * as React from "react";
import { Flame, Rocket, ArrowRight } from "lucide-react";
import { SearchHero } from "@/components/home/SearchHero";
import { CategoryFilters } from "@/components/home/CategoryFilters";
import { ResourceGrid } from "@/components/home/ResourceGrid";
import { ResourceCard } from "@/components/ui/ResourceCard";
import { filterResources } from "@/data/resources";

export default function Home() {
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [sortBy, setSortBy] = React.useState("popular");
  const [activeType, setActiveType] = React.useState("All");
  const [activeDifficulty, setActiveDifficulty] = React.useState("All");
  const [activePricing, setActivePricing] = React.useState("All");
  const [searchQuery, setSearchQuery] = React.useState("");

  const trendingResources = filterResources({ sort: "popular" }).slice(0, 5);
  const newResources = filterResources({ sort: "latest" }).slice(0, 4);

  const isDefaultFilters =
    activeCategory === "All" &&
    activeType === "All" &&
    activeDifficulty === "All" &&
    activePricing === "All" &&
    !searchQuery;

  return (
    <>
      <SearchHero
        onSearch={setSearchQuery}
        onCategorySelect={setActiveCategory}
      />

      {/* Discovery Sections — only when no filters are active */}
      {isDefaultFilters && (
        <div className="container-main space-y-12 pb-8">
          {/* Trending Today */}
          <section>
            <div className="flex items-center justify-between mb-5">
              <h2 className="flex items-center gap-2 text-lg font-bold">
                <div className="h-7 w-7 rounded-lg bg-orange-500/15 flex items-center justify-center">
                  <Flame className="w-4 h-4 text-orange-400" />
                </div>
                Trending Today
              </h2>
              <button className="flex items-center gap-1 text-xs font-medium text-foreground/40 hover:text-foreground transition-colors cursor-pointer">
                View all
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2 -mx-1.5 px-1.5 scrollbar-thin">
              {trendingResources.map((resource) => (
                <div key={resource.id} className="min-w-[300px] max-w-[340px] flex-shrink-0">
                  <ResourceCard resource={resource} />
                </div>
              ))}
            </div>
          </section>

          {/* Newly Added */}
          <section>
            <div className="flex items-center justify-between mb-5">
              <h2 className="flex items-center gap-2 text-lg font-bold">
                <div className="h-7 w-7 rounded-lg bg-cyan-500/15 flex items-center justify-center">
                  <Rocket className="w-4 h-4 text-cyan-400" />
                </div>
                Newly Added
              </h2>
              <button className="flex items-center gap-1 text-xs font-medium text-foreground/40 hover:text-foreground transition-colors cursor-pointer">
                View all
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {newResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </section>
        </div>
      )}

      {/* Main content: Filters + Resources */}
      <div id="search-results" className="container-main py-10 flex flex-col md:flex-row gap-8 scroll-mt-24">
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

        <main className="flex-1 min-w-0 space-y-12">
          <ResourceGrid
            title={activeCategory === "All" ? "All Resources" : `${activeCategory} Resources`}
            category={activeCategory}
            searchQuery={searchQuery}
            sortBy={sortBy}
            type={activeType}
            difficulty={activeDifficulty}
            pricing={activePricing}
          />
        </main>
      </div>
    </>
  );
}
