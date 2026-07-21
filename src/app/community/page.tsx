import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { MessageSquare, Heart, Bookmark, Plus, GitMerge } from "lucide-react";

export default function CommunityPage() {
  const posts = [
    {
      id: 1,
      author: "alex_dev",
      avatar: "A",
      resourceTitle: "Mastering Postgres Triggers",
      description: "A comprehensive guide I found on how to correctly structure database triggers without causing infinite loops.",
      category: "Databases",
      likes: 124,
      comments: 18,
      time: "2 hours ago"
    },
    {
      id: 2,
      author: "sarah_codes",
      avatar: "S",
      resourceTitle: "Next.js App Router Architecture",
      description: "My personal boilerplate for setting up highly scalable Next.js 14+ applications using the new App Router.",
      category: "Frontend",
      likes: 89,
      comments: 5,
      time: "5 hours ago"
    },
    {
      id: 3,
      author: "linux_wizard",
      avatar: "L",
      resourceTitle: "Vim Cheat Sheet (Interactive)",
      description: "The best interactive tutorial for memorizing vim motions. Helped me finally transition away from VS Code.",
      category: "DevOps",
      likes: 312,
      comments: 42,
      time: "1 day ago"
    },
    {
      id: 4,
      author: "ml_engineer",
      avatar: "M",
      resourceTitle: "LangChain RAG Pipeline Tutorial",
      description: "Step-by-step guide for building a Retrieval Augmented Generation pipeline using LangChain and Pinecone.",
      category: "AI",
      likes: 267,
      comments: 31,
      time: "1 day ago"
    },
    {
      id: 5,
      author: "rust_crab",
      avatar: "R",
      resourceTitle: "Rust Error Handling Patterns",
      description: "Collected the best patterns for error handling in Rust: Result, anyhow, thiserror, and custom error types.",
      category: "Backend",
      likes: 198,
      comments: 22,
      time: "2 days ago"
    },
    {
      id: 6,
      author: "cloud_native",
      avatar: "C",
      resourceTitle: "Kubernetes Cost Optimization Guide",
      description: "How we reduced our K8s bill by 60% using spot instances, right-sizing, and autoscaling policies.",
      category: "Cloud",
      likes: 445,
      comments: 56,
      time: "3 days ago"
    },
  ];

  return (
    <div className="w-full px-4 md:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
        <div>
          <h1 className="text-4xl font-bold font-sans tracking-tight mb-2">Community Feed</h1>
          <p className="text-foreground/70 font-mono text-sm max-w-xl">
            // Resources curated, reviewed, and shared by developers.
          </p>
        </div>
        <Link href="/community/submit">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Submit Resource
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Feed */}
        <div className="lg:col-span-3 space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="border border-border bg-surface p-6 rounded-none transition-all duration-200 hover:border-primary/30 hover:-translate-y-0.5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-primary/10 text-primary flex items-center justify-center font-bold text-sm border border-primary/20 rounded-md">
                    {post.avatar}
                  </div>
                  <div>
                    <div className="font-medium text-sm">@{post.author}</div>
                    <div className="text-xs text-foreground/50 font-mono">{post.time}</div>
                  </div>
                </div>
                <Badge variant="outline" className="font-mono text-xs">{post.category}</Badge>
              </div>

              <div className="mb-4">
                <h2 className="text-xl font-bold font-sans mb-2 hover:text-primary transition-colors cursor-pointer">
                  {post.resourceTitle}
                </h2>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  {post.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <div className="flex items-center gap-4 text-foreground/60">
                  <button className="flex items-center text-xs hover:text-primary transition-colors">
                    <Heart className="h-4 w-4 mr-1.5" />
                    {post.likes}
                  </button>
                  <button className="flex items-center text-xs hover:text-primary transition-colors">
                    <MessageSquare className="h-4 w-4 mr-1.5" />
                    {post.comments}
                  </button>
                  <button className="flex items-center text-xs hover:text-primary transition-colors">
                    <GitMerge className="h-4 w-4 mr-1.5" />
                    Fork
                  </button>
                </div>
                <button className="text-foreground/60 hover:text-primary transition-colors">
                  <Bookmark className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="border border-border bg-surface p-5 rounded-none">
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 border-b border-border pb-2">Trending Tags</h3>
            <div className="flex flex-wrap gap-2">
              {["#react", "#system-design", "#rust", "#ai-tools", "#career", "#nextjs", "#docker"].map(tag => (
                <Badge key={tag} variant="secondary" className="cursor-pointer">{tag}</Badge>
              ))}
            </div>
          </div>
          
          <div className="border border-border bg-surface p-5 rounded-none">
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 border-b border-border pb-2">Top Contributors</h3>
            <ul className="space-y-3">
              {[
                { name: "@alex_dev", pts: 420 },
                { name: "@cloud_native", pts: 380 },
                { name: "@ml_engineer", pts: 310 },
                { name: "@linux_wizard", pts: 285 },
                { name: "@sarah_codes", pts: 240 },
              ].map((c, i) => (
                <li key={i} className="flex items-center justify-between text-sm">
                  <span className="font-medium text-foreground/80">{c.name}</span>
                  <span className="text-xs font-mono text-primary border border-primary/20 bg-primary/5 px-1.5 py-0.5 rounded">{c.pts} pts</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

