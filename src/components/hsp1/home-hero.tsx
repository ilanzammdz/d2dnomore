import { ShieldCheck, Star, Clock, ArrowRight, PhoneCall } from "lucide-react";
import { GooeyText } from "@/components/hsp1/ui/gooey-text-morphing";
import { AuroraButton } from "@/components/hsp1/ui/aurora-button";

const TRUST_POINTS = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: Star, label: "5-Star Rated" },
  { icon: Clock, label: "On-Time, Every Time" },
];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Subtle grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pt-24 pb-16 text-center sm:pt-32 sm:pb-24">
        {/* Eyebrow */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Home Pros USA &middot; Local &amp; Trusted
          </span>
        </div>

        {/* Headline with gooey morph */}
        <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          Experts in
        </h1>
        <GooeyText
          texts={["Windows", "Roofs", "Siding", "Gutters"]}
          morphTime={0.8}
          cooldownTime={1.4}
          className="mt-2 h-[56px] w-full sm:mt-4 sm:h-[88px]"
          textClassName="font-heading font-bold tracking-tight text-4xl sm:text-6xl md:text-6xl text-accent"
        />

        <p className="mt-8 max-w-xl text-lg font-medium text-muted-foreground sm:text-xl">
          We are the best at what we do!
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <AuroraButton
            href="#quote"
            className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-base font-semibold"
          >
            Get a Free Quote
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </AuroraButton>
          <AuroraButton
            href="tel:+18005551234"
            glowClassName="from-cyan-300 via-emerald-400 to-purple-500"
            className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-base font-semibold"
          >
            <PhoneCall className="h-4 w-4" aria-hidden="true" />
            Call (800) 555-1234
          </AuroraButton>
        </div>

        {/* Trust bar */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {TRUST_POINTS.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
