import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97] cursor-pointer",
          {
            "bg-surface hover:bg-surface-hover text-foreground shadow-sm": variant === "default",
            "bg-primary hover:bg-primary-hover text-white shadow-sm shadow-primary/20 hover:shadow-primary/30": variant === "primary",
            "border border-border bg-transparent hover:bg-surface hover:border-border-hover text-foreground": variant === "outline",
            "hover:bg-surface hover:text-foreground text-foreground/70": variant === "ghost",
            "text-primary underline-offset-4 hover:underline": variant === "link",
            "h-9 px-4 py-2 rounded-none": size === "default",
            "h-8 rounded-lg px-3 text-xs": size === "sm",
            "h-10 rounded-lg px-8": size === "lg",
            "h-9 w-9 rounded-lg": size === "icon",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };

