"use client";

import * as React from "react";

import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { projectTags, projects } from "@/lib/projects";
import { cn } from "@/lib/utils";

export function ProjectsGrid() {
  const [activeTag, setActiveTag] = React.useState<(typeof projectTags)[number]>(
    "All"
  );

  const filteredProjects = React.useMemo(() => {
    if (activeTag === "All") {
      return projects;
    }

    return projects.filter((project) => project.stack.includes(activeTag));
  }, [activeTag]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {projectTags.map((tag) => (
          <Button
            key={tag}
            size="sm"
            variant={activeTag === tag ? "default" : "outline"}
            onClick={() => setActiveTag(tag)}
            className={cn(
              "rounded-full",
              activeTag === tag && "bg-foreground text-background"
            )}
          >
            {tag}
          </Button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
