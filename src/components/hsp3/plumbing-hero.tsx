import Image from "next/image";
import { ShieldCheck, Star, Clock3, PhoneCall } from "lucide-react";
import { GooeyText } from "@/components/hsp3/ui/gooey-text-morphing";
import { Button } from "@/components/hsp3/ui/button";

const TRUST_POINTS = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: Star, label: "5-Star Rated" },
  { icon: Clock3, label: "24/7 Emergency Service" },
];

export function PlumbingHero() {
  return (
    <section id="top" className="relative overflow-hidden bg-secondary/40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Pro Plumbers USA
            </span>
          </div>

          <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl">
            We Fix Your
          </h1>
          <GooeyText
            texts={["Leaks", "Clogs", "Water Heaters", "Pipes"]}
            morphTime={0.8}
            cooldownTime={1.4}
            align="start"
            className="mt-2 h-[44px] w-full sm:mt-4 sm:h-[72px]"
            textClassName="font-heading font-extrabold tracking-tight text-3xl sm:text-5xl text-accent whitespace-nowrap"
          />
          <p className="mt-5 max-w-lg text-lg text-muted-foreground">
            Fast, licensed plumbers who show up on time and fix it right the
            first time. Day or night, we&apos;re here when you need us.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="h-12 px-6 text-base" render={<a href="#booking" />} nativeButton={false}>
              Schedule Service
            </Button>
            <Button
              size="lg"
              className="h-12 bg-accent px-6 text-base text-accent-foreground hover:bg-accent/90"
              render={<a href="tel:+18005559110" />} nativeButton={false}
            >
              <PhoneCall className="h-4 w-4" />
              24/7 Emergency Line
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
            {TRUST_POINTS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1521207418485-99c705420785?w=1200&q=80&auto=format&fit=crop"
            alt="Water flowing from a modern kitchen faucet"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
