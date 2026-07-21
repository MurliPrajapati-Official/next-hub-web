"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Resources", href: "/resources" },
  { label: "Community", href: "/community" },
  { label: "Events", href: "/events" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
  { label: "Sponsors", href: "/sponsors" },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        <Menu className="w-5 h-5" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-[200] md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setIsOpen(false)}
          />

          {/* Panel */}
          <div className="absolute top-0 right-0 h-full w-[280px] bg-background border-l border-border flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between h-14 px-4 border-b border-border">
              <span className="font-bold text-sm tracking-tight">Menu</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Links */}
            <nav className="flex-1 overflow-y-auto py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between px-5 py-3 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-surface transition-colors"
                >
                  {link.label}
                  <ChevronRight className="w-4 h-4 text-foreground/30" />
                </Link>
              ))}
            </nav>

            {/* Auth buttons */}
            <div className="border-t border-border p-4 space-y-3">
              <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full">
                  Sign In
                </Button>
              </Link>
              <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                <Button className="w-full">
                  Create Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
