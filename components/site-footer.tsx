import Link from "next/link";

import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="font-medium text-foreground">{siteConfig.name}</p>
          <p>{siteConfig.role}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          {siteConfig.social.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-foreground"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
