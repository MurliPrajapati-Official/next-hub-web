import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function TeamPage() {
  const team = [
    {
      name: "Marcus Aurelius",
      role: "Lead Engineer",
      bio: "Former systems engineer at large-scale tech. Specializes in Go, Rust, and distributed architectures.",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "marcus@nexthub.dev"
    },
    {
      name: "Elena Rostova",
      role: "Frontend Architect",
      bio: "React core contributor and UI fanatic. Ensures Next Hub feels as snappy as a native application.",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "elena@nexthub.dev"
    },
    {
      name: "David Chen",
      role: "Community Manager",
      bio: "The bridge between our users and the codebase. Reviews all community submissions and curates the feed.",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "david@nexthub.dev"
    },
    {
      name: "Sarah Jenkins",
      role: "Database Administrator",
      bio: "Optimizes our Postgres queries so you never have to wait more than 200ms for a search result.",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "sarah@nexthub.dev"
    },
    {
      name: "Priya Sharma",
      role: "AI/ML Engineer",
      bio: "Building the recommendation engine that learns what resources matter most to you.",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "priya@nexthub.dev"
    },
    {
      name: "James Wright",
      role: "DevOps Lead",
      bio: "Keeps the CI/CD pipeline green and the infrastructure cost-efficient across three cloud providers.",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "james@nexthub.dev"
    },
    {
      name: "Aisha Patel",
      role: "Product Designer",
      bio: "Obsessed with developer experience. Designs interfaces that get out of your way and let you focus.",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "aisha@nexthub.dev"
    },
    {
      name: "Carlos Rivera",
      role: "Security Engineer",
      bio: "Ensures every endpoint is hardened and every user's data is protected with industry-standard practices.",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "carlos@nexthub.dev"
    }
  ];

  return (
    <div className="w-full px-4 md:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold font-sans tracking-tight mb-4">Core Team</h1>
        <p className="text-foreground/70 font-mono text-sm max-w-2xl leading-relaxed">
          // The engineers and maintainers keeping the hub running.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((member, i) => (
          <div key={i} className="group border border-border bg-surface flex flex-col rounded-none transition-all duration-200 hover:border-primary/30 hover:-translate-y-1">
            {/* Portrait placeholder */}
            <div className="aspect-[3/4] bg-background relative overflow-hidden border-b border-border rounded-t-md">
              <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-foreground/20 font-mono select-none">
                {member.name.charAt(0)}
              </div>
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300"></div>
            </div>
            
            <div className="p-5 flex flex-col flex-grow">
              <h2 className="text-lg font-bold font-sans mb-1">{member.name}</h2>
              <div className="text-xs font-mono text-primary mb-4">{member.role}</div>
              
              <p className="text-sm text-foreground/70 flex-grow mb-6">
                {member.bio}
              </p>
              
              <div className="flex items-center gap-4 border-t border-border/50 pt-4 mt-auto">
                <Link href={member.github} className="text-foreground/50 hover:text-foreground transition-colors" target="_blank">
                  <Github className="h-4 w-4" />
                </Link>
                <Link href={member.linkedin} className="text-foreground/50 hover:text-[#0077b5] transition-colors" target="_blank">
                  <Linkedin className="h-4 w-4" />
                </Link>
                <Link href={`mailto:${member.email}`} className="text-foreground/50 hover:text-foreground transition-colors">
                  <Mail className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

