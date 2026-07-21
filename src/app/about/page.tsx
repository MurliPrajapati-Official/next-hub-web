import { Terminal, Database, Users, Globe } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { label: "Active Users", value: "45,000+", icon: <Users className="h-4 w-4" /> },
    { label: "Resources", value: "12,400+", icon: <Database className="h-4 w-4" /> },
    { label: "Commits", value: "8,200", icon: <Terminal className="h-4 w-4" /> },
    { label: "Countries", value: "142", icon: <Globe className="h-4 w-4" /> },
  ];

  return (
    <div className="w-full px-4 md:px-8 py-12">
      <div className="mb-16">
        <h1 className="text-4xl font-bold font-sans tracking-tight mb-4">About Next Hub</h1>
        <p className="text-foreground/70 font-mono text-sm max-w-2xl leading-relaxed">
          // We believe developers should spend less time searching and more time building.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold font-sans">Our Mission</h2>
          <div className="h-1 w-12 bg-primary mb-4"></div>
          <p className="text-foreground/80 leading-relaxed">
            To create the fastest, most reliable way to discover high-quality technical resources. We want to eliminate the endless cycles of opening 20 tabs just to find the right documentation, library, or tutorial.
          </p>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold font-sans">Our Vision</h2>
          <div className="h-1 w-12 bg-primary mb-4"></div>
          <p className="text-foreground/80 leading-relaxed">
            A centralized, community-driven toolbox that acts as the default homepage for engineers, students, and tech enthusiasts globally.
          </p>
        </div>
      </div>

      <div className="border border-border bg-surface p-8 mb-16 rounded-none">
        <h2 className="text-xl font-bold font-sans mb-6">Why Next Hub Exists</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-2 text-primary">01. Scattered Information</h3>
            <p className="text-sm text-foreground/70">
              The best tools and guides are often hidden in obscure GitHub repositories or buried in forum threads.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-2 text-primary">02. Decision Fatigue</h3>
            <p className="text-sm text-foreground/70">
              When there are 50 libraries that do the same thing, you need a curated list of the absolute best ones.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-2 text-primary">03. Wasted Time</h3>
            <p className="text-sm text-foreground/70">
              Every hour spent searching for the right architecture pattern is an hour you aren't writing code.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold font-sans mb-6">Community Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="border border-border p-6 rounded-none flex flex-col items-center justify-center text-center">
              <div className="text-primary mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold font-sans mb-1">{stat.value}</div>
              <div className="text-xs font-mono text-foreground/50 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
