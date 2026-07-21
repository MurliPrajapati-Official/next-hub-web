import Link from "next/link";
import { Github, Linkedin, MessageSquare } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-12 md:py-16 mt-20">
      <div className="w-full px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          
          <div className="col-span-2 md:col-span-1 space-y-4">
            <h3 className="font-bold text-lg tracking-tight">Next Hub</h3>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Built for developers who would rather build than search. A centralized resource platform for the engineering community.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-sm">Platform</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><Link href="/resources" className="hover:text-foreground transition-colors">All Resources</Link></li>
              <li><Link href="/community" className="hover:text-foreground transition-colors">Community</Link></li>
              <li><Link href="/community/submit" className="hover:text-foreground transition-colors">Submit Resource</Link></li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold text-sm">Company</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><Link href="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link href="/team" className="hover:text-foreground transition-colors">Team</Link></li>
              <li><Link href="/events" className="hover:text-foreground transition-colors">Events</Link></li>
              <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
              <li><Link href="/sponsors" className="hover:text-foreground transition-colors">Sponsors</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-sm">Legal</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookies" className="hover:text-foreground transition-colors">Cookie Policy</Link></li>
            </ul>

            <h4 className="font-semibold text-sm pt-4">Connect</h4>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                <MessageSquare className="w-5 h-5" />
                <span className="sr-only">Discord</span>
              </a>
            </div>
          </div>
          
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-foreground/50">
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
