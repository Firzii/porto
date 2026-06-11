import { Reveal } from "@/components/reveal";
import { ProjectsGrid } from "@/components/projects-grid";

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 pb-24 pt-16">
      <Reveal>
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Projects
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl">
            Case studies, product systems, and experiments.
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            A selection of client work and internal initiatives that combine
            sharp UX storytelling with solid engineering execution.
          </p>
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-10">
          <ProjectsGrid />
        </div>
      </Reveal>
    </div>
  );
}
