"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { ArrowLeft, UploadCloud } from "lucide-react";

export default function SubmitResourcePage() {
  return (
    <div className="w-full px-4 md:px-8 py-12">
      <div className="mb-8">
        <Link href="/community" className="inline-flex items-center text-sm font-medium text-foreground/70 hover:text-foreground mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Community
        </Link>
        <h1 className="text-4xl font-bold font-sans tracking-tight mb-2">Submit Resource</h1>
        <p className="text-foreground/70 font-mono text-sm">
          // All submissions are reviewed by moderators before appearing in the public feed.
        </p>
      </div>

      <div className="border border-border bg-surface p-8 rounded-none shadow-sm">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label htmlFor="url" className="text-sm font-bold uppercase tracking-wider text-foreground/80">
              Source URL
            </label>
            <Input
              id="url"
              placeholder="https://github.com/..."
              type="url"
              required
              className="font-mono text-sm"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-bold uppercase tracking-wider text-foreground/80">
              Resource Title
            </label>
            <Input
              id="title"
              placeholder="E.g., Complete Guide to System Design"
              type="text"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-bold uppercase tracking-wider text-foreground/80">
              Description
            </label>
            <textarea
              id="description"
              className="flex min-h-[120px] w-full rounded-none border border-border bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-foreground/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 resize-y"
              placeholder="Why is this resource useful? What did you learn from it?"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="category" className="text-sm font-bold uppercase tracking-wider text-foreground/80">
                Category
              </label>
              <select
                id="category"
                className="flex h-9 w-full rounded-none border border-border bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                required
              >
                <option value="" disabled selected>Select a category</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="devops">DevOps</option>
                <option value="ai">AI Tools</option>
                <option value="opensource">Open Source</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="tags" className="text-sm font-bold uppercase tracking-wider text-foreground/80">
                Tags
              </label>
              <Input
                id="tags"
                placeholder="react, typescript, ui (comma separated)"
                type="text"
              />
            </div>
          </div>

          <div className="pt-6 border-t border-border flex justify-end">
            <Button type="button" variant="ghost" className="mr-4">
              Cancel
            </Button>
            <Button type="submit">
              <UploadCloud className="mr-2 h-4 w-4" />
              Submit for Review
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
