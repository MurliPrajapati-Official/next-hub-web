"use client";

import * as React from "react";
import { Bookmark, ExternalLink, Eye, Star, Clock } from "lucide-react";
import { useBookmarks } from "@/hooks/useBookmarks";

interface ResourceCardProps {
  resource: {
    id: string;
    title: string;
    category: string;
    description: string;
    tags: string[];
    views: number;
    uploader: string;
    date: string;
    url: string;
    difficulty: "beginner" | "intermediate" | "advanced";
    pricing: "free" | "freemium" | "paid";
    rating: number;
  };
}

const pricingConfig = {
  free: { label: "Free", bg: "bg-green-500/15", text: "text-green-400", border: "border-green-500/20" },
  freemium: { label: "Freemium", bg: "bg-orange-500/15", text: "text-orange-400", border: "border-orange-500/20" },
  paid: { label: "Paid", bg: "bg-red-500/15", text: "text-red-400", border: "border-red-500/20" },
};

const difficultyConfig = {
  beginner: { label: "Beginner", bg: "bg-green-500/15", text: "text-green-400", border: "border-green-500/20" },
  intermediate: { label: "Intermediate", bg: "bg-yellow-500/15", text: "text-yellow-400", border: "border-yellow-500/20" },
  advanced: { label: "Advanced", bg: "bg-red-500/15", text: "text-red-400", border: "border-red-500/20" },
};

const tagColors = [
  "bg-blue-500/10 text-blue-300",
  "bg-purple-500/10 text-purple-300",
  "bg-cyan-500/10 text-cyan-300",
  "bg-pink-500/10 text-pink-300",
  "bg-emerald-500/10 text-emerald-300",
];

function getRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays}d ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}w ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)}mo ago`;
  return `${Math.floor(diffDays / 365)}y ago`;
}

function formatViews(views: number): string {
  if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M`;
  if (views >= 1000) return `${(views / 1000).toFixed(views >= 10000 ? 0 : 1)}k`;
  return views.toString();
}

function getFaviconUrl(url: string): string {
  try {
    const domain = new URL(url).hostname;
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
  } catch {
    return "";
  }
}

export function ResourceCard({ resource }: ResourceCardProps) {
  const { isBookmarked, toggleBookmark, isLoaded } = useBookmarks();
  const [animateBookmark, setAnimateBookmark] = React.useState(false);
  
  const bookmarked = isLoaded ? isBookmarked(resource.id) : false;
  const pricing = pricingConfig[resource.pricing];
  const difficulty = difficultyConfig[resource.difficulty];
  const faviconUrl = getFaviconUrl(resource.url);

  const handleBookmark = () => {
    toggleBookmark(resource.id);
    setAnimateBookmark(true);
    setTimeout(() => setAnimateBookmark(false), 500);
  };

  return (
    <div className="group relative flex flex-col bg-surface rounded-none p-6 min-h-[260px] border border-border/50 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1.5 transition-all duration-300">
      
      {/* Top Row: Logo & Pricing */}
      <div className="flex items-start justify-between mb-4">
        {faviconUrl ? (
          <img
            src={faviconUrl}
            alt=""
            width={32}
            height={32}
            className="rounded-lg opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 bg-white p-0.5"
            loading="lazy"
          />
        ) : (
          <div className="w-8 h-8 rounded-lg bg-surface-hover flex items-center justify-center opacity-80 group-hover:opacity-100 transition-all duration-300" />
        )}
        <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-none border ${pricing.bg} ${pricing.text} ${pricing.border}`}>
          {pricing.label}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-extrabold text-lg leading-tight mb-1.5 line-clamp-2 text-foreground group-hover:text-primary transition-colors">
        {resource.title}
      </h3>

      {/* Category */}
      <div className="text-xs font-semibold text-primary/80 mb-3 uppercase tracking-wider">
        {resource.category}
      </div>

      {/* Description */}
      <p className="text-sm text-foreground/50 mb-5 line-clamp-2 flex-grow leading-relaxed">
        {resource.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {resource.tags.slice(0, 2).map((tag, index) => (
          <span
            key={tag}
            className={`text-[10px] font-bold px-2 py-1 rounded-none ${tagColors[index % tagColors.length]}`}
          >
            {tag}
          </span>
        ))}
        <span className={`text-[10px] font-bold px-2 py-1 rounded-none border ${difficulty.bg} ${difficulty.text} ${difficulty.border}`}>
          {difficulty.label}
        </span>
      </div>

      {/* Footer: Metadata & Actions */}
      <div className="mt-auto flex flex-col gap-4">
        {/* Stats */}
        <div className="flex items-center gap-4 text-xs font-medium text-foreground/40">
          <span className="flex items-center gap-1.5 text-yellow-500">
            <Star className="w-3.5 h-3.5 fill-yellow-500" />
            {resource.rating.toFixed(1)}
          </span>
          <span className="flex items-center gap-1.5">
            <Eye className="w-3.5 h-3.5" />
            {formatViews(resource.views)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {getRelativeTime(resource.date)}
          </span>
        </div>

        {/* Action Buttons merged */}
        <div className="flex items-center gap-2 pt-4 border-t border-border/40">
          <button
            onClick={handleBookmark}
            className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs font-bold uppercase tracking-wider rounded-none border transition-all cursor-pointer ${
              bookmarked 
                ? "bg-primary/10 border-primary text-primary" 
                : "border-border/60 text-foreground/50 hover:border-foreground/30 hover:text-foreground"
            } ${animateBookmark ? "animate-bookmark" : ""}`}
            title={bookmarked ? "Remove Bookmark" : "Add Bookmark"}
          >
            <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? "fill-current" : ""}`} />
            Bookmark
          </button>
          
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[1.5] flex items-center justify-center gap-2 px-3 py-2 text-xs font-bold uppercase tracking-wider rounded-none bg-surface-hover text-foreground/70 hover:bg-primary hover:text-white group-hover:bg-primary group-hover:text-white transition-all cursor-pointer"
          >
            Open Resource
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
