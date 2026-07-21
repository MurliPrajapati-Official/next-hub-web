"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/Input";

export function SearchHero() {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <section className="py-16 md:py-24 flex flex-col items-start border-b border-border">
      <div className="w-full px-4 md:px-8">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          A searchable resource explorer.
        </h1>
        <p className="text-foreground/70 text-lg max-w-2xl mb-8">
          Discover hand-picked tools, documentation, libraries, and guides built for developers.
        </p>
        
        <div 
          className={`relative w-full max-w-3xl transition-all duration-300 ${isFocused ? 'ring-2 ring-primary/20 rounded-lg' : ''}`}
        >
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-foreground/40" />
          </div>
          <Input 
            type="text"
            className="pl-12 h-14 text-base md:text-lg bg-surface border-border focus-visible:ring-primary shadow-sm rounded-lg"
            placeholder="Search for APIs, GitHub repos, React components..."
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center gap-2 pointer-events-none">
            <kbd className="hidden sm:inline-flex h-6 select-none items-center gap-1 rounded border border-border bg-background px-2 font-mono text-[10px] font-medium text-foreground/50 opacity-100">
              <span className="text-xs">⌘</span>K
            </kbd>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-foreground/60">
          <span className="mr-2">Trending:</span>
          <button className="hover:text-primary transition-colors underline underline-offset-4">GitHub Repositories</button>
          <span>•</span>
          <button className="hover:text-primary transition-colors underline underline-offset-4">AI Tools</button>
          <span>•</span>
          <button className="hover:text-primary transition-colors underline underline-offset-4">System Design</button>
          <span>•</span>
          <button className="hover:text-primary transition-colors underline underline-offset-4">React UI</button>
        </div>
      </div>
    </section>
  );
}
