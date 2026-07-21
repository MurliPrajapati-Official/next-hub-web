"use client";

import * as React from "react";
import { ChevronDown, CheckCircle2, Circle } from "lucide-react";

const categories = [
  "All", "GitHub", "AI", "Learning", "Roadmaps", "UI Kits",
  "Design", "Backend", "Frontend", "DevOps", "Cloud",
  "Security", "Open Source", "Databases", "Interview",
];

const types = [
  { value: "All", label: "All Formats" },
  { value: "github", label: "GitHub Repos" },
  { value: "documentation", label: "Documentation" },
  { value: "course", label: "Courses" },
  { value: "cheatsheet", label: "Cheat Sheets" },
  { value: "library", label: "Libraries" },
  { value: "aitool", label: "AI Tools" },
];

const difficulties = [
  { value: "All", label: "All" },
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
];

const pricingOptions = [
  { value: "All", label: "All" },
  { value: "free", label: "Free" },
  { value: "freemium", label: "Freemium" },
  { value: "paid", label: "Paid" },
];

const sortOptions = [
  { value: "popular", label: "Popular" },
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

function CollapsibleSection({
  title,
  defaultOpen = true,
  children,
}: {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <div className="border-b border-border/40 py-4 last:border-0">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-2 text-sm font-bold text-foreground hover:text-primary transition-colors cursor-pointer"
      >
        {title}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 text-foreground/40 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[800px] opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-3 pb-2">{children}</div>
      </div>
    </div>
  );
}

function RadioOption({ 
  label, 
  isActive, 
  onClick 
}: { 
  label: string; 
  isActive: boolean; 
  onClick: () => void 
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex items-center gap-3 w-full text-left transition-colors cursor-pointer ${
        isActive ? "text-primary" : "text-foreground/60 hover:text-foreground"
      }`}
    >
      {isActive ? (
        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
      ) : (
        <Circle className="w-4 h-4 text-foreground/20 group-hover:border-primary shrink-0 transition-colors" />
      )}
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
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
    <div className="flex flex-col">
      <CollapsibleSection title="Topic / Category">
        {categories.map((cat) => (
          <RadioOption
            key={cat}
            label={cat}
            isActive={activeCategory === cat}
            onClick={() => onSelectCategory(cat)}
          />
        ))}
      </CollapsibleSection>

      <CollapsibleSection title="Format" defaultOpen={false}>
        {types.map((type) => (
          <RadioOption
            key={type.value}
            label={type.label}
            isActive={activeType === type.value}
            onClick={() => onSelectType(type.value)}
          />
        ))}
      </CollapsibleSection>

      <CollapsibleSection title="Difficulty" defaultOpen={false}>
        {difficulties.map((diff) => (
          <RadioOption
            key={diff.value}
            label={diff.label}
            isActive={activeDifficulty === diff.value}
            onClick={() => onSelectDifficulty(diff.value)}
          />
        ))}
      </CollapsibleSection>

      <CollapsibleSection title="Access / Pricing" defaultOpen={false}>
        {pricingOptions.map((price) => (
          <RadioOption
            key={price.value}
            label={price.label}
            isActive={activePricing === price.value}
            onClick={() => onSelectPricing(price.value)}
          />
        ))}
      </CollapsibleSection>

      <CollapsibleSection title="Sort Order" defaultOpen={false}>
        {sortOptions.map((option) => (
          <RadioOption
            key={option.value}
            label={option.label}
            isActive={activeSort === option.value}
            onClick={() => onSelectSort(option.value)}
          />
        ))}
      </CollapsibleSection>
    </div>
  );

  return (
    <>
      <div className="md:hidden w-full mb-4">
        <button
          type="button"
          onClick={() => setIsMobileExpanded(!isMobileExpanded)}
          className="w-full flex items-center justify-between h-12 px-4 bg-surface text-foreground text-sm font-medium rounded-none border border-border hover:bg-surface-hover transition-all cursor-pointer"
        >
          <span className="flex items-center gap-2">
            Filters
            {activeCount > 0 && (
              <span className="flex items-center justify-center bg-primary text-white text-[10px] font-bold h-5 px-1.5 rounded-full">
                {activeCount}
              </span>
            )}
          </span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileExpanded ? "rotate-180" : ""}`} />
        </button>

        {isMobileExpanded && (
          <div className="mt-2 p-4 bg-surface border border-border rounded-none">
            {filterContent}
          </div>
        )}
      </div>

      <div className="hidden md:block w-full">
        <div className="p-6 bg-surface/30 border border-border/40 rounded-none">
          {filterContent}
        </div>
      </div>
    </>
  );
}
