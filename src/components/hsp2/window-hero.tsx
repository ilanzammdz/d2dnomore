"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/hsp2/ui/button";

export function WindowHero() {
  const [zip, setZip] = useState("");

  return (
    <section id="top" className="relative overflow-hidden bg-secondary/40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Window Pros USA
            </span>
          </div>
          <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Windows Built to Outlast the Weather
          </h1>
          <p className="mt-5 max-w-lg text-lg text-muted-foreground">
            Energy-efficient replacement and new-construction windows,
            engineered for real performance and installed by people who
            actually stand behind their work.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="text"
              inputMode="numeric"
              maxLength={5}
              value={zip}
              onChange={(e) => setZip(e.target.value.replace(/\D/g, ""))}
              placeholder="Enter your zip code"
              className="h-11 flex-1 rounded-md border border-input bg-background px-4 text-sm text-foreground shadow-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
            />
            <Button
              type="submit"
              className="h-11 bg-accent px-6 text-accent-foreground hover:bg-accent/90"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Button>
          </form>
          <p className="mt-3 text-xs text-muted-foreground">
            Free, no-obligation quote &middot; Local installers &middot;
            Lifetime warranty on select lines
          </p>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1766603636700-e9d80473f40f?w=1200&q=80&auto=format&fit=crop"
            alt="Modern home with large wraparound windows"
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
