import * as React from "react";
import { Loader } from "@/components/ui/Loader";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <Loader />
        <span className="font-mono text-sm text-foreground/50 animate-pulse">// Booting workbench...</span>
      </div>
    </div>
  );
}
