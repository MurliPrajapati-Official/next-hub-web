export interface Resource {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  views: number;
  uploader: string;
  date: string;
  url: string;
  type: "github" | "documentation" | "course" | "cheatsheet" | "library" | "aitool";
  difficulty: "beginner" | "intermediate" | "advanced";
  pricing: "free" | "freemium" | "paid";
  rating: number;
}

export const mockResources: Resource[] = [
  {
    id: "1",
    title: "Next.js App Router Documentation",
    category: "Frontend",
    description: "Official guide to using the App Router in Next.js 14+, covering server components and actions.",
    tags: ["nextjs", "react", "frontend"],
    views: 12500,
    uploader: "Vercel",
    date: "2024-05-12",
    url: "https://nextjs.org/docs",
    type: "documentation",
    difficulty: "intermediate",
    pricing: "free",
    rating: 4.9
  },
  {
    id: "2",
    title: "Tailwind CSS Configuration Guide",
    category: "Design",
    description: "A comprehensive cheat sheet for configuring and extending Tailwind CSS themes.",
    tags: ["css", "tailwind", "design"],
    views: 8900,
    uploader: "TailwindLabs",
    date: "2024-03-22",
    url: "https://tailwindcss.com/docs",
    type: "cheatsheet",
    difficulty: "beginner",
    pricing: "free",
    rating: 4.8
  },
  {
    id: "3",
    title: "Supabase Authentication with Next.js",
    category: "Backend",
    description: "Step-by-step tutorial on implementing secure auth using Supabase SSR and Next.js.",
    tags: ["auth", "supabase", "backend"],
    views: 4320,
    uploader: "JaneDev",
    date: "2024-06-01",
    url: "https://supabase.com/docs/guides/auth",
    type: "course",
    difficulty: "intermediate",
    pricing: "free",
    rating: 4.5
  },
  {
    id: "4",
    title: "Framer Motion Animation Patterns",
    category: "UI Kits",
    description: "A collection of accessible, performant animation patterns for React applications.",
    tags: ["animation", "react", "framer"],
    views: 15600,
    uploader: "MotionDesign",
    date: "2024-04-18",
    url: "https://framer.com/motion",
    type: "library",
    difficulty: "intermediate",
    pricing: "free",
    rating: 4.7
  },
  {
    id: "5",
    title: "System Design Primer",
    category: "Interview",
    description: "Learn how to design large-scale systems. Prep for the system design interview.",
    tags: ["architecture", "interview", "backend"],
    views: 245000,
    uploader: "donnemartin",
    date: "2023-11-05",
    url: "https://github.com/donnemartin/system-design-primer",
    type: "github",
    difficulty: "advanced",
    pricing: "free",
    rating: 4.95
  },
  {
    id: "6",
    title: "Lucide Icons",
    category: "UI Kits",
    description: "Beautiful and consistent icon toolkit made by the community.",
    tags: ["icons", "svg", "design"],
    views: 6780,
    uploader: "LucideHQ",
    date: "2024-01-30",
    url: "https://lucide.dev",
    type: "library",
    difficulty: "beginner",
    pricing: "free",
    rating: 4.6
  },
  {
    id: "7",
    title: "GitHub Copilot Best Practices",
    category: "AI",
    description: "Learn to write better prompts and leverage GitHub Copilot for pair programming productivity.",
    tags: ["ai", "copilot", "productivity"],
    views: 34200,
    uploader: "GitHubDocs",
    date: "2024-07-01",
    url: "https://docs.github.com/copilot",
    type: "documentation",
    difficulty: "beginner",
    pricing: "paid",
    rating: 4.4
  },
  {
    id: "8",
    title: "Developer Roadmap 2024",
    category: "Roadmaps",
    description: "Community-driven roadmaps for frontend, backend, DevOps, and full-stack development paths.",
    tags: ["roadmap", "career", "learning"],
    views: 189000,
    uploader: "kamranahmedse",
    date: "2024-01-01",
    url: "https://roadmap.sh",
    type: "course",
    difficulty: "beginner",
    pricing: "free",
    rating: 4.9
  },
  {
    id: "9",
    title: "freeCodeCamp Full Stack Course",
    category: "Learning",
    description: "Free, self-paced curriculum covering HTML, CSS, JavaScript, React, Node.js, and databases.",
    tags: ["learning", "fullstack", "free"],
    views: 520000,
    uploader: "freeCodeCamp",
    date: "2024-02-15",
    url: "https://freecodecamp.org",
    type: "course",
    difficulty: "beginner",
    pricing: "free",
    rating: 4.85
  },
  {
    id: "10",
    title: "Docker & Kubernetes Handbook",
    category: "DevOps",
    description: "A practical guide to containerization and orchestration for production deployments.",
    tags: ["docker", "kubernetes", "devops"],
    views: 67800,
    uploader: "CloudNative",
    date: "2024-03-10",
    url: "https://kubernetes.io/docs",
    type: "documentation",
    difficulty: "intermediate",
    pricing: "free",
    rating: 4.7
  },
  {
    id: "11",
    title: "AWS Free Tier Services Guide",
    category: "Cloud",
    description: "Complete list of AWS services available for free, with usage limits and best practices.",
    tags: ["aws", "cloud", "free"],
    views: 42100,
    uploader: "AWSCommunity",
    date: "2024-04-22",
    url: "https://aws.amazon.com/free",
    type: "cheatsheet",
    difficulty: "beginner",
    pricing: "freemium",
    rating: 4.3
  },
  {
    id: "12",
    title: "OWASP Top 10 Security Risks",
    category: "Security",
    description: "The most critical security risks to web applications and how to mitigate them.",
    tags: ["security", "owasp", "web"],
    views: 89000,
    uploader: "OWASP",
    date: "2024-01-15",
    url: "https://owasp.org/www-project-top-ten/",
    type: "documentation",
    difficulty: "advanced",
    pricing: "free",
    rating: 4.8
  },
  {
    id: "13",
    title: "Awesome Open Source Projects",
    category: "Open Source",
    description: "A curated list of the best open source projects across all languages and frameworks.",
    tags: ["opensource", "github", "community"],
    views: 310000,
    uploader: "sindresorhus",
    date: "2024-06-20",
    url: "https://github.com/sindresorhus/awesome",
    type: "github",
    difficulty: "beginner",
    pricing: "free",
    rating: 4.9
  },
  {
    id: "14",
    title: "PostgreSQL Performance Tuning",
    category: "Databases",
    description: "Advanced indexing, query optimization, and configuration tips for PostgreSQL at scale.",
    tags: ["postgres", "database", "performance"],
    views: 23400,
    uploader: "PGExpert",
    date: "2024-05-05",
    url: "https://wiki.postgresql.org/wiki/Performance_Optimization",
    type: "documentation",
    difficulty: "advanced",
    pricing: "free",
    rating: 4.6
  },
  {
    id: "15",
    title: "LeetCode Patterns Cheat Sheet",
    category: "Interview",
    description: "14 common algorithm patterns that cover 90% of coding interview problems.",
    tags: ["leetcode", "algorithms", "interview"],
    views: 178000,
    uploader: "NeetCode",
    date: "2024-02-28",
    url: "https://neetcode.io",
    type: "cheatsheet",
    difficulty: "intermediate",
    pricing: "freemium",
    rating: 4.8
  },
  {
    id: "16",
    title: "Public APIs Directory",
    category: "GitHub",
    description: "A collective list of free APIs for development, testing, and prototyping.",
    tags: ["api", "free", "development"],
    views: 256000,
    uploader: "public-apis",
    date: "2024-03-18",
    url: "https://github.com/public-apis/public-apis",
    type: "github",
    difficulty: "beginner",
    pricing: "free",
    rating: 4.7
  },
  {
    id: "17",
    title: "Cursor AI IDE Tips & Tricks",
    category: "AI",
    description: "Maximize your coding speed with Cursor AI: shortcuts, prompts, and workflow optimizations.",
    tags: ["ai", "cursor", "ide"],
    views: 45600,
    uploader: "AIDevTools",
    date: "2024-07-10",
    url: "https://cursor.sh",
    type: "aitool",
    difficulty: "intermediate",
    pricing: "freemium",
    rating: 4.7
  },
  {
    id: "18",
    title: "Shadcn/UI Component Library",
    category: "UI Kits",
    description: "Beautifully designed, copy-paste components built with Radix UI and Tailwind CSS.",
    tags: ["ui", "components", "react"],
    views: 134000,
    uploader: "shadcn",
    date: "2024-01-20",
    url: "https://ui.shadcn.com",
    type: "library",
    difficulty: "intermediate",
    pricing: "free",
    rating: 4.9
  },
  {
    id: "19",
    title: "React Query (TanStack Query) Guide",
    category: "Frontend",
    description: "Master server state management with TanStack Query: caching, mutations, and infinite scroll.",
    tags: ["react", "tanstack", "state"],
    views: 67200,
    uploader: "TanStack",
    date: "2024-04-12",
    url: "https://tanstack.com/query",
    type: "documentation",
    difficulty: "intermediate",
    pricing: "free",
    rating: 4.8
  },
  {
    id: "20",
    title: "Go by Example",
    category: "Backend",
    description: "Hands-on introduction to Go using annotated example programs with explanations.",
    tags: ["go", "golang", "backend"],
    views: 98000,
    uploader: "mmcgrana",
    date: "2024-02-01",
    url: "https://gobyexample.com",
    type: "course",
    difficulty: "beginner",
    pricing: "free",
    rating: 4.9
  },
];

export function filterResources(options: {
  search?: string;
  category?: string;
  sort?: string;
  type?: string;
  difficulty?: string;
  pricing?: string;
}): Resource[] {
  const { search, category, sort, type, difficulty, pricing } = options;
  let filtered = [...mockResources];

  if (category && category !== "All") {
    filtered = filtered.filter((res) => res.category.toLowerCase() === category.toLowerCase());
  }

  if (type && type !== "All") {
    filtered = filtered.filter((res) => res.type.toLowerCase() === type.toLowerCase());
  }

  if (difficulty && difficulty !== "All") {
    filtered = filtered.filter((res) => res.difficulty.toLowerCase() === difficulty.toLowerCase());
  }

  if (pricing && pricing !== "All") {
    filtered = filtered.filter((res) => res.pricing.toLowerCase() === pricing.toLowerCase());
  }

  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(
      (res) =>
        res.title.toLowerCase().includes(q) ||
        res.description.toLowerCase().includes(q) ||
        res.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  }

  if (sort) {
    if (sort === "latest") {
      filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (sort === "oldest") {
      filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    } else if (sort === "popular" || sort === "visited") {
      filtered.sort((a, b) => b.views - a.views);
    } else if (sort === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    }
  }

  return filtered;
}
