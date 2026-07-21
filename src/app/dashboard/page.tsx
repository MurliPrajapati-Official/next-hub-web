"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { 
  User, 
  Settings, 
  Bookmark, 
  FileCode, 
  Key, 
  Terminal, 
  LogOut, 
  Copy, 
  Check, 
  Plus,
  ArrowUpRight,
  ExternalLink 
} from "lucide-react";
import { useBookmarks } from "@/hooks/useBookmarks";
import { useAuth } from "@/hooks/useAuth";
import { mockResources } from "@/data/resources";

export default function DashboardPage() {
  const router = useRouter();
  const [apiKey, setApiKey] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  
  const { logout, isLoggedIn, isLoaded } = useAuth();

  // If not logged in, redirect to login page (mockup protection)
  useEffect(() => {
    if (isLoaded && !isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn, isLoaded, router]);

  const mockUser = {
    username: "dev_workspace_one",
    email: "marcus@nexthub.dev",
    joined: "July 2026",
    role: "Core Contributor",
    status: "SYSTEM_ACCESS: GRANTED"
  };

  const { bookmarkedIds, removeBookmark } = useBookmarks();
  
  // Get actual bookmarked resources from mock data based on saved IDs
  const savedResources = mockResources.filter(res => bookmarkedIds.includes(res.id));

  const userSubmissions = [
    { id: "s1", title: "Mastering Postgres Triggers", category: "Databases", status: "approved", date: "2026-07-15" },
    { id: "s2", title: "Vim Cheat Sheet (Interactive)", category: "DevOps", status: "approved", date: "2026-07-14" },
    { id: "s3", title: "Custom Webhook Processor", category: "Backend", status: "pending", date: "2026-07-16" },
  ];

  const handleGenerateKey = () => {
    const key = "nh_live_" + Array.from({ length: 32 }, () => 
      Math.random().toString(36)[2] || "0"
    ).join("");
    setApiKey(key);
    setIsCopied(false);
  };

  const handleCopyKey = () => {
    navigator.clipboard.writeText(apiKey);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="w-full px-4 md:px-8 py-12">
      {/* Dashboard Header Banner */}
      <div className="border border-border bg-surface p-6 rounded-none mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 bg-primary/10 border border-primary/25 rounded-md flex items-center justify-center text-primary font-mono text-2xl font-bold select-none">
            M
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-2xl font-bold font-sans">@{mockUser.username}</h1>
              <Badge variant="secondary" className="font-mono text-[10px] uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                {mockUser.role}
              </Badge>
            </div>
            <p className="text-sm text-foreground/60 font-mono text-left">{mockUser.email} • Joined {mockUser.joined}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="hidden lg:block font-mono text-xs text-emerald-400 bg-emerald-500/5 border border-emerald-500/10 px-3 py-2 rounded">
            {mockUser.status}
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="h-10 text-red-400 border-red-500/20 hover:bg-red-500/5 hover:text-red-300"
            onClick={() => logout()}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Navigation Tabs Menu */}
        <aside className="lg:col-span-1 space-y-2">
          {[
            { id: "overview", label: "Dashboard Overview", icon: <Terminal className="w-4 h-4" /> },
            { id: "saved", label: "Bookmarks", icon: <Bookmark className="w-4 h-4" /> },
            { id: "submissions", label: "Submissions", icon: <FileCode className="w-4 h-4" /> },
            { id: "apikeys", label: "Developer Keys", icon: <Key className="w-4 h-4" /> },
            { id: "settings", label: "Account Settings", icon: <Settings className="w-4 h-4" /> },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-3 py-3 text-sm font-medium border rounded-md transition-all text-left cursor-pointer ${
                  isActive
                    ? "bg-surface border-border text-primary font-bold shadow-sm"
                    : "bg-transparent border-transparent text-foreground/70 hover:text-foreground hover:bg-surface/30"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            );
          })}
        </aside>

        {/* Dynamic Display Panel */}
        <main className="lg:col-span-3">
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Quick Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "Bookmarked Resources", count: savedResources.length.toString(), desc: "Saved directories & tools" },
                  { label: "Submissions Review", count: "3", desc: "Submitted community links" },
                  { label: "API Requests / month", count: "142", desc: "Terminal search triggers" },
                ].map((stat, i) => (
                  <div key={i} className="border border-border bg-surface/30 p-5 rounded-none text-left">
                    <div className="text-2xl font-bold font-sans text-foreground mb-1">{stat.count}</div>
                    <div className="text-xs font-mono text-primary uppercase tracking-wider mb-2">{stat.label}</div>
                    <p className="text-xs text-foreground/50">{stat.desc}</p>
                  </div>
                ))}
              </div>

              {/* Recent Saved Resources snippet */}
              <div className="border border-border bg-surface p-6 rounded-none">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-lg font-sans">Recent Saved Items</h3>
                  <button onClick={() => setActiveTab("saved")} className="text-xs font-mono text-primary hover:underline flex items-center">
                    View All Bookmarks <ArrowUpRight className="ml-1 w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="space-y-3">
                  {savedResources.map((res) => (
                    <div key={res.id} className="flex justify-between items-center p-3.5 bg-background border border-border/40 hover:border-primary/20 rounded-md transition-colors">
                      <div>
                        <div className="font-medium text-sm text-foreground mb-1">{res.title}</div>
                        <Badge variant="secondary" className="font-mono text-[9px] uppercase tracking-wider">
                          {res.category}
                        </Badge>
                      </div>
                      <a href={res.url} target="_blank" rel="noopener noreferrer" className="text-foreground/45 hover:text-primary transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "saved" && (
            <div className="border border-border bg-surface p-6 rounded-none space-y-6">
              <div>
                <h3 className="font-bold text-lg font-sans mb-1 text-left">Bookmarked Resources</h3>
                <p className="text-xs text-foreground/50 font-mono text-left">// Resources you saved to review later.</p>
              </div>
              <div className="space-y-3">
                {savedResources.map((res) => (
                  <div key={res.id} className="flex justify-between items-center p-4 bg-background border border-border hover:border-primary/30 rounded-md transition-colors">
                    <div>
                      <div className="font-semibold text-sm text-foreground mb-1">{res.title}</div>
                      <Badge variant="secondary" className="font-mono text-[9px] uppercase">
                        {res.category}
                      </Badge>
                    </div>
                    <div className="flex gap-3">
                      <Button variant="ghost" size="sm" className="text-xs text-foreground/50 hover:text-red-400" onClick={() => removeBookmark(res.id)}>
                        Remove
                      </Button>
                      <a href={res.url} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="h-8">
                          Open Link
                        </Button>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "submissions" && (
            <div className="border border-border bg-surface p-6 rounded-none space-y-6">
              <div className="flex justify-between items-center flex-wrap gap-4">
                <div className="text-left">
                  <h3 className="font-bold text-lg font-sans mb-1">Your Submissions</h3>
                  <p className="text-xs text-foreground/50 font-mono">// Directory items you uploaded to Next Hub.</p>
                </div>
                <Link href="/community/submit">
                  <Button size="sm">
                    <Plus className="mr-1.5 w-4 h-4" /> New Submission
                  </Button>
                </Link>
              </div>
              
              <div className="space-y-3">
                {userSubmissions.map((sub) => (
                  <div key={sub.id} className="flex justify-between items-center p-4 bg-background border border-border rounded-md">
                    <div>
                      <div className="font-semibold text-sm text-foreground mb-1">{sub.title}</div>
                      <div className="flex gap-2 items-center">
                        <Badge variant="secondary" className="font-mono text-[9px] uppercase">
                          {sub.category}
                        </Badge>
                        <span className="text-[10px] font-mono text-foreground/40">{sub.date}</span>
                      </div>
                    </div>
                    <Badge 
                      className={`font-mono text-[10px] uppercase border px-2 py-0.5 rounded ${
                        sub.status === "approved"
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                          : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                      }`}
                    >
                      {sub.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "apikeys" && (
            <div className="border border-border bg-surface p-6 rounded-none space-y-6">
              <div>
                <h3 className="font-bold text-lg font-sans mb-1 text-left">Developer API Keys</h3>
                <p className="text-xs text-foreground/50 font-mono text-left">// Integrate Next Hub directory searches directly into your custom dev tools.</p>
              </div>

              <div className="bg-background border border-border p-5 rounded-md space-y-4">
                <h4 className="font-mono text-sm font-semibold text-left">// Generate Live Key</h4>
                {apiKey ? (
                  <div className="flex gap-2">
                    <div className="flex-1 font-mono text-xs bg-surface border border-border px-3 py-3 rounded text-foreground overflow-x-auto select-all h-10 flex items-center">
                      {apiKey}
                    </div>
                    <Button onClick={handleCopyKey} className="h-10 px-4 shrink-0">
                      {isCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                ) : (
                  <div className="text-center py-6 border border-dashed border-border rounded text-foreground/55 text-sm font-mono">
                    No active API keys generated.
                  </div>
                )}
                
                <div className="flex justify-end">
                  <Button onClick={handleGenerateKey}>
                    Generate Live Key
                  </Button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="border border-border bg-surface p-6 rounded-none space-y-6">
              <div>
                <h3 className="font-bold text-lg font-sans mb-1 text-left">Account Settings</h3>
                <p className="text-xs text-foreground/50 font-mono text-left">// Modify configuration and preferences.</p>
              </div>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-foreground/60 uppercase block">Username</label>
                    <input 
                      type="text" 
                      defaultValue={mockUser.username} 
                      className="w-full h-10 px-3 border border-border bg-background text-foreground text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-foreground/60 uppercase block">Email Address</label>
                    <input 
                      type="email" 
                      defaultValue={mockUser.email} 
                      className="w-full h-10 px-3 border border-border bg-background text-foreground text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-3 pt-4 border-t border-border/40">
                  <span className="text-xs font-mono text-foreground/60 uppercase block">Email Notifications</span>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" id="notify-approvals" defaultChecked className="rounded border-border bg-background text-primary" />
                    <label htmlFor="notify-approvals" className="text-sm text-foreground/80 cursor-pointer">Notify me when my community submissions are approved or rejected</label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" id="notify-events" defaultChecked className="rounded border-border bg-background text-primary" />
                    <label htmlFor="notify-events" className="text-sm text-foreground/80 cursor-pointer">Notify me about upcoming workshops and open source hackathons</label>
                  </div>
                </div>

                <div className="flex justify-end pt-4 border-t border-border/40">
                  <Button type="submit">
                    Save Changes
                  </Button>
                </div>
              </form>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

