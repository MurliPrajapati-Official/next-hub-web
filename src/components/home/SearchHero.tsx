"use client";

import * as React from "react";
import { Search, TrendingUp, Star, ArrowUpRight, Bot, Code, Smartphone, Palette, Cloud, Brain, Shield, BarChart3, Sparkles, Users, FolderOpen, ExternalLink } from "lucide-react";
import { SearchAutocomplete } from "@/components/ui/SearchAutocomplete";

const placeholderTexts = [
  "Search React...",
  "Search Cursor AI...",
  "Search Open Source...",
  "Search Tailwind...",
  "Search System Design...",
];

const trendingTopics = ["Cursor AI", "Claude Code", "Shadcn UI", "MCP", "v0"];

const browseCategories = [
  { label: "AI & ML", icon: Bot, color: "text-purple-400", bg: "bg-purple-400/10" },
  { label: "Web Dev", icon: Code, color: "text-blue-400", bg: "bg-blue-400/10" },
  { label: "Mobile", icon: Smartphone, color: "text-green-400", bg: "bg-green-400/10" },
  { label: "Design", icon: Palette, color: "text-pink-400", bg: "bg-pink-400/10" },
  { label: "Cloud", icon: Cloud, color: "text-cyan-400", bg: "bg-cyan-400/10" },
  { label: "Interview", icon: Brain, color: "text-yellow-400", bg: "bg-yellow-400/10" },
  { label: "Security", icon: Shield, color: "text-red-400", bg: "bg-red-400/10" },
  { label: "Data", icon: BarChart3, color: "text-emerald-400", bg: "bg-emerald-400/10" },
];

const featuredResource = {
  title: "System Design Primer",
  description: "Learn how to design large-scale systems. Prep for the system design interview.",
  rating: 4.95,
  views: "245k",
  url: "https://github.com/donnemartin/system-design-primer",
  uploader: "donnemartin",
};

interface SearchHeroProps {
  onSearch?: (query: string) => void;
  onCategorySelect?: (category: string) => void;
}

export function SearchHero({ onSearch, onCategorySelect }: SearchHeroProps) {
  const [searchValue, setSearchValue] = React.useState("");

  const handleSearch = (val: string) => {
    setSearchValue(val);
    onSearch?.(val);
  };

  return (
    <section className="pt-16 pb-12 md:pt-24 md:pb-16">
      <div className="container-main">
        {/* Title + Subtitle */}
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-br from-foreground via-foreground to-foreground/60 bg-clip-text">
            Discover developer resources,{" "}
            <span className="text-primary">faster.</span>
          </h1>
          <p className="text-foreground/50 text-lg md:text-xl leading-relaxed mb-8">
            Hand-picked tools, documentation, libraries, and guides — curated by developers, for developers.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full max-w-2xl transition-all duration-300">
          <SearchAutocomplete 
            value={searchValue}
            onChange={handleSearch}
            onSelect={(val) => {
              if (onSearch) onSearch(val);
              setTimeout(() => {
                document.getElementById("search-results")?.scrollIntoView({ behavior: "smooth" });
              }, 50);
            }}
            variant="default"
          />
        </div>

        {/* Trending Topics */}
        <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
          <span className="flex items-center gap-1.5 text-foreground/40 mr-1">
            <TrendingUp className="w-3.5 h-3.5" />
            Trending:
          </span>
          {trendingTopics.map((topic) => (
            <button
              key={topic}
              className="px-2.5 py-1 text-xs font-medium text-foreground/50 hover:text-foreground bg-surface hover:bg-surface-hover rounded-full transition-all cursor-pointer"
            >
              {topic}
            </button>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-10 flex flex-wrap gap-8 text-sm">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <FolderOpen className="w-4 h-4 text-primary" />
            </div>
            <div>
              <div className="font-bold text-lg leading-tight">12,000+</div>
              <div className="text-foreground/40 text-xs">Resources</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-purple-400/10 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-purple-400" />
            </div>
            <div>
              <div className="font-bold text-lg leading-tight">340</div>
              <div className="text-foreground/40 text-xs">Categories</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-green-400/10 flex items-center justify-center">
              <Users className="w-4 h-4 text-green-400" />
            </div>
            <div>
              <div className="font-bold text-lg leading-tight">95,000</div>
              <div className="text-foreground/40 text-xs">Developers</div>
            </div>
          </div>
        </div>

        {/* Featured Resource + Browse Categories */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Featured Resource of the Week */}
          <div className="lg:col-span-2 relative p-6 rounded-none bg-surface border border-primary/20">
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-yellow-400">
                Resource of the Week
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">{featuredResource.title}</h3>
            <p className="text-sm text-foreground/50 mb-4 leading-relaxed">
              {featuredResource.description}
            </p>
            <div className="flex items-center gap-4 text-xs text-foreground/40 mb-5">
              <span className="flex items-center gap-1">
                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                {featuredResource.rating}
              </span>
              <span>{featuredResource.views} views</span>
              <span>by {featuredResource.uploader}</span>
            </div>
            <a
              href={featuredResource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
            >
              Explore Resource
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Browse Categories */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-foreground/40 uppercase tracking-wider mb-4">
              Browse Categories
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {browseCategories.map((cat) => (
                <button
                  key={cat.label}
                  onClick={() => {
                    onCategorySelect?.(cat.label);
                    setTimeout(() => {
                      document.getElementById("search-results")?.scrollIntoView({ behavior: "smooth" });
                    }, 50);
                  }}
                  className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-surface hover:bg-surface-hover border border-transparent hover:border-border-hover transition-all cursor-pointer"
                >
                  <div className={`h-10 w-10 rounded-xl ${cat.bg} flex items-center justify-center transition-transform group-hover:scale-110`}>
                    <cat.icon className={`w-5 h-5 ${cat.color}`} />
                  </div>
                  <span className="text-xs font-medium text-foreground/60 group-hover:text-foreground transition-colors">
                    {cat.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

