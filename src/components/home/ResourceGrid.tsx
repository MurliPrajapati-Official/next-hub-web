"use client";

import * as React from "react";
import { Loader } from "@/components/ui/Loader";
import { ResourceCard } from "@/components/ui/ResourceCard";
import type { Resource } from "@/app/api/resources/route";

interface ResourceGridProps {
  title: string;
  category?: string;
  searchQuery?: string;
  sortBy?: string;
  type?: string;
  difficulty?: string;
  pricing?: string;
}

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
    async function fetchResources() {
      setIsLoading(true);
      try {
        const params = new URLSearchParams();
        if (category && category !== "All") {
          params.append("category", category);
        }
        if (searchQuery) {
          params.append("q", searchQuery);
        }
        if (sortBy) {
          params.append("sort", sortBy);
        }
        if (type && type !== "All") {
          params.append("type", type);
        }
        if (difficulty && difficulty !== "All") {
          params.append("difficulty", difficulty);
        }
        if (pricing && pricing !== "All") {
          params.append("pricing", pricing);
        }
        
        const url = `/api/resources${params.toString() ? `?${params.toString()}` : ''}`;
        const res = await fetch(url);
        const data = await res.json();
        setResources(data);
      } catch (error) {
        console.error("Failed to fetch resources:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchResources();
  }, [category, searchQuery, sortBy, type, difficulty, pricing]);

  return (
    <section className="py-2">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold tracking-tight font-sans">{title}</h2>
        <button className="text-sm font-medium text-primary hover:underline underline-offset-4">
          View all
        </button>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="animate-pulse bg-surface border border-border rounded-md min-h-[220px]"></div>
          ))}
        </div>
      ) : resources.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      ) : (
        <div className="py-12 text-center border border-border border-dashed rounded-lg bg-surface">
          <p className="text-foreground/60">No resources found for this category.</p>
        </div>
      )}
    </section>
  );
}
