"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Briefcase, Mail } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

function getNavIcon(href: string) {
  switch (href) {
    case "/":
      return Home;
    case "/projects":
      return Briefcase;
    case "/contact":
      return Mail;
    default:
      return Home;
  }
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight hover:opacity-80 transition-opacity">
          <span className="font-heading text-lg sm:text-xl hidden sm:inline">{siteConfig.name}</span>
          <span className="font-heading text-base sm:hidden">Firzi.</span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-1.5 rounded-full border border-border/60 bg-muted/40 p-1 backdrop-blur-sm">
          {siteConfig.nav.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            const Icon = getNavIcon(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                title={item.title}
                aria-label={item.title}
                className={cn(
                  "relative flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200 group",
                  isActive
                    ? "bg-background text-foreground shadow-sm font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/40"
                )}
              >
                <Icon className="h-4 w-4 transition-transform duration-200 group-hover:scale-105" />
                <span className="sr-only">{item.title}</span>
                {isActive && (
                  <span className="absolute bottom-1 h-0.5 w-0.5 rounded-full bg-foreground" />
                )}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
            <Link href="/contact">Book a call</Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
