import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97] cursor-pointer",
          {
            "bg-primary text-[#F3F3F3] hover:bg-primary/85 shadow-sm": variant === "default",
            "border border-border bg-surface hover:bg-surface/70 hover:border-foreground/20 text-foreground shadow-sm": variant === "outline",
            "bg-surface/40 hover:bg-surface hover:text-foreground text-foreground/90": variant === "ghost",
            "text-primary underline-offset-4 hover:underline": variant === "link",
            "h-9 px-4 py-2 rounded-md": size === "default",
            "h-8 rounded-md px-3 text-xs": size === "sm",
            "h-10 rounded-md px-8": size === "lg",
            "h-9 w-9 rounded-md": size === "icon",
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
