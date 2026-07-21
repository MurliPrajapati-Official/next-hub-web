import Link from "next/link";
import { Github, Linkedin, MessageSquare } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-surface/50 py-12 md:py-16 mt-20">
      <div className="w-full px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">

          <div className="col-span-2 md:col-span-1 space-y-4">
            <div className="flex items-center gap-2 group">
              <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-base">N</span>
              </div>
              <h3 className="font-extrabold text-xl tracking-tight">Next Hub</h3>
            </div>
            <p className="text-sm text-foreground/40 leading-relaxed">
              Built for developers who would rather build than search. A centralized resource platform for the engineering community.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-sm text-foreground/60">Platform</h4>
            <ul className="space-y-2 text-sm text-foreground/35">
              <li><Link href="/resources" className="hover:text-primary transition-colors">All Resources</Link></li>
              <li><Link href="/community" className="hover:text-primary transition-colors">Community</Link></li>
              <li><Link href="/community/submit" className="hover:text-primary transition-colors">Submit Resource</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-sm text-foreground/60">Company</h4>
            <ul className="space-y-2 text-sm text-foreground/35">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/team" className="hover:text-primary transition-colors">Team</Link></li>
              <li><Link href="/events" className="hover:text-primary transition-colors">Events</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/sponsors" className="hover:text-primary transition-colors">Sponsors</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-sm text-foreground/60">Legal</h4>
            <ul className="space-y-2 text-sm text-foreground/35">
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>

            <h4 className="font-semibold text-sm text-foreground/60 pt-4">Connect</h4>
            <div className="flex gap-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="h-8 w-8 rounded-none bg-surface border border-transparent hover:border-primary/50 hover:bg-surface-hover hover:text-primary flex items-center justify-center transition-all group">
                <Github className="w-4 h-4 text-foreground/40 group-hover:text-primary transition-colors" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="h-8 w-8 rounded-none bg-surface border border-transparent hover:border-primary/50 hover:bg-surface-hover hover:text-primary flex items-center justify-center transition-all group">
                <Linkedin className="w-4 h-4 text-foreground/40 group-hover:text-primary transition-colors" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="h-8 w-8 rounded-none bg-surface border border-transparent hover:border-primary/50 hover:bg-surface-hover hover:text-primary flex items-center justify-center transition-all group">
                <MessageSquare className="w-4 h-4 text-foreground/40 group-hover:text-primary transition-colors" />
                <span className="sr-only">Discord</span>
              </a>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-foreground/30">
          <p>© {new Date().getFullYear()} Next Hub. Open Source Initiative.</p>
          <div className="flex gap-4">
            <span>v1.0.0</span>
            <span>Last Updated: July 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
