"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Mail, MapPin, MessagesSquare, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="w-full px-4 md:px-8 py-12">
      <div className="mb-12 border-b border-border pb-8">
        <h1 className="text-4xl font-bold font-sans tracking-tight mb-4">Contact Us</h1>
        <p className="text-foreground/70 font-mono text-sm max-w-2xl leading-relaxed">
          // Have a question, partnership proposal, or found a bug? Drop us a line.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        {/* Left side: Information */}
        <div className="space-y-10">
          <div>
            <h2 className="text-xl font-bold font-sans mb-6">Direct Channels</h2>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="mt-1 bg-surface border border-border p-2 mr-4">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-sm uppercase tracking-wider mb-1 text-foreground/80">General Inquiries</div>
                  <a href="mailto:hello@nexthub.dev" className="text-foreground hover:text-primary font-mono text-sm transition-colors">hello@nexthub.dev</a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mt-1 bg-surface border border-border p-2 mr-4">
                  <MessagesSquare className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-sm uppercase tracking-wider mb-1 text-foreground/80">Community Discord</div>
                  <a href="#" className="text-foreground hover:text-primary font-mono text-sm transition-colors">discord.gg/nexthub</a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mt-1 bg-surface border border-border p-2 mr-4">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-sm uppercase tracking-wider mb-1 text-foreground/80">HQ Location</div>
                  <span className="text-foreground/80 font-mono text-sm">Remote First / London, UK</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-surface border border-border p-6 rounded-none">
            <h3 className="font-bold font-sans mb-2">Want to sponsor us?</h3>
            <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
              Reach thousands of developers directly. We offer strict, non-intrusive sponsorships for developer tools.
            </p>
            <Button variant="outline" size="sm" className="w-full font-mono uppercase tracking-wider text-xs">
              View Sponsor Deck
            </Button>
          </div>
        </div>

        {/* Right side: Form */}
        <div className="border border-border bg-surface p-8 rounded-none shadow-sm">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-bold uppercase tracking-wider text-foreground/80">
                  First Name
                </label>
                <Input id="firstName" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-bold uppercase tracking-wider text-foreground/80">
                  Last Name
                </label>
                <Input id="lastName" required />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-foreground/80">
                Email Address
              </label>
              <Input id="email" type="email" required />
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-bold uppercase tracking-wider text-foreground/80">
                Subject
              </label>
              <select
                id="subject"
                className="flex h-9 w-full rounded-none border border-border bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                required
              >
                <option value="" disabled selected>Select a topic</option>
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="partnership">Partnership / Sponsor</option>
                <option value="bug">Report a Bug</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider text-foreground/80">
                Message
              </label>
              <textarea
                id="message"
                className="flex min-h-[150px] w-full rounded-none border border-border bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:opacity-50 resize-y"
                required
              />
            </div>

            <Button type="submit" className="w-full">
              <Send className="mr-2 h-4 w-4" />
              Transmit Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
