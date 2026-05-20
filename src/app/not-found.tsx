import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container py-24 md:py-36 text-center">
      <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-teal">
        404
      </p>
      <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold text-brand-ink text-balance">
        Page not found
      </h1>
      <p className="mt-5 mx-auto max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-8">
        <Button asChild variant="accent" size="lg">
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </section>
  );
}
