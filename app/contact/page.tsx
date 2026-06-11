import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 pb-24 pt-16">
      <Reveal>
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Contact
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl">
            Let us build something worth talking about.
          </h1>
          <p className="text-lg text-muted-foreground">
            Share a brief about your product or idea and I will get back within
            48 hours with next steps.
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.7fr]">
        <Reveal>
          <form
            className="space-y-5 rounded-3xl border border-border/70 bg-card/80 p-8"
            action="https://formspree.io/f/your-form-id"
            method="POST"
          >
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="h-12 w-full rounded-xl border border-border bg-background/80 px-4 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="h-12 w-full rounded-xl border border-border bg-background/80 px-4 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                placeholder="you@email.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground" htmlFor="message">
                Project brief
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full resize-none rounded-xl border border-border bg-background/80 px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                placeholder="Tell me about your product, scope, and timelines."
              />
            </div>
            <Button type="submit" size="lg">
              Send inquiry
            </Button>
          </form>
        </Reveal>
        <Reveal delay={0.1}>
          <aside className="space-y-6 rounded-3xl border border-border/70 bg-card/80 p-8">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Direct line
              </p>
              <p className="text-lg font-semibold text-foreground">
                {siteConfig.email}
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href={`mailto:${siteConfig.email}`}>Send email</Link>
              </Button>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                Prefer a quick call? Share your availability and I will send a
                calendar link.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="/contact">Request a call</Link>
              </Button>
            </div>
          </aside>
        </Reveal>
      </div>
    </div>
  );
}
