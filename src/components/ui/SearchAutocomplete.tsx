"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, TrendingUp, Star, ArrowRight, ExternalLink } from "lucide-react";
import { mockResources, filterResources, type Resource } from "@/data/resources";

interface SearchAutocompleteProps {
  value: string;
  onChange: (val: string) => void;
  onSelect?: (val: string) => void;
  variant?: "default" | "navbar";
}

const trendingSearches = ["React", "Next.js", "Tailwind", "System Design"];
const topSearches = ["Authentication", "Supabase", "Docker", "Framer Motion"];
const recentlyAdded = ["MCP", "Bun", "Biome", "Mastra"];

export function SearchAutocomplete({ value, onChange, onSelect, variant = "default" }: SearchAutocompleteProps) {
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Get live recommendations based on current input
  const recommendations = value.trim() 
    ? filterResources({ search: value }).slice(0, 5)
    : [];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSuggestionClick = (suggestion: string) => {
    onChange(suggestion);
    if (onSelect) onSelect(suggestion);
    setIsFocused(false);
  };

  const handleResourceClick = (resource: Resource) => {
    // If they click a specific resource recommendation, we can either navigate to it or just set search to its title
    onChange(resource.title);
    if (onSelect) onSelect(resource.title);
    setIsFocused(false);
  };

  return (
    <div ref={containerRef} className={`relative group mb-4 z-50 mx-auto md:mx-0 ${variant === "default" ? "w-full max-w-2xl" : "w-64 mb-0"}`}>
      
      {/* Input Field */}
      <div className={`relative flex items-center bg-background border transition-all duration-300 ${
        variant === "default" ? "rounded-xl p-2 shadow-lg" : "rounded-none h-9"
      } ${
        isFocused ? (variant === "default" ? 'border-primary ring-2 ring-primary/20 shadow-primary/10' : 'border-primary/40 ring-1 ring-primary/40 bg-surface') : 'border-border/50 bg-surface/50'
      }`}>
        <Search className="w-5 h-5 text-foreground/40 ml-3 mr-2" />
        <input 
          id={variant === "navbar" ? "navbar-search-input" : "search-input"}
          type="text" 
          className={`w-full bg-transparent border-none outline-none text-foreground placeholder:text-foreground/40 ${variant === "default" ? "h-10 text-base" : "h-9 text-sm"}`} 
          placeholder="Search libraries, frameworks, tutorials..." 
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              if (onSelect) onSelect(value);
              setIsFocused(false);
              e.currentTarget.blur();
            }
          }}
        />
        <div className="hidden sm:flex items-center mr-2 pointer-events-none">
          <kbd className={`inline-flex items-center gap-1 rounded bg-background border border-border/50 font-mono font-medium text-foreground/40 ${variant === "default" ? "h-6 px-2 text-[10px]" : "h-5 px-1.5 text-[10px]"}`}>
            <span className="text-xs">⌘</span>K
          </kbd>
        </div>
      </div>

      {/* Autocomplete Dropdown overlay */}
      {isFocused && (
        <div className={`absolute top-full mt-3 bg-background border border-border/50 shadow-2xl shadow-black/40 overflow-hidden py-3 animate-fade-in-up ${
          variant === "default" ? "left-0 right-0 rounded-xl" : "right-0 w-[300px] rounded-none shadow-primary/5"
        }`}>
          
          {/* Empty State: Shows Trending and Top Searches */}
          {!value.trim() && (
            <div className={variant === "default" ? "grid grid-cols-1 sm:grid-cols-3 gap-4 p-2" : "flex flex-col gap-2 p-2"}>
              <div className="px-4 py-2">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/60 font-mono">Trending Searches</h4>
                </div>
                <ul className="space-y-1">
                  {trendingSearches.map(term => (
                    <li key={term}>
                      <button 
                        onClick={() => handleSuggestionClick(term)}
                        className="w-full text-left px-3 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors flex items-center justify-between group/btn"
                      >
                        {term}
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-4 py-2 sm:border-l border-border/40">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/60 font-mono">Top Searches</h4>
                </div>
                <ul className="space-y-1">
                  {topSearches.map(term => (
                    <li key={term}>
                      <button 
                        onClick={() => handleSuggestionClick(term)}
                        className="w-full text-left px-3 py-2 text-sm text-foreground/80 hover:text-yellow-400 hover:bg-yellow-500/10 rounded-lg transition-colors flex items-center justify-between group/btn"
                      >
                        {term}
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {variant === "default" && (
                <div className="px-4 py-2 sm:border-l border-border/40">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-4 h-4 flex items-center justify-center text-green-400 font-bold text-[10px] bg-green-500/10 rounded-full">New</span>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/60 font-mono">Recently Added</h4>
                  </div>
                  <ul className="space-y-1">
                    {recentlyAdded.map(term => (
                      <li key={term}>
                        <button 
                          onClick={() => handleSuggestionClick(term)}
                          className="w-full text-left px-3 py-2 text-sm text-foreground/80 hover:text-green-400 hover:bg-green-500/10 rounded-lg transition-colors flex items-center justify-between group/btn"
                        >
                          {term}
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Active State: Shows live recommendations */}
          {value.trim() && recommendations.length > 0 && (
            <div className="px-2">
              <div className="px-4 py-3 border-b border-border/30 mb-2">
                <span className="text-xs font-medium text-foreground/50">Recommendations for "{value}"</span>
              </div>
              <ul className="space-y-1">
                {recommendations.map(res => (
                  <li key={res.id}>
                    <button 
                      onClick={() => handleResourceClick(res)}
                      className="w-full text-left px-4 py-3 hover:bg-surface-hover rounded-none transition-colors flex items-center justify-between group/item"
                    >
                      <div>
                        <div className="font-semibold text-sm text-foreground group-hover/item:text-primary transition-colors">{res.title}</div>
                        <div className="text-xs text-foreground/50 truncate max-w-md">{res.description}</div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-foreground/30 group-hover/item:text-primary opacity-0 group-hover/item:opacity-100 transition-all" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Active State: No results */}
          {value.trim() && recommendations.length === 0 && (
            <div className="px-8 py-12 text-center">
              <p className="text-foreground/50 text-sm">No resources found matching "{value}"</p>
              <p className="text-foreground/30 text-xs mt-1">Try a different search term or browse categories.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}


