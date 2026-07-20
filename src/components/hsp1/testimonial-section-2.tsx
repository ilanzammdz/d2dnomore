"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    role: "Homeowner, Austin, TX",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&q=80&auto=format&fit=crop",
    quote:
      "Our new windows cut our energy bill in half. The crew was fast, clean, and incredibly professional.",
  },
  {
    id: "2",
    name: "Marcus Bennett",
    role: "Homeowner, Columbus, OH",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&q=80&auto=format&fit=crop",
    quote:
      "They replaced our roof in a single day and left the yard spotless. Couldn't ask for better service.",
  },
  {
    id: "3",
    name: "Linda Torres",
    role: "Homeowner, Phoenix, AZ",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&q=80&auto=format&fit=crop",
    quote:
      "The siding transformation completely changed the look of our house. Neighbors keep asking who did it.",
  },
  {
    id: "4",
    name: "David Whitfield",
    role: "Homeowner, Charlotte, NC",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&q=80&auto=format&fit=crop",
    quote:
      "New gutters finally solved our drainage problems. No more flooding in the basement after storms.",
  },
  {
    id: "5",
    name: "Amara Johnson",
    role: "Homeowner, Atlanta, GA",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&q=80&auto=format&fit=crop",
    quote:
      "From quote to install, everything was on time and on budget. Home Pros USA earned a customer for life.",
  },
  {
    id: "6",
    name: "Claire Sullivan",
    role: "Homeowner, Denver, CO",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&q=80&auto=format&fit=crop",
    quote:
      "The team walked us through every option and never pushed us into anything we didn't need.",
  },
  {
    id: "7",
    name: "James O'Connor",
    role: "Homeowner, San Antonio, TX",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&q=80&auto=format&fit=crop",
    quote:
      "Our home looks brand new. The attention to detail on the trim work was incredible.",
  },
  {
    id: "8",
    name: "Megan Foster",
    role: "Homeowner, Tampa, FL",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&q=80&auto=format&fit=crop",
    quote:
      "Fast, honest, and the quality speaks for itself. Best contractor experience we've had.",
  },
  {
    id: "9",
    name: "Ryan Palmer",
    role: "Homeowner, Seattle, WA",
    image:
      "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=200&h=200&q=80&auto=format&fit=crop",
    quote:
      "They fixed what three other companies couldn't. Truly the best at what they do.",
  },
];

export default function Testimonial2() {
  const [selected, setSelected] = useState<Testimonial | null>(null);

  // Split testimonials into 3 rows for visual variance
  const row1 = testimonials.slice(0, 3);
  const row2 = testimonials.slice(3, 6);
  const row3 = testimonials.slice(6, 9);

  return (
    <div className="relative w-full py-20 overflow-hidden [--color-primary:var(--color-accent)] bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Satisfied Clients
          </span>
        </div>
        <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">
          Trusted By Homeowners Like You
        </h2>
      </div>

      {/* Main Container acting as the viewport for background and fades */}
      <div className="relative w-full">
        {/* Shaded Background - Matches the height of this container exactly */}
        <div className="absolute inset-0 z-0 opacity-10 bg-[repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)] bg-[length:10px_10px] border-y border-border pointer-events-none"></div>

        {/* Fades - Match the height of this container exactly */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none"></div>

        {/* Content Rows */}
        <div className="relative z-10 flex flex-col gap-8 py-12 items-center justify-center overflow-hidden">
          {[row1, row2, row3].map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              className="flex items-center gap-6 min-w-max"
              animate={{
                x: rowIndex % 2 === 0 ? ["0%", "-25%"] : ["-25%", "0%"],
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...row, ...row, ...row, ...row].map((testimonial, i) => (
                <Capsule
                  key={`${testimonial.id}-${i}`}
                  testimonial={testimonial}
                  onClick={() => setSelected(testimonial)}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 10,
                transition: { duration: 0.15 },
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-lg bg-card text-card-foreground p-8 md:p-12 rounded-2xl border-2 border-(--color-primary) shadow-2xl z-50"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col items-center text-center">
                <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8">
                  &ldquo;{selected.quote}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-(--color-primary)">
                    <Image
                      src={selected.image}
                      alt={selected.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-base text-card-foreground">
                      {selected.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {selected.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Capsule({
  testimonial,
  onClick,
}: {
  testimonial: Testimonial;
  onClick: () => void;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="group flex items-center gap-4 p-2 pr-8 rounded-full bg-card border border-border hover:border-(--color-primary) hover:border-dashed cursor-pointer transition-all shadow-sm hover:shadow-md"
    >
      <div className="relative w-14 h-14 rounded-full overflow-hidden border border-border group-hover:border-(--color-primary) transition-colors">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          fill
          className="object-cover object-top"
          sizes="48px"
        />
      </div>
      <div className="flex flex-col items-start leading-tight">
        <span className="text-sm font-bold text-foreground">
          {testimonial.name}
        </span>
        <span className="text-xs text-muted-foreground">
          {testimonial.role}
        </span>
      </div>
    </motion.div>
  );
}
