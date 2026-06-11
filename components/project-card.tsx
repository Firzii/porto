import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
  compact?: boolean;
};

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
  const isExternal = project.isExternal && project.links.demo;
  const projectLink = isExternal ? project.links.demo! : `/projects/${project.slug}`;
  const linkProps = isExternal ? { target: "_blank", rel: "noreferrer" } : {};

  return (
    <article className="group flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border/60 bg-card/70 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-foreground/30 hover:bg-card hover:shadow-md">
      <div>
        {/* Project Image Banner */}
        {project.image && (
          <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border/40">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
            {/* Subtle premium dark gradient overlay for hover and styling */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-60" />
          </div>
        )}

        <div className="space-y-4 p-6">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span>{project.year}</span>
            <span>{project.role}</span>
          </div>
          <div className="space-y-2">
            <h3 className="font-heading text-2xl text-foreground transition-colors group-hover:text-foreground/90">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.summary}
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border/70 bg-muted/40 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 p-6 pt-0">
        <Button asChild size="sm">
          {isExternal ? (
            <a href={projectLink} target="_blank" rel="noreferrer">
              View Project
            </a>
          ) : (
            <Link href={projectLink}>
              View Project
            </Link>
          )}
        </Button>
        {project.links.demo && !compact && !isExternal && (
          <Button asChild size="sm" variant="outline">
            <Link href={project.links.demo} target="_blank" rel="noreferrer">
              Live demo
            </Link>
          </Button>
        )}
      </div>
    </article>
  );
}
