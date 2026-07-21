import * as React from "react";
import { Bookmark, ExternalLink, Eye } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

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

export function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <div className="group relative flex flex-col border border-border bg-surface p-5 rounded-md min-h-[220px] transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_4px_20px_rgba(33,133,213,0.08)]">
      <div className="flex justify-between items-start mb-3 gap-2">
        <div className="flex flex-wrap gap-1.5 items-center">
          <Badge variant="secondary" className="bg-background text-foreground/80 font-medium">
            {resource.category}
          </Badge>
          <span className="text-[9px] font-mono bg-primary/10 text-primary border border-primary/20 px-1.5 py-0.5 rounded uppercase tracking-wider">
            {resource.difficulty}
          </span>
          <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded uppercase tracking-wider border ${
            resource.pricing === 'free' 
              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
              : resource.pricing === 'freemium'
              ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
              : 'bg-red-500/10 text-red-400 border-red-500/20'
          }`}>
            {resource.pricing}
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-bold text-yellow-500 flex items-center gap-0.5 select-none" title="Community Rating">
            ★ {resource.rating.toFixed(1)}
          </span>
          <button className="text-foreground/40 hover:text-primary transition-colors">
            <Bookmark className="w-4 h-4" />
            <span className="sr-only">Bookmark {resource.title}</span>
          </button>
        </div>
      </div>
      
      <h3 className="font-bold text-base leading-snug mb-2 line-clamp-2 group-hover:text-primary transition-colors">
        {resource.title}
      </h3>
      
      <p className="text-sm text-foreground/70 mb-4 line-clamp-2 flex-grow">
        {resource.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {resource.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="text-xs text-foreground/50 bg-background px-2 py-0.5 rounded border border-border/50">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
        <div className="flex items-center gap-3 text-xs text-foreground/50">
          <div className="flex items-center gap-1">
            <Eye className="w-3 h-3" />
            <span>{(resource.views / 1000).toFixed(1)}k</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-medium">{resource.uploader}</span>
          </div>
        </div>
        
        <a 
          href={resource.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
        >
          <span>Visit</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
