"use client";

import Link from "next/link";
import { User, Plus } from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import { useAuth } from "@/hooks/useAuth";

export function Navbar() {
  const { isLoggedIn, isLoaded } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Background layer */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-xl -z-10 border-b border-border" />
      
      <div className="w-full flex h-14 items-center justify-between px-4 lg:px-8 relative">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-base">N</span>
            </div>
            <span className="font-extrabold text-xl tracking-tight">Next Hub</span>
          </Link>
        </div>

        {/* Center: Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link href="/resources" className="px-3 py-1.5 text-sm font-medium text-foreground/60 hover:text-primary transition-colors">
            Resources
          </Link>
          <Link href="/community" className="px-3 py-1.5 text-sm font-medium text-foreground/60 hover:text-primary transition-colors">
            Community
          </Link>
          <Link href="/events" className="px-3 py-1.5 text-sm font-medium text-foreground/60 hover:text-primary transition-colors">
            Events
          </Link>
          <Link href="/about" className="px-3 py-1.5 text-sm font-medium text-foreground/60 hover:text-primary transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="px-3 py-1.5 text-sm font-medium text-foreground/60 hover:text-primary transition-colors">
            Contact Us
          </Link>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <div className="hidden lg:flex items-center gap-2">
            {isLoaded && isLoggedIn ? (
              <>
                <Link href="/community/submit" tabIndex={-1}>
                  <button className="inline-flex items-center gap-1.5 h-8 px-3 text-xs font-semibold bg-primary hover:bg-primary-hover text-white rounded-lg transition-all cursor-pointer shadow-sm shadow-primary/20">
                    <Plus className="w-3.5 h-3.5" />
                    Submit
                  </button>
                </Link>
                <Link href="/dashboard" tabIndex={-1}>
                  <button className="h-8 w-8 rounded-full bg-surface hover:bg-surface-hover flex items-center justify-center transition-all cursor-pointer">
                    <User className="w-4 h-4 text-foreground/60" />
                  </button>
                </Link>
              </>
            ) : isLoaded && !isLoggedIn ? (
              <>
                <Link href="/login" className="text-sm font-medium text-foreground/60 hover:text-foreground px-3 py-1.5 transition-colors">
                  Log in
                </Link>
                <Link href="/signup">
                  <button className="inline-flex items-center gap-1.5 h-8 px-4 text-xs font-semibold bg-primary hover:bg-primary-hover text-white rounded-lg transition-all cursor-pointer shadow-sm shadow-primary/20">
                    Sign up
                  </button>
                </Link>
              </>
            ) : null}
          </div>

          {/* Mobile only: hamburger */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

