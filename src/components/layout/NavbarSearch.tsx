"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function NavbarSearch() {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        router.push("/resources");
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [router]);

  return (
    <>
      <button
        onClick={() => router.push("/resources")}
        className="w-full flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground transition-colors border border-border bg-surface px-3 py-1.5 rounded-md cursor-text"
      >
        <Search className="w-4 h-4" />
        <span className="mr-4">Search resources...</span>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-background px-1.5 font-mono text-[10px] font-medium text-foreground/70">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <Button
        variant="ghost"
        size="icon"
        className="md:hidden border border-border"
        onClick={() => router.push("/resources")}
      >
        <Search className="w-5 h-5" />
      </Button>
    </>
  );
}
