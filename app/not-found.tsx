import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] w-full max-w-5xl flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
        404
      </p>
      <h1 className="font-heading text-4xl">That page is not here.</h1>
      <p className="text-muted-foreground">
        The link may be outdated or the page has moved.
      </p>
      <Button asChild variant="outline">
        <Link href="/">Back home</Link>
      </Button>
    </div>
  );
}
