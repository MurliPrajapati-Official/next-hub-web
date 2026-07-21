import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "success" | "warning" | "danger" | "info" | "purple";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-all duration-150",
        {
          "bg-primary/15 text-primary": variant === "default",
          "bg-surface text-foreground/70": variant === "secondary",
          "text-foreground/60 border border-border": variant === "outline",
          "bg-green-500/15 text-green-400": variant === "success",
          "bg-orange-500/15 text-orange-400": variant === "warning",
          "bg-red-500/15 text-red-400": variant === "danger",
          "bg-cyan-500/15 text-cyan-400": variant === "info",
          "bg-purple-500/15 text-purple-400": variant === "purple",
        },
        className
      )}
      {...props}
    />
  );
}

export { Badge };
