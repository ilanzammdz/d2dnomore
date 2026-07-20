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
    name: "Rachel Simmons",
    role: "Homeowner, Denver, CO",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&q=80&auto=format&fit=crop",
    quote: "Our water heater died on a Sunday night and they had someone out within the hour. Genuinely saved us.",
  },
  {
    id: "2",
    name: "Tom Bradley",
    role: "Homeowner, Nashville, TN",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&h=200&q=80&auto=format&fit=crop",
    quote: "Fixed a slab leak we'd been chasing for months. Explained everything before they touched a thing.",
  },
  {
    id: "3",
    name: "Marcus Webb",
    role: "Homeowner, Sacramento, CA",
    image: "https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?w=200&h=200&q=80&auto=format&fit=crop",
    quote: "Upfront pricing, no surprise fees. The drain's been running clear for six months now.",
  },
  {
    id: "4",
    name: "Priya Nair",
    role: "Homeowner, Tampa, FL",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&q=80&auto=format&fit=crop",
    quote: "Repiped our whole house over two days. Clean, professional, and exactly on the quoted price.",
  },
  {
    id: "5",
    name: "Amara Coleman",
    role: "Homeowner, Charlotte, NC",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&q=80&auto=format&fit=crop",
    quote: "Called at 2am with a burst pipe and someone actually picked up. That alone earned my trust.",
  },
  {
    id: "6",
    name: "Gerald Ford",
    role: "Homeowner, Columbus, OH",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&q=80&auto=format&fit=crop",
    quote: "Installed a new sump pump before the spring rains hit. Basement's stayed bone dry ever since.",
  },
];

export default function TestimonialSection() {
  const [selected, setSelected] = useState<Testimonial | null>(null);

  const row1 = testimonials.slice(0, 3);
  const row2 = testimonials.slice(3, 6);

  return (
    <div id="reviews" className="relative w-full py-20 overflow-hidden [--color-primary:var(--color-accent)] bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Real Customers
          </span>
        </div>
        <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">
          Trusted By Homeowners Like You
        </h2>
      </div>

      <div className="relative w-full">
        <div className="absolute inset-0 z-0 opacity-10 bg-[repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)] bg-[length:10px_10px] border-y border-border pointer-events-none"></div>
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col gap-8 py-12 items-center justify-center overflow-hidden">
          {[row1, row2].map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              className="flex items-center gap-6 min-w-max"
              animate={{
                x: rowIndex % 2 === 0 ? ["0%", "-25%"] : ["-25%", "0%"],
              }}
              transition={{
                duration: 36,
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

      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10, transition: { duration: 0.15 } }}
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
