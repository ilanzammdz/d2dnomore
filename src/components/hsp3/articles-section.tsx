"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Calendar, X } from "lucide-react";

import { AppointmentBooking } from "@/components/hsp3/appointment-booking";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  readTime: string;
  image: string;
  alt: string;
  content: string[];
}

const articles: Article[] = [
  {
    id: "leaks",
    title: "5 Warning Signs You Have a Hidden Leak",
    excerpt:
      "A leak inside a wall or under a slab can run for months before you notice — here's what to watch for.",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1603993309330-6afc4d943953?w=1200&q=80&auto=format&fit=crop",
    alt: "Water droplets forming on an old metal pipe",
    content: [
      "Hidden leaks are some of the most expensive plumbing problems precisely because they're hidden. A pinhole leak inside a wall or under a slab foundation can run for weeks or months before it becomes obvious, quietly driving up your water bill and damaging framing, drywall, and flooring the whole time.",
      "The first sign most homeowners notice is the water bill itself. If it jumps significantly without a clear reason — no new appliance, no extra houseguests, no obvious change in usage — a hidden leak is one of the most common culprits.",
      "Beyond the bill, watch for warm spots on the floor (a sign of a leaking hot water line under a slab), the sound of running water when every fixture in the house is off, and any unexplained dampness, mold smell, or discoloration on walls, baseboards, or ceilings.",
      "A noticeably lower water pressure at one or two fixtures, while others are fine, can also point to a leak diverting water somewhere along the line. And if you have a water meter, a simple test helps confirm a leak: shut off every fixture and appliance in the house, then check whether the meter's leak indicator is still moving.",
      "If you suspect a hidden leak, don't wait it out — the cost of the leak itself is usually far smaller than the water damage it causes. We use listening equipment and thermal imaging to pinpoint leaks without tearing out walls or floors unnecessarily.",
    ],
  },
  {
    id: "drains",
    title: "Why Regular Drain Cleaning Matters",
    excerpt:
      "Slow drains aren't just annoying — they're often an early warning sign of a bigger clog forming further down the line.",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1763100351670-756f71d57c9f?w=1200&q=80&auto=format&fit=crop",
    alt: "Close-up of a stainless steel sink drain",
    content: [
      "A drain that's slow to clear rarely fixes itself. What starts as grease, hair, soap scum, or mineral buildup coating the inside of a pipe tends to accumulate over time, narrowing the passage a little more with every use until you're dealing with a full clog — often at the worst possible moment.",
      "Kitchen drains are especially prone to grease buildup, even when you think you're being careful about what goes down the sink. Cooking oil that looks liquid when hot solidifies as it cools, coating pipe walls and trapping other debris as it passes.",
      "Bathroom drains face a different enemy: hair and soap scum combine into clogs that build slowly, which is why a shower drain often goes from 'draining a little slow' to 'standing water' over the course of weeks rather than all at once.",
      "Routine drain cleaning — whether that's periodic professional cleaning or simply using enzyme-based treatments instead of harsh chemical drain cleaners — keeps pipes running closer to their full diameter and catches developing clogs before they turn into a backup.",
      "If a drain is consistently slow no matter what you try, or multiple drains in the house are acting up around the same time, that's usually a sign the problem is further down the line than a simple plunger or store-bought drain cleaner can reach. A professional camera inspection can show exactly what's going on before it becomes an emergency.",
    ],
  },
  {
    id: "water-heaters",
    title: "Tank vs. Tankless: Choosing the Right Water Heater",
    excerpt:
      "Both options can serve a home well — the right choice depends on your household size, usage patterns, and budget.",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1780445392462-b7761551820c?w=1200&q=80&auto=format&fit=crop",
    alt: "A residential water heater mounted on an exterior wall",
    content: [
      "Traditional tank water heaters store and continuously heat 40-80 gallons of water, ready to use the moment you turn on the tap. Tankless units heat water on demand as it flows through, with no storage tank at all.",
      "Tank water heaters are typically less expensive upfront and simpler to install, which makes them a practical choice for many homes. Their main tradeoffs are standby heat loss (you're paying to keep that stored water hot even when you're not using it) and the risk of running out of hot water during heavy use, like back-to-back showers.",
      "Tankless units cost more upfront and sometimes require electrical or gas line upgrades to handle their higher demand, but they deliver a real efficiency gain by only heating water when you need it, and they don't run out — as long as you don't exceed the unit's flow rate, you get continuous hot water.",
      "Household size and usage patterns matter more than any general rule. A single person or couple with modest hot water needs may never recoup a tankless unit's higher cost, while a larger family running multiple showers, a dishwasher, and a washing machine back-to-back often sees a tankless system pay for itself in both convenience and efficiency over time.",
      "Lifespan is worth factoring in too: tank units typically last 8-12 years, while a well-maintained tankless system can run 15-20 years. We'll walk through your household's actual usage with you before recommending one over the other — there's no universally 'better' option, only the better fit for your home.",
    ],
  },
  {
    id: "emergency",
    title: "What to Do Before the Plumber Arrives",
    excerpt:
      "A few simple steps in the first minutes of a plumbing emergency can meaningfully limit the damage.",
    readTime: "3 min read",
    image:
      "https://images.unsplash.com/photo-1558540491-9a69d75ebab4?w=1200&q=80&auto=format&fit=crop",
    alt: "Close-up of a water shut-off valve",
    content: [
      "The single most important thing to know before you ever have a plumbing emergency is where your main water shut-off valve is. In most homes it's near the water meter, in a basement, crawlspace, or utility closet. Knowing its location before an emergency saves precious minutes when it actually happens.",
      "If you're dealing with a burst pipe or major leak, shutting off the main valve immediately stops the flow of water throughout the house, buying time until help arrives without water continuing to spread and cause damage.",
      "For a single fixture — a toilet, sink, or washing machine — most have their own local shut-off valve nearby, which lets you stop that specific leak without cutting water to the whole house.",
      "After the water is off, turn off electricity to any affected area if water is anywhere near outlets, switches, or appliances, and move anything valuable or absorbent (rugs, furniture, boxes) away from the affected area if it's safe to do so.",
      "Take a few photos of the damage before you start cleanup — it helps both us and your insurance company understand what happened. Then call us: for genuine emergencies, we're available 24/7 and will walk you through anything else you can do while help is on the way.",
    ],
  },
  {
    id: "choosing-plumber",
    title: "How to Choose a Licensed, Insured Plumber",
    excerpt:
      "Plumbing work done wrong can cause real damage — here's what actually matters when picking who to call.",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1649769069590-268b0b994462?w=1200&q=80&auto=format&fit=crop",
    alt: "A plumber in uniform holding a wrench",
    content: [
      "Plumbing licensing exists for a reason: it verifies that whoever's working on your home's water and drainage systems actually knows the local code, understands how to size and connect pipe correctly, and has passed a standardized exam to prove it. Always ask for a license number and verify it if you're unsure — most states have a public lookup tool.",
      "Insurance matters just as much as licensing, and covers two different things: liability insurance protects your home if something goes wrong during the work, and workers' compensation protects you from liability if a worker is injured on your property. A legitimate plumbing company carries both and will provide proof without hesitation.",
      "Get a written estimate before work begins, not a verbal ballpark. It should spell out the scope of work, materials, and price — flat-rate pricing agreed to upfront protects you from surprise charges once the job is underway.",
      "Ask about warranty coverage on both labor and parts. A plumber confident in their work will stand behind it with a real warranty, not a vague 'we'll take care of you if something happens.'",
      "Finally, trust how they communicate before you've hired them. A plumber who explains what they're seeing, walks you through your options, and doesn't pressure you into the most expensive fix is a strong signal for how the rest of the relationship will go.",
    ],
  },
];

export function ArticlesSection() {
  const [selected, setSelected] = useState<Article | null>(null);
  const [showBooking, setShowBooking] = useState(false);

  const closeArticle = () => {
    setSelected(null);
    setTimeout(() => setShowBooking(true), 200);
  };

  return (
    <section id="articles" className="relative bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Homeowner Resources
          </span>
        </div>
        <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          Know Before You Call
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          A few honest reads on plumbing problems, how to spot them, and what
          actually needs a professional.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <button
            key={article.id}
            onClick={() => setSelected(article)}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card text-left shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src={article.image}
                alt={article.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                {article.readTime}
              </span>
              <h3 className="mt-2 font-heading text-lg font-bold leading-snug text-card-foreground">
                {article.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">
                {article.excerpt}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground">
                Read Article
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeArticle}
              className="absolute inset-0 bg-black/50 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 10, transition: { duration: 0.15 } }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative z-10 flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-card shadow-2xl"
            >
              <button
                onClick={closeArticle}
                aria-label="Close article"
                className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-background/80 text-muted-foreground backdrop-blur transition-colors hover:text-foreground"
              >
                <X size={18} />
              </button>

              <div className="relative h-56 w-full flex-shrink-0 sm:h-72">
                <Image
                  src={selected.image}
                  alt={selected.alt}
                  fill
                  className="object-cover"
                  sizes="672px"
                />
              </div>

              <div className="overflow-y-auto p-6 sm:p-8">
                <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                  {selected.readTime}
                </span>
                <h3 className="mt-2 font-heading text-2xl font-bold tracking-tight text-card-foreground sm:text-3xl">
                  {selected.title}
                </h3>
                <div className="mt-5 flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {selected.content.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showBooking && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowBooking(false)}
              className="absolute inset-0 bg-black/50 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 10, transition: { duration: 0.15 } }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-card p-1 shadow-2xl"
            >
              <button
                onClick={() => setShowBooking(false)}
                aria-label="Close booking"
                className="absolute top-3 right-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-background/80 text-muted-foreground backdrop-blur transition-colors hover:text-foreground"
              >
                <X size={18} />
              </button>
              <div className="p-5 pb-2 text-center">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Calendar className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-xl font-bold text-card-foreground">
                  Ready to get started?
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Grab a spot on the calendar, or call our 24/7 line for
                  anything urgent.
                </p>
              </div>
              <div className="p-4 pt-2 sm:p-6">
                <AppointmentBooking />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
