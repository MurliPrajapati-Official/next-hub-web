import Link from "next/link";
import { User } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { NavbarSearch } from "./NavbarSearch";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full flex h-14 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-lg tracking-tight">Next Hub</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-foreground/80">
            <Link href="/resources" className="hover:text-foreground transition-colors">Resources</Link>
            <Link href="/community" className="hover:text-foreground transition-colors">Community</Link>
            <Link href="/events" className="hover:text-foreground transition-colors">Events</Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-3">
          {/* Desktop only: search + submit + profile */}
          <div className="hidden md:flex items-center gap-3">
            <NavbarSearch />
            <Link href="/community/submit" tabIndex={-1}>
              <Button variant="outline" size="sm" tabIndex={-1}>
                Submit
              </Button>
            </Link>
            <Link href="/dashboard" tabIndex={-1}>
              <Button variant="ghost" size="icon" className="rounded-full border border-border" tabIndex={-1}>
                <User className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Mobile only: hamburger */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
