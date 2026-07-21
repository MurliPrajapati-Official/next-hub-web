"use client";

import * as React from "react";
import { SlidersHorizontal, ChevronDown, ChevronUp } from "lucide-react";

const categories = [
  "All",
  "GitHub",
  "AI",
  "Learning",
  "Roadmaps",
  "UI Kits",
  "Design",
  "Backend",
  "Frontend",
  "DevOps",
  "Cloud",
  "Security",
  "Open Source",
  "Databases",
  "Interview",
];

const types = [
  { value: "All", label: "All Formats" },
  { value: "github", label: "GitHub Repos" },
  { value: "documentation", label: "Documentation" },
  { value: "course", label: "Courses" },
  { value: "cheatsheet", label: "Cheat Sheets" },
  { value: "library", label: "Libraries / Frameworks" },
  { value: "aitool", label: "AI Tools" },
];

const difficulties = [
  { value: "All", label: "All Levels" },
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
];

const pricingOptions = [
  { value: "All", label: "All Models" },
  { value: "free", label: "Free / Open Source" },
  { value: "freemium", label: "Freemium" },
  { value: "paid", label: "Paid" },
];

const sortOptions = [
  { value: "popular", label: "Popularity" },
  { value: "rating", label: "Top Rated" },
  { value: "latest", label: "Latest" },
  { value: "oldest", label: "Oldest" },
];

interface CategoryFiltersProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  activeType: string;
  onSelectType: (type: string) => void;
  activeDifficulty: string;
  onSelectDifficulty: (difficulty: string) => void;
  activePricing: string;
  onSelectPricing: (pricing: string) => void;
  activeSort: string;
  onSelectSort: (sort: string) => void;
}

export function CategoryFilters({
  activeCategory,
  onSelectCategory,
  activeType,
  onSelectType,
  activeDifficulty,
  onSelectDifficulty,
  activePricing,
  onSelectPricing,
  activeSort,
  onSelectSort,
}: CategoryFiltersProps) {
  const [isMobileExpanded, setIsMobileExpanded] = React.useState(false);

  // Helper to count active filter/sorting modifications (ignoring default "All" and "popular")
  const getActiveFiltersCount = () => {
    let count = 0;
    if (activeCategory !== "All") count++;
    if (activeType !== "All") count++;
    if (activeDifficulty !== "All") count++;
    if (activePricing !== "All") count++;
    if (activeSort !== "popular") count++;
    return count;
  };

  const activeCount = getActiveFiltersCount();

  const filterContent = (
    <div className="space-y-6 w-full">
      {/* Category Dropdown */}
      <div className="space-y-2">
        <label htmlFor="category-select" className="text-xs font-mono text-foreground/50 uppercase tracking-widest block">
          Topic / Category
        </label>
        <select
          id="category-select"
          value={activeCategory}
          onChange={(e) => onSelectCategory(e.target.value)}
          className="w-full h-10 px-3 border border-border bg-surface text-foreground text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all cursor-pointer"
        >
          {categories.map((category) => (
            <option key={category} value={category} className="bg-surface text-foreground">
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Content Type Dropdown */}
      <div className="space-y-2">
        <label htmlFor="type-select" className="text-xs font-mono text-foreground/50 uppercase tracking-widest block">
          Format / Type
        </label>
        <select
          id="type-select"
          value={activeType}
          onChange={(e) => onSelectType(e.target.value)}
          className="w-full h-10 px-3 border border-border bg-surface text-foreground text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all cursor-pointer"
        >
          {types.map((type) => (
            <option key={type.value} value={type.value} className="bg-surface text-foreground">
              {type.label}
            </option>
          ))}
        </select>
      </div>

      {/* Difficulty Level Options */}
      <div className="space-y-2">
        <span className="text-xs font-mono text-foreground/50 uppercase tracking-widest block">
          Difficulty Level
        </span>
        <div className="grid grid-cols-2 gap-1.5">
          {difficulties.map((diff) => {
            const isActive = activeDifficulty === diff.value;
            return (
              <button
                key={diff.value}
                type="button"
                onClick={() => onSelectDifficulty(diff.value)}
                className={`px-2 py-2 text-xs font-medium border rounded-md transition-all text-center truncate cursor-pointer ${
                  isActive
                    ? "bg-primary border-primary text-[#F3F3F3] font-semibold"
                    : "bg-surface border-border text-foreground/70 hover:bg-surface/75 hover:text-foreground"
                }`}
              >
                {diff.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Pricing / Access Model Options */}
      <div className="space-y-2">
        <span className="text-xs font-mono text-foreground/50 uppercase tracking-widest block">
          Access / Model
        </span>
        <div className="grid grid-cols-2 gap-1.5">
          {pricingOptions.map((price) => {
            const isActive = activePricing === price.value;
            return (
              <button
                key={price.value}
                type="button"
                onClick={() => onSelectPricing(price.value)}
                className={`px-2 py-2 text-xs font-medium border rounded-md transition-all text-center truncate cursor-pointer ${
                  isActive
                    ? "bg-primary border-primary text-[#F3F3F3] font-semibold"
                    : "bg-surface border-border text-foreground/70 hover:bg-surface/75 hover:text-foreground"
                }`}
                title={price.label}
              >
                {price.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Sort Order Options */}
      <div className="space-y-2 pt-4 border-t border-border/40">
        <span className="text-xs font-mono text-foreground/50 uppercase tracking-widest block">
          Sort Order
        </span>
        <div className="grid grid-cols-2 gap-1.5">
          {sortOptions.map((option) => {
            const isActive = activeSort === option.value;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => onSelectSort(option.value)}
                className={`px-2 py-2 text-xs font-medium border rounded-md transition-all text-center truncate cursor-pointer ${
                  isActive
                    ? "bg-primary border-primary text-[#F3F3F3] font-semibold"
                    : "bg-surface border-border text-foreground/70 hover:bg-surface/75 hover:text-foreground"
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Collapsible Accordion layout */}
      <div className="md:hidden w-full space-y-2">
        <button
          type="button"
          onClick={() => setIsMobileExpanded(!isMobileExpanded)}
          className="w-full flex items-center justify-between h-10 px-4 border border-border bg-surface text-foreground text-sm font-medium rounded-md hover:border-foreground/20 transition-all cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-primary" />
            <span>Filters & Sorting</span>
            {activeCount > 0 && (
              <span className="flex items-center justify-center bg-primary text-[#F3F3F3] text-[10px] font-bold font-mono h-5 px-1.5 rounded-full">
                {activeCount}
              </span>
            )}
          </div>
          {isMobileExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {isMobileExpanded && (
          <div className="p-4 border border-border bg-surface/30 rounded-md animate-in slide-in-from-top-2 duration-150">
            {filterContent}
          </div>
        )}
      </div>

      {/* Desktop default sidebar layout */}
      <div className="hidden md:block w-full">
        <div className="bg-surface/30 p-4 border border-border rounded-md">
          {filterContent}
        </div>
      </div>
    </>
  );
}
