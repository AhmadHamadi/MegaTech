import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

/**
 * Fixed action bar pinned to the bottom of the viewport on mobile only.
 * Keeps the primary CTA (Request a Pickup) and a tap-to-call button always
 * within thumb reach. Hidden on lg+ where the header already exposes both.
 */
export function MobileCtaBar() {
  return (
    <div className="lg:hidden fixed inset-x-0 bottom-0 z-50 border-t border-brand-line/60 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="container flex items-center gap-3 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <Button asChild variant="accent" className="flex-1">
          <Link href="/#pickup">Request a Pickup</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          size="icon"
          aria-label={`Call ${siteConfig.phone}`}
        >
          <a href={siteConfig.phoneHref}>
            <Phone className="h-5 w-5" />
          </a>
        </Button>
      </div>
    </div>
  );
}
