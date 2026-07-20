"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Calendar, X } from "lucide-react";

import { AppointmentBooking } from "@/components/hsp1/appointment-booking";

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
    id: "windows",
    title: "Why You Should Upgrade Your Windows",
    excerpt:
      "Old, drafty windows are quietly costing you money every month. Here's how to tell it's time for an upgrade.",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1767022518702-5cbf807163ec?w=1200&q=80&auto=format&fit=crop",
    alt: "An older home with dated, worn windows and siding",
    content: [
      "If your windows are more than 15-20 years old, they're likely working against you instead of for you. Older single-pane or early double-pane windows lose heat in the winter and let it right back in during the summer, forcing your HVAC system to work overtime just to keep up.",
      "The most obvious sign is drafts — if you can feel air moving near a closed window, the seals have failed. Foggy or cloudy glass is another giveaway: it means the gas fill between panes has leaked out and the insulating barrier is gone for good. Windows that are painted shut, hard to open, or visibly warped are also past their functional lifespan.",
      "Beyond comfort, energy-efficient replacement windows typically pay for themselves through lower utility bills, and they're one of the few home improvements that show up immediately in day-to-day comfort. Modern low-E glass and tighter frames can cut heating and cooling loss significantly compared to windows from even a decade ago.",
      "There's also a curb-appeal and resale angle: new windows are consistently ranked among the renovations that return the most value at sale, because buyers notice them immediately — both the look and the lower expected utility costs.",
      "If you're noticing drafts, high energy bills, or windows that just don't open and close the way they used to, it's worth getting a free, no-pressure assessment. We'll tell you honestly whether a full replacement makes sense or if a simpler fix will do.",
    ],
  },
  {
    id: "roof",
    title: "Why a Roof Inspection Is Important",
    excerpt:
      "Your roof takes more of a beating than any other part of your home. A yearly inspection can catch small problems before they become expensive ones.",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=1200&q=80&auto=format&fit=crop",
    alt: "A roofer inspecting shingles on a residential roof",
    content: [
      "Most homeowners only think about their roof when it's actively leaking — but by the time water is coming through the ceiling, the damage (and the repair bill) is usually much bigger than it needed to be. A roof problem rarely starts as a leak; it starts small, as a cracked shingle, a bit of lifted flashing, or granule loss you'd never notice from the ground.",
      "An annual inspection catches those early warning signs. A trained eye can spot damaged or missing shingles, soft spots in the decking, rusted flashing around chimneys and vents, and early signs of moss or algae growth that trap moisture against the roof surface.",
      "Weather is the biggest factor. Hail, high winds, heavy snow load, and even prolonged sun exposure all wear down roofing materials at different rates. A roof that looked fine last spring can have real vulnerabilities after a rough winter or a single severe storm — inspections after major weather events are just as important as routine annual checkups.",
      "There's also a financial incentive beyond avoiding repairs: many homeowners insurance policies want documentation of regular roof maintenance, and a clean inspection report can help support a claim if storm damage does occur. Catching problems early is almost always cheaper than an emergency repair, and far cheaper than a full roof replacement done years ahead of schedule.",
      "A roof inspection takes less than an hour and gives you a clear, honest picture of exactly where your roof stands — no surprises, no upselling. If it's been a year (or a big storm) since your last check, now's a good time.",
    ],
  },
  {
    id: "gutters",
    title: "Why Your Gutters Need an Upgrade",
    excerpt:
      "Clogged or sagging gutters don't just look bad — they can cause serious damage to your roof, siding, and foundation.",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1744044155829-610dded4cead?w=1200&q=80&auto=format&fit=crop",
    alt: "Old, worn gutters filled with debris along a roofline",
    content: [
      "Gutters have one job: move water away from your home. When they're old, undersized, clogged, or sagging, they stop doing that job, and the water has to go somewhere — usually somewhere you don't want it.",
      "The most common damage from failing gutters is at the foundation. Water that overflows or spills near the base of your home saturates the soil around the foundation, which over time can lead to cracking, settling, and basement moisture problems that are far more expensive to fix than the gutters ever were.",
      "Overflowing gutters also damage the parts of the house right around them. Water running down siding leads to staining, rot, and paint failure. Water pooling at the roofline can work its way under shingles and into the fascia and soffit, causing rot that spreads into the roof deck itself.",
      "Sagging gutters — pulling away from the fascia, visibly bowed, or held up by more brackets than they started with — are a sign the system is at the end of its life, even if it isn't actively leaking yet. Old gutters are also often undersized for today's heavier rain events, meaning they overflow even when they're clean and clear.",
      "New, properly sized and sloped gutters (paired with covers, if trees are an issue) solve all of this at once, and they're a relatively small investment compared to the foundation, siding, or roof repairs that failing gutters eventually cause. If your gutters are clogged more than once a season, sagging, or over 15 years old, it's worth having them looked at.",
    ],
  },
  {
    id: "insurance",
    title: "How Homeowners Insurance Can Reduce Your Costs",
    excerpt:
      "Many homeowners don't realize how much of a roof, siding, or window project their insurance may actually cover.",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1664463760781-f159dfe3af30?w=1200&q=80&auto=format&fit=crop",
    alt: "A couple signing paperwork with an agent across a desk",
    content: [
      "A surprising number of homeowners pay full price out of pocket for repairs that their insurance policy would have covered, simply because they never filed a claim or didn't realize storm damage was the underlying cause.",
      "Most standard homeowners policies cover damage caused by a specific, sudden event — hail, wind, a fallen tree branch — even if the underlying materials were already aging. That means a roof that was due for replacement in a few years can sometimes qualify for full or partial coverage if a storm accelerates the damage. The key is documentation: dated photos and a professional inspection report showing the cause of the damage.",
      "This is exactly why timing matters. If a storm rolls through your area, getting an inspection soon afterward — before you file a claim, or right after — gives you the paperwork you need to support it. Waiting months to notice a leak makes it much harder to tie the damage to a specific weather event.",
      "It's also worth reviewing your policy before you need it. Wind and hail coverage, roof age depreciation schedules ('actual cash value' vs. 'replacement cost'), and windstorm deductibles all vary a lot between policies and can significantly change what you'd actually receive on a claim.",
      "We work with homeowners through this process regularly — providing the detailed inspection documentation insurance adjusters ask for, and giving you an honest read on whether a project is likely to be a covered claim or an out-of-pocket upgrade before you commit to anything.",
    ],
  },
  {
    id: "contractor",
    title: "How to Pick the Right Contractor",
    excerpt:
      "Not all contractors are created equal. Here's what to actually look for before you sign anything.",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1781229771042-2a859f8f8022?w=1200&q=80&auto=format&fit=crop",
    alt: "Two people shaking hands over a small house model and keys",
    content: [
      "Home improvement is one of the industries where a bad choice of contractor can cost you far more than money — unpermitted work, poor installation, and fly-by-night companies leave homeowners with problems that outlast the original project by years.",
      "Start with licensing and insurance, and actually verify them rather than taking a business card's word for it. A legitimate contractor should be happy to provide proof of both, and should carry liability insurance that protects your property, plus workers' comp that protects you if someone is injured on your job.",
      "Get everything in writing. A detailed, written estimate should specify materials, timeline, payment schedule, and warranty terms — verbal promises about 'we'll take care of you' aren't enforceable. Be cautious of any contractor who pressures you to sign the same day, asks for full payment upfront, or can't give you a clear scope of work.",
      "Check recent, verifiable reviews — not just a handful of five-star ratings, but a pattern over time, and ideally references you can actually call. Ask how long they've been in business under the same name; companies that frequently rebrand are sometimes dodging a bad reputation.",
      "Finally, pay attention to how they communicate before you've signed anything. A contractor who answers your questions clearly, doesn't rush you, and explains the 'why' behind their recommendations during the estimate is a strong signal for how the rest of the project will go. If a company is cagey up front, that rarely improves once they have your deposit.",
    ],
  },
];

export function ArticlesSection() {
  const [selected, setSelected] = useState<Article | null>(null);
  const [showBooking, setShowBooking] = useState(false);

  const closeArticle = () => {
    setSelected(null);
    // Hand the reader off to the booking calendar once they're done reading
    setTimeout(() => setShowBooking(true), 200);
  };

  return (
    <section className="relative bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Homeowner Resources
          </span>
        </div>
        <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          Know Before You Book
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          A few honest reads to help you understand what your home actually
          needs &mdash; no sales pitch required.
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

      {/* Article reader modal */}
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

      {/* Booking hand-off modal, shown right after closing an article */}
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
                  Grab a spot on the calendar for your free estimate.
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
