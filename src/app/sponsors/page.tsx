import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";

export default function SponsorsPage() {
  const sponsors = [
    {
      name: "Vercel",
      description: "Vercel provides the developer experience and infrastructure to build, scale, and secure a faster, more personalized web.",
      url: "https://vercel.com",
      tier: "Platinum",
      logo: "V"
    },
    {
      name: "Supabase",
      description: "Build in a weekend. Scale to millions. The open source Firebase alternative.",
      url: "https://supabase.com",
      tier: "Platinum",
      logo: "S"
    },
    {
      name: "Tailwind Labs",
      description: "Rapidly build modern websites without ever leaving your HTML.",
      url: "https://tailwindcss.com",
      tier: "Gold",
      logo: "T"
    },
    {
      name: "Cloudflare",
      description: "Secure, fast, and reliable connectivity for your entire enterprise network.",
      url: "https://cloudflare.com",
      tier: "Gold",
      logo: "C"
    },
    {
      name: "PlanetScale",
      description: "The MySQL-compatible serverless database platform with branching and zero-downtime schema migrations.",
      url: "https://planetscale.com",
      tier: "Silver",
      logo: "P"
    },
    {
      name: "Railway",
      description: "Infrastructure as easy as writing code. Deploy databases, cron jobs, and services instantly.",
      url: "https://railway.app",
      tier: "Silver",
      logo: "R"
    }
  ];

  return (
    <div className="w-full px-4 md:px-8 py-12">
      <div className="mb-12 border-b border-border pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-bold font-sans tracking-tight mb-4">Our Sponsors</h1>
          <p className="text-foreground/70 font-mono text-sm max-w-2xl leading-relaxed">
            // The infrastructure and tooling companies that keep Next Hub completely free for the developer community.
          </p>
        </div>
        <Button variant="outline" className="font-mono uppercase tracking-wider text-xs shrink-0">
          Become a Sponsor
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sponsors.map((sponsor, i) => (
          <div key={i} className="border border-border bg-surface flex flex-col rounded-none group transition-all duration-200 hover:border-primary/30 hover:-translate-y-1">
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-6">
                <div className="h-12 w-12 bg-background border border-border flex items-center justify-center text-xl font-bold font-mono rounded-md">
                  {sponsor.logo}
                </div>
                <div className="text-xs font-mono border border-border px-2 py-1 bg-background text-foreground/60 uppercase tracking-widest rounded">
                  {sponsor.tier}
                </div>
              </div>
              
              <h2 className="text-xl font-bold font-sans mb-3 group-hover:text-primary transition-colors">{sponsor.name}</h2>
              <p className="text-sm text-foreground/70 leading-relaxed mb-8 flex-grow">
                {sponsor.description}
              </p>
              
              <a 
                href={sponsor.url} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center text-sm font-medium text-primary hover:underline mt-auto"
              >
                Visit Website
                <ArrowUpRight className="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 bg-primary/5 border border-primary/20 p-8 rounded-md text-center max-w-2xl mx-auto">
        <h2 className="text-xl font-bold font-sans mb-3">Reach the Right Audience</h2>
        <p className="text-sm text-foreground/70 mb-6">
          Next Hub is visited by tens of thousands of developers every month looking for high-quality tools, libraries, and resources. Partner with us to put your product directly in their toolkit.
        </p>
        <Button>
          View Sponsorship Deck
        </Button>
      </div>
    </div>
  );
}

