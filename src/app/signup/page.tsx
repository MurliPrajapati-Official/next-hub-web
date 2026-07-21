"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { ArrowLeft, Github, Terminal } from "lucide-react";

export default function SignupPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="min-h-[calc(100vh-140px)] grid grid-cols-1 md:grid-cols-2">
      {/* Left side: Form */}
      <div className="flex flex-col justify-center px-8 py-12 md:px-16 lg:px-24">
        <div className="w-full max-w-sm mx-auto space-y-8">
          <div className="mb-2">
            <Link href="/" className="inline-flex items-center text-sm font-medium text-foreground/70 hover:text-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Hub
            </Link>
          </div>
          
          <div className="space-y-2">
            <h2 className="text-2xl font-bold font-sans tracking-tight">Create Account</h2>
            <p className="text-sm text-foreground/60">
              Join the community and start curating your toolkit.
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium leading-none">
                Username
              </label>
              <Input
                id="name"
                placeholder="developer_01"
                type="text"
                autoCapitalize="none"
                autoCorrect="off"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium leading-none">
                Email
              </label>
              <Input
                id="email"
                placeholder="developer@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium leading-none">
                Password
              </label>
              <Input
                id="password"
                type="password"
                autoComplete="new-password"
                required
              />
            </div>
            
            <Button className="w-full mt-2" type="submit">
              Register User
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-foreground/50 font-mono">
                Or authenticate via
              </span>
            </div>
          </div>

          <Button variant="outline" type="button" className="w-full">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>

          <p className="text-center text-sm text-foreground/60">
            Already registered?{" "}
            <Link href="/login" className="text-primary hover:underline font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* Right side: Context / Branding */}
      <div className="hidden md:flex flex-col justify-between p-12 bg-surface border-l border-border">
        <div>
          <div className="h-12 w-12 bg-primary/10 rounded-md flex items-center justify-center mb-6 border border-primary/20">
            <Terminal className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-3xl font-bold font-sans tracking-tight mb-6">
            Stop searching.<br />Start building.
          </h1>
          <ul className="space-y-4 font-mono text-sm text-foreground/80">
            <li className="flex items-start">
              <span className="text-primary mr-2">{'>'}</span>
              Bookmark top-tier resources.
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">{'>'}</span>
              Contribute to the developer feed.
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">{'>'}</span>
              Track what you've learned.
            </li>
          </ul>
        </div>
        
        <div className="text-xs font-mono text-foreground/40 border-t border-border/50 pt-4">
          By registering, you agree to our Terms of Service and Privacy Policy.
        </div>
      </div>
    </div>
  );
}
