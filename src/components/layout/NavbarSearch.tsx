"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SearchAutocomplete } from "@/components/ui/SearchAutocomplete";

export function NavbarSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        document.getElementById("navbar-search-input")?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/resources?q=${encodeURIComponent(query)}`);
    } else {
      router.push("/resources");
    }
  };

  return (
    <>
      <div className="relative hidden md:flex items-center">
        <SearchAutocomplete 
          value={query}
          onChange={setQuery}
          onSelect={(val) => router.push(`/resources?q=${encodeURIComponent(val)}`)}
          variant="navbar"
        />
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={() => router.push("/resources")}
      >
        <Search className="w-5 h-5" />
      </Button>
    </>
  );
}

