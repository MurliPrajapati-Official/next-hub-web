"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { ArrowLeft, Github } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="min-h-[calc(100vh-140px)] grid grid-cols-1 md:grid-cols-2">
      {/* Left side: Context / Branding */}
      <div className="hidden md:flex flex-col justify-between p-12 bg-surface border-r border-border">
        <div>
          <Link href="/" className="inline-flex items-center text-sm font-medium text-foreground/70 hover:text-foreground mb-12">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Hub
          </Link>
          <h1 className="text-4xl font-bold font-sans tracking-tight mb-4">
            Welcome back to the workbench.
          </h1>
          <p className="text-foreground/70 font-mono text-sm max-w-md leading-relaxed">
            // Access your saved resources, manage your community submissions, and customize your developer feed.
          </p>
        </div>
        
        <div className="text-xs font-mono text-foreground/40">
          SYSTEM_STATUS: ONLINE_AND_READY
        </div>
      </div>

      {/* Right side: Form */}
      <div className="flex flex-col justify-center px-8 py-12 md:px-16 lg:px-24">
        <div className="w-full max-w-sm mx-auto space-y-8">
          <div className="md:hidden mb-8">
            <Link href="/" className="inline-flex items-center text-sm font-medium text-foreground/70 hover:text-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Hub
            </Link>
          </div>
          
          <div className="space-y-2">
            <h2 className="text-2xl font-bold font-sans tracking-tight">Sign In</h2>
            <p className="text-sm text-foreground/60">
              Enter your credentials to access your terminal.
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
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
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium leading-none">
                  Password
                </label>
                <Link href="#" className="text-xs text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                required
              />
            </div>
            
            <Button className="w-full mt-2" type="submit">
              Initialize Session
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-foreground/50 font-mono">
                Or continue with
              </span>
            </div>
          </div>

          <Button variant="outline" type="button" className="w-full">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>

          <p className="text-center text-sm text-foreground/60">
            Don't have an account?{" "}
            <Link href="/signup" className="text-primary hover:underline font-medium">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
