"use client";

import * as React from "react";
import { ResourceCard } from "@/components/ui/ResourceCard";
import type { Resource } from "@/data/resources";
import { filterResources } from "@/data/resources";

interface ResourceGridProps {
  title: string;
  category?: string;
  searchQuery?: string;
  sortBy?: string;
  type?: string;
  difficulty?: string;
  pricing?: string;
}
const featuredBlocks = [
  {
    tag: "Trending This Week",
    emoji: "🔥",
    title: "Cursor AI",
    desc: "The AI-first code editor used by over 2M developers. Built to make you extraordinarily productive.",
    link: "https://cursor.com"
  },
  {
    tag: "Editor's Pick",
    emoji: "⭐",
    title: "Vercel v0",
    desc: "Generate UI with simple text prompts. Build production-ready React components instantly.",
    link: "https://v0.dev"
  },
  {
    tag: "Community Favorite",
    emoji: "🏆",
    title: "Tailwind CSS v4",
    desc: "The utility-first CSS framework just got a massive upgrade with zero-configuration and native CSS variables.",
    link: "https://tailwindcss.com"
  }
];

export function ResourceGrid({
  title,
  category = "All",
  searchQuery = "",
  sortBy = "popular",
  type = "All",
  difficulty = "All",
  pricing = "All",
}: ResourceGridProps) {
  const [resources, setResources] = React.useState<Resource[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(true);
    const data = filterResources({
      category,
      search: searchQuery,
      sort: sortBy,
      type,
      difficulty,
      pricing,
    });
    setResources(data);
    setIsLoading(false);
  }, [category, searchQuery, sortBy, type, difficulty, pricing]);

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold tracking-tight">
          {title}
          <span className="ml-2 text-sm font-normal text-foreground/30">
            {resources.length} {resources.length === 1 ? "resource" : "resources"}
          </span>
        </h2>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="animate-pulse bg-surface rounded-none min-h-[240px]"></div>
          ))}
        </div>
      ) : resources.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.reduce((acc, resource, index) => {
            if (index > 0 && index % 8 === 0) {
              const featureIndex = Math.floor(index / 8) - 1;
              const feature = featuredBlocks[featureIndex % featuredBlocks.length];
              acc.push(
                <div key={`featured-${index}`} className="col-span-1 md:col-span-2 lg:col-span-3 bg-gradient-to-r from-surface to-surface-hover border border-primary/20 p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 my-2 shadow-2xl shadow-primary/5 hover:border-primary/40 transition-colors">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{feature.emoji}</span>
                      <span className="text-xs font-bold uppercase tracking-wider text-primary">{feature.tag}</span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-foreground/60 max-w-2xl leading-relaxed">{feature.desc}</p>
                  </div>
                  <div className="shrink-0 w-full md:w-auto mt-2 md:mt-0">
                    <a href={feature.link} target="_blank" rel="noopener noreferrer" className="inline-block w-full md:w-auto px-8 py-3 bg-primary hover:bg-primary-hover text-white text-sm font-bold uppercase tracking-wider transition-colors text-center shadow-lg shadow-primary/20">
                      Explore Resource →
                    </a>
                  </div>
                </div>
              );
            }
            acc.push(<ResourceCard key={resource.id} resource={resource} />);
            return acc;
          }, [] as React.ReactNode[])}
        </div>
      ) : (
        <div className="py-16 text-center rounded-xl bg-surface/50">
          <p className="text-foreground/40 text-sm">No resources found matching your filters.</p>
          <p className="text-foreground/25 text-xs mt-1">Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </section>
  );
}

