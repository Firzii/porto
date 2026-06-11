import Link from "next/link";
import { ArrowUpRight, Code2, Sparkles, HeartHandshake } from "lucide-react";

import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { featuredProjects } from "@/lib/projects";
import { siteConfig } from "@/lib/site";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-20 pt-16 md:pt-28">
        <div className="max-w-4xl space-y-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card px-4 py-2 text-xs uppercase tracking-[0.25em] text-muted-foreground shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for select projects</span>
            </div>
          </Reveal>
          
          <Reveal delay={0.1}>
            <div className="space-y-6">
              <p className="font-heading text-lg tracking-wider text-muted-foreground uppercase">
                {siteConfig.name}
              </p>
              <h1 className="text-balance font-heading text-4xl leading-tight text-foreground sm:text-5xl lg:text-7xl font-bold">
                Building web experiences that are fast, clean, and built to last.
              </h1>
              <p className="max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed">
                {siteConfig.summary}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button asChild size="lg" className="rounded-full px-8 shadow-md hover:shadow-lg transition-all duration-300">
                <Link href="/projects">
                  View My Work <ArrowUpRight className="ml-2 size-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 hover:bg-muted/40 transition-colors">
                <Link href="/contact">Let's Talk</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <Reveal delay={0.25}>
          <div className="rounded-3xl border border-border/60 bg-card/45 p-8 backdrop-blur-xs">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Code2 className="size-4 text-muted-foreground" />
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-semibold">
                  What I build with
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {["Next.js", "TypeScript", "React", "Laravel", "PostgreSQL", "MySQL"].map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-2xl border border-border/70 bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-xs cursor-default"
                  >
                    <span className="mr-2 size-1.5 rounded-full bg-muted-foreground/60" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Featured Work Section */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Sparkles className="size-4 text-muted-foreground" />
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">
                  Selected Projects
                </p>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold">
                Featured work
              </h2>
            </div>
            <Button asChild variant="ghost" className="hover:bg-muted/40 rounded-full">
              <Link href="/projects" className="flex items-center">
                Browse all projects <ArrowUpRight className="ml-1.5 size-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={0.05 * index}>
              <ProjectCard project={project} compact />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-24">
        <Reveal>
          <div className="grid gap-8 rounded-3xl border border-border/60 bg-card/85 p-8 sm:p-12 md:grid-cols-[1.1fr_0.9fr] backdrop-blur-sm shadow-sm relative overflow-hidden">
            {/* Elegant glowing background blur */}
            <div className="absolute -right-24 -bottom-24 -z-10 size-64 rounded-full bg-primary/5 blur-3xl" />
            
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <HeartHandshake className="size-4 text-muted-foreground" />
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">
                  How I can help
                </p>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold">
                Let's work together
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                Whether you're a founder with an idea or a startup that needs execution — I can help you build, ship, and scale your product from the ground up.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4 sm:flex-row md:flex-col lg:flex-row md:items-stretch lg:items-center">
              <Button asChild size="lg" className="rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                <Link href="/contact">Start a Project</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full hover:bg-muted/40 transition-colors">
                <Link href="/contact">Book a Call</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
