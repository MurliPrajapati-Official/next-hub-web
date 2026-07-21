import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: "System Design Masterclass",
      date: "August 12, 2026",
      time: "18:00 - 20:00 UTC",
      location: "Online (Discord)",
      speakers: ["Alex Chen", "Sarah Jenkins"],
      description: "A deep dive into distributed systems, load balancing, and database sharding with real-world examples from scale-ups.",
      tags: ["Backend", "Architecture"]
    },
    {
      id: 2,
      title: "Next Hub Open Source Hackathon",
      date: "September 05-07, 2026",
      time: "48 Hours",
      location: "Hybrid (London & Online)",
      speakers: ["Core Team"],
      description: "Join us to build extensions and tools around the Next Hub API. Prizes for best use of local AI models.",
      tags: ["Hackathon", "Open Source"]
    },
    {
      id: 3,
      title: "AI-Powered Developer Tools Workshop",
      date: "September 20, 2026",
      time: "14:00 - 17:00 UTC",
      location: "Online (Zoom)",
      speakers: ["Priya Sharma", "David Kim"],
      description: "Hands-on workshop covering Cursor AI, GitHub Copilot, and Codeium for maximum developer productivity.",
      tags: ["AI", "Productivity"]
    },
    {
      id: 4,
      title: "Cloud Infrastructure Deep Dive",
      date: "October 03, 2026",
      time: "16:00 - 18:30 UTC",
      location: "Online (Discord)",
      speakers: ["Marcus Aurelius"],
      description: "From zero to production: building fault-tolerant infrastructure on AWS using Terraform and CDK.",
      tags: ["Cloud", "DevOps"]
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: "React 19 & Next.js App Router",
      date: "July 01, 2026",
      time: "17:00 UTC",
      location: "Online",
      speakers: ["David Kim"],
      description: "A practical migration guide from pages router to the new app router paradigms.",
      tags: ["Frontend", "React"]
    },
    {
      id: 6,
      title: "Open Source Contribution 101",
      date: "June 15, 2026",
      time: "15:00 UTC",
      location: "Online (YouTube Live)",
      speakers: ["Elena Rostova"],
      description: "How to find, fork, and contribute to open source projects as a beginner.",
      tags: ["Open Source", "Career"]
    },
    {
      id: 7,
      title: "Database Design Patterns",
      date: "May 28, 2026",
      time: "18:00 UTC",
      location: "Online",
      speakers: ["Sarah Jenkins"],
      description: "Normalization, denormalization, and when to use each in production applications.",
      tags: ["Databases", "Backend"]
    }
  ];

  return (
    <div className="w-full px-4 md:px-8 py-12">
      <div className="mb-16 border-b border-border pb-8">
        <h1 className="text-4xl font-bold font-sans tracking-tight mb-4">Tech Events</h1>
        <p className="text-foreground/70 font-mono text-sm max-w-2xl leading-relaxed">
          // Workshops, hackathons, and meetups for the developer community.
        </p>
      </div>

      <div className="space-y-16">
        {/* Upcoming Events Section */}
        <div>
          <h2 className="text-2xl font-bold font-sans tracking-tight mb-8 flex items-center">
            <span className="h-3 w-3 bg-primary rounded-sm mr-3 animate-pulse"></span>
            Upcoming
          </h2>
          
          <div className="relative border-l-2 border-border ml-3 pl-8 space-y-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="relative">
                <div className="absolute -left-[41px] top-1.5 h-4 w-4 bg-background border-2 border-primary rounded-sm"></div>
                
                <div className="border border-border bg-surface p-6 rounded-md transition-all duration-200 hover:border-primary/40 hover:-translate-y-0.5">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold font-sans mb-2">{event.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/70 font-mono">
                        <div className="flex items-center">
                          <Calendar className="mr-1.5 h-4 w-4" />
                          {event.date} • {event.time}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="mr-1.5 h-4 w-4" />
                          {event.location}
                        </div>
                      </div>
                    </div>
                    <Button className="shrink-0">
                      Register Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  
                  <p className="text-foreground/80 mb-6 text-sm leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-border/50 pt-4 gap-3">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-foreground/50" />
                      <span className="text-sm font-medium">Speakers:</span>
                      <span className="text-sm text-foreground/70">{event.speakers.join(", ")}</span>
                    </div>
                    <div className="flex gap-2">
                      {event.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="font-mono text-xs">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events Section */}
        <div>
          <h2 className="text-2xl font-bold font-sans tracking-tight mb-8 flex items-center text-foreground/60">
            <span className="h-3 w-3 bg-border rounded-sm mr-3"></span>
            Past Archive
          </h2>
          
          <div className="relative border-l-2 border-border/50 ml-3 pl-8 space-y-6">
            {pastEvents.map((event) => (
              <div key={event.id} className="relative opacity-70 hover:opacity-100 transition-all duration-200">
                <div className="absolute -left-[41px] top-1.5 h-4 w-4 bg-background border-2 border-border rounded-sm"></div>
                
                <div className="border border-border bg-transparent p-6 rounded-md">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-lg font-bold font-sans mb-2">{event.title}</h3>
                      <div className="flex items-center text-sm text-foreground/60 font-mono">
                        <Calendar className="mr-1.5 h-4 w-4" />
                        {event.date}
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      View Recording
                    </Button>
                  </div>
                  <p className="text-foreground/60 text-sm">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
