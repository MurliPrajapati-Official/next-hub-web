import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        {
          "border-transparent bg-primary text-[#F3F3F3] hover:bg-primary/80": variant === "default",
          "border-transparent bg-surface text-foreground hover:brightness-110": variant === "secondary",
          "text-foreground border-border hover:border-foreground/30": variant === "outline",
        },
        className
      )}
      {...props}
    />
  );
}

export { Badge };
