import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/projects";

type ProjectPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-5xl px-6 pb-24 pt-16">
      <Reveal>
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <span>{project.year}</span>
            <span>{project.role}</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl">
            {project.title}
          </h1>
          <p className="text-lg text-muted-foreground">{project.description}</p>
          <div className="flex flex-wrap gap-3">
            {project.links.demo && (
              <Button asChild>
                <Link href={project.links.demo} target="_blank" rel="noreferrer">
                  Live demo <ArrowUpRight className="ml-2 size-4" />
                </Link>
              </Button>
            )}
            {project.links.repo && (
              <Button asChild variant="outline">
                <Link href={project.links.repo} target="_blank" rel="noreferrer">
                  GitHub repo
                </Link>
              </Button>
            )}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <section className="mt-12 grid gap-6 rounded-3xl border border-border/70 bg-card/80 p-8 md:grid-cols-2">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border/70 px-3 py-1 text-xs text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Highlights
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {project.highlights.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.15}>
        <section className="mt-12 rounded-3xl border border-border/70 bg-background/80 p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Next steps
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-4">
            <Button asChild variant="outline">
              <Link href="/projects">Back to projects</Link>
            </Button>
            <Button asChild>
              <Link href="/contact">Start a project</Link>
            </Button>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
